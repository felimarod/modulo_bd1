--Consultas en el Back segun la tabla o el end point
------------------
-- 1. tabla archivos adjuntos

-- Trae toda la informacino que hay en la tabla ArchivoAdjunto

select * FROM ArchivoAdjunto;

-- Trae toda la tabla de archvoAdjunto segun el consecutivo que se envia desde la aplicacion
 select * FROM ArchivoAdjunto WHERE concecArchivo = 1


------------------
 -- 2. tabla categoria

 -- endpoint formatear los datos de la categoria
 -- Trae toda la informacion de la tabla categoria
 select * FROM Categoria;

 -- trae toda la informacion de la tabla categoria segun el consecutivo que se envia desde la aplicacion 
 select * FROM Categoria WHERE IDCategoria = 'PRI';

 -- insercion de una nueva categoria 
  INSERT INTO Categoria (idCategoria, desCategoria) 
    VALUES (:idCategoria, :desCategoria);

--Actualizacion de la categoria
UPDATE Categoria SET desCategoria = :desCategoria WHERE idCategoria = :idCategoria`,  
    [idCategoria, desCategoria]);


------------------
-- 3. tabla contacto

--end point consultar los datos de contacto
select * FROM contacto

-- obtencion de los contactos por id
select * FROM contacto WHERE conseccontacto = :contactoId;

-- endPoint Creacion de un nuevo contacto
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES 
    (:nombrecontacto, :correocontacto, :usuario, :usuario_1);

-- endPoint Actualizacion de un contacto 
UPDATE USUARIO SET nombrecontacto = :nombrecontacto, correocontacto = :correocontacto, usuario = :usuario, usuario_1 = :usuario_1 WHERE conseccontacto = :conseccontacto;

------------------
-- 4. tabla Contacto 

-- endPoint consultar los datos de contacto
select * FROM contacto

-- endPoint obtener los datos de contacto por id
select * FROM contacto WHERE conseccontacto = :contactoId;

-- endPoint Creacion de un nuevo contacto
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES 
    (:nombrecontacto, :correocontacto, :usuario, :usuario_1);

-- endPoint Actualizacion de un contacto
UPDATE USUARIO SET nombrecontacto = :nombrecontacto, correocontacto = :correocontacto, usuario = :usuario, usuario_1 = :usuario_1 WHERE conseccontacto = :conseccontacto;

-- endPonit Obtencio de contactos por usuario
select * FROM contacto WHERE usuario = :usuario


------------------
-- 5. tabla destinatario

-- endPoint consultar los datos de destinatario
select * FROM destinatario

-- endPoint obtener los datos de destinatario por id
select * FROM Destinatario WHERE consecDestinatario = :consecDestinatario

-- endPoint Creacion de un nuevo destinatario
INSERT INTO Destinatario (idMensaje,usuario,consecContacto,idTipoCopia,idPais) 
    VALUES (idMensaje,:usuario,:consecContacto,:idTipoCopia,:idPais);

-- endPoint Actualizacion de un destinatario
UPDATE Destinatario SET idMensaje = :idMensaje, usuario = :usuario, consecContacto = :consecContacto, idTipoCopia = :idTipoCopia, idPais = :idPais WHERE consecDestinatario = :consecDestinatario;


------------------
-- 6. tabla estado

-- endPoint consultar los datos de estado
select * FROM ESTADO

-- endPoint obtener los datos de estado por id
select * FROM Estado WHERE idEstado = :EstadoId ;

-- endPoint Creacion de un nuevo estado
INSERT INTO Estado (idEstado, nombreEstado) VALUES 
    (:idEstado, :nombreEstado);

-- endPoint Actualizacion de un estado
UPDATE ESTADO SET nombreEstado = :nombreEstado WHERE idEstado = :idEstado;

--endpoint Obtener Estado por nombre
select * FROM Estado WHERE nombreEstado = :nombreEstado;


------------------
-- 7. tabla mensaje

--endPoint consultar todos los  mensaje
select * FROM mensaje

--endPoint obtener los datos de mensaje por id
select * FROM mensaje WHERE idMensaje = :idMensaje;

--endPoint Creacion de un nuevo mensaje
INSERT INTO Mensaje (idMensaje, asunto, cuerpoMensaje, idTipoCarpeta, fechaAccion, horaAccion, usuario, idCategoria) 
    VALUES (:idmensaje, :asunto, :cuerpoMensaje, :idTipoCarpeta,TO_DATE(:fechaAccion,'DD/MM/YYYY'), TO_TIMESTAMP(:horaAccion,'HH24:MI:SS'), :usuario, :idCategoria);

--endPoint Actualizacion de un mensaje
UPDATE Mensaje SET asunto = :asunto, cuerpoMensaje = :cuerpoMensaje, idTipoCarpeta = :idTipoCarpeta, fechaAccion = :fechaAccion, horaAccion = :horaAccion, usuario = :usuario, idCategoria = :idCategoria
    WHERE idMensaje = :idMensaje;

--endPoint Obtener mensajes por usuario y categoria
select m.idmensaje mensaje,
    e.nombre
    || ' '
    || e.apellido emisor,
    m.asunto asunto,
    to_char(m.fechaaccion, 'DD/MM/YYYY')
    || ' '
    || to_char(
        m.horaaccion,
        'HH24:mm'
    ) fecha
from mensaje m,
    contacto c,
    destinatario d,
    usuario u,
    usuario e
where m.idmensaje = d.idmensaje
    and d.conseccontacto = c.conseccontacto
    and c.usuario_1 = u.usuario
    and m.usuario = e.usuario
    and c.usuario_1 like :idUsuario
    and m.idcategoria like :idCategoria;

--endpoint agregar un mensaje a la carpeta de enviados
-- consulta de todos los mensajes que tengan  el usario que se envia desde la aplicacion
SELECT * FROM usuario U where U.correoalterno like :correo;

-- peticion de todos los contactos que tenga el usuario que se envia desde la aplicacion
SELECT distinct * FROM contacto C where C.correocontacto like :correo;

-- insercion de un nuevo contacto al usuario
INSERT INTO contacto (nombreContacto,correoContacto,usuario,usuario_1) VALUES (:nombreContacto,:correoContacto,:idUsuario,:idUsuario_1 ;

-- insercion de un nuevo contacto al directorio de contactos
INSERT INTO contacto (nombreContacto,correoContacto,usuario,usuario_1) VALUES (null,:correo,:idUsuario,null)

-- obtener recibido de usuario
select m.idmensaje mensaje,
  e.nombre
  || ' '
  || e.apellido emisor,
  m.asunto asunto,
  to_char(m.fechaaccion, 'DD/MM/YYYY')
  || ' '
  || to_char(
      m.horaaccion,
      'HH24:mm'
  ) fecha
from mensaje m,
    contacto c,
    destinatario d,
    usuario u,
    usuario e
where m.idmensaje = d.idmensaje
  and d.conseccontacto = c.conseccontacto
  and m.idtipocarpeta like 'Rec'
  and c.usuario_1 = u.usuario
  and m.usuario = e.usuario
  and c.usuario_1 like :idUsuario;

--endPoint obtener los Borradores de los mensajes del Usuario
select m.idmensaje "idMensaje",
      m.asunto "asunto",
      u.NOMBRE || ' ' || u.APELLIDO "destinatario",
      tc.idtipocopia
from mensaje m,
    destinatario d,
    contacto c,
    tipocopia tc,
    usuario u
where m.idmensaje = d.idmensaje
  and m.usuario = d.usuario
  and c.conseccontacto = d.conseccontacto
  and d.idtipocopia = tc.idtipocopia
  and (d.idtipocopia like 'CO' or  d.idtipocopia like 'COO')
  and m.idtipocarpeta like 'Bor'
  and m.usuario = :idUsuario
  and u.USUARIO = c.USUARIO_1
order by d.idtipocopia;

--endPoint obtener los mensajes enviados por usuario
select m.idmensaje "idMensaje",
    m.asunto "asunto",
    u.NOMBRE || ' ' || u.APELLIDO "destinatario",
    tc.idtipocopia,
    to_char(m.fechaaccion, 'DD/MM/YYYY')
    || ' '
    || to_char(
        m.horaaccion,
        'HH24:mm'
    ) fecha
from mensaje m,
    destinatario d,
    contacto c,
    tipocopia tc,
    usuario u
where m.idmensaje = d.idmensaje
  and m.usuario = d.usuario
  and c.conseccontacto = d.conseccontacto
  and d.idtipocopia = tc.idtipocopia
  and ( d.idtipocopia like 'CO'
    or d.idtipocopia like 'COO' )
  and m.idtipocarpeta like 'Env'
  and u.USUARIO = c.USUARIO_1
  and m.usuario = :idUsuario
order by d.idtipocopia;

--endPoint obtener informacion completa del mensaje
select 
    m.idmensaje "idMensaje",
    r.nombre
    || ' '
    || r.apellido remitente,
    m.asunto "asunto",
    m.CUERPOMENSAJE "cuerpoMensaje",
    u.nombre
    || ' '
    || u.apellido "destinatario",
    d.idTipoCopia tipoCopia
from mensaje m,
      destinatario d,
      contacto c,
      usuario u,
      usuario r
 where 
       r.usuario = m.usuario
   and m.idmensaje = d.idmensaje
   and m.usuario = d.usuario
   and c.conseccontacto = d.conseccontacto
   and u.usuario = c.usuario_1
   and m.IDMENSAJE like :idMensaje
 order by d.idtipocopia;


------------------
-- 8. tabla pais

-- endPoint consultar toda la informaicon de todos los datos de pais
select * FROM Pais;

-- endPoint obtener los datos de pais por id
select * FROM Pais WHERE IDPais = :idPais;

-- endPoint Creacion de un nuevo pais
INSERT INTO Pais (idPais, nomPais, dominio) 
    VALUES (:idPais, :descpPais, :dominio) ;

-- endPoint Actualizacion de un pais
UPDATE Pais SET nomPais = :nomPais, dominio = :dominio  WHERE idPais = :idPais;


------------------
-- 9. tabla tipoArchivo

-- endPoint consultar toda la informaicon de todos los datos de tipoArchivo
select * FROM tipoArchivo

-- endPoint obtener los datos de tipoArchivo por id
select * FROM tipoArchivo WHERE IDtipoArchivo = :idtipoArchivo;

-- endPoint Creacion de un nuevo tipoArchivo
INSERT INTO tipoArchivo (idTipoArchivo, descTipoArchivo) 
    VALUES (:idTipoArchivo, :descTipoArchivo);

-- endPoint Actualizacion de un tipoArchivo
UPDATE tipoArchivo SET descTipoArchivo = :descTipoArchivo WHERE idTipoArchivo = :idTipoArchivo


------------------
-- 10. tabla tipoCarpeta

-- endPoint consultar toda la informaicon de todos los datos de tipoCarpeta
select * FROM tipoCarpeta;

-- endPoint obtener los datos de tipoCarpeta por id
select * FROM tipocarpeta WHERE IDtipocarpeta = :idtipocarpeta;

-- endPoint Creacion de un nuevo tipoCarpeta
INSERT INTO tipoCarpeta (idTipoCarpeta, descpTipoCarpeta) 
    VALUES (:idTipoCarpeta, :descpTipoCarpeta);

-- endPoint Actualizacion de un tipoCarpeta
UPDATE tipocarpeta SET descTipoCarpeta = :descTipoCarpeta WHERE idtipocarpeta = :idtipocarpeta


------------------
-- 11. tabla tipoCopia

-- endPoint consultar toda la informaicon de todos los datos de tipoCopia
select * FROM tipoCopia;

-- endPoint obtener los datos de tipoCopia por id enviado desde la apliacion
select * FROM TIPOCOPIA WHERE idTipoCopia = :idTipoCopia;

-- endPoint Creacion de un nuevo tipoCopia
INSERT INTO TipoCopia (idTipoCopia, descTipoCopia) 
    VALUES (:idTipoCopia, :descTipoCopia);

-- endPoint Actualizacion de un tipoCopia
UPDATE TipoCopia SET descTipoCopia = :descTipoCopia WHERE idTipoCopia = :idTipoCopia;


------------------
-- 12. tabla usuario

-- endPoint consultar toda la informaicon de todos los datos de usuario
select * FROM usuario;

-- endPoint obtener los datos de usuario por id enviado desde la apliacion
select * FROM USUARIO WHERE USUARIO = :USUARIO;

-- endPoint Creacion de un nuevo usuario
INSERT INTO Usuario (usuario,nombre,apellido,fechanacimiento,fechacreacion,correoalterno,celular,idestado,idpais) VALUES 
    (:usuario,:nombre,:apellido,TO_DATE(:fechanacimiento,'DD/MM/YYYY'),TO_DATE(:fechacreacion,'DD/MM/YYYY'),:correoalterno,:celular,:idestado,:idpais);

-- endPoint Actualizacion de un usuario
UPDATE USUARIO SET nombre = :nombre, apellido = :apellido, fechanacimiento = :fechanacimiento, fechacreacion = :fechacreacion, correoalterno = :correoalterno, celular = :celular, idestado = :idestado, idpais = :idpais WHERE usuario = :usuario;