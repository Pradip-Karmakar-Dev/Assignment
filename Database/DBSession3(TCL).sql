use DBSession2;

select * from Products;

-- Transaction Control query
Begin Transaction
	insert into Products values(108,'Track Pad', 5000);


-- Multiple Transaction Control queries
Begin Transaction Transaction1
	insert into Products Values(109, 'Quick Heal AntiVirus', 1399.99);

Begin Transaction Transaction2
	insert into Products Values
	(110, '1 TB External Hard Drive', 4000),
	(111, 'CD/DVD ROM', 2000);


-- Rollback Changes
Rollback Transaction

-- Commit Changes  
Commit Transaction