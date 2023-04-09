<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>PHP</title>
</head>
<body>
     <form action="indexAlternate.php" method="GET" id="formInputs">

     <?php
          if ($_GET != NULL){
               $name = $_GET["name"];
               $times = $_GET["times"];
          }
          else
          $name = $_GET[""];
          $times = $_GET[""];
          
     ?>
          <input type="text" name="name" id="nameInput" value="<?= $name?>">
          <input type="number" name="times" id="timeInput" value="<?=$times?>">
          <button type="submit">Submit</button>
          <button onclick="clearForm()">Reset</button>
     </form>


     <?php
          if ($_GET != NULL){
               $name = $_GET["name"];
               $times = $_GET["times"];
               $greeting = "Good Morning, $name";
               for($i = 0; $i < $times; $i++)
               echo "<h1>$greeting</h1>";
          }
     ?>


</body>
</html>