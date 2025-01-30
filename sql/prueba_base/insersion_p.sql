INSERT INTO Estado (idEstado,nombreEstado) 
VALUES ('Act','activo'),
       ('In','inactivo');

INSERT INTO TipoCarpeta(idTipoCarpeta,descTipoCarpeta)
VALUES ('Rec','Recibido'),
       ('Env','Enviado'),
       ('Bor','Borrador');

INSERT INTO TipoCopia(idTipoCopia,descTipoCopia)
VALUES ('CO','Copia'),
       ('COO','Copia Oculta');

INSERT INTO TipoArchivo(idTipoArchivo,descTipoArchivo)
VALUES ('PDF','Documento Portable'),
       ('DOC','Documento'),
       ('XLS','Hoja de Calculo'),
       ('GIF','Imagen'),
       ('BMP','Imagen'),
       ('MP4','Video'),
       ('AVI','Video'),
       ('MP3','Musica'),
       ('EXE','Ejecutable');

INSERT INTO Pais(idPais,nomPais,dominio) 
VALUES ('063','Argentina .ar'),
       ('097','Bolivia .bo'),
       ('105','Brasil .br'),
       ('149','Canada .ca'),
       ('169','Colombia .co'),
       ('245','España .es'),
       ('249','Estados Unidos .us'),
       ('275','Francia .fr');

INSERT INTO Categoria(idCategoria,desCategoria)
VALUES ('PRI','Principal'),
       ('PRO','Promocion'),
       ('SOC','Social'),
       ('NOT','Notificacion'),
       ('FOR','Foro'),
       ('INP','Importante'),
       ('SPA','Spam'),
       ('PAP','Papelera');

INSERT INTO Usuario(usuario,nombre,apellido,fechanacimiento,fechacreacion,correoalterno,celular,idestado,idpais)
VALUES ('GioUsr','Giovanny','moreno',TO_DATE('20/10/2003','DD/MM/YYYY'),TO_DATE('05/02/2024','DD/MM/YYYY'),'gemorenor@udistrital.edu.co','3151234378','Act','169'),
       ('Alejokljr','Alejandro','----',TO_DATE('13/11/2000','DD/MM/YYYY'),TO_DATE('06/02/2024','DD/MM/YYYY'),'alejandro@udistrital.edu.co','3211235434','Act','169'),
       ('GFeliprmr','Felipe','-----',TO_DATE('11/06/2000','DD/MM/YYYY'),TO_DATE('04/02/2024','DD/MM/YYYY'),'fmasdad@udistrital.edu.co','3173762897','Act','169'),
       ('MCarvajal','Miguel','Carvajal',TO_DATE('25/07/1999','DD/MM/YYYY'),TO_DATE('07/02/2024','DD/MM/YYYY'),'mcarvajal@bd.edu.co','3145678923','Act','169'),
       ('JLopez22','Juan','Lopez',TO_DATE('09/03/2001','DD/MM/YYYY'),TO_DATE('08/02/2024','DD/MM/YYYY'),'jlopez22@bd.edu.co','3152345678','Act','169'),
       ('DMarcelo','Daniel','Marcelo',TO_DATE('17/09/1998','DD/MM/YYYY'),TO_DATE('09/02/2024','DD/MM/YYYY'),'dmarcelo@bd.edu.co.com','3163456789','Act','169'),
       ('CAndrade','Carlos','Andrade',TO_DATE('02/12/2002','DD/MM/YYYY'),TO_DATE('10/02/2024','DD/MM/YYYY'),'candrade@bd.edu.co','3174567890','Act','169'),
       ('VQuintero','Valentina','Quintero',TO_DATE('14/05/2000','DD/MM/YYYY'),TO_DATE('11/02/2024','DD/MM/YYYY'),'vquintero@bd.edu.co','3185678901','Act','169'),
       ('ALemus33','Andrea','Lemus',TO_DATE('29/08/1997','DD/MM/YYYY'),TO_DATE('12/02/2024','DD/MM/YYYY'),'alemus33@bd.edu.co','3196789012','Act','169'),
       ('RSalinas1','Ricardo','Salinas',TO_DATE('22/04/2003','DD/MM/YYYY'),TO_DATE('13/02/2024','DD/MM/YYYY'),'rsalinas1@bd.edu.co','3207890123','Act','169');

