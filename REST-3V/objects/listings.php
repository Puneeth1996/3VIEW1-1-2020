<?php

class Listings{

    // database connection and table name
    private $conn;
    private $table_name = "listings";
    // object properties
    // public $property_id;



    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    // read one-listings
    function listingsOne($propertyID,$propertyName){
        echo($propertyID.''.$propertyName);
        $query = "SELECT 
                *
            FROM 
                ".$this->table_name."
            WHERE propertyID LIKE1 ? AND propertyName LIKE2 ? 
        ";


        // prepare query statement
        $result = $this->conn->prepare($query);

        // execute query
        $result->execute([$propertyID,$propertyName]);

        return $result;
    }
}

?>