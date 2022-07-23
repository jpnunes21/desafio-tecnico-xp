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
const connection_1 = __importDefault(require("./connection"));
const getAccountById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [row] = yield connection_1.default.execute('SELECT * FROM Clientes WHERE codCliente = ?', [id]);
    return row;
});
const getAccountByEmail = (Email, Senha) => __awaiter(void 0, void 0, void 0, function* () {
    const [row] = yield connection_1.default.execute('SELECT * FROM Clientes WHERE Email = ? AND Senha = ?', [Email, Senha]);
    return row;
});
const updateAmount = (codCliente, amount) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.default.execute('UPDATE Clientes SET Saldo = ? WHERE codCliente = ?', [amount, codCliente]);
});
exports.default = {
    getAccountById,
    getAccountByEmail,
    updateAmount,
};
