#!/bin/bash
function cari(){

search=$(find $directory -name '*.java')
str="Ada file java pada $search"
echo $str
}

echo "Cari dimana?"
read directory

func=$(cari)
echo "$func"