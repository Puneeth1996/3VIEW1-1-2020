-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 09, 2020 at 05:58 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `3view-backend`
--

-- --------------------------------------------------------

--
-- Table structure for table `view_backend`
--

CREATE TABLE `view_backend` (
  `id` int(11) NOT NULL,
  `Blog_unique_id` varchar(5000) NOT NULL,
  `Publish_date` date NOT NULL,
  `Main_title` varchar(50) NOT NULL,
  `Sub_title` varchar(200) NOT NULL,
  `Author` varchar(40) NOT NULL,
  `category` varchar(40) NOT NULL,
  `desp_small` varchar(1500) NOT NULL,
  `desp_full` varchar(5000) NOT NULL,
  `img` longblob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `view_backend`
--

INSERT INTO `view_backend` (`id`, `Blog_unique_id`, `Publish_date`, `Main_title`, `Sub_title`, `Author`, `category`, `desp_small`, `desp_full`, `img`) VALUES
(1, 'houseMan', '2019-12-10', 'All the papers you need to own a house', ' Donec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, si', 'Puneeth', 'Uncatagorised | Legal', 'ec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, s', 'Donec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, sit amet vehicula enim aliquam at. Suspendisse non urna bibendum, dictum quam sit amet, aliquet nisi. In dapibus aliquet porttitor. Pellentesque at malesuada ante.', 0x433a5c78616d70705c6874646f63735c686f6d655f6261636b67726f756e642e6a7067),
(3, 'cloths&Senses', '2019-12-08', 'All the papers you need to own a house', ' Donec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, si', 'Puneeth', 'Uncatagorised | Legal', 'ec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, s', 'Donec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, sit amet vehicula enim aliquam at. Suspendisse non urna bibendum, dictum quam sit amet, aliquet nisi. In dapibus aliquet porttitor. Pellentesque at malesuada ante.', 0x433a5c78616d70705c6874646f63735c686f6d655f6261636b67726f756e3132642e6a7067),
(4, 'food,paper', '2019-12-09', 'All the papers you need to own a house', ' Donec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, si', 'Puneeth', 'Uncatagorised | Legal', 'ec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, s', 'Donec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, sit amet vehicula enim aliquam at. Suspendisse non urna bibendum, dictum quam sit amet, aliquet nisi. In dapibus aliquet porttitor. Pellentesque at malesuada ante.', 0x433a5c78616d70705c6874646f63735c686f6d655f6261636b65717772777167726f756e642e6a7067),
(5, 'plane*car*', '2019-12-10', 'dsfsf asdf', 'asdf asdf ', 'sdf ', 'Uncatagorised | Legal', 'Donec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, sit amet vehicula enim aliquam at. Suspendisse non urna bibendum, dictum quam sit amet, aliquet nisi. In dapibus aliquet porttitor. Pellentesque at malesuada ante.', 'Donec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, sit amet vehicula enim aliquam at. Suspendisse non urna bibendum, dictum quam sit amet, aliquet nisi. In dapibus aliquet porttitor. Pellentesque at malesuada ante.', NULL),
(6, 'filthy^ruch', '2019-12-11', 'All the papers you need to own a house', ' Donec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, si', 'Puneeth', 'Uncatagorised | Legal', 'ec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, s', 'Donec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, sit amet vehicula enim aliquam at. Suspendisse non urna bibendum, dictum quam sit amet, aliquet nisi. In dapibus aliquet porttitor. Pellentesque at malesuada ante.', 0x433a5c78616d70705c6874646f63735c686f6d655f6261636b67726f756e71343331642e6a7067);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `view_backend`
--
ALTER TABLE `view_backend`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `view_backend`
--
ALTER TABLE `view_backend`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
