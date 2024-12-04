<?php

function navbar(){
    echo 'Dynamic navigation:';
$MapesSaturs=glob("saturs/*");
foreach ($MapesSaturs as $fails) {
   $failaNosaukums = basename($fails);
   $saitesAdrese = "index.php?s=" . urlencode($fails);
   echo '<li style="padding:7px;display:inline;border:solid 1px"> <a style="color:black" href="' . $saitesAdrese . ' " > ' . $failaNosaukums . '</a></li>';
}
}


function saturs(){
if (!isset($_GET["s"])){
   include("saturs/index.html");
}
else {
   $result=$_GET["s"];
   include($result);
}
}
?>
