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