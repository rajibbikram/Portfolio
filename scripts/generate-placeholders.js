const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Project directories
const projects = [
  { name: 'ecomarc', count: 3 },
  { name: 'exam-portal', count: 2 },
  { name: 'portfolio', count: 3 }
];

// Create public/projects directory if it doesn't exist
const baseDir = path.join(__dirname, '..', 'public', 'projects');
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

// Colors for different projects
const colors = {
  ecomarc: ['#3b82f6', '#1d4ed8', '#1e40af'],
  'exam-portal': ['#8b5cf6', '#7c3aed', '#6d28d9'],
  portfolio: ['#10b981', '#059669', '#047857']
};

// Generate placeholder images for each project
projects.forEach(project => {
  const projectDir = path.join(baseDir, project.name);
  
  // Create project directory if it doesn't exist
  if (!fs.existsSync(projectDir)) {
    fs.mkdirSync(projectDir, { recursive: true });
  }

  // Generate specified number of placeholder images
  for (let i = 1; i <= project.count; i++) {
    const width = 1200;
    const height = 675; // 16:9 aspect ratio
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    
    // Background color
    const colorIndex = (i - 1) % colors[project.name].length;
    ctx.fillStyle = colors[project.name][colorIndex];
    ctx.fillRect(0, 0, width, height);
    
    // Text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Project name
    const projectName = project.name.charAt(0).toUpperCase() + project.name.slice(1);
    ctx.fillText(`${projectName} Screenshot ${i}`, width / 2, height / 2 - 30);
    
    // Dimensions
    ctx.font = '24px Arial';
    ctx.fillText(`${width} × ${height}`, width / 2, height / 2 + 30);
    
    // Save the image
    const buffer = canvas.toBuffer('image/jpeg');
    fs.writeFileSync(path.join(projectDir, `screenshot${i}.jpg`), buffer);
  }
  
  console.log(`Generated ${project.count} placeholder images for ${project.name}`);
});

console.log('Placeholder image generation complete!');
