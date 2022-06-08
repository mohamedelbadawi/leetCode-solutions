# Write your MySQL query statement below

select sell_date,count(*) as num_sold,group_concat(product order by product) as products from (select distinct sell_date,product from activities) temp
group by sell_date order by sell_date