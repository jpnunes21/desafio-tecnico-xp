import request from 'supertest';
import app from "../src/app";
import connection from '../src/models/connection';

describe("02 - Crie um endpoint para a listagem de informações de uma conta", () => {

    afterAll(() => {
      connection.end();
    })
  
    it('Será validado que é possível listar uma conta com sucesso', async () => {
      const result = await request(app).get("/conta/cliente?n=1")
  
      expect(result.statusCode).toEqual(200);
      expect(result.body).toBeDefined();
      expect(result.body.codCliente).toBeDefined();
      expect(result.body.Email).toEqual('joao@xpinc.com');
      expect(result.body.Senha).toEqual('senhajoao321');
      expect(result.body.Saldo).toEqual(3000);
    });
  });