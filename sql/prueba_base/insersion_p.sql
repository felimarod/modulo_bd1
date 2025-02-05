INSERT INTO Estado (idEstado,nombreEstado) VALUES ('Act','activo');
INSERT INTO Estado (idEstado,nombreEstado) VALUES ('In','inactivo');

INSERT INTO TipoCarpeta (idTipoCarpeta,descTipoCarpeta) VALUES ('Rec','Recibido');
INSERT INTO TipoCarpeta (idTipoCarpeta,descTipoCarpeta) VALUES ('Env','Enviado');
INSERT INTO TipoCarpeta (idTipoCarpeta,descTipoCarpeta) VALUES ('Bor','Borrador');

INSERT INTO TipoCopia (idTipoCopia,descTipoCopia) VALUES ('CO','Copia');
INSERT INTO TipoCopia (idTipoCopia,descTipoCopia) VALUES ('COO','Copia Oculta');

INSERT INTO TipoArchivo (idTipoArchivo,descTipoArchivo) VALUES ('PDF','Documento Portable');
INSERT INTO TipoArchivo (idTipoArchivo,descTipoArchivo) VALUES ('DOC','Documento');
INSERT INTO TipoArchivo (idTipoArchivo,descTipoArchivo) VALUES ('XLS','Hoja de Calculo');
INSERT INTO TipoArchivo (idTipoArchivo,descTipoArchivo) VALUES ('GIF','Imagen');
INSERT INTO TipoArchivo (idTipoArchivo,descTipoArchivo) VALUES ('BMP','Imagen');
INSERT INTO TipoArchivo (idTipoArchivo,descTipoArchivo) VALUES ('MP4','Video');
INSERT INTO TipoArchivo (idTipoArchivo,descTipoArchivo) VALUES ('AVI','Video');
INSERT INTO TipoArchivo (idTipoArchivo,descTipoArchivo) VALUES ('MP3','Musica');
INSERT INTO TipoArchivo (idTipoArchivo,descTipoArchivo) VALUES ('EXE','Ejecutable');

INSERT INTO Pais (idPais,nomPais,dominio) VALUES ('063','Argentina','.ar');
INSERT INTO Pais (idPais,nomPais,dominio) VALUES ('097','Bolivia ','.bo');
INSERT INTO Pais (idPais,nomPais,dominio) VALUES ('105','Brasil', '.br');
INSERT INTO Pais (idPais,nomPais,dominio) VALUES ('149','Canada','.ca');
INSERT INTO Pais (idPais,nomPais,dominio) VALUES ('169','Colombia','.co');
INSERT INTO Pais (idPais,nomPais,dominio) VALUES ('245','España','.es');
INSERT INTO Pais (idPais,nomPais,dominio) VALUES ('249','Estados Unidos','.us');
INSERT INTO Pais (idPais,nomPais,dominio) VALUES ('275','Francia', '.fr');
INSERT INTO Pais (idPais,nomPais,dominio) VALUES ('000','Sinpais', 'SP');

INSERT INTO Categoria (idCategoria,desCategoria) VALUES ('PRI','Principal');
INSERT INTO Categoria (idCategoria,desCategoria) VALUES ('PRO','Promocion');
INSERT INTO Categoria (idCategoria,desCategoria) VALUES ('SOC','Social');
INSERT INTO Categoria (idCategoria,desCategoria) VALUES ('NOT','Notificacion');
INSERT INTO Categoria (idCategoria,desCategoria) VALUES ('FOR','Foro');
INSERT INTO Categoria (idCategoria,desCategoria) VALUES ('INP','Importante');
INSERT INTO Categoria (idCategoria,desCategoria) VALUES ('SPA','Spam');
INSERT INTO Categoria (idCategoria,desCategoria) VALUES ('PAP','Papelera');

