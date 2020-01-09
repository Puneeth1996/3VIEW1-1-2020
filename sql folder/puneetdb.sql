DROP DATABASE IF EXISTS three_view;
CREATE DATABASE IF NOT EXISTS three_view; 
USE three_view;

DROP TABLE IF EXISTS view_backend, listings, listings_data, property_file;
CREATE TABLE view_backend (
    id INT AUTO_INCREMENT NOT NULL,
    Publish_date DATE NOT NULL,
    Main_title VARCHAR(50) NOT NULL,
    Sub_title VARCHAR(200) NOT NULL,
    Author VARCHAR(40) NOT NULL,
    category VARCHAR(40) NOT NULL,
    desp_small VARCHAR(1500) NOT NULL,
    desp_full VARCHAR(5000) NOT NULL,
    img LONGBLOB ,
    PRIMARY KEY (id)
);

CREATE TABLE listings (
    property_id     INT         NOT NULL,
    house_name   VARCHAR(40)     NOT NULL,
	property_visuals   VARCHAR(400)     NOT NULL,
	date_created   date     NOT NULL,
	geospacial_data   VARCHAR(100)     NOT NULL,

    PRIMARY KEY (property_id),
    UNIQUE  KEY (date_created)
);

CREATE TABLE listings_data (
    property_id     int         NOT NULL,
    area   VARCHAR(40)     NOT NULL,
	price   VARCHAR(40)     NOT NULL,
    property_features   VARCHAR(400)     NOT NULL,
	property_desc  VARCHAR(400)   NOT NULL,
	property_descfull   VARCHAR(1500)     NOT NULL,
    addresses   VARCHAR(400)     NOT NULL,
    FOREIGN KEY (property_id)  REFERENCES listings (emp_no)    ON DELETE CASCADE,
    PRIMARY KEY (property_id),
    UNIQUE  KEY (area, price)
);

CREATE TABLE property_file (
    property_id     int         NOT NULL,
    three_D_files VARCHAR(40)     NOT NULL ,
	FOREIGN KEY (property_id)  REFERENCES listings (emp_no)    ON DELETE CASCADE,
    PRIMARY KEY (property_id)
);

INSERT INTO `view_backend` VALUES (1,'2019-12-12','Puneeth Villa','fk  and forget','manjunath','hebbla',
'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
'There are many variatiidons of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
'C:\Users\Manju\Downloads\sql_img.jpg');

#select * from view_backend;