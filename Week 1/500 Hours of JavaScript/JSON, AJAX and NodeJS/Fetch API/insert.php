<?php
$customername = $_POST['customername'];
$phonenumber = $_POST['phonenumber'];
$homeaddress = $_POST['homeaddress'];
$emailaddress = $_POST['emailaddress'];
$delivery = $_POST['delivery'];

//form validator to ensure fields are not empty
if (!empty($customername) || !empty($phonenumber) || !empty($homeaddress) || !empty($emailaddress) || !empty($delivery)) {
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbName = "customers";

//establish a connection
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

    if (mysqli_connect_error()) {
         die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
        }  else {
        $INSERT = "INSERT Into information (customername, phonenumber, homeaddress, emailaddress, delivery) values (?, ?, ?, ?, ?)";

//prepare statement
    $stmt = $conn->prepare($INSERT);
    $stmt->bind_param("sisss", $customername, $phonenumber, $homeaddress, $emailaddress, $delivery);
    $stmt->execute();
    echo "New customer record inserted successfully";
    }
    $stmt->close();
    $conn->close();

} else {
  echo "Please fill out all fields";
  die();
}

?>
