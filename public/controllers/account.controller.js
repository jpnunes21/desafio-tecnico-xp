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
const getAccountById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { n } = req.query;
    const account = yield account_service_1.default.getAccountById(Number(n));
    return res.status(200).json(account);
});
const addMoney = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codCliente, Valor } = req.body;
    const newAmount = yield account_service_1.default.addMoney(codCliente, Valor);
    return res.status(200).json(newAmount);
});
const subtractMoney = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codCliente, Valor } = req.body;
    const newAmount = yield account_service_1.default.subtractMoney(codCliente, Valor);
    return res.status(200).json(newAmount);
});
exports.default = {
    getAccountById,
    addMoney,
    subtractMoney
};
