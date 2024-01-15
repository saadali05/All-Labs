#!/bin/bash

if [ -z "$1" ]; then
    echo "Please provide your name as a command-line argument."
    exit 1
fi

echo "Hello, $1!"
