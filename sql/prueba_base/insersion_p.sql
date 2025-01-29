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
VALUES ('E0xi0','Permiso para editar','Buenos dias, queria pedirle al dueño del documento que acepte mi peticion de editarlo para poder continuar el trabajo en grupo','env',TO_DATE(('28/02/2025'),'DD/MM/YYYY'),TO_TIMESTAMP('21:02:44','HH24:MI:SS'),'GioUsr','Env'),
       ('E0xi0','Permiso para editar','Buenos dias, queria pedirle al dueño del documento que acepte mi peticion de editarlo para poder continuar el trabajo en grupo','Rec',TO_DATE('28/02/2025','DD/MM/YYYY'),TO_TIMESTAMP('21:02:44','HH24:MI:SS'),'GioUsr','Rec'),
       ('E0xi1','Revision de tarea','Solicito que revise mi ultima actualizacion en el sistema para poder recibir retroalimentacion','Env',TO_DATE('01/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('09:30:15','HH24:MI:SS'),'GioUsr','Env'),
       ('E0xi2','Confirmacion de reunion','Le confirmo que asistire a la reunion programada','Bor',TO_DATE('02/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('14:15:10','HH24:MI:SS'),'GioUsr','Bor'),
       ('E0xi3','Actualizacion de datos','Por favor actualice mis datos en el sistema cuando tenga tiempo','Rec',TO_DATE('03/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('16:45:30','HH24:MI:SS'),'GioUsr','Rec'),
 
       ('E1xi0','Permiso para editar','Buenos dias, queria pedirle al dueño del documento que acepte mi peticion de editarlo para poder continuar el trabajo en grupo','Rec',TO_DATE('28/02/2025','DD/MM/YYYY'),TO_TIMESTAMP('21:02:44','HH24:MI:SS'),'Alejokljr','Rec'),
       ('E1xi1','Revision de tarea','Solicito que revise mi ultima actualizacion en el sistema para poder recibir retroalimentacion','Env',TO_DATE('01/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('09:30:15','HH24:MI:SS'),'Alejokljr','Env'),
       ('E1xi2','Confirmacion de reunion','Le confirmo que asistire a la reunion programada','Bor',TO_DATE('02/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('14:15:10','HH24:MI:SS'),'Alejokljr','Bor'),
       ('E1xi3','Actualizacion de datos','Por favor actualice mis datos en el sistema cuando tenga tiempo','Rec',TO_DATE('03/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('16:45:30','HH24:MI:SS'),'Alejokljr','Rec'),

       ('E2xi0','Permiso para editar','Buenos dias, queria pedirle al dueño del documento que acepte mi peticion de editarlo para poder continuar el trabajo en grupo','Rec',TO_DATE('28/02/2025','DD/MM/YYYY'),TO_TIMESTAMP('21:02:44','HH24:MI:SS'),'GFeliprmr','Rec'),
       ('E2xi1','Revision de tarea','Solicito que revise mi ultima actualizacion en el sistema para poder recibir retroalimentacion','Env',TO_DATE('01/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('09:30:15','HH24:MI:SS'),'GFeliprmr','Env'),
       ('E2xi2','Confirmacion de reunion','Le confirmo que asistire a la reunion programada','Bor',TO_DATE('02/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('14:15:10','HH24:MI:SS'),'GFeliprmr','Bor'),
       ('E2xi3','Actualizacion de datos','Por favor actualice mis datos en el sistema cuando tenga tiempo','Rec',TO_DATE('03/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('16:45:30','HH24:MI:SS'),'GFeliprmr','Rec'),

       ('E3xi0','Permiso para editar','Buenos dias, queria pedirle al dueño del documento que acepte mi peticion de editarlo para poder continuar el trabajo en grupo','Rec',TO_DATE('28/02/2025','DD/MM/YYYY'),TO_TIMESTAMP('21:02:44','HH24:MI:SS'),'MCarvajal','Rec'),
       ('E3xi1','Revision de tarea','Solicito que revise mi ultima actualizacion en el sistema para poder recibir retroalimentacion','Env',TO_DATE('01/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('09:30:15','HH24:MI:SS'),'MCarvajal','Env'),
       ('E3xi2','Confirmacion de reunion','Le confirmo que asistire a la reunion programada','Bor',TO_DATE('02/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('14:15:10','HH24:MI:SS'),'MCarvajal','Bor'),
       ('E3xi3','Actualizacion de datos','Por favor actualice mis datos en el sistema cuando tenga tiempo','Rec',TO_DATE('03/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('16:45:30','HH24:MI:SS'),'MCarvajal','Rec'),

       ('E4xi0','Permiso para editar','Buenos dias, queria pedirle al dueño del documento que acepte mi peticion de editarlo para poder continuar el trabajo en grupo','Rec',TO_DATE('28/02/2025','DD/MM/YYYY'),TO_TIMESTAMP('21:02:44','HH24:MI:SS'),'JLopez22','Rec'),
       ('E4xi1','Revision de tarea','Solicito que revise mi ultima actualizacion en el sistema para poder recibir retroalimentacion','Env',TO_DATE('01/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('09:30:15','HH24:MI:SS'),'JLopez22','Env'),
       ('E4xi2','Confirmacion de reunion','Le confirmo que asistire a la reunion programada','Bor',TO_DATE('02/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('14:15:10','HH24:MI:SS'),'JLopez22','Bor'),
       ('E4xi3','Actualizacion de datos','Por favor actualice mis datos en el sistema cuando tenga tiempo','Rec',TO_DATE('03/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('16:45:30','HH24:MI:SS'),'JLopez22','Rec'),

       ('E5xi0','Permiso para editar','Buenos dias, queria pedirle al dueño del documento que acepte mi peticion de editarlo para poder continuar el trabajo en grupo','Rec',TO_DATE('28/02/2025','DD/MM/YYYY'),TO_TIMESTAMP('21:02:44','HH24:MI:SS'),'DMarcelo','Rec'),
       ('E5xi1','Revision de tarea','Solicito que revise mi ultima actualizacion en el sistema para poder recibir retroalimentacion','Env',TO_DATE('01/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('09:30:15','HH24:MI:SS'),'DMarcelo','Env'),
       ('E5xi2','Confirmacion de reunion','Le confirmo que asistire a la reunion programada','Bor',TO_DATE('02/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('14:15:10','HH24:MI:SS'),'DMarcelo','Bor'),
       ('E5xi3','Actualizacion de datos','Por favor actualice mis datos en el sistema cuando tenga tiempo','Rec',TO_DATE('03/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('16:45:30','HH24:MI:SS'),'DMarcelo','Rec'),

       ('E6xi0','Permiso para editar','Buenos dias, queria pedirle al dueño del documento que acepte mi peticion de editarlo para poder continuar el trabajo en grupo','Rec',TO_DATE('28/02/2025','DD/MM/YYYY'),TO_TIMESTAMP('21:02:44','HH24:MI:SS'),'CAndrade','Rec'),
       ('E6xi1','Revision de tarea','Solicito que revise mi ultima actualizacion en el sistema para poder recibir retroalimentacion','Env',TO_DATE('01/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('09:30:15','HH24:MI:SS'),'CAndrade','Env'),
       ('E6xi2','Confirmacion de reunion','Le confirmo que asistire a la reunion programada','Bor',TO_DATE('02/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('14:15:10','HH24:MI:SS'),'CAndrade','Bor'),
       ('E6xi3','Actualizacion de datos','Por favor actualice mis datos en el sistema cuando tenga tiempo','Rec',TO_DATE('03/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('16:45:30','HH24:MI:SS'),'CAndrade','Rec'),

       ('E7xi0','Permiso para editar','Buenos dias, queria pedirle al dueño del documento que acepte mi peticion de editarlo para poder continuar el trabajo en grupo','Rec',TO_DATE('28/02/2025','DD/MM/YYYY'),TO_TIMESTAMP('21:02:44','HH24:MI:SS'),'VQuintero','Rec'),
       ('E7xi1','Revision de tarea','Solicito que revise mi ultima actualizacion en el sistema para poder recibir retroalimentacion','Env',TO_DATE('01/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('09:30:15','HH24:MI:SS'),'VQuintero','Env'),
       ('E7xi2','Confirmacion de reunion','Le confirmo que asistire a la reunion programada','Bor',TO_DATE('02/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('14:15:10','HH24:MI:SS'),'VQuintero','Bor'),
       ('E7xi3','Actualizacion de datos','Por favor actualice mis datos en el sistema cuando tenga tiempo','Rec',TO_DATE('03/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('16:45:30','HH24:MI:SS'),'VQuintero','Rec'),

       ('E8xi0','Permiso para editar','Buenos dias, queria pedirle al dueño del documento que acepte mi peticion de editarlo para poder continuar el trabajo en grupo','Rec',TO_DATE('28/02/2025','DD/MM/YYYY'),TO_TIMESTAMP('21:02:44','HH24:MI:SS'),'ALemus33','Rec'),
       ('E8xi1','Revision de tarea','Solicito que revise mi ultima actualizacion en el sistema para poder recibir retroalimentacion','Env',TO_DATE('01/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('09:30:15','HH24:MI:SS'),'ALemus33','Env'),
       ('E8xi2','Confirmacion de reunion','Le confirmo que asistire a la reunion programada','Bor',TO_DATE('02/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('14:15:10','HH24:MI:SS'),'ALemus33','Bor'),
       ('E8xi3','Actualizacion de datos','Por favor actualice mis datos en el sistema cuando tenga tiempo','Rec',TO_DATE('03/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('16:45:30','HH24:MI:SS'),'ALemus33','Rec'),

       ('E9xi0','Permiso para editar','Buenos dias, queria pedirle al dueño del documento que acepte mi peticion de editarlo para poder continuar el trabajo en grupo','Rec',TO_DATE('28/02/2025','DD/MM/YYYY'),TO_TIMESTAMP('21:02:44','HH24:MI:SS'),'RSalinas1','Rec'),
       ('E9xi1','Revision de tarea','Solicito que revise mi ultima actualizacion en el sistema para poder recibir retroalimentacion','Env',TO_DATE('01/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('09:30:15','HH24:MI:SS'),'RSalinas1','Env'),
       ('E9xi2','Confirmacion de reunion','Le confirmo que asistire a la reunion programada','Bor',TO_DATE('02/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('14:15:10','HH24:MI:SS'),'RSalinas1','Bor'),
       ('E9xi3','Actualizacion de datos','Por favor actualice mis datos en el sistema cuando tenga tiempo','Rec',TO_DATE('03/03/2025','DD/MM/YYYY'),TO_TIMESTAMP('16:45:30','HH24:MI:SS'),'RSalinas1','Rec');        
