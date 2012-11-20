<?php
// 复杂度 O(n^2)
// 喳喳大神教我的

$json = file_get_contents('qsc-mobile-bus.json');
$array = json_decode($json, true);
//print_r($array);
$n = count($array);
for($i=0; $i < $n; $i++) {
  for($j=$i+1; $j < $n; $j++) {
    $time1 = new Datetime($array[$i]['发车时间']);
    $time2 = new Datetime($array[$j]['发车时间']);
    if($time1 > $time2) {
      $tmp = $array[$j];
      $array[$j] = $array[$i];
      $array[$i] = $tmp;
    }
  }
}
echo json_encode($array);
//print_r($array);
