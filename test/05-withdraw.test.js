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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/app"));
const connection_1 = __importDefault(require("../src/models/connection"));
describe("05 - Crie um endpoint para realizar um saque", () => {
    afterAll(() => {
        connection_1.default.end();
    });
    it('Será validado que o campo "Valor" é obrigatório', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app_1.default).post("/conta/saque").send({
            codCliente: 2,
        });
        expect(result.statusCode).toEqual(401);
        expect(result.body.message).toEqual('Valor inválido, precisa ser maior que 0.');
    }));
    it('Será validado que o campo "Valor" é maior que 0', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app_1.default).post("/conta/saque").send({
            codCliente: 2,
            Valor: 0
        });
        expect(result.statusCode).toEqual(401);
        expect(result.body.message).toEqual('Valor inválido, precisa ser maior que 0.');
    }));
    it('Será validado que conseguimos realizar um depósito com sucesso', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app_1.default).post("/conta/saque").send({
            codCliente: 2,
            Valor: 1500
        });
        expect(result.statusCode).toEqual(200);
        expect(result.body.codCliente).toEqual(2);
        expect(result.body.Valor).toEqual(1500);
    }));
});
