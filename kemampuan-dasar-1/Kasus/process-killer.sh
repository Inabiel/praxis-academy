#!/bin/bash
echo "Process apa yang mau dikill?"
read process 
PID=`ps -eaf | grep $process | grep -v grep | awk '{print $2}'`
if [[ "" !=  "$PID" ]]; then
    echo "killing all process..."
    kill -9 $PID
fi