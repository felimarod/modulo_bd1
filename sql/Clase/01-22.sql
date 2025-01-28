select id,
       salary,
       commission_pct
  from s_emp;

select id,
       salary,
       commission_pct
  from s_emp
 where commission_pct is not null;

select id,
       salary,
       nvl(
          commission_pct,
          0
       ) / 100 total
  from s_emp;

select id,
       salary,
       round(salary + salary * nvl(
          commission_pct,
          0
       )) / 100 total
  from s_emp;

select id,
       salary,
       round(
          salary + salary * nvl(
             commission_pct,
             0
          ) / 100,
          1
       ) redondea,
       trunc(
          salary + salary * nvl(
             commission_pct,
             0
          ) / 100,
          1
       ) trunca
  from s_emp;

select sysdate fecha_actual
  from dual;

select id,
       sysdate - start_date dias
  from s_emp;

-- seleccionar el id y los meses transcurridos desde que ingreso, hasta la fecha
select id,
       months_between(
          sysdate,
          start_date
       ) meses
  from s_emp;

select id,
       months_between(
          sysdate,
          start_date
       ) / 4 semanas
  from s_emp;

select id,
       add_months(
          start_date,
          4
       ) meses
  from s_emp;

select id,
       last_day(start_date) ultimo_dia_del_mes
  from s_emp;

select first_name
       || ' '
       || last_name empleado,
       start_date ingreso
  from s_emp
 where lower(to_char(
   start_date,
   'Day/MM/yyyy'
)) like '%7%';

select id,
       to_char(
          start_date,
          'Day/MM/yyyy'
       )
  from s_emp
 where extract(day from start_date) = 18;

select id,
       to_char(
          start_date,
          '"El dia " Day " del mes " Month " de "yyyy"'
       )
  from s_emp;

select id,
       first_name,
       nvl2(
          commission_pct,
          'Gana Comision',
          'No gana Comision'
       ) comision
  from s_emp;
select id,
       case
          when salary <= 1000               then
             'Bajo'
          when salary between 1000 and 2000 then
             'Medio'
          else
             'Arto'
       end categoria
  from s_emp
 order by salary;

 -- Segunda parte de la clase, hasta lo anterior va lo del primer taller

select id,
       name
  from s_region;

select id,
       name,
       region_id
  from s_dept;

-- Seleccionar la region con sus departamentos
select r.id codr,
       r.name nomr,
       d.id codd,
       d.name nomd
  from s_region r,
       s_dept d
 where d.region_id = r.id
 order by r.id;

-- Con Join
select r.id codr,
       r.name nomr,
       d.id codd,
       d.name nomd
  from s_region r
  join s_dept d
on d.region_id = r.id
 order by r.id;


-- Seleccionar los empleados con la region y depto donde trabajan
select e.first_name
       || ' '
       || e.last_name empleado,
       d.name dpto_nombre,
       r.name region_name
  from s_emp e
  join s_dept d
on d.id = e.dept_id
  join s_region r
on r.id = e.region_id
   and d.region_id = r.id;

-- Seleccionar los empleados con su region que trabajan en el departamento de ventas
select e.first_name
       || ' '
       || e.last_name empleado,
       e.title cargo,
       d.name dpto_nombre,
       r.name region_name
  from s_emp e
  join s_dept d
on d.id = e.dept_id
  join s_region r
on r.id = e.region_id
   and d.region_id = r.id
 where lower(d.name) like '%sales%'
 order by r.id;