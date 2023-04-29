-- MariaDB dump 10.19  Distrib 10.6.5-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: db_2065697
-- ------------------------------------------------------
-- Server version	10.6.5-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `weather`
--

DROP TABLE IF EXISTS `weather`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `weather` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `city` varchar(50) DEFAULT NULL,
  `temperature` float DEFAULT NULL,
  `weatherCondition` text DEFAULT NULL,
  `humidity` int(11) DEFAULT NULL,
  `pressure` int(11) DEFAULT NULL,
  `windSpeed` float DEFAULT NULL,
  `windDirection` int(11) DEFAULT NULL,
  `timeUpdate` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weather`
--

LOCK TABLES `weather` WRITE;
/*!40000 ALTER TABLE `weather` DISABLE KEYS */;
INSERT INTO `weather` VALUES (1,'San Antonio',-1.04,'clear sky',69,1033,2.06,350,'2022-01-03 08:27:41'),(2,'San Antonio',-1.04,'clear sky',69,1033,2.06,350,'2022-01-03 08:29:35'),(3,'San Antonio',-1.04,'clear sky',69,1033,2.06,350,'2022-01-03 08:29:52'),(4,'San Antonio',-1.04,'clear sky',69,1033,2.06,350,'2022-01-03 08:30:22'),(5,'San Antonio',-1.04,'clear sky',69,1033,2.06,350,'2022-01-03 08:30:35'),(6,'San Antonio',-1.04,'clear sky',69,1033,2.06,350,'2022-01-03 08:30:58'),(7,'San Antonio',-1.04,'clear sky',69,1033,2.06,350,'2022-01-03 08:31:12'),(8,'San Antonio',-1.04,'clear sky',69,1033,2.06,350,'2022-01-03 08:31:26'),(9,'San Antonio',-1.04,'clear sky',69,1033,2.06,350,'2022-01-03 08:31:44'),(10,'San Antonio',-1.04,'clear sky',69,1033,2.06,350,'2022-01-03 08:31:56'),(11,'San Antonio',-1.04,'clear sky',69,1033,2.06,350,'2022-01-03 08:32:11'),(12,'San Antonio',-1.04,'clear sky',69,1033,2.06,350,'2022-01-03 08:32:25');
/*!40000 ALTER TABLE `weather` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-03 14:20:34
