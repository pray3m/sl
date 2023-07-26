# Sessions in PHP

## What is a Session?

A session is a way to store information (in variables) to be used across multiple pages.
Unlike a cookie, the information is not stored on the users computer.

## Starting a session

A session is started with the `session_start()` function.

```php
<?php
// Starting a session
session_start();
?>

```

## Storing Session Data

Session data is stored in the `$_SESSION` global variable.

```php
// Storing data in the session
$_SESSION['username'] = 'JohnDoe';
$_SESSION['user_id'] = 123;
?>

```

## Accessing Session Data

To retrieve data stored in the session, you can simply access the `$\_SESSION` superglobal array.

```php
// Accessing session data
echo 'Hi, ' . $_SESSION['username'];
echo 'Your user id is ' . $_SESSION['user_id'];
?>

```

## Destroying a Session

To remove all the variables and destroy the session, use the `session_destroy()` function.

```php
// Destroying a session
session_destroy();
?>

```

## Output

```php
Hi, JohnDoe
Your user id is 123
```

## References

- [PHP Sessions](https://www.w3schools.com/php/php_sessions.asp)
