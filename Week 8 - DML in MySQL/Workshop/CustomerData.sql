CREATE TABLE Customers(
    CustomerID INTEGER NOT NULL,
    CustomerName VARCHAR(255) NOT NULL,
    City VARCHAR(255) NOT NULL,
    Age INTEGER NOT NULL,
    Country VARCHAR(255) NOT NULL
);

INSERT into Customers (CustomerID, CustomerName, City, Age, Country)
VALUES 
(1, "Maria Andres", "Berlin", 22, "Germany"),
(2, "Antonio Greizmann", "Paris", 20, "France"),
(3, "Antonio Moreno", "Mexico D.F.", 30, "Mexico"),
(4, "Frank Lampard", "London", 46, "UK"),
(5, "Christina Benrglund", "Lulea", 15, "Spain"),
(6, "Hanna Moos", "Berlin", 49, "Germany"),
(7,"Frederrique Citeaux", "Strasbourg", 25, "France"),
(8, "Zlatan Sommer", "Madrid", 27, "Spain"),
(9, "David Beckham", "London", 37, "UK"),
(10, "Christiano Ronaldo", "Lisbon", 30, "Portugal");