INSERT INTO Usuario (usuario,nombre,apellido,fechanacimiento,fechacreacion,correoalterno,celular,idestado,idpais) VALUES ('GioUs','Giovanny','moreno',TO_DATE('20/10/2003','DD/MM/YYYY'),TO_DATE('05/02/2024','DD/MM/YYYY'),'gemorenor@udistrital.edu.co','3151234378','Act','169');
INSERT INTO Usuario (usuario,nombre,apellido,fechanacimiento,fechacreacion,correoalterno,celular,idestado,idpais) VALUES ('Alejo','Alejandro','Cortazar',TO_DATE('13/02/1982','DD/MM/YYYY'),TO_DATE('06/02/2024','DD/MM/YYYY'),'jacortazarl@udistrital.edu.co','3211235434','Act','169');
INSERT INTO Usuario (usuario,nombre,apellido,fechanacimiento,fechacreacion,correoalterno,celular,idestado,idpais) VALUES ('FeliM','Felipe','Martin',TO_DATE('22/04/2002','DD/MM/YYYY'),TO_DATE('04/02/2024','DD/MM/YYYY'),'afmartinr@udistrital.edu.co','3173762897','Act','169');
INSERT INTO Usuario (usuario,nombre,apellido,fechanacimiento,fechacreacion,correoalterno,celular,idestado,idpais) VALUES ('MCarv','Miguel','Carvajal',TO_DATE('25/07/1999','DD/MM/YYYY'),TO_DATE('07/02/2024','DD/MM/YYYY'),'MCarv@bd.edu.co','3145678923','Act','169');
INSERT INTO Usuario (usuario,nombre,apellido,fechanacimiento,fechacreacion,correoalterno,celular,idestado,idpais) VALUES ('JLope','Juan','Lopez',TO_DATE('09/03/2001','DD/MM/YYYY'),TO_DATE('08/02/2024','DD/MM/YYYY'),'JLope@bd.edu.co','3152345678','Act','169');
INSERT INTO Usuario (usuario,nombre,apellido,fechanacimiento,fechacreacion,correoalterno,celular,idestado,idpais) VALUES ('DMarc','Daniel','Marcelo',TO_DATE('17/09/1998','DD/MM/YYYY'),TO_DATE('09/02/2024','DD/MM/YYYY'),'DMarc@bd.edu.co','3163456789','Act','169');
INSERT INTO Usuario (usuario,nombre,apellido,fechanacimiento,fechacreacion,correoalterno,celular,idestado,idpais) VALUES ('CAndr','Carlos','Andrade',TO_DATE('02/12/2002','DD/MM/YYYY'),TO_DATE('10/02/2024','DD/MM/YYYY'),'CAndr@bd.edu.co','3174567890','Act','169');
INSERT INTO Usuario (usuario,nombre,apellido,fechanacimiento,fechacreacion,correoalterno,celular,idestado,idpais) VALUES ('VQuin','Valentina','Quintero',TO_DATE('14/05/2000','DD/MM/YYYY'),TO_DATE('11/02/2024','DD/MM/YYYY'),'VQuin@bd.edu.co','3185678901','Act','169');
INSERT INTO Usuario (usuario,nombre,apellido,fechanacimiento,fechacreacion,correoalterno,celular,idestado,idpais) VALUES ('ALemu','Andrea','Lemus',TO_DATE('29/08/1997','DD/MM/YYYY'),TO_DATE('12/02/2024','DD/MM/YYYY'),'ALemu@bd.edu.co','3196789012','Act','169');
INSERT INTO Usuario (usuario,nombre,apellido,fechanacimiento,fechacreacion,correoalterno,celular,idestado,idpais) VALUES ('RSali','Ricardo','Salinas',TO_DATE('22/04/2003','DD/MM/YYYY'),TO_DATE('13/02/2024','DD/MM/YYYY'),'RSali@bd.edu.co','3207890123','Act','169');

INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Alejandro', 'Alejo.usuario@bd.edu.co', 'GioUs', 'Alejo');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Felipe', 'FeliM.usuario@bd.edu.co', 'GioUs', 'FeliM');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Miguel', 'MCarv.usuario@bd.edu.co', 'GioUs', 'MCarv');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Juan', 'JLope.usuario@bd.edu.co', 'GioUs', 'JLope');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Carlos Perez', 'carlosperez@gmail.com', 'GioUs', NULL);
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Maria Lopez', 'marialopez@gmail.com', 'GioUs', NULL);

