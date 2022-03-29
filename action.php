<?php
 try {
    $host = "localhost";   
    $dbname = "bachkhoatech"; 
    $username = "root";    
    $password = "";        
    $connect = new PDO("mysql:host=$host; dbname=$dbname; charset=utf8", $username, $password);
} catch (PDOException $e) {
    die("Error : " . $e->getMessage() ) ;  
}

$received_data = json_decode(file_get_contents('php://input'));

$data = array();

if( $received_data -> action == 'getData'){
    $query ="SELECT * FROM `iot_datas` ORDER BY `id`";
    $statement = $connect->prepare($query);
    $statement->execute();
    while ($row = $statement->fetch( PDO::FETCH_ASSOC )) {
        $data[] = $row;
    }
    echo json_encode($data);
}