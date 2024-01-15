#!/bin/bash

init_num=0
even_num=0
even_count=0

read -p "Enter a number: " fin_num

while [ "$init_num" -lt "$fin_num" ]; do
  ((init_num++))
  num_ev=$((init_num % 2))

  if [ "$num_ev" -eq 0 ]; then
    ((even_count++))
    ((even_num += num_ev))
  else
    echo "pass"
  fi
done

if [ "$even_count" -gt 0 ]; then
  avg_even=$((even_num / even_count))
  echo "Average of even numbers is: $avg_even"
else
  echo "No even numbers found."
fi