-- Contactos para Alejo
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Miguel', 'MCarv.usuario@bd.edu.co', 'Alejo', 'MCarv');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Felipe', 'FeliM.usuario@bd.edu.co', 'Alejo', 'FeliM');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Giovanny', 'gemorenor.usuario@bd.edu.co', 'Alejo', 'GioUs');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Juan', 'JLope.usuario@bd.edu.co', 'Alejo', 'JLope');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Ana Perez', 'anaperez@gmail.com', 'Alejo', NULL);
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Jose Rios', 'joserios@gmail.com', 'Alejo', NULL);

-- Contactos para FeliM
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Miguel', 'MCarv.usuario@bd.edu.co', 'FeliM', 'MCarv');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Giovanny', 'gemorenor.usuario@bd.edu.co', 'FeliM', 'GioUs');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Alejandro', 'Alejo.usuario@bd.edu.co', 'FeliM', 'Alejo');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Juan', 'JLope.usuario@bd.edu.co', 'FeliM', 'JLope');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Laura Gomez', 'lauragomez@gmail.com', 'FeliM', NULL);
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Luis Torres', 'luistorres@gmail.com', 'FeliM', NULL);

-- Contactos para MCarv
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Felipe', 'FeliM.usuario@bd.edu.co', 'MCarv', 'FeliM');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Giovanny', 'gemorenor.usuario@bd.edu.co', 'MCarv', 'GioUs');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Alejandro', 'Alejo.usuario@bd.edu.co', 'MCarv', 'Alejo');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Juan', 'JLope.usuario@bd.edu.co', 'MCarv', 'JLope');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Carmen Diaz', 'carmendiaz@gmail.com', 'MCarv', NULL);
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Raul Martinez', 'raulmartinez@gmail.com', 'MCarv', NULL);

-- Contactos para JLope
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Giovanny', 'gemorenor.usuario@bd.edu.co', 'JLope', 'GioUs');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Alejandro', 'Alejo.usuario@bd.edu.co', 'JLope', 'Alejo');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Felipe', 'FeliM.usuario@bd.edu.co', 'JLope', 'FeliM');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Miguel', 'MCarv.usuario@bd.edu.co', 'JLope', 'MCarv');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Sofia Vega', 'sofiavega@gmail.com', 'JLope', NULL);
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Marco Cruz', 'marcocruz@gmail.com', 'JLope', NULL);

-- Contactos para DMarc
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Alejandro', 'Alejo.usuario@bd.edu.co', 'DMarc', 'Alejo');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Miguel', 'MCarv.usuario@bd.edu.co', 'DMarc', 'MCarv');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Felipe', 'FeliM.usuario@bd.edu.co', 'DMarc', 'FeliM');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Giovanny', 'gemorenor.usuario@bd.edu.co', 'DMarc', 'GioUs');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Patricia Blanco', 'patriciablanco@gmail.com', 'DMarc', NULL);
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Victor Luna', 'victorluna@gmail.com', 'DMarc', NULL);

-- Contactos para CAndr
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Felipe', 'FeliM.usuario@bd.edu.co', 'CAndr', 'FeliM');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Miguel', 'MCarv.usuario@bd.edu.co', 'CAndr', 'MCarv');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Giovanny', 'gemorenor.usuario@bd.edu.co', 'CAndr', 'GioUs');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Alejandro', 'Alejo.usuario@bd.edu.co', 'CAndr', 'Alejo');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Elena Ruiz', 'elenaruiz@gmail.com', 'CAndr', NULL);
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Mario Lopez', 'mariolopez@gmail.com', 'CAndr', NULL);

-- Contactos para VQuin
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Alejandro', 'Alejo.usuario@bd.edu.co', 'VQuin', 'Alejo');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Giovanny', 'gemorenor.usuario@bd.edu.co', 'VQuin', 'GioUs');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Felipe', 'FeliM.usuario@bd.edu.co', 'VQuin', 'FeliM');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Miguel', 'MCarv.usuario@bd.edu.co', 'VQuin', 'MCarv');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Ana Beltran', 'anabeltran@gmail.com', 'VQuin', NULL);
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Oscar Meza', 'oscarmeza@gmail.com', 'VQuin', NULL);

