-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 21 Jul 2023 pada 15.49
-- Versi server: 8.0.32-0ubuntu0.22.04.2
-- Versi PHP: 8.1.2-1ubuntu2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user_app`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `lagu`
--

CREATE TABLE `lagu` (
  `id` int NOT NULL,
  `judul` varchar(255) DEFAULT NULL,
  `artis` varchar(255) DEFAULT NULL,
  `is_favorite` smallint NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `lagu_copy`
--

CREATE TABLE `lagu_copy` (
  `id` int NOT NULL,
  `judul` varchar(255) DEFAULT NULL,
  `artis` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `lagu_copy`
--

INSERT INTO `lagu_copy` (`id`, `judul`, `artis`, `created_at`) VALUES
(2, 'Lagu Edit 2', 'Artis Edit 2', '2023-07-20 20:57:57'),
(4, 'Lagu 2', 'Artis 2', '2023-07-20 23:13:15'),
(5, 'Lagu 2', 'Artis 2', '2023-07-21 14:17:09');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tasks`
--

CREATE TABLE `tasks` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `completed` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `lagu`
--
ALTER TABLE `lagu`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `lagu_copy`
--
ALTER TABLE `lagu_copy`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `lagu`
--
ALTER TABLE `lagu`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `lagu_copy`
--
ALTER TABLE `lagu_copy`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
