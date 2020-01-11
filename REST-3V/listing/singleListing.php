
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

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

echo($_POST['propertyID'].''. $_POST['propertyName']);

$listings = new Listings($db);
$result = $listings->listingsOne($_POST['propertyID'],$_POST['propertyName']);

print_r($result);
if ($result) {
    $singleListingData=array(
        "property_id" => $result['property_id'],
        "house_name" => $result['house_name'],
        "property_visuals_type" => $result['property_visuals_type'],
        "date_created" => $result['date_created'],
        "geospacial_data" => $result['geospacial_data'],
        "area" => $result['area'],
        "price" => $result['price'],
        "property_features" => $result['property_features'],
        "property_desc" => $result['property_desc'],
        "property_descfull" => $result['property_descfull'],
        "addresses" => $result['addresses'],
        "sixDigitPIN" => $result['sixDigitPIN'],
        "mtl_file" => $result['mtl_file'],
        "obj_file" => $result['obj_file'],
        "threeJS_iframe_url" => $result['threeJS_iframe_url'],
        "react360_iframe_url" => $result['react360_iframe_url']
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
      http_response_code(404);
      echo json_encode(
          array("message" => "Sorry the  " . $_POST['propertyID'] . " and " . $_POST['propertyName'] . " Not Found!" )
      );
  }



?>


