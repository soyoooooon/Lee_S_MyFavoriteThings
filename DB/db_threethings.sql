-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 28, 2019 at 05:36 PM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_threethings`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_explain`
--

CREATE TABLE `tbl_explain` (
  `ID` int(11) NOT NULL,
  `proID` int(11) DEFAULT NULL,
  `this` varchar(20) DEFAULT NULL,
  `info` varchar(100) DEFAULT NULL,
  `cost` varchar(30) DEFAULT NULL,
  `happiness` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_explain`
--

INSERT INTO `tbl_explain` (`ID`, `proID`, `this`, `info`, `cost`, `happiness`) VALUES
(1, 1, 'Cat', 'Nothing makes me happy except a cute kitten. :l ', 'Responsibility', '4.5/5'),
(2, 2, 'Cozy bedroom', 'I wish I have my own cozy bedroom. :l', 'same cost as getting a house', '5/5'),
(3, 3, 'Sleeping', 'I want to sleep with cuddling with a cat at my own cozy bedroom;/', '$0', '5/5');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_explain`
--
ALTER TABLE `tbl_explain`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_explain`
--
ALTER TABLE `tbl_explain`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
