<?php

$mysqli = new mysqli("127.0.0.1", "user_so", "UserSO123", "db_so_2019");

if (!$mysqli) {
	echo "Error: Unable to connect to MySQL." . PHP_EOL;
	echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
	echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
	exit;
}

$response = [];

echo "antes de switch". $_POST["action"].$_REQUEST["action"];
echo file_get_contents("php://input");

switch ($_POST["action"]) {
	case "login":
		echo "login";
		require_once("login.php");
		$response = login($mysqli);
	break;
}

$mysqli->close();

exit(json_encode($response));
?>
