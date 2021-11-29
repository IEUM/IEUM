UPDATE hospital SET dong = ""
WHERE dong = "";

select dong, temp_dong from hospital;

select dong, SUBSTRING_INDEX(SUBSTRING_INDEX(address, '(', -1),')',1) from hospital limit 1000;

select SUBSTRING_INDEX(address, ')', 1) from hospital limit 100;

alter table hospital add temp_dong varchar(500); 

alter table hospital drop temp_dong;

-- update hospital set temp_dong = SUBSTRING_INDEX(SUBSTRING_INDEX(address, '(', -1),')',1) 
-- where dong Like "";
update hospital set temp_dong = SUBSTRING_INDEX(SUBSTRING_INDEX(address, '(', -1),')',1);

select dong, temp_dong, SUBSTRING_INDEX(temp_dong, ',', 1) from hospital limit 1000;

update hospital set temp_dong = SUBSTRING_INDEX(temp_dong, ',', 1) 
where temp_dong Like "%,%";

update hospital set temp_dong = "" 
where temp_dong Like "% %";

update hospital set temp_dong = "" 
where temp_dong Like "%센터";
update hospital set temp_dong = "" 
where temp_dong Like "%빌딩";
update hospital set temp_dong = "" 
where temp_dong Like "%층";
update hospital set temp_dong = "" 
where temp_dong Like "1";
update hospital set temp_dong = "" 
where temp_dong Like "동";
update hospital set temp_dong = "" 
where temp_dong Like "%호";
update hospital set temp_dong = "" 
where temp_dong Like "A";

select dong, temp_dong, CONCAT(SUBSTRING_INDEX(temp_dong, '동', 1),'동')
from hospital
where temp_dong like "%동%"
LIMIT 100;

update hospital set temp_dong = CONCAT(SUBSTRING_INDEX(temp_dong, '동', 1),'동')
where temp_dong like "%동%";

select dong, temp_dong FROM hospital;
select * FROM hospital LIMIT 100;

update hospital set temp_dong = "동삼동" 
where dong Like "동삼동";


-- 구

select gu_name, temp_gu from hospital;
select * from hospital LIMIT 100;

alter table hospital add temp_gu varchar(10); 

update hospital set temp_gu = SUBSTRING_INDEX(gu_name, city_name, -1);

select city_name, gu_name, SUBSTRING_INDEX(gu_name, city_name, -1) from hospital;

select dong, temp_dong from hospital WHERE temp_gu = "강남구" 
and temp_dong <> " " order by temp_dong;