# Polymorphism in PHP

Polymorphism in PHP can be defined as the ability of an object to take many forms.
This helps us perform the same action in different ways.

```php

<?php
// Parent class
class Animal {
    public function makeSound() {
        return "Animal makes a generic sound.";
    }
}

// Child class 1
class Dog extends Animal {
    public function makeSound() {
        return "Dog barks.";
    }
}

// Child class 2
class Cat extends Animal {
    public function makeSound() {
        return "Cat meows.";
    }
}

// Function to demonstrate polymorphism
function animalSound(Animal $animal) {
    echo $animal->makeSound() . PHP_EOL;
}

// Create instances of child classes
$dog = new Dog();
$cat = new Cat();

// Demonstrate polymorphism
animalSound($dog); // Output: "Dog barks."
animalSound($cat); // Output: "Cat meows."
?>


```
