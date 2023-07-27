# Exception Handling in PHP

Exception handling is a crucial part of programming part. It should appropriately be
taken care of.

```php

<?php
<?php
class MyCustomException extends Exception {}

function divide($numerator, $denominator) {
    if ($denominator === 0) {
        throw new MyCustomException("Division by zero is not allowed.");
    }
    return $numerator / $denominator;
}

// Example of catching an exception
try {
    echo divide(10, 0);
} catch (MyCustomException $e) {
    echo "Caught exception: " . $e->getMessage();
} catch (Exception $e) {
    echo "Caught a general exception: " . $e->getMessage();
}
?>


?>

```
