#!/bin/bash

# This script fixes descriptions and cleans up HTML tags in Markdown files

# Function to fix a Markdown file
fix_markdown() {
    file=$1
    echo "Fixing content in $file..."

    # Create a temporary file
    temp_file=$(mktemp)

    # Extract the slug from the file
    slug=$(grep -o "slug: '[^']*'" "$file" | sed "s/slug: '\([^']*\)'/\1/")

    # Set a proper description based on the slug
    case "$slug" in
        "writing-psychology-papers-research-analysis")
            description="Master the art of writing psychology papers. Learn essential steps from choosing a topic and conducting research to structuring your analysis and citing sources according to APA style."
            ;;
        "evidence-based-study-strategies")
            description="Learn scientifically backed study techniques like active recall, spaced repetition, and interleaving to boost learning and retention. Stop wasting time on ineffective methods."
            ;;
        "mastering-mathematical-proofs-guide")
            description="Learn effective strategies and techniques to understand, structure, and write complex mathematical proofs with Grade Spark Academy's student guide."
            ;;
        "when-how-seek-academic-assignment-help")
            description="Learn the key signs indicating it's time to seek help with academic assignments and discover effective strategies for finding the right support with Grade Spark Academy."
            ;;
        "writing-compelling-thesis-statement-tips")
            description="Learn how to craft powerful thesis statements that guide your research and engage your readers. Follow Grade Spark Academy's expert tips for academic writing success."
            ;;
        *)
            # Keep the existing description
            description=$(grep -o "description: '[^']*'" "$file" | sed "s/description: '\([^']*\)'/\1/")
            ;;
    esac

    # Read the file line by line
    while IFS= read -r line; do
        # Replace the description
        if [[ $line == description:* ]]; then
            echo "description: '$description'" >> "$temp_file"
        # Remove HTML tags
        elif [[ $line == *"<"*">"* ]]; then
            # Skip lines that are just HTML tags
            if [[ $line =~ ^[[:space:]]*\<[^\>]+\>[[:space:]]*$ ]]; then
                continue
            fi

            # Replace HTML links with Markdown links
            if [[ $line == *"<a href="* ]]; then
                cleaned_line=$(echo "$line" | sed 's/<a href="\([^"]*\)"[^>]*>\([^<]*\)<\/a>/[\2](\1)/g')
                echo "$cleaned_line" >> "$temp_file"
            else
                # Remove other HTML tags
                cleaned_line=$(echo "$line" | sed 's/<[^>]*>//g')
                if [[ -n "$cleaned_line" ]]; then
                    echo "$cleaned_line" >> "$temp_file"
                fi
            fi
        else
            echo "$line" >> "$temp_file"
        fi
    done < "$file"

    # Replace the original file with the fixed content
    mv "$temp_file" "$file"
}

# Find all Markdown files in the src/blogs directory
for md_file in src/blogs/*.md; do
    # Skip the files we've already fixed manually
    if [[ "$md_file" != "src/blogs/how-to-write-a-dissertation.md" &&
          "$md_file" != "src/blogs/common-research-paper-mistakes.md" &&
          "$md_file" != "src/blogs/understanding-citation-styles.md" &&
          "$md_file" != "src/blogs/writing-literature-review.md" &&
          "$md_file" != "src/blogs/academic-success-guide.md" &&
          "$md_file" != "src/blogs/engineering-design-project-best-practices.md" &&
          "$md_file" != "src/blogs/collaborate-academic-experts.md" ]]; then
        fix_markdown "$md_file"
    fi
done

echo "All Markdown files have been fixed."
