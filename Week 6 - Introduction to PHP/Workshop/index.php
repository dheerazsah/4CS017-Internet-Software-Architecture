<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>PHP</title>
</head>
<body>

     <script>
          function clearForm(){
               document.getElementById("nameInput").value="";
               document.getElementById("timeInput").value="";
          }
     </script>


     <form action="" method="GET">
          <input type="text" name="name" id="nameInput" value="<?=$_GET["name"]?>">
          <input type="number" name="times" id="timeInput" value="<?=$_GET["times"]?>">
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