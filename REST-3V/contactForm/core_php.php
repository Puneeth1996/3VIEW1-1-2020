<?php
date_default_timezone_set('Asia/Kolkata');

header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');



$conn = mysqli_connect("localhost", "root", "", "admin_temp");


$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);



$query = "insert into contactform (name, email, telephone, message)
            values(
            '" . $_POST['name'] . "',
            '" . $_POST['email'] . "',
            '" . $_POST['telephone'] . "',
            '" . $_POST['message'] . "'
            )";

$result = mysqli_query($conn, $query);


if ($result) {
    echo json_encode(["sent" => 1, "message"=> $_POST ]);
} else {
    echo json_encode(["sent" => 0, ]);
}
?>
