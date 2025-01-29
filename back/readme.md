# BackEnd

## Instalar paquetes

```Bash
npm i
```

## Ejecutar en modo desarrollador

```Bash
npm run dev
```

## Endpoints requeridos:

[ ] - Verificación de usuario:

    Ruta esperada: `${backend}/autenticacion/ingreso/:usuario/:nombre/:apellido`
    Tipo: GET

    Para la autenticación, se requiere que se verifique si el usuario existe en la base de datos, para esto se utilizaran los parametros de (usuario, nombre, apelido) donde si el usuario existe en la base de datos, se devolverá toda la info que se tenga en la Tabla Usuario.

[ ] - Registro de usuario:

    Ruta esperada: `${backend}/usuario/registrar`
    Tipo: POST

    Para la creación de un nuevo usuario, se requiere (usuario, nombre, apellido, fechaNacimiento, correoAlterno y celular), dichos datos se tomaran del body de la petición HTTP, el parametro fechaCreacion se toma del sistema.

[ ] - Obtener los tipos de carpetas
Ruta esperada: `${backend}/tipo-carpeta/`
Tipo: GET

    Obtener los id y descripciones de todos los tipos de carpetas.

[ ] - Obtener todas las categorias
Ruta esperada: `${backend}/categoria/`
Tipo: GET

    Obtener los id y descripciones de todas las categorias existentes.

[ ] - Obtener mensajes por tipo carpeta
Ruta esperada: `${backend}/mensaje/:usuario/:idTipoCarpeta`
Tipo: GET

    Obtener los mensajes  y el tipo de carpeta es tipoCarpeta.

    Si el tipo de carpeta es Recibidos, debe filtrar donde el usuario es un destinatario, además debe retornar: remitente, asunto y fecha.
    Si el tipo de Carpeta es Enviados, debe filtrar donde el remitente es el usuario y retornar: asunto, CO y CCO
    Si el tipo de Carpeta es Borradores, debe filtrar donde el remitente es el usuario y retornar: asunto, CO

    Todos ordenados por fechaAccion y horaAccion descendentemente.

[ ] - Obtener mensajes filtrados
Ruta esperada: `${backend}/mensaje/:usuario/:idCategoria`
Tipo: GET

    Obtener los mensajes donde el usuario es un destinatario y la categoria es la definida, ordenados por fechaAccion y horaAccion descendentemente. Trayendo: remitente, asunto y fecha.

[ ] - Obtener info mensaje
Ruta esperada: `${backend}/mensaje/:idMensaje`
Tipo: Get

    Obtener toda la información relacionada con el mensaje que tenga el idMensaje, tanto lo de la tabla mensaje como los destinatarios CO y CCO y los archivos adjuntos (Podrían ser múltiples consultas, queda a discusión).
    Podría necesitarse: (usuario que lo envio, asunto, cuerpoMensaje, tipoCarpeta, CO, CCO, archivoAdjunto)

    Los destinatarios podrían sacarse por medio de otra petición, al igual que los archivosAdjuntos

[ ] - Obtener destinatarios de un mensaje
Ruta esperada: `${backend}/contacto/:idMensaje`
Tipo: Get

    Obtener el contacto destinatario de un mensaje, relacionado con el idMensaje, devolver la información de el(los) contacto(s) involucrados. Agrupados por CO y CCO.

[ ] - Obtener los archivos adjuntos de un mensaje
Ruta esperada: `${backend}/archivos/:idMensaje`
Tipo: Get

    Obtener la info de los archivos adjuntos de un mensaje.

[ ] - Obtener los contactos de un usuario
Ruta esperada: `${backend}/contacto/usuario/:idUsuario`
Tipo: GET

    Obtener la info de los contactos de un usuario.

[ ] - Registrar contacto
Ruta esperada: `${backend}/contacto/`
Tipo: POST

    Agregar contacto con el correo proporcionado, se toma del body.

[ ] - Enviar Mensaje
Ruta esperada: `${backend}/mensaje`
Tipo: POST

    - Si el contacto existe en la tabla usuario, pero no en contacto se adiciona el contacto con los datos del usuario.
    - Si el contacto no existe en la tabla usuario se adiciona en contacto. (Note que el nombre del contacto en la tabla Contacto no es requerido, solo el correo)
    - Se incluye el mensaje, con los destinatarios, tipos de copia y los adjuntos.
    - La hora, la fecha se saca del sistema, el remitente quien está registrado - Por defecto se deja en la categoría Principal.

<!--
[ ] - Obtener
Ruta esperada: `${backend}/`
Tipo:
-->
