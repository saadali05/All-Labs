#!/bin/bash

read str1
read str2
if [ str1 = str2 ]; then
echo  "string is same"
elif [ str1 != str2 ]; then 
echo "string is not same"
else
echo "pass"
fi
