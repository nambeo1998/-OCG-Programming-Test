select Customer.name, count(Customer_Id) 
from vlxx.Customer, vlxx.`Purchase Order`
Where Customer.Id = Customer_Id
group by Customer_Id