import { Client, GatewayIntentBits, Partials } from "discord.js";
import { randomPHRASES } from '../../../words.js';
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});
let msgCOUNT = 0;
const targetCOUNT = 49; 
client.on("messageCreate", async (message) => {
const getPhrase = randomPHRASES[Math.floor(Math.random() * randomPHRASES.length)];
  if (message.author.bot) return;                 
  if (!message.guild) return;
  const content = message.content || "";
  if (!content) return;

  msgCOUNT++;
  if (msgCOUNT >= targetCOUNT) {
    message.channel.send(getPhrase);
    msgCOUNT = 0;
}

  
});

client.login(process.env.TOKEN);