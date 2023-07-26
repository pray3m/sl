# Object-oriented programming in PHP.

`Object-Oriented Programming` (OOP) in PHP allows developers to create and manage objects, which are instances of classes, to organize and structure their code. OOP brings several advantages, including `code reusability`, `encapsulation`, and `modularity`.

### Implement class with properties and methods and create an object of that class.

```php
<?php

class Car {
    // Properties
    public $make;
    public $model;
    public $year;

    // Constructor
    public function __construct($make, $model, $year) {
        $this->make = $make;
        $this->model = $model;
        $this->year = $year;
    }

    // Method to display car information
    public function displayInfo() {
        echo "Car Make: " . $this->make . "<br>";
        echo "Car Model: " . $this->model . "<br>";
        echo "Car Year: " . $this->year . "<br>";
    }
}

// Create an object of the Car class
$myCar = new Car("Toyota", "Corolla", 2022);

// Display the car information using the displayInfo() method
echo "My Car Information:<br>";
$myCar->displayInfo();
?>

```
