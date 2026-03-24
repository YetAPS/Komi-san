import { Client, GatewayIntentBits, Partials } from "discord.js";
import WORDS from "../../../words.js"; // default export
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

// normalize WORDS list to lowercase and trim once
const WORDSSet = new Set(WORDS.map(w => w.toLowerCase().trim()));

function containsWORDS(messageContent) {
  // 1) Simple word-based match: split on non-word chars
  const tokens = messageContent.toLowerCase().split(/\W+/).filter(Boolean);
  for (const t of tokens) if (WORDSSet.has(t)) return true;
  return false;
  // Alternative: substring match (less strict)
  // return [...WORDSSet].some(w => messageContent.toLowerCase().includes(w));
}

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;                 // ignore bots
  if (!message.guild) return;                     // optional: ignore DMs
  const content = message.content || "";
  if (!content) return;

  if (containsWORDS(content)) {
    try {
      await message.channel.send({
        content: `<:2965_YuriYandere:1485214986442903552> <@${message.author.id}> you've said a bad word. Try not to do this anymore, OK? — this is a warning.`,
        allowedMentions: { repliedUser: true }
      });

     await message.delete();
    } catch (err) {
      console.error("Failed to warn/delete:", err);
    }
  }
});

client.login(process.env.TOKEN);