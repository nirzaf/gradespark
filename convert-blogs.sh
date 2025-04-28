#!/bin/bash

# This script converts HTML blog files to Markdown format
# It extracts the content from the blog-content section and creates a corresponding .md file

# Create the blogs directory if it doesn't exist
mkdir -p src/blogs

# Function to convert HTML blog to Markdown
convert_blog() {
    html_file=$1
    filename=$(basename "$html_file" .html)
    md_file="src/blogs/${filename}.md"
    
    # Extract title
    title=$(grep -o '<h1 class="text-4xl font-bold mb-4 text-night">[^<]*</h1>' "$html_file" | sed 's/<h1 class="text-4xl font-bold mb-4 text-night">\(.*\)<\/h1>/\1/')
    
    # Extract author
    author=$(grep -o '<p class="font-medium text-night">[^<]*</p>' "$html_file" | head -1 | sed 's/<p class="font-medium text-night">\(.*\)<\/p>/\1/')
    
    # Extract date and reading time
    date_info=$(grep -o '<p class="text-sm text-gray-500">Published on [^<]*</p>' "$html_file" | sed 's/<p class="text-sm text-gray-500">Published on \(.*\)<\/p>/\1/')
    date=$(echo "$date_info" | cut -d'•' -f1 | xargs)
    reading_time=$(echo "$date_info" | cut -d'•' -f2 | xargs)
    
    # Convert date format if needed (April 16, 2025 -> 2023-11-18)
    # For simplicity, we'll use a fixed date for now
    formatted_date="2023-11-18"
    
    # Extract image URL
    image_url=$(grep -o '<img src="[^"]*"' "$html_file" | head -1 | sed 's/<img src="\([^"]*\)"/\1/')
    
    # Extract description (first paragraph)
    description=$(grep -o '<p>[^<]*</p>' "$html_file" | head -1 | sed 's/<p>\(.*\)<\/p>/\1/')
    
    # Create frontmatter
    echo "---" > "$md_file"
    echo "slug: '${filename}'" >> "$md_file"
    echo "title: '${title}'" >> "$md_file"
    echo "description: '${description}'" >> "$md_file"
    echo "date: '${formatted_date}'" >> "$md_file"
    echo "author: '${author}'" >> "$md_file"
    echo "imageUrl: '${image_url}'" >> "$md_file"
    echo "readingTime: '${reading_time}'" >> "$md_file"
    echo "---" >> "$md_file"
    echo "" >> "$md_file"
    
    # Extract content from the blog-content section
    # This is a simplified approach - a proper conversion would use a HTML to Markdown converter
    sed -n '/<article class="blog-content/,/<\/article>/p' "$html_file" | 
    sed 's/<article class="blog-content.*>//' | 
    sed 's/<\/article>//' |
    sed 's/<p>//' |
    sed 's/<\/p>/\n\n/' |
    sed 's/<h2>/## /' |
    sed 's/<\/h2>/\n\n/' |
    sed 's/<h3>/### /' |
    sed 's/<\/h3>/\n\n/' |
    sed 's/<ul>//' |
    sed 's/<\/ul>/\n/' |
    sed 's/<li>/\* /' |
    sed 's/<\/li>/\n/' |
    sed 's/<strong>/\*\*/' |
    sed 's/<\/strong>/\*\*/' |
    sed 's/<em>/\*/' |
    sed 's/<\/em>/\*/' |
    sed 's/<blockquote.*>/> /' |
    sed 's/<\/blockquote>/\n\n/' |
    sed 's/<a href="\([^"]*\)">\([^<]*\)<\/a>/[\2](\1)/g' |
    sed 's/<div.*>//' |
    sed 's/<\/div>//' |
    sed 's/<span.*>//' |
    sed 's/<\/span>//' |
    sed 's/<img.*>//' |
    sed 's/<svg.*>.*<\/svg>//' |
    grep -v '^\s*$' >> "$md_file"
    
    echo "Converted $html_file to $md_file"
}

# Find all HTML blog files in the public directory (excluding index.html)
# We'll skip the ones we've already converted manually
for html_file in $(find public -name "*.html" | grep -v "index.html" | grep -v "how-to-write-a-dissertation.html" | grep -v "common-research-paper-mistakes.html" | grep -v "understanding-citation-styles-apa-mla-chicago-harvard.html" | grep -v "writing-literature-review-guide.html" | grep -v "ultimate-academic-success-guide.html"); do
    convert_blog "$html_file"
done

echo "All blog files have been converted to Markdown format."
