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
const account_service_1 = __importDefault(require("../services/account.service"));
const assets_service_1 = __importDefault(require("../services/assets.service"));
const validateOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { codCliente, codAtivo, QtdeOrdem } = req.body;
    const [asset] = yield assets_service_1.default.getAssetsById(codAtivo);
    const client = yield account_service_1.default.getAccountById(codCliente);
    if (asset.QtdeAtivo < QtdeOrdem)
        return res.status(400).json({ message: 'Quantidade de ativos indisponível' });
    if (asset.ValorAtivo * QtdeOrdem > client.Saldo) {
        return res.status(400).json({ message: 'Saldo insuficiente.' });
    }
    next();
});
exports.default = validateOrder;
