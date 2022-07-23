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
const account_model_1 = __importDefault(require("../models/account.model"));
const getAccountById = (codCliente) => __awaiter(void 0, void 0, void 0, function* () {
    const [account] = yield account_model_1.default.getAccountById(codCliente);
    return account;
});
const addMoney = (codCliente, amount) => __awaiter(void 0, void 0, void 0, function* () {
    const [clientAccount] = yield account_model_1.default.getAccountById(codCliente);
    const newAmount = clientAccount.Saldo + amount;
    yield account_model_1.default.updateAmount(codCliente, newAmount);
    return { codCliente, Valor: amount };
});
const subtractMoney = (codCliente, amount) => __awaiter(void 0, void 0, void 0, function* () {
    const [clientAccount] = yield account_model_1.default.getAccountById(codCliente);
    const newAmount = clientAccount.Saldo - amount;
    yield account_model_1.default.updateAmount(codCliente, newAmount);
    return { codCliente, Valor: amount };
});
exports.default = {
    getAccountById,
    addMoney,
    subtractMoney
};