-- Contactos para ALemu
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Giovanny', 'gemorenor.usuario@bd.edu.co', 'ALemu', 'GioUs');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Alejandro', 'Alejo.usuario@bd.edu.co', 'ALemu', 'Alejo');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Felipe', 'FeliM.usuario@bd.edu.co', 'ALemu', 'FeliM');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Miguel', 'MCarv.usuario@bd.edu.co', 'ALemu', 'MCarv');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Rosa Delgado', 'rosadelgado@gmail.com', 'ALemu', NULL);
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Hugo Sanchez', 'hugosanchez@gmail.com', 'ALemu', NULL);

-- Contactos para RSali
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Miguel', 'MCarv.usuario@bd.edu.co', 'RSali', 'MCarv');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Alejandro', 'Alejo.usuario@bd.edu.co', 'RSali', 'Alejo');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Giovanny', 'gemorenor.usuario@bd.edu.co', 'RSali', 'GioUs');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Felipe', 'FeliM.usuario@bd.edu.c  o', 'RSali', 'FeliM');
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Paola Ramirez', 'paolaramirez@gmail.com', 'RSali', NULL);
INSERT INTO Contacto (nombrecontacto, correocontacto, usuario, usuario_1) VALUES ( 'Eduardo Mora', 'eduardomora@gmail.com', 'RSali', NULL);

INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E001','Revisión pendiente','Solicito la revisión del documento compartido.','Rec',TO_DATE('28/02/2024','DD/MM/YYYY'),TO_TIMESTAMP('21:02:44','HH24:MI:SS'),'GioUs','PRI');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E002','Consulta de acceso','¿Podrías concederme acceso al archivo para continuar el trabajo?','Env',TO_DATE('01/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('09:15:30','HH24:MI:SS'),'GioUs','PRO');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E003','Actualización requerida','Por favor, actualiza la información del reporte.','Bor',TO_DATE('02/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('10:30:00','HH24:MI:SS'),'GioUs','SOC');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E004','Confirmación de reunión','Te confirmo mi asistencia a la reunión del viernes.','Env',TO_DATE('03/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('14:00:00','HH24:MI:SS'),'GioUs','NOT');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E005','Tarea finalizada','He terminado la tarea asignada, ¿podrías revisarla?','Rec',TO_DATE('28/02/2024','DD/MM/YYYY'),TO_TIMESTAMP('15:45:00','HH24:MI:SS'),'Alejo','PRI');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E006','Solicitud de comentarios','Por favor, comparte tus comentarios sobre el proyecto.','Env',TO_DATE('01/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('16:20:00','HH24:MI:SS'),'Alejo','PRO');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E007','Reunión de seguimiento','Necesitamos coordinar una reunión para evaluar avances.','Bor',TO_DATE('02/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('11:50:00','HH24:MI:SS'),'Alejo','SOC');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E008','Documentación necesaria','Faltan algunos documentos para el cierre del proyecto.','Env',TO_DATE('03/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('18:30:00','HH24:MI:SS'),'Alejo','NOT');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E009','Nueva propuesta','He subido una propuesta nueva para el diseño.','Rec',TO_DATE('28/02/2024','DD/MM/YYYY'),TO_TIMESTAMP('08:00:00','HH24:MI:SS'),'FeliM','PRI');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E010','Estado del presupuesto','¿Podrías confirmar el estado del presupuesto actual?','Env',TO_DATE('01/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('09:45:00','HH24:MI:SS'),'FeliM','PRO');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E011','Planificación del sprint','Adjunto la planificación para el próximo sprint.','Bor',TO_DATE('02/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('13:10:00','HH24:MI:SS'),'FeliM','SOC');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E012','Entrega pendiente','La entrega del cliente está programada para mañana.','Env',TO_DATE('03/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('17:00:00','HH24:MI:SS'),'FeliM','NOT');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E013','Revisión de código','Por favor, revisa los cambios en el repositorio.','Rec',TO_DATE('28/02/2024','DD/MM/YYYY'),TO_TIMESTAMP('10:15:00','HH24:MI:SS'),'MCarv','PRI');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E014','Problema técnico','Se ha reportado un problema técnico en el sistema.','Env',TO_DATE('01/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('14:05:00','HH24:MI:SS'),'MCarv','PRO');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E015','Solicitud de reunión','Coordina una reunión con el cliente para resolver dudas.','Bor',TO_DATE('02/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('15:30:00','HH24:MI:SS'),'MCarv','SOC');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E016','Confirmación de entrega','El cliente confirmó la recepción del producto final.','Env',TO_DATE('03/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('18:20:00','HH24:MI:SS'),'MCarv','NOT');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E017','Cambio en especificaciones','El cliente ha solicitado cambios en las especificaciones.','Rec',TO_DATE('28/02/2024','DD/MM/YYYY'),TO_TIMESTAMP('11:00:00','HH24:MI:SS'),'JLope','PRI');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E018','Entrega de borrador','Adjunto el borrador del proyecto para tu revisión.','Env',TO_DATE('01/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('13:00:00','HH24:MI:SS'),'JLope','PRO');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E019','Seguimiento del proyecto','Por favor, envía un reporte del avance del proyecto.','Bor',TO_DATE('02/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('15:10:00','HH24:MI:SS'),'JLope','SOC');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E020','Confirmación de cambios','Confirma si los cambios solicitados han sido implementados.','Env',TO_DATE('03/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('17:50:00','HH24:MI:SS'),'JLope','NOT');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E021','Soporte técnico','Necesito ayuda con un problema técnico urgente.','Rec',TO_DATE('28/02/2024','DD/MM/YYYY'),TO_TIMESTAMP('09:30:00','HH24:MI:SS'),'DMarc','PRI');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E022','Actualización del sistema','Se requiere una actualización del sistema operativo.','Env',TO_DATE('01/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('12:15:00','HH24:MI:SS'),'DMarc','PRO');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E023','Documentación adicional','Por favor, proporciona más documentación técnica.','Bor',TO_DATE('02/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('14:20:00','HH24:MI:SS'),'DMarc','SOC');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E024','Tareas pendientes','Envía un listado de las tareas pendientes.','Env',TO_DATE('03/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('16:40:00','HH24:MI:SS'),'DMarc','NOT');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E025','Aprobación de propuesta','La propuesta enviada está pendiente de aprobación.','Rec',TO_DATE('28/02/2024','DD/MM/YYYY'),TO_TIMESTAMP('08:45:00','HH24:MI:SS'),'CAndr','PRI');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E026','Revisión de contratos','Por favor, revisa los contratos adjuntos.','Env',TO_DATE('01/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('11:10:00','HH24:MI:SS'),'CAndr','PRO');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E027','Coordinación de equipo','Organiza una reunión para coordinar al equipo.','Bor',TO_DATE('02/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('13:40:00','HH24:MI:SS'),'CAndr','SOC');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E028','Reporte de errores','Adjunto un listado de errores encontrados.','Env',TO_DATE('03/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('16:00:00','HH24:MI:SS'),'CAndr','NOT');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E029','Progreso de tareas','Por favor, envía un informe del progreso actual.','Rec',TO_DATE('28/02/2024','DD/MM/YYYY'),TO_TIMESTAMP('10:00:00','HH24:MI:SS'),'VQuin','PRI');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E030','Revisión final','El documento final está listo para tu revisión.','Env',TO_DATE('01/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('12:45:00','HH24:MI:SS'),'VQuin','PRO');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E031','Planificación semanal','Comparte el plan de trabajo semanal.','Bor',TO_DATE('02/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('14:50:00','HH24:MI:SS'),'VQuin','SOC');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E032','Entrega de resultados','Los resultados del análisis han sido entregados.','Env',TO_DATE('03/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('17:30:00','HH24:MI:SS'),'VQuin','NOT');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E033','Actualización de agenda','La agenda para la próxima reunión ha sido actualizada.','Rec',TO_DATE('28/02/2024','DD/MM/YYYY'),TO_TIMESTAMP('08:30:00','HH24:MI:SS'),'ALemu','PRI');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E034','Problema en sistema','Se detectó un problema en el sistema de facturación.','Env',TO_DATE('01/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('11:30:00','HH24:MI:SS'),'ALemu','PRO');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E035','Seguimiento financiero','Solicito un reporte del estado financiero del proyecto.','Bor',TO_DATE('02/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('14:00:00','HH24:MI:SS'),'ALemu','SOC');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E036','Notificación de cierre','El cierre del proyecto está programado para el viernes.','Env',TO_DATE('03/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('17:10:00','HH24:MI:SS'),'ALemu','NOT');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E037','Plan de acción','Se requiere un plan de acción para resolver el incidente.','Rec',TO_DATE('28/02/2024','DD/MM/YYYY'),TO_TIMESTAMP('09:10:00','HH24:MI:SS'),'RSali','PRI');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E038','Consulta técnica','¿Podrías aclarar los detalles técnicos del informe?','Env',TO_DATE('01/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('12:00:00','HH24:MI:SS'),'RSali','PRO');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E039','Tareas por asignar','Envía una lista de tareas que aún no tienen asignación.','Bor',TO_DATE('02/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('15:00:00','HH24:MI:SS'),'RSali','SOC');
INSERT INTO mensaje (idmensaje,asunto,cuerpomensaje,idtipocarpeta,fechaaccion,horaaccion,usuario,idcategoria) VALUES ('E040','Notificación de cambios','Se han realizado cambios en el alcance del proyecto.','Env',TO_DATE('03/03/2024','DD/MM/YYYY'),TO_TIMESTAMP('18:00:00','HH24:MI:SS'),'RSali','NOT');

