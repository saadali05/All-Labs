#!/bin/bash

num_z=0
while [ "$num_z" -lt "$#" ]; do
    echo "$#"
    ((num_z++))
done
