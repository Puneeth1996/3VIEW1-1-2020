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

