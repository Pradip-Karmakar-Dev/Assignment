
use DBSession2;

-- AVG
select AVG(Price) from Products;

-- Count
select Count(ProductId) from Products;

-- Max
select Max(Price) from Products;

-- Min
select Min(Price) from Products;

-- Sum
select Sum(Price) from Products;

-- UpperCase
select Upper(ProductName) from Products;

-- Lower
select Lower(ProductName) from Products;

-- Concat
select Concat(ProductName, ProductId) from Products;

-- Length
select Len(ProductName) from Products;

-- SquareRoot
select SQRT(48);