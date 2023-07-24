<?php
// Define variables
$number1 = 10;
$number2 = 5;

// Arithmetic operators
$sum = $number1 + $number2;
$diff = $number1 - $number2;
$product = $number1 * $number2;
$quotient = $number1 / $number2;
$remainder = $number1 % $number2;

// Conditional statements
if ($sum > 15) {
    echo "The sum is greater than 15.";
} elseif ($sum === 15) {
    echo "The sum is equal to 15.";
} else {
    echo "The sum is less than 15.";
}

// Loop using for loop
echo "\nNumbers from 1 to 5: ";
for ($i = 1; $i <= 5; $i++) {
    echo $i . " ";
}

// Loop using while loop
echo "\nNumbers from 5 to 1: ";
$i = 5;
while ($i >= 1) {
    echo $i . " ";
    $i--;
}
?>
