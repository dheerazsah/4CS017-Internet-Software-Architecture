<!-- Create a Contact Us Form -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="process.php" method="POST">

        <input type="text" name="name" placeholder="Full Name">
        <br>
        <input type="email" name="email" placeholder="Email Address">
        <br>
        <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message here"></textarea>
        <br>
        <button type="submit">Submit</button>

    </form>
</body>
</html>

<!-- Form should have method="POST" and action="process.php" -->