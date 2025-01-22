--TABLAS INDEPENDIENTES--

CREATE TABLE Estado (
    idEstado VARCHAR(5) NOT NULL,
    nombreEstado VARCHAR(30) NOT NULL,
    PRIMARY KEY (idEstado)
);

CREATE TABLE TipoCarpeta (
    idTipoCarpeta VARCHAR(3) NOT NULL,
    descTipoCarpeta VARCHAR(30) NOT NULL,
    PRIMARY KEY (idTipoCarpeta)
);

CREATE TABLE TipoCopia (
    idTipoCopia VARCHAR(4) NOT NULL,
    descTipoCopia VARCHAR(15) NOT NULL,
    PRIMARY KEY (idTipoCopia)
);

CREATE TABLE TipoArchivo (
    idTipoArchivo VARCHAR(5) NOT NULL,
    descTipoArchivo VARCHAR(30) NOT NULL,
    PRIMARY KEY (idTipoArchivo)
);

CREATE TABLE Pais (
    idPais VARCHAR(5) NOT NULL,
    nomPais VARCHAR(30) NOT NULL,
    dominio VARCHAR(3) NOT NULL,
    PRIMARY KEY (idPais)
);

--TABLAS CON FK--

CREATE TABLE Usuario (
    usuario VARCHAR(5) NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    fechaNacimiento DATE NOT NULL,
    fechaCreacion DATE NOT NULL,
    correoAlterno VARCHAR(30) NOT NULL,
    celular VARCHAR(12) NOT NULL,
    PRIMARY KEY (usuario),
    FOREIGN KEY (idPais) REFERENCES Pais(idPais),
    FOREIGN KEY (idEstado) REFERENCES Estado(idEstado)
);

CREATE TABLE ArchivoAdjunto (
    consecArchivo INT NOT NULL,
    nomArchivo VARCHAR(30) NOT NULL,
    PRIMARY KEY (consecArchivo)
);

CREATE TABLE Contacto (
    consecContacto INT NOT NULL,
    nombreContacto VARCHAR(30) NOT NULL,
    correoContacto VARCHAR(30) NOT NULL,
    PRIMARY KEY (consecContacto)
);

CREATE TABLE Destinatario (
    consecDestinatario INT NOT NULL,
    PRIMARY KEY (consecDestinatario)
);

--TABLAS CON DEPENDENCIAS--

CREATE TABLE Mensaje (
    idMensaje VARCHAR(5) NOT NULL,
    asunto VARCHAR(255) NOT NULL,
    cuerpoMensaje VARCHAR(255) NOT NULL,
    fechaAccion DATE NOT NULL,
    horaAccion TIME NOT NULL,
    PRIMARY KEY (idMensaje)
);










