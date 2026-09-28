# COLORS WEBSITE

colors is a web applications for users to login, save any color they enter and also search through the colors that they have saved. Built using a LAMP stack where a frontend of JavaScript, HTML and CSS talks to PHP JSON API endpoints which read and write data to a MySQL database. 

## Technologies Used

- Linux: Server operating system
- Apache: web server
- MySQL: database
- PHP: backend API endpoints
- HTML, CSS, JavaScript: frontend

## Setup

You will need a server with Apache, MySQL and PHP installed 

1. Create the database

Log in MySQL and create a database and user. The tables below will match what the API is expecting. 

```sql
CREATE TABLE `Users`
(
    `ID` INT NOT NULL AUTO_INCREMENT,
    `FirstName` VARCHAR(50) NOT NULL DEFAULT '',
    `LastName` VARCHAR(50) NOT NULL DEFAULT '',
    `Login` VARCHAR(50) NOT NULL DEFAULT '',
    `Password` VARCHAR(50) NOT NULL DEFAULT '',
    PRIMARY KEY (`ID`)
) ENGINE = InnoDB;
 
CREATE TABLE `Colors`
(
    `ID` INT NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(50) NOT NULL DEFAULT '',
    `UserID` INT NOT NULL DEFAULT '0',
    PRIMARY KEY (`ID`)
) ENGINE = InnoDB;
```

2. Set up database credentials

Copy the template in config_example.php and name it config.php and input your own values

3. Enjoy!

Open a browser and go to the servers ip address and enjoy!


## Assumptions and Limitations

This projects assumes a standard LAMP environment

This project is limited by its lack of a login page where users must be added manually, also the md5 hashing functionality for passwords isn't used by default and is commented out. 