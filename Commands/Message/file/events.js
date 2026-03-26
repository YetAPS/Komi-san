import { Client, GatewayIntentBits, Partials } from "discord.js";
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});
let msgCOUNT = 0;
const targetCOUNT = 46; 
client.on("messageCreate", async (message) => {
  const phrases = ["The next person to message is the true knighthood leader of the server, komi really likes them! SHHHHHHHH! Don't tell them.", "The server is active, Komi loves this <3.", "Do you really enjoy these messages?", "Komi needs friends. Anybody? ", "Does anybody use discord?"];
const getPhrase = phrases[Math.floor(Math.random() * phrases.length)];
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