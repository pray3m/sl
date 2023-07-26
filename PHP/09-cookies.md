# Cookies in PHP

## What is a Cookie?

A cookie is often used to identify a user. A cookie is a small file that the server embeds on the user's computer. Each time the same computer requests a page with a browser, it will send the cookie too. With PHP, you can both create and retrieve cookie values.

## Creating a Cookie

A cookie is created with the `setcookie()` function.

```php
<?php
// Creating a cookie
setcookie('username', 'JohnDoe', time() + (86400 * 30), '/');
?>
```

## Accessing a Cookie Value

To access the cookie value, use the global variable `$_COOKIE`.

```php
// Accessing a cookie value
echo 'Hi, ' . $_COOKIE['username'];
?>
```

### Output:

```php
Hi, JohnDoe
```

## Deleting a Cookie

To delete a cookie, use the `setcookie()` function with an expiration date in the past.

```php
<?php
// Deleting a cookie
setcookie('username', '', time() - 3600, '/');
?>
```

## 📚 References

- [PHP Cookies](https://www.w3schools.com/php/php_cookies.asp)
