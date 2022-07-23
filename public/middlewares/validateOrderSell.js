"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clients_service_1 = __importDefault(require("../services/clients.service"));
const validateOrderSell = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { codCliente, codAtivo, QtdeOrdem } = req.body;
    const clientAssets = yield clients_service_1.default.getClients(codCliente);
    const asset = clientAssets
        .filter((clientAsset) => clientAsset.codAtivo === codAtivo);
    if (asset.length === 0 || asset[0].QtdeAtivo < QtdeOrdem)
        return res.status(400).json({ message: 'Quantidade de ativos inválida' });
    next();
});
exports.default = validateOrderSell;
