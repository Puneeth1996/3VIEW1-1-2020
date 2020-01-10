
<?php


// should work on this for displaying the single blog data


// we would only need     Main_title     img     full_descr         

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
include_once '../objects/listings.php';
$database = new Database();
$db = $database->getConnection();

$listings = new Listings($db);


// $Blog_unique_id = $_POST['Blog_unique_id'];
// // echo($Blog_unique_id);

// $row = $blog->readOne($Blog_unique_id);
// echo($row['Main_title']);



$row = $listings->listingsAll();


// echo('$row-----');
// echo($row['Main_title'].'  and   '.$row['desp_small']);

// if($row){
//     $single_blog_arr=array(
//         "id" => $row['id'],
//         "Blog_unique_id" => $row['Blog_unique_id'],
//         "Publish_date" => $row['Publish_date'],
//         "Main_title" => $row['Main_title'],
//         "Sub_title" => $row['Sub_title'],
//         "Author" => $row['Author'],
//         "category" => $row['category'],
//         "desp_small" => $row['desp_small'],
//         "desp_full" => $row['desp_full'],
//         "img" => $row['img'],
//     );

//     http_response_code(200);
//     $token = array(
//         "iss"       => $config['issuer'],
//         "aud"       => $config['audience'],
//         "iat"       => $config['issued-time'],
//         "nbf"       => $config['not-before'],
//         "data"      => $single_blog_arr
//     );


//     $jwt = JWT::encode($token, $config['secret-key']);
//     if($jwt){
//         try {
//             // the client can make the post for secret-key
//             //  and the acces to the api is possible 
//             // please change the $config['secret-key']
//             // $_POST['secret-key']
//             // $_POST['secret-key'] this value is sent from the 
//             // client side code making the POST Request 
//             $decoded = JWT::decode($jwt, $config['secret-key'], array('HS256'));
//             http_response_code(200);
//             echo json_encode(array(
//                 "Blog_data_single" => $decoded->data
//             ));
//         }
//         catch (\Exception $e) {
//             echo 'error' . $e;
//         }
//     }
// }

// else{
//     http_response_code(404);
//     echo json_encode(
//         array("message" => "Blog With " . $_POST['Blog_unique_id'] ." Not Found!" )
//     );
// }




?>


