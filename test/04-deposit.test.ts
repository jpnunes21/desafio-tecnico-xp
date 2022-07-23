import request from "supertest";
import app from "../src/app";
import connection from "../src/models/connection";

describe("04 - Crie um endpoint para realizar um deposito", () => {
  afterAll(() => {
    connection.end();
  })

  it('Será validado que o campo "Valor" é obrigatório', async () => {
    const result = await request(app).post("/conta/deposito").send({
        codCliente: 2,
    })

    expect(result.statusCode).toEqual(401);
    expect(result.body.message).toEqual('Valor inválido, precisa ser maior que 0.');
  });

  it('Será validado que o campo "Valor" é maior que 0', async () => {
    const result = await request(app).post("/conta/deposito").send({
      codCliente: 2,
      Valor: 0
    })

    expect(result.statusCode).toEqual(401);
    expect(result.body.message).toEqual('Valor inválido, precisa ser maior que 0.');
  });

  it('Será validado que conseguimos realizar um depósito com sucesso', async () => {
    const result = await request(app).post("/conta/deposito").send({
      codCliente: 2,
      Valor: 1500
    })

    expect(result.statusCode).toEqual(200);
    expect(result.body.codCliente).toEqual(2);
    expect(result.body.Valor).toEqual(1500);
  });
});