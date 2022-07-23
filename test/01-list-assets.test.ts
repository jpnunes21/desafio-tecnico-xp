import request from 'supertest';
import app from "../src/app";
import connection from '../src/models/connection';

describe("01 - Crie um endpoint para a listagem de ativos", () => {

    afterAll(() => {
      connection.end();
    })
  
    it('Será validado que é possível listar todos os ativos com sucesso', async () => {
      const result = await request(app).get("/ativos")
  
      expect(result.statusCode).toEqual(200);
      expect(result.body).toBeDefined();
      expect(result.body.length).toEqual(3);
      expect(result.body[0].codAtivo).toBeDefined();
      expect(result.body[0].QtdeAtivo).toEqual(100);
      expect(result.body[0].Valor).toEqual(25);
     
      expect(result.body[1].codAtivo).toBeDefined();
      expect(result.body[1].QtdeAtivo).toEqual(500);
      expect(result.body[1].Valor).toEqual(10);
    });
  });
