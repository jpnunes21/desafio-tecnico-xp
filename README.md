## Sobre o projeto
Esse projeto é uma API que simula um ambiente de pagamentos.
Nele você pode realizar um depósito, saque, comprar ativos, vender ativos.
Também é possível listar todos os ativos, ou cada ativo individualmente. Listar todos os investimentos por cliente e também mostrar sua conta, com saldo e código de identificação.

## Como usar

Para clonar e executar essa aplicação, você precisará do [Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/download/) (que vem com o [npm](http://npmjs.com)) instalados no seu computador. Na sua linha de comando:

```bash
# Clone esse repositório
$ git clone git@github.com:jpnunes21/desafio-tecnico-xp.git
# Acesse a pasta
$ cd desafio-tecnico-xp
# Instale as dependências
$ npm install
# Execute a aplicação
$ npm start
```
## Como acessar

Você não precisa clonar o repositório para ter acesso a API.
Utilize esses endpoints abaixo para acessar as informações atráves da minha API.

- Para acessar os investimentos de cada cliente:

Rota GET https://joao-ramos-desafio-xp.herokuapp.com/ativos/cliente?n=1

Onde n=1 é o código do cliente (codCliente) no nosso banco de dados.

- Para acessar a todos os ativos disponíveis na corretora:

Rota GET https://joao-ramos-desafio-xp.herokuapp.com/ativos

- Para acessar um ativo em específico: 

Rota GET https://joao-ramos-desafio-xp.herokuapp.com/ativos/1
Onde 1 se refere ao código do ativo (codAtivo) no nosso banco de dados.

- Para acessar as informações da conta de um cliente:

Rota GET https://joao-ramos-desafio-xp.herokuapp.com/conta/cliente?n=1
Onde n=1 é o código do cliente (codCliente) no nosso banco de dados.

*Para as próximas rotas, sugiro que utilize o postman*

- Adicionando saldo na conta de um cliente:

Rota POST https://joao-ramos-desafio-xp.herokuapp.com/conta/deposito

Essa rota necessita de um body com os campos codCliente (código do cliente) e Valor (valor a ser depositado).

Será validado se o campo "Valor" existe e se ele é maior que 0.

- Retirando saldo da conta de um cliente:

Rota POST https://joao-ramos-desafio-xp.herokuapp.com/conta/saque

Essa rota necessita de um body com os campos codCliente (código do cliente) e Valor (valor a ser retirado).

Será validado se o cliente tem saldo suficiente para ser retirado e ele não ficará negativo.

- Adiciona um ativo na conta do cliente

Rota POST https://joao-ramos-desafio-xp.herokuapp.com/investimentos/comprar

Essa rota necessita de um body com os campos codCliente (código do cliente), codAtivo (código do ativo a ser comprado) e QtdeOrdem (quantidade de ativos a serem comprados).

Será validado se a quantidade de ativos a serem comprados está disponível na corretora e se o saldo do cliente é suficiente.

- Vende um ativo da conta do cliente.

Rota POST https://joao-ramos-desafio-xp.herokuapp.com/investimentos/vender

Essa rota necessita de um body com os campos codCliente (código do cliente), codAtivo (código do ativo a ser comprado) e QtdeOrdem (quantidade de ativos a serem comprados).

Será validado se a quantidade de ativos a serem comprados está disponível na corretora e se o saldo do cliente é suficiente.

## Trajetória

1) Optei por usar Typescript, pois é uma linguagem de tipagem forte como o C# (a principal linguagem utilizada pela XP Inc. no back-end).

2) Decidi que a resposta do model para '/ativos/{cod-cliente}' deveria ser um array com objetos para facilitar o trabalho do front-end, podendo trazer todos os ativos com um map (método javascript).

3) Utilizei query parameters porque o código fica mais fácil de entender e posso utilizar a url '/ativos/{cod-cliente}' assim como '/ativos/{cod-ativo}'

4) Optei por buscar os ativos por req.params para a url nao ficar redundante, por exemplo "/ativos/ativo"

5) Coloquei uma primary key unica (era composta) em Ordens

6) Refatorei o código para que, no momento da compra de um ativo, seja verificado se o cliente ja tem aquele ativo, caso tenha, só será atualizado seu valor (quantidade e valor total), caso não tenha, será criado mais uma "ordem", ou seja, o cliente terá mais um ativo na carteira.
Pensei na experiência do cliente, atualizar ao invés de criar um novo (quantidade de ações na ordem)

7) Sei que a senha nao deve ficar sem criptografia no banco de dados, porém coloquei para economizar tempo e ficar expositivo apenas.

8) Fiz alguns testes unitários, não estou cobrindo tudo, ainda faltam alguns e também os testes de integração.

9) Utilizei heroku para fazer o deploy da aplicação.

10) Existe um arquivo DesafioXP.sql para você ter acesso a como eu criei o banco de dados. Mas para fazer o deploy da aplicação, utilizei o db4free.net, banco de dados gratuito.