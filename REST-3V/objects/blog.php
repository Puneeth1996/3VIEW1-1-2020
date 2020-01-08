<?php

class Blog{

    // database connection and table name
    private $conn;
    private $table_name = "view_backend";
    // object properties
    public $id;
    public $Blog_unique_id;
    public $Publish_date;
    public $Main_title;
    public $Sub_title;
    public $Author;
    public $category;
    public $desp_small;
    public $desp_full;
    public $img;



    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }



    // read all blogs
    function read(){
        
        $query = "SELECT 
                        *
                    FROM 
                        ".$this->table_name."
                ";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }







    // read one-blog
    function readOne($Blog_unique_id){

        echo($Blog_unique_id);

        $query = "SELECT 
                        *
                    
                    FROM 
                        ".$this->table_name."
                    WHERE Blog_unique_id = ".$Blog_unique_id."
                ";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        // $stmt->execute([$Blog_unique_id]);
        $stmt->execute();


        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $row = $stmt->fetch();
        echo('$row-----');
        echo($row['Main_title'].'  and   '.$row['desp_small']);



        return $stmt;
    }


}

?>