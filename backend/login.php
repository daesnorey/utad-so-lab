<?php

function login($link) {
    echo "entra a login";
    $username = $_POST["username"];
    $password = $_POST["password"];
    // $password = "1' OR 1 = 1 UNION ALL SELECT 1, table_name FROM information_schema.tables WHERE table_schema = database() OR '' = '33";

    $query = "SELECT username, password FROM users WHERE username = '$username' AND password = '$password';";

    $response = [];
    if ($result = $mysqli->query($query)) {
        while ($row = $result->fetch_row()) {
            array_push($response, ["user" => $row[0], "password" => $row[1]]);
        }
        $result->close();
    }
    return $response;
}

?>