INSERT INTO Contacto(conseccontac, nombrecontac, correocontac, usuario, usuario_1)
VALUES
-- Contactos para GioUsr
(1, 'Alejandro', 'alejokljr.usuario@bd.edu.co', 'GioUsr', 'Alejokljr'),
(2, 'Felipe', 'gfeliprmr.usuario@bd.edu.co', 'GioUsr', 'GFeliprmr'),
(3, 'Miguel', 'mcarvajal.usuario@bd.edu.co', 'GioUsr', 'MCarvajal'),
(4, 'Juan', 'jlopez22.usuario@bd.edu.co', 'GioUsr', 'JLopez22'),
(5, 'Carlos Perez', 'carlosperez@gmail.com', 'GioUsr', NULL),
(6, 'Maria Lopez', 'marialopez@gmail.com', 'GioUsr', NULL),

-- Contactos para Alejokljr
(7, 'Giovanny', 'gemorenor.usuario@bd.edu.co', 'Alejokljr', 'GioUsr'),
(8, 'Felipe', 'gfeliprmr.usuario@bd.edu.co', 'Alejokljr', 'GFeliprmr'),
(9, 'Miguel', 'mcarvajal.usuario@bd.edu.co', 'Alejokljr', 'MCarvajal'),
(10, 'Juan', 'jlopez22.usuario@bd.edu.co', 'Alejokljr', 'JLopez22'),
(11, 'Ana Perez', 'anaperez@gmail.com', 'Alejokljr', NULL),
(12, 'Jose Rios', 'joserios@gmail.com', 'Alejokljr', NULL),

-- Contactos para GFeliprmr
(13, 'Giovanny', 'gemorenor.usuario@bd.edu.co', 'GFeliprmr', 'GioUsr'),
(14, 'Alejandro', 'alejokljr.usuario@bd.edu.co', 'GFeliprmr', 'Alejokljr'),
(15, 'Miguel', 'mcarvajal.usuario@bd.edu.co', 'GFeliprmr', 'MCarvajal'),
(16, 'Juan', 'jlopez22.usuario@bd.edu.co', 'GFeliprmr', 'JLopez22'),
(17, 'Laura Gomez', 'lauragomez@gmail.com', 'GFeliprmr', NULL),
(18, 'Luis Torres', 'luistorres@gmail.com', 'GFeliprmr', NULL),

-- Contactos para MCarvajal
(19, 'Giovanny', 'gemorenor.usuario@bd.edu.co', 'MCarvajal', 'GioUsr'),
(20, 'Alejandro', 'alejokljr.usuario@bd.edu.co', 'MCarvajal', 'Alejokljr'),
(21, 'Felipe', 'gfeliprmr.usuario@bd.edu.co', 'MCarvajal', 'GFeliprmr'),
(22, 'Juan', 'jlopez22.usuario@bd.edu.co', 'MCarvajal', 'JLopez22'),
(23, 'Carmen Diaz', 'carmendiaz@gmail.com', 'MCarvajal', NULL),
(24, 'Raul Martinez', 'raulmartinez@gmail.com', 'MCarvajal', NULL),

-- Contactos para JLopez22
(25, 'Giovanny', 'gemorenor.usuario@bd.edu.co', 'JLopez22', 'GioUsr'),
(26, 'Alejandro', 'alejokljr.usuario@bd.edu.co', 'JLopez22', 'Alejokljr'),
(27, 'Felipe', 'gfeliprmr.usuario@bd.edu.co', 'JLopez22', 'GFeliprmr'),
(28, 'Miguel', 'mcarvajal.usuario@bd.edu.co', 'JLopez22', 'MCarvajal'),
(29, 'Sofia Vega', 'sofiavega@gmail.com', 'JLopez22', NULL),
(30, 'Marco Cruz', 'marcocruz@gmail.com', 'JLopez22', NULL),

