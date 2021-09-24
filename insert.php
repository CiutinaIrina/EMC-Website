<?php
    $numeCompanie = filter_input(INPUT_POST, 'nume_companie');
    $numeClient = filter_input(INPUT_POST, 'nume_client');
    $mail = filter_input(INPUT_POST, 'mail');
    $password = filter_input(INPUT_POST, 'password');
    $colaborare = filter_input(INPUT_POST, 'colaborare');
    $marime = filter_input(INPUT_POST, 'marime');
    $tip = filter_input(INPUT_POST, 'tip');
    $dataInfintarii = filter_input(INPUT_POST, 'date');
    $nrAngajati = filter_input(INPUT_POST, 'nr');
    $dataImplementarii = filter_input(INPUT_POST, 'data_implementarii');
    $domeniu = filter_input(INPUT_POST, 'domeniu');

    $cod = filter_input(INPUT_POST, 'cod');
    $description = filter_input(INPUT_POST, 'desc');
    $valoare = filter_input(INPUT_POST, 'val');
    $cofinantare = filter_input(INPUT_POST, 'conf');
    if (!empty($numeCompanie)){
        if (!empty($password)){
            $host = "localhost";
            $dbusername = "***************";
            $dbpassword = "***************";
            $dbname = "emcapital";
            // Create connection
            $conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);
            if (mysqli_connect_error()){
                die('Connect Error ('. mysqli_connect_errno() .') '. mysqli_connect_error());
            }
            else{
                $sql = "INSERT INTO test (nume_companie, nume_client, mail, password, colaborare, marime, tip, data_infintarii, nr_angajati, data_implementarii, domeniu, codCAEN, description, valoare, cofinantare)
                values ('$numeCompanie','$numeClient','$mail','$password','$colaborare','$marime','$tip','$dataInfintarii','$nrAngajati','$dataImplementarii','$domeniu','$cod','$description','$cofinantare','$tip' )";
                if ($conn->query($sql)){
                    echo "New record is inserted sucessfully";
                }
                else{
                    echo "Error: ". $sql ."
                    ". $conn->error;
                }
                $conn->close();
            }
        }
        else{
            echo "Password should not be empty";
            die();
        }
    }
    else{
        echo "Username should not be empty";
        die();
    }
?>
