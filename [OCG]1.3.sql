select Customer.name, count(Customer_Id) 
from vlxx.Customer, ocg.`Purchase Order`
Where Customer.Id = Customer_Id
group by Customer_Id