INSERT INTO archivoadjunto (nomarchivo, usuario, idmensaje, idtipoarchivo) VALUES ( 'informe1', 'GioUs', 'E001', 'PDF');
INSERT INTO archivoadjunto (nomarchivo, usuario, idmensaje, idtipoarchivo) VALUES ( 'resumen', 'GioUs', 'E001', 'DOC');
INSERT INTO archivoadjunto (nomarchivo, usuario, idmensaje, idtipoarchivo) VALUES ( 'datos_financieros', 'GioUs', 'E002', 'XLS');
INSERT INTO archivoadjunto (nomarchivo, usuario, idmensaje, idtipoarchivo) VALUES ( 'reporte', 'GioUs', 'E002', 'PDF');
INSERT INTO archivoadjunto (nomarchivo, usuario, idmensaje, idtipoarchivo) VALUES ( 'imagen_proyecto', 'GioUs', 'E003', 'GIF');
INSERT INTO archivoadjunto (nomarchivo, usuario, idmensaje, idtipoarchivo) VALUES ( 'diagrama', 'GioUs', 'E003', 'BMP');
INSERT INTO archivoadjunto (nomarchivo, usuario, idmensaje, idtipoarchivo) VALUES ( 'logo_empresa', 'GioUs', 'E004', 'PDF');
INSERT INTO archivoadjunto (nomarchivo, usuario, idmensaje, idtipoarchivo) VALUES ( 'manual', 'GioUs', 'E004', 'DOC');
INSERT INTO archivoadjunto (nomarchivo, usuario, idmensaje, idtipoarchivo) VALUES ( 'presentacion', 'Alejo', 'E005', 'PDF');
INSERT INTO archivoadjunto (nomarchivo, usuario, idmensaje, idtipoarchivo) VALUES ( 'documento_adjunto', 'Alejo', 'E005', 'XLS');
INSERT INTO archivoadjunto (nomarchivo, usuario, idmensaje, idtipoarchivo) VALUES ( 'video_demo', 'Alejo', 'E006', 'MP4');
INSERT INTO archivoadjunto (nomarchivo, usuario, idmensaje, idtipoarchivo) VALUES ( 'captura_evento', 'Alejo', 'E006', 'AVI');
INSERT INTO archivoadjunto (nomarchivo, usuario, idmensaje, idtipoarchivo) VALUES ( 'reunion_grabada', 'Alejo', 'E007', 'AVI');
INSERT INTO archivoadjunto (nomarchivo, usuario, idmensaje, idtipoarchivo) VALUES ( 'foto_equipo', 'Alejo', 'E007', 'BMP');
INSERT INTO archivoadjunto (nomarchivo, usuario, idmensaje, idtipoarchivo) VALUES ( 'cancion_tema', 'Alejo', 'E008', 'MP3');
INSERT INTO archivoadjunto (nomarchivo, usuario, idmensaje, idtipoarchivo) VALUES ( 'audio_conferencia', 'Alejo', 'E008', 'MP3');
INSERT INTO archivoadjunto (nomarchivo, usuario, idmensaje, idtipoarchivo) VALUES ( 'software_instalacion', 'FeliM', 'E009', 'EXE');
INSERT INTO archivoadjunto (nomarchivo, usuario, idmensaje, idtipoarchivo) VALUES ( 'guia_instalacion', 'FeliM', 'E009', 'DOC');
INSERT INTO archivoadjunto (nomarchivo, usuario, idmensaje, idtipoarchivo) VALUES ( 'contrato', 'FeliM', 'E010', 'PDF');
INSERT INTO archivoadjunto (nomarchivo, usuario, idmensaje, idtipoarchivo) VALUES ( 'anexo_legal', 'FeliM', 'E010', 'DOC');

