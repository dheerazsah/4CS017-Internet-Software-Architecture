<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tutorial | Week 9</title>
    <style>
        * {
            padding: 0%;
            margin: 0%;
            font-family: Arial, Helvetica, sans-serif;
        }

        table {
            margin-left: 10%;
            border-collapse: collapse;
            width: 30%;
        }

        td, th {
            border: 1px solid black;
            text-align: center;
            padding: 8px;
        }

        th {
            color: black;
        }

        h2 {
            margin-left: 20%;
        }
    </style>
</head>
<body>
    <?php
        $servername = '127.0.0.1';
        $username = 'sabin';
        $password = 'password';
        $database = 'sakila';

        // Create connection
        $conn = new mysqli($servername, $username, $password, $database);

        // Check connection
        if ($conn -> connect_error) {
            die('<h1>Connection failed: ' .$conn -> connect_error. '</h1>');
        }
        $query = "select * from actor;";
        $result = $conn -> query($query);
        // var_dump($result);

        if ($result -> num_rows > 0) {
          echo " 
          <table>
              <h2>Actor Name</h2>
              <br>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Last Update</th>
                  </tr>
              </thead>
              <tbody>";
          while ($row = $result -> fetch_assoc()) {
              echo "<tr>";
              echo "<td>".$row['actor_id']. "</td>";
              echo "<td>".$row['first_name']. "</td>";
              echo "<td>".$row['last_name']. "</td>";
              echo "<td>".$row['last_update']. "</td>";
              echo "</tr>";
          }
        } else {
            echo '0 results';
        }
        echo "
            </tbody>
            </table>
        ";
    ?>  
</body>
</html>
