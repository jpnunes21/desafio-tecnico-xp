DROP SCHEMA IF EXISTS DesafioXP;
CREATE SCHEMA IF NOT EXISTS DesafioXP;

CREATE TABLE DesafioXP.Clientes (
  codCliente INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  Email VARCHAR(150) NOT NULL,
  Senha VARCHAR(25) NOT NULL,
  Saldo INTEGER
);

CREATE TABLE DesafioXP.Ativos (
  codAtivo INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  ValorAtivo INTEGER,
  QtdeAtivo INTEGER
);

CREATE TABLE DesafioXP.Ordens (
  orderId INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  codAtivo INTEGER NOT NULL,
  codCliente INTEGER NOT NULL,
  QtdeOrdem INTEGER,
  ValorTotal INTEGER,
  FOREIGN KEY (codAtivo) REFERENCES DesafioXP.Ativos (codAtivo),
  FOREIGN KEY (codCliente) REFERENCES DesafioXP.Clientes (codCliente)
);

INSERT INTO
  DesafioXP.Clientes (Email, Senha, Saldo)
VALUES
  ('joao@xpinc.com', 'senhajoao321', 3000),
  ('adriana@xpinc.com', 'senhaadriana123', 500);

INSERT INTO
  DesafioXP.Ativos (ValorAtivo, QtdeAtivo)
VALUES
  (25, 100),
  (10, 500),
  (50, 50);

INSERT INTO
  DesafioXP.Ordens (codAtivo, codCliente , QtdeOrdem, ValorTotal)
VALUES
  ( 1, 1, 5, 125 ),
  (2, 1, 1, 10);
