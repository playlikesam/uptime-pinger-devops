// app.js
const axios = require('axios');

const urlsToMonitor = [
  'https://www.instagram.com',
  'https://discord.com'
];

const checkInterval = 60 * 1000; // Check every 60 seconds

async function checkUptime() {
  const time = new Date().toLocaleString();
  for (const url of urlsToMonitor) {
    try {
      const response = await axios.get(url);
      console.log(`[${time}] ✅ ${url} is UP. Status: ${response.status}`);
    } catch (error) {
      console.log(`[${time}] ❌ ${url} is DOWN. Error: ${error.message}`);
    }
  }
  console.log('-----------------------------------');
}

setInterval(checkUptime, checkInterval);
checkUptime(); // Run immediately on start
