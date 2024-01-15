#!/bin/bash

month_teller() {
  read -p "Enter number: " number

  if [ "$number" -ge 1 ] && [ "$number" -le 7 ]; then
    echo "Number is valid"
    
    case "$number" in
      1) echo "Monday" ;;
      2) echo "Tuesday" ;;
      3) echo "Wednesday" ;;
      4) echo "Thursday" ;;
      5) echo "Friday" ;;
      6) echo "Saturday" ;;
      7) echo "Sunday" ;;
    esac

  else
    echo "Invalid number. Please enter a number between 1 and 7."
  fi
}


