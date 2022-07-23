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
const createOrder = (codAtivo, codCliente, QtdeOrdem, ValorTotal) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.default.execute('INSERT INTO Ordens (codAtivo, codCliente, QtdeOrdem, ValorTotal) VALUES (?, ?, ?, ?)', [codAtivo, codCliente, QtdeOrdem, ValorTotal]);
});
const updateOrder = (QtdeOrdem, ValorTotal, codAtivo, codCliente) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.default.execute('UPDATE Ordens SET QtdeOrdem = ?, ValorTotal = ? WHERE codAtivo = ? AND codCliente = ?', [QtdeOrdem, ValorTotal, codAtivo, codCliente]);
});
const sellAll = (codAtivo, codCliente) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.default.execute('DELETE FROM Ordens WHERE codAtivo = ? AND codCliente = ?', [codAtivo, codCliente]);
});
exports.default = {
    createOrder,
    updateOrder,
    sellAll
};
