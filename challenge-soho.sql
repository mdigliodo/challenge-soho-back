-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 16, 2022 at 08:57 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `challenge-soho`
--

-- --------------------------------------------------------

--
-- Table structure for table `proyectos`
--

CREATE TABLE `proyectos` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `logo` text NOT NULL,
  `img` text NOT NULL,
  `fontColor` varchar(10) NOT NULL,
  `primaryColor` varchar(10) NOT NULL,
  `secondaryColor` varchar(10) NOT NULL,
  `tags` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `proyectos`
--

INSERT INTO `proyectos` (`id`, `title`, `description`, `logo`, `img`, `fontColor`, `primaryColor`, `secondaryColor`, `tags`) VALUES
(1, 'Sitio publico y privado', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae omnis minus fugit nisi molestias id! A dicta officiis quas nostrum perspiciatis consequatur, in doloribus, inventore blanditiis doloremque architecto, explicabo laboriosam.', 'https://cellworld-ec.com/wp-content/uploads/2020/11/Diners-Club-International-logo-Transparente.png', 'https://test.mutualiac.com.ar/uploads/projectSoho/project1.png', '#FFFFFF', '#223B82', '#FFFFFF', 'ux,ui,responsive,test'),
(2, 'Sitio publico y privado', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae omnis minus fugit nisi molestias id! A dicta officiis quas nostrum perspiciatis consequatur, in doloribus, inventore blanditiis doloremque architecto, explicabo laboriosam.', 'https://www.siconsultoresperu.com/wp-content/uploads/2018/01/Logo-derco-1.png', 'https://test.mutualiac.com.ar/uploads/projectSoho/project2.png', '#FFFFFF', '#C92C3A', '#FFFFFF', 'tags,ux,ui,testeando,mobile'),
(3, 'TV App', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae omnis minus fugit nisi molestias id! A dicta officiis quas nostrum perspiciatis consequatur, in doloribus, inventore blanditiis doloremque architecto, explicabo laboriosam.', 'https://www.siconsultoresperu.com/wp-content/uploads/2018/01/Logo-derco-1.png', 'https://test.mutualiac.com.ar/uploads/projectSoho/project3.png', '#000', '#FFFFFF', '#C92C3A', 'usabilidad,ui,ux');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `proyectos`
--
ALTER TABLE `proyectos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `proyectos`
--
ALTER TABLE `proyectos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
