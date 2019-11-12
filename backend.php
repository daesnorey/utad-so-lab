<?php

$mysqli = new mysqli("127.0.0.1", "user_so", "UserSO123", "db_so_2019");

if (!link) {
	echo "Error: Unable to connect to MySQL." . PHP_EOL;
	echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
	echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
	exit;
}

$username = "daesnorey";
//$password = "password";
$password = "1' OR 1 = 1 UNION ALL SELECT 1, table_name FROM information_schema.tables WHERE table_schema = database() OR '' = '33";

$query = "SELECT username, password FROM users WHERE username = '$username' AND password = '$password';";

if ($result = $mysqli->query($query)) {
	while ($row = $result->fetch_row()) {
		printf("%s|%s\n", $row[0], $row[1]);
	}
	$result->close();
}

$mysqli->close();
?>
