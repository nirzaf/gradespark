#!/bin/bash

# This script fixes formatting issues in the converted Markdown files

# Function to fix formatting in a Markdown file
fix_formatting() {
    file=$1
    echo "Fixing formatting in $file..."
    
    # Create a temporary file
    temp_file=$(mktemp)
    
    # Read the file line by line
    while IFS= read -r line; do
        # Remove leading whitespace
        trimmed_line=$(echo "$line" | sed 's/^[ \t]*//')
        
        # Skip HTML tags
        if [[ $trimmed_line == "<"* ]]; then
            continue
        fi
        
        # Fix headings (## Heading)
        if [[ $trimmed_line == "##"* ]]; then
            echo -e "\n$trimmed_line" >> "$temp_file"
        # Fix subheadings (### Subheading)
        elif [[ $trimmed_line == "###"* ]]; then
            echo -e "\n$trimmed_line" >> "$temp_file"
        # Fix list items
        elif [[ $trimmed_line == "*"* ]]; then
            echo "$trimmed_line" >> "$temp_file"
        # Fix blockquotes
        elif [[ $trimmed_line == ">"* ]]; then
            echo -e "\n$trimmed_line" >> "$temp_file"
        # Fix numbered lists
        elif [[ $trimmed_line =~ ^[0-9]+\.* ]]; then
            echo "$trimmed_line" >> "$temp_file"
        # Fix empty lines
        elif [[ -z $trimmed_line ]]; then
            echo "" >> "$temp_file"
        # Fix normal paragraphs
        else
            echo "$trimmed_line" >> "$temp_file"
        fi
    done < <(sed -n '/^---$/,/^---$/!p' "$file" | tail -n +2)
    
    # Get the frontmatter
    frontmatter=$(sed -n '/^---$/,/^---$/p' "$file")
    
    # Create the final file
    echo "$frontmatter" > "$file"
    cat "$temp_file" >> "$file"
    
    # Remove the temporary file
    rm "$temp_file"
}

# Find all Markdown files in the src/blogs directory
for md_file in src/blogs/*.md; do
    # Skip the files we've already fixed manually
    if [[ "$md_file" != "src/blogs/how-to-write-a-dissertation.md" && 
          "$md_file" != "src/blogs/common-research-paper-mistakes.md" && 
          "$md_file" != "src/blogs/understanding-citation-styles.md" && 
          "$md_file" != "src/blogs/writing-literature-review.md" && 
          "$md_file" != "src/blogs/academic-success-guide.md" && 
          "$md_file" != "src/blogs/engineering-design-project-best-practices.md" ]]; then
        fix_formatting "$md_file"
    fi
done

echo "All Markdown files have been fixed."
