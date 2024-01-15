#!/bin/bash

if [ -d /usr/bin ];then
echo "it is directory"
elif [ -l /usr/bin ];then 
echo "it is symbolic"
else 
echo "pass"
fi
