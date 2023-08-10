<?php

$servername = "localhost";
$username = "root";
$password = "";
$database_name = "login";

$conn = mysqli_connect($servername, $username, $password, $database_name);

if (!$conn) {
    die("Connection Failed: " . mysqli_connect_error());
}

// Registration process
if (isset($_POST['register'])) {
    // Sanitize user input
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $phoneno = $_POST['phoneno'];
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Insert user data into the database
    $sql = "INSERT INTO users (fname, lname, phoneno, email, username, password) VALUES ('$fname', '$lname', '$phoneno', '$email', '$username', '$password')";

    if (mysqli_query($conn, $sql)) {
        header("Location: profile.php"); // Redirect to the profile page
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

// Login process
if (isset($_POST['login'])) {
    // Sanitize user input
    $username = $_POST['username'];
    $password = $_POST['password'];
    

    // Validate username and password
    
  /* // Password Validation
$password = $_POST['password'];
if (!preg_match('/^[a-zA-Z0-9]{8,}$/', $password)) {
    $passwordErr = "Password should be at least 8 characters long and contain only letters and numbers.";
}

// Username Validation
$username = $_POST['username'];
if (!preg_match('/^[a-zA-Z0-9]{8}$/', $username)) {
    $usernameErr = "Username should be exactly 8 characters long and contain only letters and numbers.";
}

*/


    // Check if the user exists in the database
    $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) == 1) {
        session_start(); // Start the session
        $row = mysqli_fetch_assoc($result);
        $_SESSION['username'] = $row['username']; // Assuming 'user_id' is the column name in the users table
        header("Location: profile.php"); // Redirect to the profile page
        exit();
    } else {
        echo "Invalid username or password.";
    }
}

// Close the database connection
mysqli_close($conn);

?>
