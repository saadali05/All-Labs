#!/bin/bash

read age
read marks
if [ $age -lt 18 ] && [ $marks -gt 700 ]; then
echo  "Student is eligible."
else
echo "Not eligible."
fi
