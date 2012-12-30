<?php
// 让轻的元素一个一个浮上来，冒泡这个名字真是很生动。
function bubble_sort($array)
{
    $count = count($array);
    if ($count <= 0) 
        return false;
    for($i=0; $i<$count; $i++)
        {
            for($j=$count-1; $j>$i; $j--)
                {
                    if ($array[$j] < $array[$j-1])
                        {
                            $tmp = $array[$j];
                            $array[$j] = $array[$j-1];
                            $array[$j-1] = $tmp;
                        }
                }
        }
    return $array;
}
?>