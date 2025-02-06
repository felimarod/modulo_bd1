# Proyecto de Bases de Datos Periodo 2024-3

Universidad Distrital Francisco José de caldas

**Participantes** 
- Andres Felipe Martin
- Giovani Moreno
- Jose Alejandro Cortazar Lopez


**Docente:**  Sonia Ordoñez 

## Requerimientos del sistema

- [node.js](https://nodejs.org/dist/v20.18.0/win-x64/)  versión >= 20.18.1

Para ello en la consola de powershell en Windows colocamos el siguiente comando, para validar que versión de node tenemos instalada.

```sh
node -v
#return v20.18.1
```
En caso contrario que tengamos una versión diferente, abre la powershell con privilegios de administrador.


De igual forma se requiere tener instalado npm.

# Carga de los entornos

## Configuración OracleDB

Correr el contenedor con Docker

```bash
docker run -d --name oracle -p 1521:1521 -e ORACLE_PASSWORD=oracle -v data:/opt/oracle/oradata gvenzl/oracle-xe:21-slim
```

Ingresar al contenedor

```bash
$ docker exec -it oracle bash
```

Conectar a OracleDB

```bash
sqlplus
```

Crear usuario y conceder permisos

```sql
--Crear un usuario
Create user PFBD8124 identified by "PFBD8124";
-- Conceder permisos de conexión y más
grant connect, resource, DBA to PFBD8124;
```

Copiar script a ejecutar en el contenedor

```bash
docker cp ./prueba_base/creacion_p.sql oracle:/opt/oracle/
docker cp ./prueba_base/insersion_p.sql oracle:/opt/oracle/
```

Salir del usuario `system` e ingresar al usuario recién creado

```sql
exit
```

## Scripts Base de Datos
Ejecutar scripts con tablas e inserciones

```sql
start creacion_p.sql;
start insersion_p.sql;
```

Este paso a paso anterior solo se debe realizar **una vez**, después de la descarga y ejecución del contenedor y después de ejecutar el algoritmo de creación de tablas e inserción de registros. Al apagar y encender la maquina, el contenedor estará "apagado", para "encenderlo" se ejecuta el siguiente comando:

```bash
docker start oracle
```


## Back

Con la base de datos instalada y corriendo, nos ubicamos en la carpeta back y cargamos el entorno

```sh 
$ cd .\back
$ npm i # Esto solo se realiza una vez, sirve para descargar los paquetes y dependencias necesarias para correr el backend
$ npm run dev
```

Si se desea ver los endpoints y la documentación de la API Rest realizada par el backend: Una vez instaladas las dependencias y con el servidor en ejecución: en el explorador, vamos a ingresar la ruta: `localhost:3000/api-docs` donde podremos visualizar la documentación realizada.

## Front

Similar al backend de igual forma para cargar el Front end, nos ubicamos en la carpeta front y cargamos el entorno

```sh 
$ cd .\front
$ npm i # Esto solo se realiza una vez, sirve para descargar los paquetes y dependencias necesarias para correr el frontend
$ npm run dev
```

Para visualizar la aplicación desplegada vamos a la siguiente dirección web: `localhost:5173/auth/login`