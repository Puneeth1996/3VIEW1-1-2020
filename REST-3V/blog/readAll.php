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
    echo json_encode($blogs_arr);
    $token = array(
        "iss"       => $config['issuer'],
        "aud"       => $config['audience'],
        "iat"       => $config['issued-time'],
        "nbf"       => $config['not-before'],
        "data"      => $blogs_arr
    );


    $jwt = JWT::encode($token, $config['secret-key']);
    echo json_encode(
        array(
            "message" => "Encode: Generation of Blog Data JWT.",
            "jwt" => $jwt
        )
    );
    if($jwt){
        try {
            $decoded = JWT::decode($jwt, $config['secret-key'], array('HS256'));
            http_response_code(200);
            echo json_encode(array(
                "message" => "Decode: Generation of Blog Data JWT.",
                "data" => $decoded->data,
                "all-Data" => $decoded
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