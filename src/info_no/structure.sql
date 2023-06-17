create table positions (
	position_id bigserial primary key,
	position_name varchar(30)
);

create table teams (
	team_id bigserial primary key,
	"name" varchar(15),
	description varchar(50),
	email varchar(50),
	"password" varchar(50)
);

create table emails (
	email_id bigserial primary key,
	email varchar(50),
	"password" varchar(50)
);

create table employees (
	employee_id bigserial primary key,
	first_name varchar(15),
	last_name varchar(15),
	"age" integer,
	email_employe integer,
	position_employe integer,
	team_employe integer,
	constraint fk_employees_emails
		foreign key (email_employe)
		references emails(email_id)
		on delete cascade,
	constraint fk_employee_position
		foreign key (position_employe)
		references positions(position_id)
		on delete cascade,
	constraint fk_employee_team
		foreign key (team_employe)
		references teams(team_id)
		on delete cascade
);

create table computers (
	computer_id bigserial primary key,
	active boolean default true,
	is_laptop boolean default false,
	ubication varchar(50),
	serial_number varchar(60),
	brand varchar(30),
	model varchar(30),
	processor varchar,
	memory_RAM varchar,
	HHD varchar,
	employer_computer integer,
	constraint fk_employe_computer
		foreign key (employer_computer)
		references employees(employee_id)
		on delete cascade
);


create table monitors (
	id_monitor serial primary key not null unique,
	active boolean default true,
	serial_number varchar(60),
	brand varchar(30),
	model varchar(30),
	screen_size varchar(10)
);

create table monitors_computer (
	id bigserial primary key not null unique,
	computer_id integer,
	monitor_id integer,
	employer_id integer,
	constraint fk_monitors_computer
		foreign key (computer_id)
		references computers(computer_id)
		on delete cascade,
	constraint fk_monitor_computers
		foreign key (monitor_id)
		references monitors(id_monitor)
		on delete cascade,
	constraint fk_employers_monitor_computers
		foreign key (employer_id)
		references employees(employee_id)
		on delete cascade
);


--EMPLEADO
select e.employee_id, e.first_name as "Nombre", e.last_name as "Apellido", e2.email, t."name" as "TEAM", t.email as "Team_Email",c.is_laptop as "Laptop", c.brand, c.model 
from employees e
inner join public.teams t on t.team_id = e.team_employe
inner join public.emails e2 on e2.email_id = e.email_employe
inner join public.computers c on c.employer_computer = e.employee_id;

-- COMPUTADOR PANTALLAS
select e.first_name, e.last_name,c.is_laptop, c.brand, c.model, c.serial_number, c.ubication, m.brand, m.model, m.serial_number
from monitors_computer mc
inner join public.computers c on c.computer_id = mc.computer_id
inner join public.monitors m on m.id_monitor = mc.monitor_id
inner join public.employees e on e.employee_id = mc.employer_id;

create view Employeest_Teams
as
select e.employee_id, e.first_name as "Nombre", e.last_name as "Apellido", e2.email, t."name" as "TEAM", t.email as "Team_Email",c.is_laptop as "Laptop", c.brand, c.model 
from employees e
inner join public.teams t on t.team_id = e.team_employe
inner join public.emails e2 on e2.email_id = e.email_employe
inner join public.computers c on c.employer_computer = e.employee_id;

create view Monitors_Computers
as
select e.first_name, e.last_name,c.is_laptop, c.brand as "marca_computador", c.model as "modelo_computador", c.serial_number as "SN_computador", c.ubication, m.brand as "modelo_monitor", m.model as "marca_monitor", m.serial_number as "SN_monitor"
from monitors_computer mc
inner join public.computers c on c.computer_id = mc.computer_id
inner join public.monitors m on m.id_monitor = mc.monitor_id
inner join public.employees e on e.employee_id = mc.employer_id;