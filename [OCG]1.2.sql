SELECT a.Id FROM ocg.Customer a
left join ocg.`Purchase Order` b on b.Customer_Id = a.Id 
where a.Id not in 
(select Customer_Id from ocg.`Purchase Order` where Product_Id = 2 or null)
