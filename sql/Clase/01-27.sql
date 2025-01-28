-- Seleccionar los productos que se han vendido
select distinct p.name producto
  from s_product p,
       s_item it
 where p.id = it.product_id;
-- Seleccionar que se han vendido en la region de Norte América
select distinct p.name producto
  from s_product p,
       s_item it,
       s_region r,
       s_warehouse w,
       s_inventory i
 where p.id = it.product_id
   and r.id = w.region_id
   and w.id = i.warehouse_id
   and p.id = i.product_id
   and lower(r.name) like '%north%';

-- Seleccinar los representantes de ventas con los clientes que han establecido
select e.first_name
       || ' '
       || e.last_name representante,
       c.name cliente
  from s_emp e,
       s_customer c
 where e.id = c.sales_rep_id;

 -- Seleccionar los representantes de ventas con las ordenes que han conseguido
select o.id norden,
       e.first_name
       || ' '
       || e.last_name representante
  from s_emp e,
       s_ord o
 where e.id = o.sales_rep_id;

 -- Seleccionar los vendedores con las ordenes que han despachado
select o.id norden,
       e.first_name
       || ' '
       || e.last_name vendedor
  from s_emp e,
       s_ord o
 where e.id = o.stock_clerk;
-- Seleccionar la orden junto con los representantes y los vendedores que han participado en la orden
select o.id norden,
       r.first_name
       || ' '
       || r.last_name representante,
       v.first_name
       || ' '
       || v.last_name vendedor
  from s_emp r,
       s_emp v,
       s_ord o
 where r.id = o.sales_rep_id
   and v.id = o.stock_clerk;

-- Seleccionar los nombres de los jefes con los nombres de los subalternos
select j.first_name
       || ' '
       || j.last_name jefe,
    --    j.title CarJ,
       s.first_name
       || ' '
       || s.last_name subalterno
    --    s.title CarS
  from s_emp j,
       s_emp s
 where j.id = s.manager_id;

-- Formatear tamaño de columnas al imprimir
-- column jefe format a15;
-- column carj format a15;
-- column subalterno format a15;
-- column cars format a15;

-- Ahora con JOIN
select j.first_name
       || ' '
       || j.last_name jefe,
       s.first_name
       || ' '
       || s.last_name subalterno
  from s_emp j
  join s_emp s
on j.id = s.manager_id;
-- Seleccionar los empleados con sus subalternos tengan o no tengan subalternos
select j.first_name
       || ' '
       || j.last_name jefe,
       s.first_name
       || ' '
       || s.last_name subalterno
  from s_emp j
  left join s_emp s
on j.id = s.manager_id;

select j.first_name
       || ' '
       || j.last_name jefe,
    --    j.title CarJ,
       s.first_name
       || ' '
       || s.last_name subalterno
    --    s.title CarS
  from s_emp j,
       s_emp s
 where j.id = s.manager_id (+);
-- Seleccionar los empleados con sus jefes tengan o no tengan jefe
select j.first_name
       || ' '
       || j.last_name jefe,
       s.first_name
       || ' '
       || s.last_name subalterno
  from s_emp j
 right join s_emp s
on j.id = s.manager_id;
select j.first_name
       || ' '
       || j.last_name jefe,
    --    j.title CarJ,
       s.first_name
       || ' '
       || s.last_name subalterno
    --    s.title CarS
  from s_emp j,
       s_emp s
 where j.id (+) = s.manager_id;

-- Seleccionar los empleados que no tienen subalternos
select j.first_name
       || ' '
       || j.last_name jefe,
       j.title,
       s.first_name
       || ' '
       || s.last_name subalterno
  from s_emp j
  left join s_emp s
on j.id = s.manager_id
 where s.manager_id is null;

-- Seleccionar los empleados que no tienen jefe
select j.first_name
       || ' '
       || j.last_name jefe,
       s.first_name
       || ' '
       || s.last_name subalterno
  from s_emp j
 right join s_emp s
on j.id = s.manager_id
 where j.id is null;

-- Seleccionar los empleados con sus subalternos y los que no tienen jefe o subalterno
select j.first_name
       || ' '
       || j.last_name jefe,
       s.first_name
       || ' '
       || s.last_name subalterno
  from s_emp j
  full outer join s_emp s
on j.id = s.manager_id;

-- Seleccionar los empleados que no tienen jefe o subalternos
select j.first_name
       || ' '
       || j.last_name jefe,
       s.first_name
       || ' '
       || s.last_name subalterno
  from s_emp j
  full outer join s_emp s
on j.id = s.manager_id
 where j.id is null
    or s.manager_id is null;
-- Otra forma
select j.first_name
       || ' '
       || j.last_name jefe,
       s.first_name
       || ' '
       || s.last_name subalterno
  from s_emp j
 right join s_emp s
on j.id = s.manager_id
union
select j.first_name
       || ' '
       || j.last_name jefe,
       s.first_name
       || ' '
       || s.last_name subalterno
  from s_emp j
  left join s_emp s
on j.id = s.manager_id;

-- Seleccionar los productos que no se han vendido
select p.name
  from s_product p
minus
select p.name
  from s_product p,
       s_item it
 where it.product_id = p.id;

-- Seleccionar los productos que se vendieron en la región de europa pero no en asia
select distinct p.name producto
  from s_product p,
       s_item it,
       s_region r,
       s_warehouse w,
       s_inventory i
 where p.id = it.product_id
   and r.id = w.region_id
   and w.id = i.warehouse_id
   and p.id = i.product_id
   and lower(r.name) like '%europe%'
minus
select distinct p.name producto
  from s_product p,
       s_item it,
       s_region r,
       s_warehouse w,
       s_inventory i
 where p.id = it.product_id
   and r.id = w.region_id
   and w.id = i.warehouse_id
   and p.id = i.product_id
   and lower(r.name) like '%asia%';
-- Seleccionar los productos que se vendieron en la región de europa y asia
select distinct p.name producto
  from s_product p,
       s_item it,
       s_region r,
       s_warehouse w,
       s_inventory i
 where p.id = it.product_id
   and r.id = w.region_id
   and w.id = i.warehouse_id
   and p.id = i.product_id
   and lower(r.name) like '%europe%'
intersect
select distinct p.name producto
  from s_product p,
       s_item it,
       s_region r,
       s_warehouse w,
       s_inventory i
 where p.id = it.product_id
   and r.id = w.region_id
   and w.id = i.warehouse_id
   and p.id = i.product_id
   and lower(r.name) like '%asia%';