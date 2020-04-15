CREATE TABLE `tabs` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `icon` varchar(255),
  `parentId` int
);

CREATE TABLE `charts` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `order` int,
  `columnNames` varchar(255) NOT NULL,
  `tabId` int NOT NULL
);

CREATE TABLE `schedules` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `columnNames` varchar(255) NOT NULL,
  `tabId` int NOT NULL
);

CREATE TABLE `hscodes` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `code` int NOT NULL,
  `description` text NOT NULL
);

CREATE TABLE `datas` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `file` varchar(255) NOT NULL,
  `hscodeId` int NOT NULL,
  `tabId` int NOT NULL
);

ALTER TABLE `tabs` ADD FOREIGN KEY (`parentId`) REFERENCES `tabs` (`id`);

ALTER TABLE `charts` ADD FOREIGN KEY (`tabId`) REFERENCES `tabs` (`id`);

ALTER TABLE `schedules` ADD FOREIGN KEY (`tabId`) REFERENCES `tabs` (`id`);

ALTER TABLE `datas` ADD FOREIGN KEY (`hscodeId`) REFERENCES `hscodes` (`id`);

ALTER TABLE `datas` ADD FOREIGN KEY (`tabId`) REFERENCES `tabs` (`id`);
