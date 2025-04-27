const TelegramBot = require('node-telegram-bot-api');

// Ambil token dari environment variable
const token = process.env.BOT_TOKEN;

// Bikin bot pakai polling
const bot = new TelegramBot(token, { polling: true });

// Saat bot menerima pesan
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  console.log('Pesan diterima:', text);

  if (text.toLowerCase() === '/start') {
    bot.sendMessage(chatId, 'Halo Bang! Siap tempur bareng Genju Sniper!');
  } else if (text.toLowerCase() === '/update') {
    bot.sendMessage(chatId, 'Update Sinyal:\nBuy ETHUSD @3000\nSL 2950 | TP 3100\nGas sniper Bang!');
  } else {
    bot.sendMessage(chatId, `Pesan kamu sudah aku baca, Bang: "${text}"`);
  }
});
