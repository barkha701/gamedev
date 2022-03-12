
create table eventmanagement 
(
Eventname varchar(50) primary key,
Eventstarttime datetime,
Eventendtime datetime,
Duration time
)


insert into eventmanagement
values ('Bitotsav', '2022-03-13 00:11:55.46','2022-03-13 00:12:55.45' ,'00:11:55');
insert into eventmanagement
values ('Pantheon', '2021-03-13 00:11:55.46','2021-03-13 00:12:55.46', '00:11:55');
insert into eventmanagement
values ('Wordhive', '2021-04-13 00:11:55.46','2021-04-13 00:12:55.46', '00:11:55');
insert into eventmanagement
values ('Temple Run', '2023-04-13 00:11:55.46', '2023-04-13 00:13:55.46', '00:11:55');


