-- Descripción de una tabla
desc dictionary; -- desc table_name
-- Obtener datos
select table_name
  from dicionary;
-- Ver tablas creadas por el usuario
select table_name
  from all_tables
 where owner = user;

-- Crear tabla
select *
  from s_emp;
desc s_emp;
select *
  from s_user; --where user_id = 1;

select *
  from s_emp
 where id = 0
    or id = 30;
delete from s_emp
 where id = 0
    or id = 30;

commit;

-- CAMBIAR IDIOMA ORACLE
select parameter,
       value
  from v$nls_parameters
 where parameter in ( 'NLS_LANGUAGE',
                      'NLS_DATE_LANGUAGE',
                      'NLS_SORT' );

alter session set nls_language = 'SPANISH';