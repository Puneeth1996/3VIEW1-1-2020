<?php
date_default_timezone_set('Asia/Kolkata');

header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');


$DBData = include_once '../safe/contactFormDB.php';



$conn = mysqli_connect($DBData['hostname'], $DBData['userName'], $DBData['password'], $DBData['databaseName']);


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
  //   $name        = $_POST['name'];
  // 	$email       = $_POST["email"];
  // 	$subject     = "From 3View Emailer Contact Form";
  // 	$content     = 'Contact No:'.$_POST["telephone"].'\n\n\n\n\n\n'.$_POST["message"];
  // 	$toEmail     = "puneeth1996p@gmail.com";
  //   $mailHeaders = "From: " . $name . "<". $email .">\r\n";
  //
  //   $message = "";
	// if(mail($toEmail, $subject, $content, $mailHeaders)) {
  //       $message = "Your contact information is received successfully.";
  //       $type    = "success";
  //   }
  //
  //   mail($toEmail , $subject , $content , $mailHeaders);
    echo json_encode(["sent" => 1 ]);
} else {
    echo json_encode(["sent" => 0 ]);
}



?>
