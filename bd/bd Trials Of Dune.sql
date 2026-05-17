CREATE DATABASE trialsOfDune;

USE trialsOfDune;

CREATE TABLE usuario(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(20)
);

CREATE TABLE respostas(
id INT AUTO_INCREMENT PRIMARY KEY,
resposta1 CHAR(1),
resposta2 CHAR(1),
resposta3 CHAR(1),
resposta4 CHAR(1),
resposta5 CHAR(1),
resposta6 CHAR(1),
resposta7 CHAR(1),
resposta8 CHAR(1),
resposta9 CHAR(1),
resposta10 CHAR(1),
resposta11 CHAR(1),
resposta12 CHAR(1),
resposta13 CHAR(1),
resposta14 CHAR(1),
resposta15 CHAR(1),
resultado VARCHAR(20),
fkUsuario INT,
	CONSTRAINT chFkUsuario
    FOREIGN KEY (fkUsuario)
    REFERENCES usuario(id)
);

alter table respostas modify column resultado varchar(25);

SELECT * FROM usuario;
select * from respostas;
desc usuario;