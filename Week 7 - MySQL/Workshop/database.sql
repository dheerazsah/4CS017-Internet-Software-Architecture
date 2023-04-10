create table student(
    name varchar(80),
    student_id int,
    age int,
    location varchar(120),
    level int,
    scholarship decimal(6,2)
);

ALTER TABLE student
ADD UNIQUE INDEX (student_id)

INSERT INTO student
VALUES("Dhiraj", 2065697, 19, "Kathmandu", 4, "0.00" );