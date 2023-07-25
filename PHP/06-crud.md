# CRUD Operations in PHP

CRUD stands for Create, Read, Update, and Delete, which are the basic operations performed on a database. Below, I'll provide a simple example of performing CRUD operations using PHP and MySQL database.

### Assumptions

- You have a MySQL database set up with a table named `users` that contains columns: id (primary key), name, email, and age.

- You have a web server (like Apache) set up with PHP support.

### Connecting to the Database:

```php
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "database_name";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

?>
```

## Create (insert) Operation:

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["submit"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $age = $_POST["age"];

    // SQL query to insert data into the 'users' table
    $sql = "INSERT INTO users (name, email, age) VALUES ('$name', '$email', $age)";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
?>

<!-- HTML form to input user data -->
<form method="post" action="">
    Name: <input type="text" name="name"><br>
    Email: <input type="text" name="email"><br>
    Age: <input type="number" name="age"><br>
    <input type="submit" name="submit" value="Create">
</form>
```

## Read (select) Operation:

```php
<?php
// SQL query to select data from the 'users' table
$sql = "SELECT * FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"] . "
        - Name: " . $row["name"] . "
        - Email: " . $row["email"] . "
        - Age: " . $row["age"] . "<br>";
    }
} else {
    echo "0 results";
}
?>
```

## Update Operation:

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["update"])) {
    $id = $_POST["id"];
    $name = $_POST["name"];
    $email = $_POST["email"];
    $age = $_POST["age"];

    // SQL query to update data in the 'users' table
    $sql = "UPDATE users SET name='$name', email='$email', age=$age WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully.";
    } else {
        echo "Error updating record: " . $conn->error;
    }
}
?>

<!-- HTML form to update user data -->
<form method="post" action="">
    ID: <input type="number" name="id"><br>
    Name: <input type="text" name="name"><br>
    Email: <input type="text" name="email"><br>
    Age: <input type="number" name="age"><br>
    <input type="submit" name="update" value="Update">
</form>
```

## Delete Operation:

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["delete"])) {
    $id = $_POST["id"];

    // SQL query to delete data from the 'users' table
    $sql = "DELETE FROM users WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo "Record deleted successfully.";
    } else {
        echo "Error deleting record: " . $conn->error;
    }
}
?>
<!-- HTML form to delete a user by ID -->
<form method="post" action="">
    ID: <input type="number" name="id"><br>
    <input type="submit" name="delete" value="Delete">
</form>

```

## Close the Connection:

```php
<?php
$conn->close();
?>
```

## References

CRUD Application in PHP & MySQL - https://www.tutorialrepublic.com/php-tutorial/php-mysql-crud-application.php
