#!/bin/bash

# Set the source directory and the backup directory
SOURCE_DIR="$HOME"
BACKUP_DIR="$SOURCE_DIR/backup"

# Check if the backup directory exists and create it if necessary
if [ ! -d "$BACKUP_DIR" ]; then
    mkdir "$BACKUP_DIR"
fi

# Loop through each file in the source directory
for file in "$SOURCE_DIR"/*; do
    # Skip if the item is a directory
    if [ -d "$file" ]; then
        continue
    fi

    # Create a backup of the file
    backup_file="$BACKUP_DIR/$(basename "$file")"
    if ! cp -p "$file" "$backup_file"; then
        echo "Error: Failed to create backup for '$file'"
    fi
done
