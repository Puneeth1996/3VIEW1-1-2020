<?php
$config = require __DIR__ . '/config.php';
require __DIR__ . '/php-jwt-master/src/BeforeValidException.php';
require __DIR__ . '/php-jwt-master/src/ExpiredException.php';
require __DIR__ . '/php-jwt-master/src/SignatureInvalidException.php';
require __DIR__ . '/php-jwt-master/src/JWT.php';
use \Firebase\JWT\JWT;

date_default_timezone_set('Asia/Kolkata');
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
include_once '../config/database.php';
include_once '../objects/blog.php';
$database = new Database();
$db = $database->getConnection();

$blog = new Blog($db);
$stmt = $blog->read();
$num = $stmt->rowCount();

if($num>0){
    $blogs_arr=array();
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $blogs_item=array(
            "id" => $id,
            "Blog_unique_id" => $Blog_unique_id,
            "Publish_date" => $Publish_date,
            "Main_title" => $Main_title,
            "Sub_title" => $Sub_title,
            "Author" => $Author,
            "category" => $category,
            "desp_small" =>$desp_small,
            "desp_full" =>$desp_full,
            "img" =>$img,
        );
        array_push($blogs_arr, $blogs_item);
    }
    http_response_code(200);
    $token = array(
        "iss"       => $config['issuer'],
        "aud"       => $config['audience'],
        "iat"       => $config['issued-time'],
        "nbf"       => $config['not-before'],
        "data"      => $blogs_arr
    );


    $jwt = JWT::encode($token, $config['secret-key']);
    if($jwt){
        try {
            // the client can make the post for secret-key
            //  and the acces to the api is possible 
            // please change the $config['secret-key']
            // $_POST['secret-key']
            // $_POST['secret-key'] this value is sent from the 
            // client side code making the POST Request 
            $decoded = JWT::decode($jwt, $config['secret-key'], array('HS256'));
            http_response_code(200);
            echo json_encode(array(
                "Blogs_data" => $decoded->data
            ));
        }
        catch (\Exception $e) {
            echo 'error' . $e;
        }
    }
}

else{
    http_response_code(404);
    echo json_encode(
        array("message" => "No Blogs Are Available.")
    );
}

?>