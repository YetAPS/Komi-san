import { Client, GatewayIntentBits, Partials } from "discord.js";
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});
let msgCOUNT = 0;
const targetCOUNT = 50; 
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;                 
  if (!message.guild) return;
  const content = message.content || "";
  if (!content) return;

  msgCOUNT++;

  if (msgCOUNT >= targetCOUNT) {
     message.channel.send("The server is active, Komi loves this <3.")
  }

  msgCOUNT = 0;
});

client.login(process.env.TOKEN);