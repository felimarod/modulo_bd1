-- Descripción de una tabla
desc dictionary; -- desc table_name
-- Obtener datos
select table_name from dicionary;
-- Ver tablas creadas por el usuario
select table_name from all_tables where owner = user;

-- Crear tabla
select * from s_emp;
desc s_emp;
select * from s_user; --where user_id = 1;

select * FROM s_emp WHERE first_name = 'andres1' and last_name = 'martin1' and userid = 'felimaro';