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
dtResposta DATETIME DEFAULT CURRENT_TIMESTAMP,
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
resultado VARCHAR(25),
fkUsuario INT,
	CONSTRAINT chFkUsuario
    FOREIGN KEY (fkUsuario)
    REFERENCES usuario(id)
);

SELECT * FROM usuario;
select * from respostas;
desc usuario;

drop table usuario;
drop table respostas;

-- KPI total respostas
SELECT COUNT(id) FROM respostas; 

-- KPIs Casa mais e menos popular
SELECT resultado, COUNT(resultado) FROM respostas -- nao selecionar o COUNT no model
	GROUP BY resultado
    ORDER BY COUNT(resultado)  DESC; 

-- Quantidade de Resultados por casa em %
    SELECT resultado,
    COUNT(*) AS quantidade, -- conta todos os resultados
    ROUND((COUNT(*) * 100.0) / (SELECT COUNT(*) FROM respostas), 2) AS porcentagem
FROM respostas
GROUP BY resultado
ORDER BY FIELD(
    resultado,
    'Casa Atreides',
    'Casa Harkonnen',
    'Casa Corrino',
    'Povo Fremen',
    'Irmandade Bene Gesserit'
);

SELECT resultado,COUNT(usuario.id) FROM respostas -- Quantidade de Resultados por casa
	JOIN usuario On usuario.id = fkUsuario
    GROUP BY (resultado)
    ORDER BY FIELD(resultado,
    'Casa Atreides',
    'Casa Harkonnen',
    'Casa Corrino',
    'Povo Fremen',
    'Irmandade Bene Gesserit');

SELECT 

-- TOTAL A
(
    SUM(CASE WHEN resposta1 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta2 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta3 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta4 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta5 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta6 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta7 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta8 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta9 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta10 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta11 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta12 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta13 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta14 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta15 = 'A' THEN 1 ELSE 0 END)
) AS totalA,

-- TOTAL B
(
    SUM(CASE WHEN resposta1 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta2 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta3 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta4 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta5 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta6 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta7 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta8 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta9 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta10 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta11 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta12 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta13 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta14 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta15 = 'B' THEN 1 ELSE 0 END)
) AS totalB,

-- TOTAL C
(
    SUM(CASE WHEN resposta1 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta2 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta3 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta4 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta5 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta6 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta7 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta8 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta9 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta10 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta11 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta12 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta13 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta14 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta15 = 'C' THEN 1 ELSE 0 END)
) AS totalC,

-- TOTAL D
(
    SUM(CASE WHEN resposta1 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta2 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta3 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta4 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta5 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta6 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta7 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta8 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta9 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta10 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta11 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta12 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta13 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta14 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta15 = 'D' THEN 1 ELSE 0 END)
) AS totalD,

-- TOTAL E
(
    SUM(CASE WHEN resposta1 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta2 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta3 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta4 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta5 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta6 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta7 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta8 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta9 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta10 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta11 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta12 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta13 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta14 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta15 = 'E' THEN 1 ELSE 0 END)
) AS totalE
FROM respostas
WHERE fkUsuario = 4 AND id = 7;

SELECT 

ROUND((
    SUM(CASE WHEN resposta1 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta2 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta3 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta4 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta5 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta6 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta7 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta8 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta9 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta10 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta11 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta12 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta13 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta14 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta15 = 'A' THEN 1 ELSE 0 END)
)/15 * 100,2) AS "Casa Atreides",

ROUND((
    SUM(CASE WHEN resposta1 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta2 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta3 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta4 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta5 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta6 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta7 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta8 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta9 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta10 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta11 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta12 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta13 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta14 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta15 = 'B' THEN 1 ELSE 0 END)
)/15 * 100,2) AS "Casa Harkonnen",

ROUND((
    SUM(CASE WHEN resposta1 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta2 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta3 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta4 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta5 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta6 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta7 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta8 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta9 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta10 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta11 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta12 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta13 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta14 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta15 = 'C' THEN 1 ELSE 0 END)
)/15 * 100,2) AS "Casa Corrino",

