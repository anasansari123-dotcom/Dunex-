// Simple script to create placeholder images
// Run this with: node generate-placeholders.js

const fs = require('fs');
const path = require('path');

// Create placeholder images directory if it doesn't exist
const publicDir = path.join(__dirname, 'public');

// List of images we need
const images = [
  'dubai-skyline.jpg',
  'dubai-office.jpg',
  'property1.jpg',
  'property2.jpg',
  'property3.jpg',
  'blog-market-trends.jpg',
  'blog-downtown-guide.jpg',
  'blog-off-plan.jpg',
  'blog-sustainable.jpg',
  'blog-marina-vs-palm.jpg',
  'blog-visa-regulations.jpg'
];

// Create a simple SVG placeholder for each image
images.forEach(imageName => {
  const imagePath = path.join(publicDir, imageName);
  
  // Create a simple SVG placeholder
  const svgContent = `
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#f3f4f6"/>
  <rect x="50" y="50" width="700" height="500" fill="#e5e7eb" stroke="#d1d5db" stroke-width="2"/>
  <text x="400" y="300" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="#6b7280">
    ${imageName.replace('.jpg', '').replace(/-/g, ' ').toUpperCase()}
  </text>
  <text x="400" y="340" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#9ca3af">
    Placeholder Image
  </text>
</svg>`;

  // Write as SVG file (you can convert to JPG later)
  const svgPath = imagePath.replace('.jpg', '.svg');
  fs.writeFileSync(svgPath, svgContent);
  console.log(`Created placeholder: ${svgPath}`);
});

console.log('Placeholder images created! You can replace these with actual images later.');
