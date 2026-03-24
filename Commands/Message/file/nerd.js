import { ActionRow, ActionRowBuilder, EmbedBuilder } from "discord.js";

/**
 * @type {import("../../../index.js").Mcommand}
 */
function getRandomNumber(x, y) {
    const range = y - x + 1;
    const randomNumber = Math.floor(Math.random() * range);
    return randomNumber + x;
}
export default {
  name: "nerd",
  description: "Send a nerd alert!",
  userPermissions: ["SendMessages"],
  botPermissions: ["SendMessages", "EmbedLinks"],
  category: "",
  cooldown: 5,

  run: async ({ client, message, args, prefix }) => {
   const chance = getRandomNumber(1, 100);

   if (chance < 50) {
    message.channel.send("<a:499755nerdtyping:1485226579012485221> Nerd Alert! Keyboard Warrior Spotted.")
   } else if (chance < 80) {
    message.channel.send("<:35569nerdshwompy:1485227135479189636> Big Time Nerd Spotted! Chat, make fun of them.")
   } else if (chance < 90) {
    message.channel.send(`<:2965_YuriYandere:1485214986442903552> The person who ran this command is a loser! HAHA`)
   } else {
    message.channel.send("<a:88964rainbowgoat:1485227833860165642> G.O.A.T spotted! Jarvis, make sure this user has a great day.")
   }
  },
};
