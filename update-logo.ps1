# PowerShell script to update logo image in all HTML files in the public directory

$htmlFiles = Get-ChildItem -Path "public" -Filter "*.html"

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Replace the logo image URL with the local logo.ico file
    $content = $content -replace 'src="https://ik.imagekit.io/fazrinphcc/gradespark/gsa-logo-trasparent-bg.png[^"]*"', 'src="/logo.ico"'
    
    # Write the updated content back to the file
    Set-Content -Path $file.FullName -Value $content
    
    Write-Host "Updated logo in $($file.Name)"
}

Write-Host "All HTML files have been updated with the new logo."
