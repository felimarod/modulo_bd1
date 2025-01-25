spool "taller1";
-- 1. Liste toda la infromación sobre los departamentos
select id identificador,
       name nombre,
       region_id region_identificador
  from s_dept;
-- 2. Liste toda la infromación sobre las regiones
select id identificador,
       name nombre
  from s_region;
-- 3. Liste los diferentes nombres de departamentos
select distinct name nombre
  from s_dept;
--4. Liste los cargos (titles) de la tabla empleado
select title titulo
  from s_emp;
-- 5. Liste los diferentes cargos de la tabla empleado 
select distinct title titulo
  from s_emp;
-- 6. Liste los nombres de departamentos bajo la etiqueta “Dptos diferentes”
select distinct name "Dptos diferentes"
  from s_dept;
-- 7. Liste los nombres completos de los empleados
select first_name
       || ' '
       || last_name "Nombre completo"
  from s_emp;
-- 8. Liste el Id del departamento, el primero y segundo nombre de los empleados del dpto 41 
select dept_id "Id del departamento",
       first_name
       || ' '
       || last_name "Nombre completo"
  from s_emp
 where dept_id = 41;
-- 9. Liste el apellido, el salario, el porcentaje de comisión y el valor de la comisión de cada uno de los Representantes de ventas. 
-- Asumiendo que la comisión es el porcentaje sobre el salario básico.
select last_name apellido,
       salary salario,
       commission_pct "Porcentaje de comisión",
       salary * ( commission_pct / 100 ) "Valor de la comisión"
  from s_emp
 where title = 'Sales Representative';
-- 10.  Liste el apellido, el salario, el porcentaje de comisión y el total de la comisión de cada uno  los Representantes de Ventas 
-- cuya comisión excede $200, ordenado por comisión
select last_name apellido,
       salary salario,
       commission_pct "Porcentaje de comisión",
       salary * ( commission_pct / 100 ) "Valor de la comisión"
  from s_emp
 where title = 'Sales Representative'
   and salary * ( commission_pct / 100 ) > 200
 order by commission_pct;
-- 11.  Liste el apellido, el salario y la compensación anual de los empleados del departamento 41. Dicha compensación equivale a 
-- 12 veces el salario más $100
select last_name apellido,
       salary salario,
       12 * salary + 100 "Compensación anual"
  from s_emp
 where dept_id = 41;
-- 12.  Para los empleados del departamento 50, liste el apellido, el salario dividido entre 22 redondeado a 0 decimales. 
select last_name apellido,
       round(salary / 22) "salario dividido y redondeado"
  from s_emp
 where dept_id = 50;
-- 13.  Liste el apellido, el salario, el porcentaje de la comisión de los empleados con salario superior a 1500 
select last_name apellido,
       salary salario,
       commission_pct "Porcentaje de comisión"
  from s_emp
 where salary > 1500;
-- 14.  El mismo listado anterior pero convierta los nulos en 0 
select last_name apellido,
       salary salario,
       nvl(
          commission_pct,
          0
       ) "Porcentaje de comisión"
  from s_emp
 where salary > 1500;
-- 15.  Liste el apellido, la fecha de ingreso,  la fecha de ingreso + 90  de los empleados del departamento 42 
select last_name apellido,
       start_date "Fecha de ingreso",
       start_date + 90 "Fecha de ingreso + 90"
  from s_emp
 where dept_id = 42;
-- 16.  De acuerdo al anterior resultado liste el Apellido y el número de semanas trabajadas del empleado del departamento 43 
select last_name apellido,
       start_date "Fecha de ingreso",
       start_date + 90 "Fecha de ingreso + 90",
       ( trunc((sysdate - start_date) / 7) ) "semanas trabajadas"
  from s_emp
 where dept_id = 43;
-- 17.  Para todas las ordenes, liste el ID, la fecha de orden, y el número de días transcurridos desde que se hizo la orden. 
select id identificador,
       date_ordered "Fecha de orden",
       trunc(sysdate - date_ordered) "Días transcurridos desde que se hizo la orden"
  from s_ord;
-- 18.  Para los empleados del departamento 45, liste el apellido, la fecha de entrada y 6 meses después de la fecha de entrada. 
select last_name apellido,
       start_date "Fecha de entrada",
       add_months(
          start_date,
          6
       ) "6 meses despues de la fecha de entrada"
  from s_emp
 where dept_id = 40;
-- 19.  Para cada uno de los empleados, liste el ID, la fecha de entrada, y la fecha en que recibió su primer cheque (se paga el último día del mes) 
select id identificador,
       start_date "Fecha de entrada",
       last_day(start_date) "Fecha primer cheque"
  from s_emp;
