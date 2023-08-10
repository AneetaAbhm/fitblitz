<?php
session_start(); // Start the session

// Check if the user is logged in
if (!isset($_SESSION['username'])) {
    header("Location: login2.html"); // Redirect to the login page if not logged in
    exit();
}

$servername = "localhost";
$username = "root";
$password = "";
$database_name = "login";

$conn = mysqli_connect($servername, $username, $password, $database_name);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Retrieve user data from the database
$username= $_SESSION['username'];
$sql = "SELECT * FROM users WHERE username = '$username'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) == 1) {
    $row = mysqli_fetch_assoc($result);
    $fname = $row['fname'];
    $lname = $row['lname'];
    $phoneno = $row['phoneno'];
    $email = $row['email'];
    $username = $row['username'];
} else {
    echo "User not found.";
    exit();
}

mysqli_close($conn);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Profile Page</title>
   
    <style>
        body {
            background-color: #e6e6e6; /* Grey background */
            font-family: Arial, sans-serif;
        }

        h1 {
            color: #ff7f00; /* Orange text color */
            margin-top: 50px;
            text-align: center;
        }

        table {
            width: 400px;
            margin: 30px auto;
            background-color: #fff;
            border-collapse: collapse;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

        table td {
            padding: 10px;
            border-bottom: 1px solid #ddd;
        }

        table td:first-child {
            font-weight: bold;
        }

        .card {
  box-sizing: border-box;
  width: 200px;
  height: 70px;
  background:#fff;
  border: 1px solid white;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(6px);
  border-radius: 17px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: bolder;
  color: black;
}

.card:hover {
  border: 1px solid black;
  transform: scale(1.05);
}

.card:active {
  transform: scale(0.95) rotateZ(1.7deg);
}

.card-container{
  display:flex;
  justify-content: center;
  gap: 1em;
}
.logout-container{
    display: flex;
    justify-content:center;
    padding-top: 40px;
}
.logout-button{
background-color:#ff7f00;
}
    </style>

</head>
<body>
    <h1>Welcome, <?php echo $fname . " " . $lname; ?>!</h1>
    <table>
        <tr>
            <td>First Name:</td>
            <td><?php echo $fname; ?></td>
        </tr>
        <tr>
            <td>Last Name:</td>
            <td><?php echo $lname; ?></td>
        </tr>
        <tr>
            <td>Phone Number:</td>
            <td><?php echo $phoneno; ?></td>
        </tr>
        <tr>
            <td>Email:</td>
            <td><?php echo $email; ?></td>
        </tr>
        <tr>
            <td>Username:</td>
            <td><?php echo $username; ?></td>
        </tr>
    </table>
<div class="card-container">
    <div class="card">
        <a href="diet.html">Get Diet Plan</a>
        </div>
        <div class="card">
        <a href="s1.html">Get Workout Plan</a>
    </div>

    <div class="card">
        <a href="social.html">Connect to Communities</a>
        </div>
        <div class="card">
        <a href="daily.html">Daily Challenges</a>
    </div>

    
</div> 
<div class="logout-container"> 
    <a  class="logout-button card" href="./home.html">Logout</a>
</div>
</body>
</html>
