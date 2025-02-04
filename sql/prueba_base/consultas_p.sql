-- Seleccionar quien le envio el mensaje, el asunto del mensaje y la fecha de los mensajes que tiene un usuario filtrado por la carpeta o categoria

select m.idmensaje id,
       r.nombre
       || ' '
       || r.apellido remitente,
       m.asunto asunto,
       m.fechaaccion
       || ' '
       || to_char(
          m.horaaccion,
          'HH24:mm'
       ),
       u.nombre
       || ' '
       || u.apellido destinatario
  from mensaje m,
       destinatario d,
       contacto c,
       usuario r,
       usuario u
 where m.idmensaje = d.idmensaje
   and m.usuario = d.usuario
   and c.conseccontacto = d.conseccontacto
   and c.usuario_1 like 'MCarv'
--    and c.USUARIO_1 = r.USUARIO
   and m.usuario = r.usuario;

select m.idmensaje idmensaje,
       m.usuario remitente,
       c.nombrecontacto recibido
  from mensaje m,
       destinatario d,
       contacto c
 where m.idmensaje = d.idmensaje
   and m.usuario = d.usuario
   and c.conseccontacto = d.conseccontacto;

select m.idmensaje "id Mensaje",
       m.usuario "remitente",
       m.asunto "asunto",
       m.fechaaccion "fecha",
       c.nombrecontacto "recibido"
  from mensaje m,
       destinatario d,
       contacto c
 where m.idmensaje = d.idmensaje
   and m.usuario = d.usuario
   and c.conseccontacto = d.conseccontacto
   and m.idtipocarpeta like 'Rec'
   and c.usuario_1 like 'GioUs';

select m.idmensaje
  from mensaje m
 where m.idtipocarpeta like 'Rec';
-- Seleccionar el id del Mensaje, el asunto del mensajes cuyo tipo de carpeta sea Enviados, también traer los remitentes CO y CCO, estos mensajes deben ser traidos para el usuario especificado
select m.idmensaje "idMensaje",
       m.asunto "asunto",
       u.nombre
       || ' '
       || u.apellido "destinatario",
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
   and ( d.idtipocopia like 'CO'
    or d.idtipocopia like 'COO' )
   and m.idtipocarpeta like 'Env'
   and m.usuario = 'Alejo'
   and u.usuario = c.usuario_1
 order by d.idtipocopia;

select *
  from contacto;

select m.idmensaje mensaje,
       m.asunto asunto,
       u.nombre
       || ' '
       || u.apellido "destinatario"
  from mensaje m,
       destinatario d,
       contacto c,
       usuario u
 where m.idmensaje = d.idmensaje
   and m.usuario = d.usuario
   and c.conseccontacto = d.conseccontacto
   and c.usuario_1 = u.usuario;


-- Seleccionar los mensajes de la carpeta recibidos con su id, remitente, asunto y fecha filtrando por el usuario receptor
select m.idmensaje idmensaje,
       e.nombre
       || ' '
       || e.apellido emisor,
       m.asunto asunto,
       to_char(m.fechaaccion, 'DD/MM/YY')
       || ' '
       || to_char(
          m.horaaccion,
          'HH24:mm'
       ) fecha
  from mensaje m,
       contacto c,
       destinatario d,
       usuario r,
       usuario e
 where m.idmensaje = d.idmensaje
   and d.conseccontacto = c.conseccontacto
   and m.idtipocarpeta like 'Rec'
   and c.usuario_1 = r.usuario
   and m.usuario = e.usuario
   and c.usuario_1 like 'Alejo';