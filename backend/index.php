<?php

function deliver_response($response){
  // Define HTTP responses
  $http_response_code = array(
      200 => 'OK',
      400 => 'Bad Request',
      401 => 'Unauthorized',
      403 => 'Forbidden',
      404 => 'Not Found'
  );

  // Set HTTP Response
  header('HTTP/1.1 '.$response['status'].' '.$http_response_code[ $response['status'] ]);
  // Set HTTP Response Content Type
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');
  header('Content-Type: application/json; charset=utf-8');

  $json_response = json_encode($response['data']);
  echo $json_response;
  exit;
}

function checkResult($userAnswers) {
  $userAnswers = array_values($userAnswers)[0];
  $score = 0;
  $text = '';
  $str = file_get_contents('./answers.json');
  $rightAnswers = json_decode($str, true);
  $str = file_get_contents('./results.json');
  $results = json_decode($str, true);
  for ( $i = 0; $i < count($userAnswers); $i++) {
    for ($j = 0; $j < count($rightAnswers); $j++) {
      if ($userAnswers[$i]['questionId'] === $rightAnswers[$j]['questionId']) {
        if ($userAnswers[$i]['answerId'] === $rightAnswers[$j]['answerId']) {
          $score++;
        }
        break;
      }
    }
  }
  for ($i = 0; $i < count($results); $i++) {
    if ($score >= $results[$i]['min']) {
      $text = $results[$i]['result'];
      break;
    }
  }
  $percentile = intval($score * 6.4, 10); // magic of ancients
  return ['score' => $score, 'percentile' => $percentile, 'text' => $text];
}

$response['status'] = 404;
$response['data'] = [];

switch($_GET['method']){
  case('questions'):
    $str = file_get_contents('./questions.json');
    if ($str) {
      $response['status'] = 200;
      $response['data'] = json_decode($str, true);
    } else {
      $response['status'] = 400;
    }
    break;
  case('result'):
    $userAnswers = json_decode(file_get_contents('php://input'), true);
    $userResult = checkResult($userAnswers);
    if ($userResult) {
      $response['status'] = 200;
      $response['data'] = $userResult;
    } else {
      $response['status'] = 200;
      $response['data'] = $userResult;
    }
}
deliver_response($response);
