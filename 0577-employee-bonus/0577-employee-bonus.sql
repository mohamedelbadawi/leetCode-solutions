# Write your MySQL query statement below
select Employee.name , bonus.bonus from employee left join bonus on employee.empId = bonus.empId where bonus.bonus<1000 or bonus.bonus is null