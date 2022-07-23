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
const supertest_1 = __importDefault(require("supertest")); // lib projetada para testes que fazem requisições http
const app_1 = __importDefault(require("../src/app"));
const connection_1 = __importDefault(require("../src/models/connection"));
describe("03 - Crie um endpoint para a listagem de ativos de um cliente", () => {
    afterAll(() => {
        connection_1.default.end();
    });
    it('Será validado que é possível listar os investimentos de um cliente com sucesso', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app_1.default).get("/ativos/cliente?n=1");
        expect(result.statusCode).toEqual(200);
        expect(result.body).toBeDefined();
        expect(result.body.length).toEqual(2);
        expect(result.body[0].codCliente).toBeDefined();
        expect(result.body[0].codAtivo).toBeDefined();
        expect(result.body[0].QtdeAtivo).toEqual(5);
        expect(result.body[0].Valor).toEqual(125);
        expect(result.body[1].codCliente).toBeDefined();
        expect(result.body[1].codAtivo).toBeDefined();
        expect(result.body[1].QtdeAtivo).toEqual(1);
        expect(result.body[1].Valor).toEqual(10);
    }));
});