-- 20.  Para cada uno de los empleados liste el ID, la fecha de ingreso y el número de meses transcurridos desde que el empleado ingreso. 
select id identificador,
       start_date "Fecha de ingreso",
       trunc(months_between(
          sysdate,
          start_date
       )) "Meses transcurridos"
  from s_emp;
-- 21.  Liste el Id y la fecha  de todas las ordenes de pedidos con un formato “08/92”  y un label  Orden de los representantes de ventas 11 
select id identificador,
       to_char(
          date_ordered,
          'MM/YY'
       ) "Mes y Año de la orden",
       sales_rep_id "Representante de ventas ID"
  from s_ord
 where sales_rep_id = 11;
-- 22.  Liste los nombres y fechas de ingreso en formato “27 de Febrero de 2001” 
select first_name
       || ' '
       || last_name "Nombre completo",
       to_char(
          start_date,
          'dd " de " Month " de " yyyy'
       ) "Fecha de ingreso"
  from s_emp;
-- 23.  Liste el cargo de los Vicepresidentes con su nombre y apellido (La primera en mayúscula)
select title cargo,
       initcap(first_name) nombre,
       initcap(last_name) apellido
  from s_emp
 where title like 'VP%';
-- 24.  Liste el nombre y el apellido de los empleados con apellido PATEL 
select first_name nombre,
       last_name apellido
  from s_emp
 where upper(last_name) = 'PATEL';
-- 25.  Liste los nombres de los productos,  cuyas primeras tres letras con ‘ACE’ 
select name nombre
  from s_product
 where upper(name) like 'ACE%';
-- 26.  Seleccione el string  ‘departamento, nombre completo del  vicepresidente’ de los vicepresidentes de la compañía. Ejm Operations, LaDoris Ngao. 
select d.name
       || ', '
       || e.first_name
       || ' '
       || e.last_name "departamento, nombre completo del vicepresidente"
  from s_emp e
  join s_dept d
on e.dept_id = d.id
   and e.region_id = d.region_id
 where e.title like 'VP%'; 
-- 27.  Para cada uno de los empleados del departamento 50, selecciones el apellido  y el número de caracteres del apellido. 
select last_name apellido,
       length(last_name) "Número de caracteres del apellido"
  from s_emp
 where dept_id = 50;
-- 28.  Liste los nombres de productos con letra en mayúscula. 
select upper(name)
  from s_product;
-- 29.  Liste los nombres y apellidos de los empleados que contengan  una “s” y una “a” en el apellido o el nombre
select first_name nombre,
       last_name apellido
  from s_emp
 where ( first_name like '%s%'
   and first_name like '%a%' )
    or ( last_name like '%s%'
   and last_name like '%a%' );
-- 30.  Liste  los nombres y apellido de los empleados que no contengan una  “a”   en el apellido y el nombre. 
select first_name nombre,
       last_name apellido
  from s_emp
 where first_name like '%a%'
   and last_name like '%a%';
-- 31.  Liste  los nombres y apellidos de los empleados que no ganan comisión 
select first_name nombre,
       last_name apellido
  from s_emp
 where commission_pct is null;
-- 32.  Liste  los nombres y apellidos de los empleados que ganan comisión 
select first_name nombre,
       last_name apellido
  from s_emp
 where commission_pct is not null;
-- 33.  Liste  los nombres y apellidos de los empleados  que ganan más de US 540 
select first_name nombre,
       last_name apellido
  from s_emp
 where salary > 540;
-- 34.  Liste  los nombres y apellidos de los vicepresidentes que ganan por lo menos US760 
select first_name nombre,
       last_name apellido
  from s_emp
 where title like 'VP%'
   and salary >= 760;
-- 35.  Generar un listado con  “código, nombre y apellido  ............................. sueldo”
select to_char(id)
       || ', '
       || first_name
       || ' '
       || last_name
       || ' '
       || rpad(
   '.',
   50 - length(to_char(id)
               || first_name
               || last_name
               || to_char(salary)
               || ',    '),
   '.'
)
       || ' '
       || salary "código, nombre y apellido  ................. sueldo"
  from s_emp;
-- 36.  Generar un listado con “nombre apellido nuevaClave”, donde nuevaClave corresponde a el apellido cambiando la “a” por el “1”, la “e” por el “2”, la “i” por el “3”, la “o” por el “4”, la “u” por el “5”. 
select first_name
       || ' '
       || last_name
       || ' '
       || translate(
   last_name,
   'aeiou',
   '12345'
)
  from s_emp;
-- 37.  Generar un listado con los clientes que tengan una "s" en la octava posición 
select name
  from s_customer
 where lower(substr(
   name,
   8
)) = 's';
-- 38.  Generar un listado indicando los clientes que ganan y los que no ganan comisión. 
-- ! Los clientes pueden ganar comisión???
select id,
       first_name,
       nvl2(
          commission_pct,
          'Gana Comision',
          'No gana Comision'
       ) comision
  from s_emp;

spool off;