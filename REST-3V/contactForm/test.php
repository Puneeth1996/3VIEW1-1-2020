<?php

$results = ['xyxz','xsf','sdf'];

$arr = [];

$arr['status_code'] = 1;
$arr['message'] = "Data successfully found";
$arr['data'] = $results;

echo json_encode($arr);


?>