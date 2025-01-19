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