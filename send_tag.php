<?php

//MySQLにログインするユーザーとパスワードを設定
define("USERNAME", "nakamura-lab");
define("PASSWORD", "n1k2m3r4fms");
//mysql:host=localhost; dbname=ito_db; charset=utf8', "nakamura-lab","n1k2m3r4fms"
try{

//データベースに接続する情報の指定
$dbh = new PDO("mysql:host=localhost; dbname=ito_db; charset=utf8", "nakamura-lab","n1k2m3r4fms");


$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
// 静的プレースホルダを指定
$dbh->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

//実行したいSQL文を記述
//INSERT INTO `comic_tag_db2021`(`id`, `user`, `comic`, `tag_id`, `page`, `place`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6])
$stmt = $dbh->prepare("INSERT INTO `comic_tag_db2021` (`user`,`comic`, `tag_id`,`contents`, `page`, `place`) VALUES ('".$_GET["user"]."','".$_GET["comic"]."','". $_GET["tag_id"]. "','". $_GET["contents"]. "' , '". $_GET["page"]. "' , '". $_GET["place"]." ')");
$stmt->setFetchMode(PDO::FETCH_ASSOC);

$stmt->execute();

$rows = array();
while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
$rows[]=$row;
}

//接続成功ならjson形式で吐き出します
echo $json = json_encode($rows);

} catch(PDOException $e){

//一応失敗時のメッセージを記入
echo "失敗時のメッセージ（なくていもいい）";
echo "INSERT INTO `comic_tag_db2021` (`user`,`comic`, `tag_id`,`contents`, `page`, `place`) VALUES ('".$_GET["user"]."','".$_GET["comic"]."','". $_GET["tag_id"]. "','". $_GET["contents"]. "' , '". $_GET["page"]. "' , '". $_GET["place"]." ')";
echo $e->getMessage();
}

$dbh = null;

?>