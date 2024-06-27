const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Fungsi untuk membaca token dari file
function readTokensFromFile(filePath) {
   return fs
      .readFileSync(filePath, 'utf-8')
      .split('\n')
      .map((token) => token.trim())
      .filter(Boolean);
}

const tokens = readTokensFromFile(path.join(__dirname, 'tokens.txt')); // Path to your tokens file

// Fungsi untuk melihat info pengguna
async function getUserInfo(authToken) {
   try {
      const response = await axios.post(
         'https://api.dormint.io/user/info',
         {
            auth_token: authToken,
         },
         {
            headers: {
               Accept: 'application/json, text/plain, */*',
               'Content-Type': 'application/json',
            },
         }
      );
      console.log('User Info:', response.data);
   } catch (error) {
      console.error(error);
   }
}

// Fungsi untuk melihat status farming
async function getFarmingStatus(authToken) {
   try {
      const response = await axios.post(
         'https://api.dormint.io/tg/farming/status',
         {
            auth_token: authToken,
         },
         {
            headers: {
               Accept: 'application/json, text/plain, */*',
               'Content-Type': 'application/json',
            },
         }
      );
      console.log('Farming Value:', response.data.farming_value);
   } catch (error) {
      console.error(error);
   }
}

// Fungsi untuk memulai farming
async function startFarming(authToken) {
   try {
      const response = await axios.post(
         'https://api.dormint.io/tg/farming/start',
         {
            auth_token: authToken,
         },
         {
            headers: {
               Accept: 'application/json, text/plain, */*',
               'Content-Type': 'application/json',
            },
         }
      );

      if (response.data.status === 'error') {
         console.log('Farming sedang berjalan');
      } else {
         console.log('Start Farming:', response.data);
      }
   } catch (error) {
      console.error(error);
   }
}

// Fungsi untuk mengklaim reward farming
async function claimFarmingRewards(authToken) {
   try {
      const response = await axios.post(
         'https://api.dormint.io/tg/farming/claimed',
         {
            auth_token: authToken,
         },
         {
            headers: {
               Accept: 'application/json, text/plain, */*',
               'Content-Type': 'application/json',
            },
         }
      );
      console.log('Claim Farming Rewards:', response.data);
   } catch (error) {
      console.error(error);
   }
}

// Fungsi untuk menambahkan jeda
function delay(ms) {
   return new Promise((resolve) => setTimeout(resolve, ms));
}

// Fungsi utama untuk menjalankan semua proses
async function main() {
   // Process for each account
   for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      console.log(`Processing account ${i + 1}`);
      await getUserInfo(token);
      await getFarmingStatus(token);
      await startFarming(token);
      await claimFarmingRewards(token);
      await delay(3000); // Menambahkan jeda 3 detik antar akun
   }

   // Mengulangi proses setiap 10 menit
   setInterval(async () => {
      for (let i = 0; i < tokens.length; i++) {
         const token = tokens[i];
         console.log(`Processing account ${i + 1}`);
         await getUserInfo(token);
         await getFarmingStatus(token);
         await startFarming(token);
         await claimFarmingRewards(token);
         await delay(3000); // Menambahkan jeda 3 detik antar akun
      }
   }, 10000); //
}

main();
