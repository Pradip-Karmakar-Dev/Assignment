-- Create Database
Create Database DB;

-- Create Table
Create Table Student
(id int Primary Key, 
name varchar(20),
gender varchar(6),
age int default 18);

-- Alter Table
Alter table Student add address varchar(25);

-- Single insert query
insert into Student values(1, 'Pradip', 'Male', 23, 'Navsari');

-- Multiple insertion query
insert into Student values
(2, 'Vaibhav', 'Male', 22, 'Ahmedabad'),
(3, 'Sudip', 'Male', 17, 'Baroda'),
(4, 'Mohini', 'Female', 18, 'Ahmedabad'),
(5, 'Rushali', 'Female', 17, 'Gandhinagar');

-- Select query
Select * from Student;

-- Select query by condition
Select * from Student where address = 'Ahmedabad';

-- Select query with orderby 
Select name, address from Student order by age; -- Accending
Select name, address from Student order by age DESC; -- Decending

-- Select query with like
Select name, address from Student where name like '%dip';
Select name, address from Student where name like '_udip';
Select name, address from Student where age like '2_';

-- Select query using count
Select Count(*) from Student;

-- Select query using count with condition
Select Count(*) from Student where age = 17;

-- Select query using count with group by
Select Count(*),age from Student group by age;

-- Select using Distinct 
Select Distinct age from Student;
