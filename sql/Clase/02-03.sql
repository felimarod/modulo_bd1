-- Seleccionar los empleados con el valor total pagado en nomina

select e.first_name
       || ' '
       || e.last_name empleado,
       sum(s.payment) totalpagado
  from s_emp e,
       s_salary s
 where e.id = s.id
 group by e.first_name
          || ' '
          || e.last_name;

-- Seleccionar los empleados con el valor total pagado en nomina y cuyo valor supera los 10 mil
select e.first_name
       || ' '
       || e.last_name empleado,
       sum(s.payment) totalpagado
  from s_emp e,
       s_salary s
 where e.id = s.id
 group by e.first_name
          || ' '
          || e.last_name
having sum(s.payment) > 10000;

-- Seleccionar el total de los valores pagados en nomina cuyo total por empleado supera los 10000
select sum(s.payment) totalpagado
  from s_emp e,
       s_salary s
 where e.id = s.id
 group by e.first_name
          || ' '
          || e.last_name
having sum(s.payment) > 10000;

-- Seleccionar los clientes que han comprado más de 10000 dolares
select c.name nombrecliente
  from s_customer c,
       s_ord o
 where c.id = o.customer_id
 group by c.name
having sum(o.total) > 10000;

-- Seleccionar los vendedores que han despachado más de 5 ordenes
select e.first_name
       || ' '
       || e.last_name vendedor
  from s_emp e,
       s_ord o
 where e.id = o.stock_clerk
 group by e.first_name
          || ' '
          || e.last_name
having count(o.id) > 5;

-- Seleccionar los nombres de los clientes que han comprado más de 15 productos, sin importar si son iguales o diferentes

select c.name
  from s_customer c,
       s_ord o,
       s_item it
 where c.id = o.customer_id
   and o.id = it.ord_id
 group by c.name
having sum(it.quantity) > 15;

-- Seleccionar los nombres de los clientes que han comprado más de 15 productos en una misma orden 
select c.name
  from s_customer c,
       s_ord o,
       s_item it
 where c.id = o.customer_id
   and o.id = it.ord_id
 group by o.id,
          c.name
having count(it.quantity_shipped) > 15;

-- Seleccionar los clientes que han comprado más de 15 balones
select c.name
  from s_customer c,
       s_ord o,
       s_item it,
       s_product p
 where c.id = o.customer_id
   and o.id = it.ord_id
   and p.id = it.product_id
   and lower(p.name) like '%bal%'
 group by c.name
having sum(it.quantity_shipped) > 15;

-- Seleccionar los empleados que ganas el máximo salario
select distinct e.first_name
                || ' '
                || e.last_name empleado
  from s_emp e,
       s_salary s
 where e.id = s.id
   and s.payment = (
   select max(payment)
     from s_salary
);