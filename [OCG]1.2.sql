SELECT a.* FROM vlxx.Customer a
left join vlxx.`Purchase Order` b on b.Customer_Id = a.id
where b.Product_Id != 2 or b.product_Id is null
