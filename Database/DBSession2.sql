-- Create Database
Create Database DBSession2;

-- Create Table Customer
CREATE Table Customers(
CustomerId int Primary Key,
CustomerName varchar(25) NOT NUll,
MobileNumber Varchar(13)
);

-- Create Table Products
CREATE Table Products(
ProductId int Primary Key,
ProductName varchar(25) NOT NUll,
Price decimal(8,2)
);

-- Create Table Orders
CREATE Table Orders(
OrderId int Primary Key,
CustomerId int Foreign Key References Customers(CustomerId),
ProductsId int Foreign Key References Products(ProductId)
);

-- insert Data into all tables
Insert into Customers Values
(1,'Pradip','+918238118848'),
(2,'Sudip','+919876543319'),
(3,'Rakesh','+918765432100'),
(4,'Vaibhav','+918123456789'),
(5,'Neel','+919087612345');

Insert into Products Values
(101,'Laptop', 50000),
(102,'Mouse', 350),
(103,'Keyboard', 500),
(104,'CPU Cabinet', 1200),
(105,'8 GB RAM', 3000),
(106,'Graphics Card 4GB', 8500),
(107,'CPU Cooler', 3400);

Insert into Orders Values
(1,3,102),
(2,1,101),
(3,5,106),
(4,3,104);


-- Inner Joins Operations
Select OrderId, ProductName from Orders Inner join Products on Orders.ProductsId = Products.ProductId;


-- Left Joins Operations
Select OrderId, ProductName from Orders Left join Products on Orders.ProductsId = Products.ProductId;


-- Right Joins Operations
Select OrderId, ProductName from Orders Right join Products on Orders.ProductsId = Products.ProductId;


-- Full Joins Operations
Select OrderId, ProductName from Orders Full join Products on Orders.ProductsId = Products.ProductId;


-- Create Stored Procedure
Create Procedure selectAllProducts
As
BEGIN
SELECT * FROM Products;
END

EXEC selectAllProducts;


-- Create Parameterized input Stored Procedure
Create Procedure selectCustomer(@id int)
As
BEGIN
SELECT * FROM Customers Where CustomerId = @id;
END

EXEC selectCustomer 1;


-- Create Parameterized input & Output Stored Procedure
Create Procedure getProduct(@id int, @price decimal(8,2) Output)
As
BEGIN
SELECT @price = Price FROM Products Where ProductId = @id;
END

DECLARE @getPrice decimal(8,2)
EXEC getProduct 101, @price = @getPrice output


-- Creating Exception Handeling Procedure

Create Procedure catchExceptions
As
SELECT
	ERROR_NUMBER() AS ErrorNumber,
	ERROR_LINE() AS ErrorLine,
	ERROR_MESSAGE() AS ErrorMessage;
Go
	
	
Create Procedure fetchTableWithExeption
As
	Select * from Product;
GO

Begin Try
	EXEC fetchTableWithExeption;
End Try
Begin Catch
	EXEC catchExceptions;
End Catch
	

-- Views 
Create View Purchases 
As 
	Select o.OrderId as Number, p.ProductName as Product, c.CustomerName as Ordered_By, p.Price as Price
	From Orders o, Products p, Customers c
	Where o.CustomerId = c.CustomerId and o.ProductsId = p.ProductId;
	Select * from Purchases;
