const fs = require('fs');
const path = require('path');

const cleanPath = path.join(__dirname, 'node_modules', 'gsap-trial');

console.log('--- VERCEL CLEANUP SCRIPT ---');
console.log('Checking for gsap-trial in: ' + cleanPath);

if (fs.existsSync(cleanPath)) {
    console.log('FOUND gsap-trial! Deleting it now...');
    try {
        fs.rmSync(cleanPath, { recursive: true, force: true });
        console.log('Successfully deleted gsap-trial.');
    } catch (e) {
        console.error('Error deleting gsap-trial:', e);
        process.exit(1);
    }
} else {
    console.log('gsap-trial not found. Environment is clean.');
}
console.log('--- CLEANUP COMPLETE ---');