-- Contactos para DMarcelo
(31, 'Giovanny', 'gemorenor.usuario@bd.edu.co', 'DMarcelo', 'GioUsr'),
(32, 'Alejandro', 'alejokljr.usuario@bd.edu.co', 'DMarcelo', 'Alejokljr'),
(33, 'Felipe', 'gfeliprmr.usuario@bd.edu.co', 'DMarcelo', 'GFeliprmr'),
(34, 'Miguel', 'mcarvajal.usuario@bd.edu.co', 'DMarcelo', 'MCarvajal'),
(35, 'Patricia Blanco', 'patriciablanco@gmail.com', 'DMarcelo', NULL),
(36, 'Victor Luna', 'victorluna@gmail.com', 'DMarcelo', NULL),

-- Contactos para CAndrade
(37, 'Giovanny', 'gemorenor.usuario@bd.edu.co', 'CAndrade', 'GioUsr'),
(38, 'Alejandro', 'alejokljr.usuario@bd.edu.co', 'CAndrade', 'Alejokljr'),
(39, 'Felipe', 'gfeliprmr.usuario@bd.edu.co', 'CAndrade', 'GFeliprmr'),
(40, 'Miguel', 'mcarvajal.usuario@bd.edu.co', 'CAndrade', 'MCarvajal'),
(41, 'Elena Ruiz', 'elenaruiz@gmail.com', 'CAndrade', NULL),
(42, 'Mario Lopez', 'mariolopez@gmail.com', 'CAndrade', NULL),

-- Contactos para VQuintero
(43, 'Giovanny', 'gemorenor.usuario@bd.edu.co', 'VQuintero', 'GioUsr'),
(44, 'Alejandro', 'alejokljr.usuario@bd.edu.co', 'VQuintero', 'Alejokljr'),
(45, 'Felipe', 'gfeliprmr.usuario@bd.edu.co', 'VQuintero', 'GFeliprmr'),
(46, 'Miguel', 'mcarvajal.usuario@bd.edu.co', 'VQuintero', 'MCarvajal'),
(47, 'Ana Beltran', 'anabeltran@gmail.com', 'VQuintero', NULL),
(48, 'Oscar Meza', 'oscarmeza@gmail.com', 'VQuintero', NULL),

-- Contactos para ALemus33
(49, 'Giovanny', 'gemorenor.usuario@bd.edu.co', 'ALemus33', 'GioUsr'),
(50, 'Alejandro', 'alejokljr.usuario@bd.edu.co', 'ALemus33', 'Alejokljr'),
(51, 'Felipe', 'gfeliprmr.usuario@bd.edu.co', 'ALemus33', 'GFeliprmr'),
(52, 'Miguel', 'mcarvajal.usuario@bd.edu.co', 'ALemus33', 'MCarvajal'),
(53, 'Rosa Delgado', 'rosadelgado@gmail.com', 'ALemus33', NULL),
(54, 'Hugo Sanchez', 'hugosanchez@gmail.com', 'ALemus33', NULL),

-- Contactos para RSalinas1
(55, 'Giovanny', 'gemorenor.usuario@bd.edu.co', 'RSalinas1', 'GioUsr'),
(56, 'Alejandro', 'alejokljr.usuario@bd.edu.co', 'RSalinas1', 'Alejokljr'),
(57, 'Felipe', 'gfeliprmr.usuario@bd.edu.c  o', 'RSalinas1', 'GFeliprmr'),
(58, 'Miguel', 'mcarvajal.usuario@bd.edu.co', 'RSalinas1', 'MCarvajal'),
(59, 'Paola Ramirez', 'paolaramirez@gmail.com', 'RSalinas1', NULL),
(60, 'Eduardo Mora', 'eduardomora@gmail.com', 'RSalinas1', NULL);

