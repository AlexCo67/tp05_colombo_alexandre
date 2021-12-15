<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Tuupola\Middleware\HttpBasicAuthentication;
use \Firebase\JWT\JWT;
require __DIR__ . '/vendor/autoload.php';
$app = AppFactory::create();


const JWT_SECRET = "makey1234567";


$options = [
    "attribute" => "token",
    "header" => "Authorization",
    "regexp" => "/Bearer\s+(.*)$/i",
    "secure" => false,
    "algorithm" => ["HS256"],
    "secret" => JWT_SECRET,
    "path" => ["/api"],
"ignore" => ["/api/hello","/api/login", "/hello", "/login"],
"error" => function ($response, $arguments) {
$data = array('ERREUR' => 'Connexion', 'ERREUR' => 'JWT Non valide');
$response = $response->withStatus(401);
return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
}
];


function addHeaders(Response $resonse, array $headersOrigin):Reponse{

    $origin='herokuapp';

    if (count ($headersOrigin)>0){
        $origin = $headersOrigin[0];
    }
        $response = $response->withHeader("Content-Type", "application/json")
          ->withHeader("Access-Control-Allow-Origin", "https://tp05-colombo-alexandre.herokuapp.com")
          ->withHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
          ->withHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
          ->withHeader("Access-Control-Expose-Headers", "Authorization");
      
        return $response;
    }

function createJWT(){
    $issuedAt = time();
$expirationTime = $issuedAt + 600;
$payload = array(
'userid' => $userid,
'email' => $email,
'pseudo' => $pseudo,
'iat' => $issuedAt,
'exp' => $expirationTime
);
$token_jwt = JWT::encode($payload,JWT_SECRET, "HS256");

return $token_jwt;
}


$app->get('/api/hello/{login}', function (Request $request, Response $response, $args) {
    $response->getBody()->write($args['login']);

    $token_jwt=createJWT();

    $response = $response->withHeader("Authorization", "Bearer {$token_jwt}");

    return $response;
    });

$app->get('/api/hello2/{login}', function (Request $request, Response $response, $args) {
        $response->getBody()->write($args['login']);
    
        $token_jwt=createJWT();
    
        $response = $response->withHeader("Authorization", "Bearer {$token_jwt}");
    
        return $response;
        });

        



// Chargement du Middleware
$app->add(new Tuupola\Middleware\JwtAuthentication($options));

// Run app
$app->run();

?>