desc s_emp;
select *
  from s_emp;

-- delete from s_emp where id = 30;
select id codigo,
       first_name nombre,
       last_name apellido
  from s_emp;
select id codigo,
       first_name
       || ' '
       || last_name "Nombre Completo"
  from s_emp;

-- spool './nombre_archivo.txt';
-- Sentencias SQL
-- spool off;

select id codigo,
       upper(first_name)
       || ' '
       || lower(last_name) "Nombre Completo"
  from s_emp;

select id codigo,
       first_name
       || ' '
       || last_name "Nombre Completo",
       initcap(title) cargo
  from s_emp;

select id codigo,
       first_name
       || ' '
       || last_name "Nombre Completo",
       initcap(title) cargo
  from s_emp
 where id < 17
    or id > 22;

-- Seleccionar los empleados cuyo nombre contenga la letra 'a'
select first_name,
       last_name
  from s_emp
 where first_name like '%a%';

-- Seleccionar los empleados cuyo nombre empiece con 'a'
select first_name,
       last_name
  from s_emp
 where lower(first_name) like '%a%';

-- Seleccionar los empleados cuyo nombre empiece con 'A' y su apellido termine con 'P'
select first_name,
       last_name
  from s_emp
 where lower(first_name) like '%a%'
   and lower(last_name) like 'p%';

-- Seleccionar los empleados cuyo nombre no contenga la letra 'a' y su apellido no empiece con 'p'
select first_name,
       last_name
  from s_emp
 where lower(first_name) not like '%a%'
   and lower(last_name) not like 'p%';

-- Seleccionar los empleados cuyo nombre contenga la letra 'a' en la segunda posición
select first_name,
       last_name
  from s_emp
 where substr(
   lower(first_name),
   2,
   1
) = 'a';

select first_name,
       last_name
  from s_emp
 where substr(
   lower(first_name),
   2,
   1
) != 'a';

select first_name,
       last_name
  from s_emp
 where substr(
   lower(first_name),
   2,
   1
) <> 'a';

select first_name,
       last_name
  from s_emp
 where substr(
   upper(first_name),
   -2,
   1
) = 'E';

select rpad(
   first_name,
   15,
   '*'
) nombre
  from s_emp;

select title,
       replace(
          title,
          'Sales',
          'Ventas'
       ) cargo
  from s_emp;

column CARGO format a20;

select title,
       translate(
          title,
          'aeiou',
          '12345'
       ) cargo
  from s_emp;

select first_name,
       salary,
       commission_pct
  from s_emp;
select first_name,
       salary,
       commission_pct
  from s_emp
 where salary > 1000
   and salary <= 1500;
select first_name, last_name, userid
       salary,
       commission_pct
  from s_emp
 where salary between 1000 and 1500;