INSERT INTO mensaje(idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria)
VALUES 
('E001','Revisión pendiente','Solicito la revisión del documento compartido.','Rec',TO_DATE('28/02/2025','DD/MM/YYYY'),TO_TIMESTAMP('21:02:44','HH24:MI:SS'),'GioUsr','Rec'),
('E002','Consulta de acceso','¿Podrías concederme acceso al archivo para continuar el trabajo?','Env',TO_DATE('01/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('09:15:30','HH24:MI:SS'),'GioUsr','Env'),
('E003','Actualización requerida','Por favor, actualiza la información del reporte.','Bor',TO_DATE('02/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('10:30:00','HH24:MI:SS'),'GioUsr','Bor'),
('E004','Confirmación de reunión','Te confirmo mi asistencia a la reunión del viernes.','Env',TO_DATE('03/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('14:00:00','HH24:MI:SS'),'GioUsr','Env'),

('E005','Tarea finalizada','He terminado la tarea asignada, ¿podrías revisarla?','Rec',TO_DATE('28/02/2025','DD/MM/YYYY'),TO_TIMESTAMP('15:45:00','HH24:MI:SS'),'Alejokljr','Rec'),
('E006','Solicitud de comentarios','Por favor, comparte tus comentarios sobre el proyecto.','Env',TO_DATE('01/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('16:20:00','HH24:MI:SS'),'Alejokljr','Env'),
('E007','Reunión de seguimiento','Necesitamos coordinar una reunión para evaluar avances.','Bor',TO_DATE('02/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('11:50:00','HH24:MI:SS'),'Alejokljr','Bor'),
('E008','Documentación necesaria','Faltan algunos documentos para el cierre del proyecto.','Env',TO_DATE('03/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('18:30:00','HH24:MI:SS'),'Alejokljr','Env'),

('E009','Nueva propuesta','He subido una propuesta nueva para el diseño.','Rec',TO_DATE('28/02/2025','DD/MM/YYYY'),TO_TIMESTAMP('08:00:00','HH24:MI:SS'),'GFeliprmr','Rec'),
('E010','Estado del presupuesto','¿Podrías confirmar el estado del presupuesto actual?','Env',TO_DATE('01/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('09:45:00','HH24:MI:SS'),'GFeliprmr','Env'),
('E011','Planificación del sprint','Adjunto la planificación para el próximo sprint.','Bor',TO_DATE('02/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('13:10:00','HH24:MI:SS'),'GFeliprmr','Bor'),
('E012','Entrega pendiente','La entrega del cliente está programada para mañana.','Env',TO_DATE('03/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('17:00:00','HH24:MI:SS'),'GFeliprmr','Env'),

('E013','Revisión de código','Por favor, revisa los cambios en el repositorio.','Rec',TO_DATE('28/02/2025','DD/MM/YYYY'),TO_TIMESTAMP('10:15:00','HH24:MI:SS'),'MCarvajal','Rec'),
('E014','Problema técnico','Se ha reportado un problema técnico en el sistema.','Env',TO_DATE('01/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('14:05:00','HH24:MI:SS'),'MCarvajal','Env'),
('E015','Solicitud de reunión','Coordina una reunión con el cliente para resolver dudas.','Bor',TO_DATE('02/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('15:30:00','HH24:MI:SS'),'MCarvajal','Bor'),
('E016','Confirmación de entrega','El cliente confirmó la recepción del producto final.','Env',TO_DATE('03/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('18:20:00','HH24:MI:SS'),'MCarvajal','Env'),

('E017','Cambio en especificaciones','El cliente ha solicitado cambios en las especificaciones.','Rec',TO_DATE('28/02/2025','DD/MM/YYYY'),TO_TIMESTAMP('11:00:00','HH24:MI:SS'),'JLopez22','Rec'),
('E018','Entrega de borrador','Adjunto el borrador del proyecto para tu revisión.','Env',TO_DATE('01/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('13:00:00','HH24:MI:SS'),'JLopez22','Env'),
('E019','Seguimiento del proyecto','Por favor, envía un reporte del avance del proyecto.','Bor',TO_DATE('02/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('15:10:00','HH24:MI:SS'),'JLopez22','Bor'),
('E020','Confirmación de cambios','Confirma si los cambios solicitados han sido implementados.','Env',TO_DATE('03/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('17:50:00','HH24:MI:SS'),'JLopez22','Env'),

('E021','Soporte técnico','Necesito ayuda con un problema técnico urgente.','Rec',TO_DATE('28/02/2025','DD/MM/YYYY'),TO_TIMESTAMP('09:30:00','HH24:MI:SS'),'DMarcelo','Rec'),
('E022','Actualización del sistema','Se requiere una actualización del sistema operativo.','Env',TO_DATE('01/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('12:15:00','HH24:MI:SS'),'DMarcelo','Env'),
('E023','Documentación adicional','Por favor, proporciona más documentación técnica.','Bor',TO_DATE('02/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('14:20:00','HH24:MI:SS'),'DMarcelo','Bor'),
('E024','Tareas pendientes','Envía un listado de las tareas pendientes.','Env',TO_DATE('03/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('16:40:00','HH24:MI:SS'),'DMarcelo','Env'),

('E025','Aprobación de propuesta','La propuesta enviada está pendiente de aprobación.','Rec',TO_DATE('28/02/2025','DD/MM/YYYY'),TO_TIMESTAMP('08:45:00','HH24:MI:SS'),'CAndrade','Rec'),
('E026','Revisión de contratos','Por favor, revisa los contratos adjuntos.','Env',TO_DATE('01/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('11:10:00','HH24:MI:SS'),'CAndrade','Env'),
('E027','Coordinación de equipo','Organiza una reunión para coordinar al equipo.','Bor',TO_DATE('02/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('13:40:00','HH24:MI:SS'),'CAndrade','Bor'),
('E028','Reporte de errores','Adjunto un listado de errores encontrados.','Env',TO_DATE('03/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('16:00:00','HH24:MI:SS'),'CAndrade','Env'),

('E029','Progreso de tareas','Por favor, envía un informe del progreso actual.','Rec',TO_DATE('28/02/2025','DD/MM/YYYY'),TO_TIMESTAMP('10:00:00','HH24:MI:SS'),'VQuintero','Rec'),
('E030','Revisión final','El documento final está listo para tu revisión.','Env',TO_DATE('01/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('12:45:00','HH24:MI:SS'),'VQuintero','Env'),
('E031','Planificación semanal','Comparte el plan de trabajo semanal.','Bor',TO_DATE('02/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('14:50:00','HH24:MI:SS'),'VQuintero','Bor'),
('E032','Entrega de resultados','Los resultados del análisis han sido entregados.','Env',TO_DATE('03/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('17:30:00','HH24:MI:SS'),'VQuintero','Env'),

('E033','Actualización de agenda','La agenda para la próxima reunión ha sido actualizada.','Rec',TO_DATE('28/02/2025','DD/MM/YYYY'),TO_TIMESTAMP('08:30:00','HH24:MI:SS'),'ALemus33','Rec'),
('E034','Problema en sistema','Se detectó un problema en el sistema de facturación.','Env',TO_DATE('01/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('11:30:00','HH24:MI:SS'),'ALemus33','Env'),
('E035','Seguimiento financiero','Solicito un reporte del estado financiero del proyecto.','Bor',TO_DATE('02/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('14:00:00','HH24:MI:SS'),'ALemus33','Bor'),
('E036','Notificación de cierre','El cierre del proyecto está programado para el viernes.','Env',TO_DATE('03/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('17:10:00','HH24:MI:SS'),'ALemus33','Env'),

('E037','Plan de acción','Se requiere un plan de acción para resolver el incidente.','Rec',TO_DATE('28/02/2025','DD/MM/YYYY'),TO_TIMESTAMP('09:10:00','HH24:MI:SS'),'RSalinas1','Rec'),
('E038','Consulta técnica','¿Podrías aclarar los detalles técnicos del informe?','Env',TO_DATE('01/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('12:00:00','HH24:MI:SS'),'RSalinas1','Env'),
('E039','Tareas por asignar','Envía una lista de tareas que aún no tienen asignación.','Bor',TO_DATE('02/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('15:00:00','HH24:MI:SS'),'RSalinas1','Bor'),
('E040','Notificación de cambios','Se han realizado cambios en el alcance del proyecto.','Env',TO_DATE('03/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('18:00:00','HH24:MI:SS'),'RSalinas1','Env');
