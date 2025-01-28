# Configuración SQL

## Configuración Base de Datos en Oracle

Correr el contenedor con Docker

```bash
docker run -d --name oracle -p 1521:1521 -e ORACLE_PASSWORD=oracle -v data:/opt/oracle/oradata gvenzl/oracle-xe:21-slim
```

Ingresar al contenedor

```bash
docker exec -it oracle bash
```

Conectar a OracleDB

```bash
sqlplus
```

Crear usuario y conceder permisos

```sql
--Crear un usuario
Create user BD8124 identified by "BD8124";
-- Conceder permisos de conexión y más
grant connect, resource, DBA to BD8124;
```

Copiar script a ejecutar en el contenedor

```bash
docker cp ./script.sql oracle:/opt/oracle/
```

Ejecutar script con tablas e inserciones

```sql
start script.sql
```

Este paso a paso anterior solo se debe realizar **una vez**, después de la descarga y ejecución del contenedor y después de ejecutar el algoritmo de creación de tablas e inserción de registros. Al apagar y encender la maquina, el contenedor estara "apagado", para "encenderlo" se ejecuta el siguiente comando:

```bash
docker start oracle
```

