select Customer.name, count(Customer_Id) 
from ocg.Customer, ocg.`Purchase Order`
Where Customer.Id = Customer_Id
group by Customer_Id
