-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 20, 2020 at 10:55 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

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
-- Table structure for table `contactform`
--

CREATE TABLE `contactform` (
  `id` int(11) NOT NULL,
  `name` varchar(35) NOT NULL,
  `email` varchar(51) NOT NULL,
  `telephone` int(18) NOT NULL,
  `message` varchar(1250) NOT NULL,
  `time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contactform`
--

INSERT INTO `contactform` (`id`, `name`, `email`, `telephone`, `message`, `time`) VALUES
(60, 'PUNEETH P', 'puneeth1996p@gmail.com', 2147483647, 'asdf asdfa )(*)(*())(*)(*()*(*)(*)OIJlkjsdlfkjlkjasdflkjsdlkjfsaf', '2020-01-08 21:20:14'),
(61, 'PUNEETH P', 'puneeth1996p@gmail.com', 0, 'fasdf asdf asd)U()*&*&(&(^&sfasdfasdf asdf as', '2020-01-08 21:20:30'),
(63, 'PUNEETH P', 'puneeth1996p@gmail.com', 2147483647, '3443trwsfa', '2020-01-12 13:16:17'),
(64, 'PUNEETH P', 'puneeth1996p@gmail.com', 0, 'wer wer', '2020-01-12 13:16:21'),
(65, 'Puneeth p', 'puneeth1996p@gmail.com', 2147483647, '2342344df asdfa sd', '2020-01-13 12:10:43'),
(66, 'Puneeth p', 'puneeth1996p@gmail.com', 0, 'fad asdf a1234 234', '2020-01-13 12:10:48'),
(67, 'Puneeth p', 'puneeth1996p@gmail.com', 2147483647, 'sadf ', '2020-03-03 11:24:38'),
(68, 'Puneeth p', 'puneeth1996p@gmail.com', 0, 'asf af ', '2020-03-03 11:24:42'),
(69, 'Puneeth p', 'puneeth1996p@gmail.com', 0, '8956562', '2020-03-03 12:03:03'),
(70, 'Puneeth p', 'puneeth1996p@gmail.com', 2147483647, '2', '2020-03-03 12:03:16');

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `name` varchar(20) NOT NULL,
  `description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `name`, `description`) VALUES
(1, 'admin', 'Administrator'),
(2, 'members', 'General User');

-- --------------------------------------------------------

--
-- Table structure for table `listings_table`
--

CREATE TABLE `listings_table` (
  `id` int(11) NOT NULL,
  `added_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `property_id` int(15) NOT NULL,
  `house_name` varchar(155) NOT NULL,
  `property_img_loc` varchar(250) NOT NULL,
  `property_visuals_type` varchar(155) NOT NULL,
  `date_created` datetime NOT NULL DEFAULT current_timestamp(),
  `geospacial_data` varchar(155) NOT NULL,
  `area` varchar(155) NOT NULL,
  `price` varchar(155) NOT NULL,
  `property_features` varchar(750) NOT NULL,
  `property_desc` varchar(250) NOT NULL,
  `property_desc_full` varchar(1025) NOT NULL,
  `addresses` varchar(250) NOT NULL,
  `property_id_ref_num` varchar(12) NOT NULL,
  `sixDigitPIN` varchar(6) NOT NULL,
  `mtl_file_loc` varchar(150) NOT NULL,
  `obj_file_loc` varchar(150) NOT NULL,
  `threeJS_iframe_url` varchar(150) NOT NULL,
  `react360_iframe_url` varchar(150) NOT NULL,
  `property_sale_availablity` varchar(150) NOT NULL,
  `property_legal_desc` varchar(1250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `listings_table`
--

INSERT INTO `listings_table` (`id`, `added_time`, `property_id`, `house_name`, `property_img_loc`, `property_visuals_type`, `date_created`, `geospacial_data`, `area`, `price`, `property_features`, `property_desc`, `property_desc_full`, `addresses`, `property_id_ref_num`, `sixDigitPIN`, `mtl_file_loc`, `obj_file_loc`, `threeJS_iframe_url`, `react360_iframe_url`, `property_sale_availablity`, `property_legal_desc`) VALUES
(1, '2020-03-20 09:33:45', 1, 'RamaKrishna Nilayam', 'city_4.jpg', 'House To Be Visulaised', '2020-01-12 12:58:00', '[123,21]', '1234', '0309-', 'Hot Tub|4 car garage', 'New And Modern located in the heart of Bangalore, this is a short description', 'New And Modern home situated at the heart of Bangalore\r\n\r\nNew And Modern home situated at the heart of Bangalore\r\n\r\n\r\n\r\nNew And Modern home situated at the heart of Bangalore\r\n\r\n\r\n\r\nNew And Modern home situated at the heart of Bangalore\r\n\r\n\r\n\r\n\r\n\r\nNew And Modern home situated at the heart of Bangalore\r\n\r\n\r\nNew And Modern home situated at the heart of Bangalore', '#20,Ramakrishna Nilaya,Subbanna Layout,nr st philomenas english school', 'ASD123', '123asd', 'asfd', 'sdf as', 'sf asd', 'sdf sa', 'sadf sa', 'sff sadf asdf'),
(2, '2020-03-20 09:33:45', 2, 'VNR', 'city_3.jpg', 'House To Be Visulaised', '2020-01-12 12:58:00', '[123,21]', '1234', '0309-', 'Hot Tub|4 car garage|Luxury Villa ', 'New And Modern located in the heart of Bangalore, this is a short description', 'New And Modern home situated at the heart of Bangalore\r\n\r\nNew And Modern home situated at the heart of Bangalore\r\n\r\n\r\n\r\nNew And Modern home situated at the heart of Bangalore\r\n\r\n\r\n\r\nNew And Modern home situated at the heart of Bangalore\r\n\r\n\r\n\r\n\r\n\r\nNew And Modern home situated at the heart of Bangalore\r\n\r\n\r\nNew And Modern home situated at the heart of Bangalore', '#20,Ramakrishna Nilaya,Subbanna Layout,nr st philomenas english school', 'qwerty', 'qwerty', 'asfd', 'sdf as', 'sf asd', 'sdf sa', 'sadf sa', 'sff sadf asdf');

-- --------------------------------------------------------

--
-- Table structure for table `login_attempts`
--

CREATE TABLE `login_attempts` (
  `id` int(11) UNSIGNED NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `login` varchar(100) NOT NULL,
  `time` int(11) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `news_table`
--

CREATE TABLE `news_table` (
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
-- Dumping data for table `news_table`
--

INSERT INTO `news_table` (`id`, `Blog_unique_id`, `Publish_date`, `Main_title`, `Sub_title`, `Author`, `category`, `desp_small`, `desp_full`, `img`) VALUES
(1, 'houseMan', '2019-12-10', 'All the papers you need to own a house', ' Donec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, si', 'Puneeth', 'Uncatagorised | Legal', 'ec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, s', 'Donec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, sit amet vehicula enim aliquam at. Suspendisse non urna bibendum, dictum quam sit amet, aliquet nisi. In dapibus aliquet porttitor. Pellentesque at malesuada ante.', 0x433a5c78616d70705c6874646f63735c686f6d655f6261636b67726f756e642e6a7067),
(3, 'ManWomen', '2019-12-08', 'All the papers you need to own a house', ' Donec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, si', 'Puneeth', 'Uncatagorised | Legal', 'ec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, s', 'Donec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, sit amet vehicula enim aliquam at. Suspendisse non urna bibendum, dictum quam sit amet, aliquet nisi. In dapibus aliquet porttitor. Pellentesque at malesuada ante.', 0x433a5c78616d70705c6874646f63735c686f6d655f6261636b67726f756e3132642e6a7067),
(4, 'debtCredit', '2019-12-09', 'All the papers you need to own a house', ' Donec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, si', 'Puneeth', 'Uncatagorised | Legal', 'ec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, s', 'Donec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, sit amet vehicula enim aliquam at. Suspendisse non urna bibendum, dictum quam sit amet, aliquet nisi. In dapibus aliquet porttitor. Pellentesque at malesuada ante.', 0x433a5c78616d70705c6874646f63735c686f6d655f6261636b65717772777167726f756e642e6a7067),
(5, 'CaliHtown', '2019-12-10', 'dsfsf asdf', 'asdf asdf ', 'sdf ', 'Uncatagorised | Legal', 'ec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, s', 'Donec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, sit amet vehicula enim aliquam at. Suspendisse non urna bibendum, dictum quam sit amet, aliquet nisi. In dapibus aliquet porttitor. Pellentesque at malesuada ante.', NULL),
(6, 'CHiTOwnFreeTOwn', '2019-12-11', 'All the papers you need to own a house', ' Donec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, si', 'Puneeth', 'Uncatagorised | Legal', 'ec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, s', 'Donec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, sit amet vehicula enim aliquam at. Suspendisse non urna bibendum, dictum quam sit amet, aliquet nisi. In dapibus aliquet porttitor. Pellentesque at malesuada ante.', 0x433a5c78616d70705c6874646f63735c686f6d655f6261636b67726f756e71343331642e6a7067);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) UNSIGNED NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(254) NOT NULL,
  `activation_selector` varchar(255) DEFAULT NULL,
  `activation_code` varchar(255) DEFAULT NULL,
  `forgotten_password_selector` varchar(255) DEFAULT NULL,
  `forgotten_password_code` varchar(255) DEFAULT NULL,
  `forgotten_password_time` int(11) UNSIGNED DEFAULT NULL,
  `remember_selector` varchar(255) DEFAULT NULL,
  `remember_code` varchar(255) DEFAULT NULL,
  `created_on` int(11) UNSIGNED NOT NULL,
  `last_login` int(11) UNSIGNED DEFAULT NULL,
  `active` tinyint(1) UNSIGNED DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `company` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `ip_address`, `username`, `password`, `email`, `activation_selector`, `activation_code`, `forgotten_password_selector`, `forgotten_password_code`, `forgotten_password_time`, `remember_selector`, `remember_code`, `created_on`, `last_login`, `active`, `first_name`, `last_name`, `company`, `phone`) VALUES
(1, '127.0.0.1', 'administrator', '$2y$12$thCXrBTj/43/.gkspA.RMee7AuRXBWuMUY1hJt/UR29ZHIHPLq.py', 'admin@admin.com', NULL, '', NULL, NULL, NULL, NULL, NULL, 1268889823, 1578991518, 1, 'Admin', 'istrator', 'ADMIN', '0'),
(2, '::1', 'puneeth1996p@gmail.com', '$2y$12$CzlyP7FhiZdRhM5im2ICd.N8gxqj2G2vl/4htp.3F9h/i3gnOP.gW', 'puneeth1996p@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1577169252, 1578987650, 1, 'Puneeth', 'p', 'Gq', '+919066339217'),
(3, '::1', 'manju@gmail.com', '$2y$10$95G8BKFQw26HQD20YdKyIuavzhtaHjbE7xobN6fnNRdcd12LsENMa', 'manju@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1577169287, NULL, 1, 'Manju', 'SP', 'gq', '728034802389'),
(4, '::1', 'raju@gmail.com', '$2y$10$rhRv7h9Eanxev6ofZoOGEOg1pAq8sBbjx8t5dcM/4/V3HrWa/zTKm', 'raju@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1577947703, 1578722323, 1, 'Raju', 'R', 'GQ', '80247025340');

-- --------------------------------------------------------

--
-- Table structure for table `users_groups`
--

CREATE TABLE `users_groups` (
  `id` int(11) UNSIGNED NOT NULL,
  `user_id` int(11) UNSIGNED NOT NULL,
  `group_id` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users_groups`
--

INSERT INTO `users_groups` (`id`, `user_id`, `group_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(8, 2, 1),
(9, 2, 2),
(6, 3, 2),
(7, 4, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contactform`
--
ALTER TABLE `contactform`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `listings_table`
--
ALTER TABLE `listings_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login_attempts`
--
ALTER TABLE `login_attempts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_table`
--
ALTER TABLE `news_table`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Blog_unique_id` (`Blog_unique_id`) USING HASH;

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uc_email` (`email`),
  ADD UNIQUE KEY `uc_activation_selector` (`activation_selector`),
  ADD UNIQUE KEY `uc_forgotten_password_selector` (`forgotten_password_selector`),
  ADD UNIQUE KEY `uc_remember_selector` (`remember_selector`);

--
-- Indexes for table `users_groups`
--
ALTER TABLE `users_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uc_users_groups` (`user_id`,`group_id`),
  ADD KEY `fk_users_groups_users1_idx` (`user_id`),
  ADD KEY `fk_users_groups_groups1_idx` (`group_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contactform`
--
ALTER TABLE `contactform`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `listings_table`
--
ALTER TABLE `listings_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `login_attempts`
--
ALTER TABLE `login_attempts`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `news_table`
--
ALTER TABLE `news_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users_groups`
--
ALTER TABLE `users_groups`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `users_groups`
--
ALTER TABLE `users_groups`
  ADD CONSTRAINT `fk_users_groups_groups1` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_users_groups_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
