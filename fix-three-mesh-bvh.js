const fs = require('fs');
const path = require('path');

// Path to the drei package.json
const dreiPackageJsonPath = path.join(
  __dirname,
  'node_modules',
  '@react-three',
  'drei',
  'package.json'
);

// Check if the file exists
if (fs.existsSync(dreiPackageJsonPath)) {
  console.log('Found @react-three/drei package.json');
  
  // Read the package.json
  const packageJson = JSON.parse(fs.readFileSync(dreiPackageJsonPath, 'utf8'));
  
  // Update the dependency
  if (packageJson.dependencies && packageJson.dependencies['three-mesh-bvh']) {
    console.log('Current three-mesh-bvh version:', packageJson.dependencies['three-mesh-bvh']);
    packageJson.dependencies['three-mesh-bvh'] = '^0.8.0';
    console.log('Updated to version:', packageJson.dependencies['three-mesh-bvh']);
    
    // Write the updated package.json
    fs.writeFileSync(dreiPackageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('Successfully updated @react-three/drei package.json');
  } else {
    console.log('three-mesh-bvh dependency not found in @react-three/drei');
  }
} else {
  console.log('@react-three/drei package.json not found');
}

console.log('Script completed');