ROUND((
    SUM(CASE WHEN resposta1 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta2 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta3 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta4 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta5 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta6 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta7 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta8 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta9 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta10 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta11 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta12 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta13 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta14 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta15 = 'D' THEN 1 ELSE 0 END)
)/15 * 100,2) AS "Povo Fremen",

ROUND((
    SUM(CASE WHEN resposta1 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta2 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta3 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta4 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta5 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta6 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta7 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta8 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta9 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta10 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta11 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta12 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta13 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta14 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta15 = 'E' THEN 1 ELSE 0 END)
)/15 * 100,2) AS "Irmandade Bene Gesserit"

FROM respostas
WHERE fkUsuario = 4
AND id = 1;

-- INSERTS PARA TESTE
INSERT INTO usuario (nome,email,senha) VALUES
('Lucas','lucas@gmail.com','Lucas@123'),
('Fernando','fernando@gmail.com','Fernando@123'),
('Paul Atreides','paul@gmail.com','Paul@123'),
('Jessica Atreides','jessica@gmail.com','Jessica@123'),
('Stilgar Fremen','stilgar@gmail.com','Stilgar@123'),
('Irulan Corrino','irulan@gmail.com','Irulan@123');


INSERT INTO respostas 
(resposta1,resposta2,resposta3,resposta4,resposta5,resposta6,resposta7,resposta8,resposta9,resposta10,resposta11,resposta12,resposta13,resposta14,resposta15,resultado,fkUsuario) VALUES
('A','B','A','C','A','D','A','A','E','A','A','B','A','D','A','Casa Atreides',4),
('B','B','C','B','A','B','D','B','B','E','B','B','B','A','B','Casa Harkonnen',5),
('C','A','C','C','D','C','C','E','C','C','A','C','C','C','B','Casa Corrino',6),
('D','D','A','D','D','B','D','D','C','D','D','E','D','D','A','Povo Fremen',4),
('E','E','D','E','C','E','E','A','E','E','B','E','E','D','E','Irmandade Bene Gesserit',5),
('A','A','D','A','B','A','A','C','A','A','E','A','D','A','C','Casa Atreides',6),
('B','D','B','B','B','A','B','B','E','B','B','C','B','D','B','Casa Harkonnen',4),
('C','C','A','C','C','E','C','B','C','D','C','C','A','C','C','Casa Corrino',5),
('D','E','D','D','A','D','D','C','D','D','B','D','D','A','D','Povo Fremen',6),
('E','A','E','E','E','D','E','E','B','E','E','C','E','E','A','Irmandade Bene Gesserit',4),
('A','C','D','E','B','B','E','C','B','E','B','A','E','C','C','Casa Harkonnen',1),
('A','A','B','B','A','C','A','D','A','A','E','A','A','C','A','Casa Atreides',2),
('D','D','E','D','C','D','A','D','D','B','D','D','E','D','D','Povo Fremen',3),
('E','B','E','E','E','A','E','E','D','E','E','C','E','B','E','Irmandade Bene Gesserit',1),
('C','C','D','C','C','A','C','C','B','C','E','C','C','D','C','Casa Corrino',2),
('B','B','A','B','D','B','B','E','B','B','C','B','A','B','B','Casa Harkonnen',3),
('A','D','A','A','C','D','A','B','A','D','A','E','A','A','D','Casa Atreides',1),
('D','D','C','D','E','D','A','D','B','D','D','C','D','D','A','Povo Fremen',2),
('E','C','E','E','A','E','D','E','E','B','E','E','A','E','E','Irmandade Bene Gesserit',3),
('C','C','B','C','D','C','C','A','C','C','E','C','B','C','C','Casa Corrino',1),
('B','B','D','B','A','B','E','B','C','B','B','A','B','D','B','Casa Harkonnen',2),
('A','A','D','A','E','A','A','C','A','B','A','A','D','A','A','Casa Atreides',3),
('D','D','D','D','A','D','C','D','D','E','D','A','D','D','B','Povo Fremen',1),
('A','A','D','A','E','A','A','C','A','B','A','A','D','A','A','Casa Atreides',5),
('D','D','D','D','A','D','C','D','D','E','D','A','D','D','B','Povo Fremen',4),
('E','E','A','B','E','E','D','E','C','E','E','A','E','E','D','Irmandade Bene Gesserit',2),
('C','C','C','A','C','D','C','B','C','C','A','C','E','C','C','Casa Corrino',3);
