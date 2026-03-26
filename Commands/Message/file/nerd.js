import { ActionRow, ActionRowBuilder, EmbedBuilder } from "discord.js";
import { nerdPHRASES } from "../../../words.js";
/**
 * @type {import("../../../index.js").Mcommand}
 */
const getPhrase = nerdPHRASES[Math.floor(Math.random() * nerdPHRASES.length)];
export default {
  name: "nerd",
  description: "Send a nerd alert!",
  userPermissions: ["SendMessages"],
  botPermissions: ["SendMessages", "EmbedLinks"],
  category: "",
  cooldown: 5,

  run: async ({ client, message, args, prefix }) => {
   message.channel.send(getPhrase);
  },
};
