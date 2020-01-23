<?php

class Listings{

    // database connection and table name
    private $conn;
    private $table_name = "listings_table";
    // object properties
    public $property_id;



    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    // read one-listings
    function listingsOne($property_id){
        // echo($property_id);
        $query = "SELECT 
                *
            FROM 
                '.$this->table_name.'
            WHERE property_id LIKE ? 
        ";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        $stmt->execute([$property_id]);

        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $row = $stmt->fetch();
        
        return $row;
    }
}

?>