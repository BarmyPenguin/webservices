<?php  

require_once __DIR__ . '/src/Facebook/autoload.php';

session_start();


$fb = new Facebook\Facebook([
  'app_id' => '292088634501585', // Replace {app-id} with your app id
  'app_secret' => 'c95c7f7a932addcfab4c2322fdc2335b',
  'default_graph_version' => 'v2.2',
  ]);

$helper = $fb->getRedirectLoginHelper();

$permissions = ['email']; // Optional permissions
$loginUrl = $helper->getLoginUrl('http://localhost/fbtest3/fb-callback.php', $permissions);

echo '<a href="' . htmlspecialchars($loginUrl) . '">Log in with Facebook!</a>';


?>