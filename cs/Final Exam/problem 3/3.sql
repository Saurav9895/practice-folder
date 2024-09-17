SELECT COUNT(*) AS 
EmployeeCount 
FROM Employees
JOIN Departments ON
Employees.DepartmentID = 
Departments.DepartmentID
WHERE DepartmentName = 'Engineering';