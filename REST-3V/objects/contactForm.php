<?php
class Blog{

    // database connection and table name
    private $conn;
    private $table_name = "contactform";
    // object properties



    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }



    // read all blogs
    function createContactRow($name, $email, $telephone, $message){
        
        $query = "insert into contactform (name, email, telephone, message)
                    values(
                    '" . $name . "',
                    '" . $email . "',
                    '" . $telephone . "',
                    '" . $message . "'
                    )";


        // prepare query statement
        $result = $this->conn->prepare($query);

        // execute query
        $result->execute();

        return $result;
    }


}
?>