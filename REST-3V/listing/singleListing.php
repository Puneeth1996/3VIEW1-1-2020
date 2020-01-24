
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
include_once '../objects/listings.php';
$database = new Database();
$db = $database->getConnection();

$listings = new Listings($db);
$row = $listings->listingsOne($_POST['property_id']);

if ($row) {
    $singleListingData=array(
        "property_id" => $row['property_id'],
        "house_name" => $row['house_name'],
        "property_visuals_type" => $row['property_visuals_type'],
        "date_created" => $row['date_created'],
        "geospacial_data" => $row['geospacial_data'],
        "area" => $row['area'],
        "price" => $row['price'],
        "property_features" => $row['property_features'],
        "property_desc" => $row['property_desc'],
        "property_desc_full" => $row['property_desc_full'],
        "addresses" => $row['addresses'],
        "property_id_ref_num" => $row['property_id_ref_num'],
        "sixDigitPIN" => $row['sixDigitPIN'],
        "mtl_file_loc" => $row['mtl_file_loc'],
        "obj_file_loc" => $row['obj_file_loc'],
        "threeJS_iframe_url" => $row['threeJS_iframe_url'],
        "react360_iframe_url" => $row['react360_iframe_url'],
        "property_sale_availablity" => $row['property_sale_availablity'],
        "property_legal_desc" => $row['property_legal_desc']

    );

    http_response_code(200);
    $token = array(
        "iss"       => $config['issuer'],
        "aud"       => $config['audience'],
        "iat"       => $config['issued-time'],
        "nbf"       => $config['not-before'],
        "data"      => $singleListingData
    );


    $jwt = JWT::encode($token, $config['secret-key']);
    if($jwt){
        try {
            $decoded = JWT::decode($jwt, $config['secret-key'], array('HS256'));
            http_response_code(200);
            echo json_encode(array(
                "singleListingData" => $decoded->data
            ));
        }
        catch (\Exception $e) {
            echo 'error' . $e;
        }
    }
}

    else{
        // http_response_code(404);
        // echo json_encode(
        //     array("message" => "Sorry the  " . $_POST['property_id'] . " Not Found!" )
        // );
        echo json_encode(array(
            "singleListingData" => "" 
        ));
    }

?>


