-- Seleccionar por cada depto el valor y el promedio pagado en nomina
select d.name depto,
       sum(s.payment) totalnomina,
       round(
          avg(s.payment),
          2
       ) propagado
  from s_dept d,
       s_emp e,
       s_salary s
 where d.id = e.dept_id
   and d.region_id = e.region_id
   and e.id = s.id
 group by d.name;

 -- Seleccionar por cada región y depto el valor y el promedio pagado en nomina
select r.name region,
       d.name depto,
       sum(s.payment) totalnomina,
       round(
          avg(s.payment),
          2
       ) propagado
  from s_dept d,
       s_emp e,
       s_salary s,
       s_region r
 where d.id = e.dept_id
   and d.region_id = e.region_id
   and r.id = d.region_id
   and e.id = s.id
 group by r.name,
          d.name
 order by r.name,
          d.name;
--  column region format a15;

desc s_salary;
-- Seleccionar por mes el valor y el promedio pagado en nomina
select extract(month from s.datepayment) mes,
       sum(s.payment) totalnomina,
       round(
          avg(s.payment),
          2
       ) propagado
  from s_salary s
 group by extract(month from s.datepayment);

select to_char(
   s.datepayment,
   'Mon'
) mes,
       sum(s.payment) totalnomina,
       round(
          avg(s.payment),
          2
       ) propagado
  from s_salary s
 group by to_char(
   s.datepayment,
   'Mon'
);

 -- Seleccionar el valor pagado en nomina a cada uno de los representantes de ventas
select e.first_name nombre,
       e.last_name apellido,
       sum(s.payment) totalnomina,
       round(
          avg(s.payment),
          2
       ) propagado
  from s_salary s,
       s_emp e
 where e.id = s.id
   and lower(e.title) like 'sales representative'
 group by e.first_name,
          e.last_name;

-- Seleccionar el valor pagado en nomina a cada uno de los representante s de ventas
select e.first_name
       || ' '
       || e.last_name representante,
       round(
          sum(o.total) * min(commission_pct) / 100,
          2
       ) totalxventa
  from s_emp e,
       s_ord o
 where o.sales_rep_id = e.id
 group by e.first_name
          || ' '
          || e.last_name;

-- Seleccionar el pago total que han recibido los repressentantes de ventas

select e.first_name
       || ' '
       || e.last_name representante,
       sum(s.payment) + round(
          sum(o.total) * min(commission_pct) / 100,
          2
       ) totalxventa
  from s_emp e,
       s_ord o,
       s_salary s
 where o.sales_rep_id = e.id
   and s.id = e.id
 group by e.first_name
          || ' '
          || e.last_name;

-- Parcial SQL Básico
select e.first_name
       || ''
       || e.last_name nombrec
  from s_emp e,
       s_ord o
 where e.id = o.sales_rep_id
   and ( o.total * e.commission_pct / 100 ) > 1000000;

select c.name,
       p.name
  from s_customer c,
       s_ord o,
       s_item it,
       s_product p
 where c.id = o.customer_id
   and o.id = it.ord_id
   and p.id = it.product_id
   and lower(p.name) like '%glove%'
   and to_char(
   o.date_ordered,
   'MM/YYYY'
) like '09/2011';