--Destinatario para mensajes de GioUs (E001-E004)
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E001','GioUs',1,'CO','169');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E002','GioUs',2,'CO','063');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E003','GioUs',3,'COO','249');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E004','GioUs',4,'COO','245');

-- Destinatarios para mensajes de Alejo (E005-E008)
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E005','Alejo',7,'CO','169');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E006','Alejo',8,'CO','097');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E007','Alejo',9,'COO','105');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E008','Alejo',10,'COO','275'); 

-- Destinatarios para mensajes de FeliM (E009-E012)
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E009','FeliM',13,'CO','169');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E010','FeliM',14,'CO','149');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E011','FeliM',15,'COO','245');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E012','FeliM',16,'COO','063');


-- Destinatarios para mensajes de MCarv (E013-E016)
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES('E013','MCarv',19,'CO','169');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E014','MCarv',20,'CO','275');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E015','MCarv',21,'COO','097');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E016','MCarv',22,'COO','249'); 

-- Destinatarios para mensajes de JLope (E017-E020)
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E017','JLope',25,'CO','169');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E018','JLope',26,'CO','105');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E019','JLope',27,'COO','149');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E020','JLope',28,'COO','245');

-- Destinatarios para mensajes de DMarc (E021-E024)
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E021','DMarc',31,'CO','169');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E022','DMarc',32,'CO','063');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E023','DMarc',33,'COO','275');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E024','DMarc',34,'COO','097'); 

-- Destinatarios para mensajes de CAndr (E025-E028)
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E025','CAndr',37,'CO','169');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E026','CAndr',38,'CO','249');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E027','CAndr',39,'COO','105');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E028','CAndr',40,'COO','149'); 

-- Destinatarios para mensajes de VQuin (E029-E032)
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E029','VQuin',43,'CO','169');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E030','VQuin',44,'CO','245');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E031','VQuin',45,'COO','063');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E032','VQuin',46,'COO','275'); 

-- Destinatarios para mensajes de ALemu (E033-E036)
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E033','ALemu',49,'CO','169');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E034','ALemu',50,'CO','097');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E035','ALemu',51,'COO','105');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E036','ALemu',52,'COO','249'); 

-- Destinatarios para mensajes de RSali (E037-E040)
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E037','RSali',55,'CO','169');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E038','RSali',56,'CO','149');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E039','RSali',57,'COO','245');
INSERT INTO destinatario (idmensaje,usuario,conseccontacto,idtipocopia,idPais) VALUES ('E040','RSali',58,'COO','275');

COMMIT;
--ROLLBACK;
desc contacto;