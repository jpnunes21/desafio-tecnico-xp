import request from 'supertest'; // lib projetada para testes que fazem requisições http
import app from "../src/app";
import connection from '../src/models/connection';

describe("03 - Crie um endpoint para a listagem de ativos de um cliente", () => {

    afterAll(() => {
      connection.end();
    })
  
    it('Será validado que é possível listar os investimentos de um cliente com sucesso', async () => {
      const result = await request(app).get("/ativos/cliente?n=1")
  
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
    });
  });