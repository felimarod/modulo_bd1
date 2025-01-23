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

CREATE TABLE Usuario (
    usuario VARCHAR(5) NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    fechaNacimiento DATE NOT NULL,
    fechaCreacion DATE NOT NULL,
    correoAlterno VARCHAR(30) NOT NULL,
    celular VARCHAR(12) NOT NULL,
    idEstado VARCHAR(5) NOT NULL,
    idPais VARCHAR(5) NOT NULL,
    PRIMARY KEY (usuario),
    FOREIGN KEY (idEstado) REFERENCES Estado(idEstado),
    FOREIGN KEY (idPais) REFERENCES Pais(idPais)
);

CREATE TABLE Contacto (
    consecContacto INT NOT NULL,
    nombreContacto VARCHAR(30) NOT NULL,
    correoContacto VARCHAR(30) NOT NULL,
    usuario VARCHAR(5) NOT NULL,
    usuario_1 VARCHAR (5) UNIQUE NOT NULL,
    PRIMARY KEY (consecContacto),
    FOREIGN KEY (usuario) REFERENCES Usuario(usuario),
    FOREIGN KEY (usuario_1) REFERENCES Usuario(usuario)
);


CREATE TABLE Mensaje (
    idMensaje VARCHAR(5) NOT NULL,
    asunto VARCHAR(255) NOT NULL,
    cuerpoMensaje VARCHAR(255) NOT NULL,
    fechaAccion DATE NOT NULL,
    horaAccion TIME NOT NULL,
    usuario VARCHAR(5) NOT NULL,
    PRIMARY KEY (idMensaje),
    FOREIGN KEY (usuario) REFERENCES Usuario(usuario)
);

CREATE TABLE ArchivoAdjunto (
    consecArchivo INT NOT NULL,
    nomArchivo VARCHAR(30) NOT NULL,
    idMensaje VARCHAR(5) NOT NULL,
    idTipoArchivo VARCHAR(5) NOT NULL,
    PRIMARY KEY (consecArchivo),
    FOREIGN KEY (idMensaje) REFERENCES Mensaje(idMensaje),
    FOREIGN KEY (idTipoArchivo) REFERENCES TipoArchivo(idTipoArchivo)
);

CREATE TABLE Destinatario (
    consecDestinatario INT NOT NULL,
    idMensaje VARCHAR(5) NOT NULL,
    consecContacto INT NOT NULL,
    idTipoCopia VARCHAR(4) NOT NULL,
    PRIMARY KEY (consecDestinatario),
    FOREIGN KEY (idMensaje) REFERENCES Mensaje(idMensaje),
    FOREIGN KEY (consecContacto) REFERENCES Contacto(consecContacto),
    FOREIGN KEY (idTipoCopia) REFERENCES TipoCopia(idTipoCopia)
);