<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/1/24 0024
 * Time: 15:52
 */
if(isset($_GET['name'])){
    echo "hello:".$_GET['name'];
}else{
    echo "Args Error";
}


//if(isset($_POST['name'])){
//    echo "hello:".$_POST['name'];
//}else{
//    echo "Args Error";
//}