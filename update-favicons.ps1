# PowerShell script to update favicon links in all HTML files in the public directory

$htmlFiles = Get-ChildItem -Path "public" -Filter "*.html"

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Check if the file already has a favicon link
    if ($content -match '<link rel="icon"') {
        # Replace existing favicon link with new one
        $content = $content -replace '<link rel="icon"[^>]*>', '<link rel="icon" type="image/x-icon" href="/logo.ico" />'
    } else {
        # Add favicon link after the meta viewport tag
        $content = $content -replace '(<meta name="viewport"[^>]*>)', '$1
    <link rel="icon" type="image/x-icon" href="/logo.ico" />'
    }
    
    # Add shortcut icon if it doesn't exist
    if (-not ($content -match '<link rel="shortcut icon"')) {
        $content = $content -replace '(<link rel="icon"[^>]*>)', '$1
    <link rel="shortcut icon" type="image/x-icon" href="/logo.ico" />'
    }
    
    # Write the updated content back to the file
    Set-Content -Path $file.FullName -Value $content
    
    Write-Host "Updated favicon in $($file.Name)"
}

Write-Host "All HTML files have been updated with the new favicon."
