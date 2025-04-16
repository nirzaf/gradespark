const fs = require('fs');
const path = require('path');

// Function to clean up node_modules
function cleanNodeModules() {
  console.log('Cleaning up node_modules...');
  
  try {
    // Remove three-mesh-bvh directory
    const threeMeshBvhPath = path.join(__dirname, 'node_modules', 'three-mesh-bvh');
    if (fs.existsSync(threeMeshBvhPath)) {
      console.log('Removing three-mesh-bvh directory...');
      fs.rmSync(threeMeshBvhPath, { recursive: true, force: true });
    }
    
    console.log('Cleanup completed successfully.');
  } catch (error) {
    console.error('Error during cleanup:', error);
  }
}

// Execute cleanup
cleanNodeModules();
