import { ActionRow, ActionRowBuilder, EmbedBuilder } from "discord.js";

/**
 * @type {import("../../../index.js").Mcommand}
 */
export default {
  name: "help",
  description: "The help menu",
  userPermissions: ["SendMessages"],
  botPermissions: ["SendMessages", "EmbedLinks"],
  category: "",
  cooldown: 5,

  run: async ({ client, message, args, prefix }) => {
    const embed = new EmbedBuilder()
    .setTitle("Disclaimer(s)")
    .setColor('#cba6f7')
    .setFooter({text: "\* Terms and Conditions Apply"})
    .addFields([
        { name: "<:9559redn1:1485220844123852800> Affiliation Disclaimer:", value: "> Komi-san is in no way affiliated/partnered with the anime \`Komi Can't Communicate\`, The anime and the character's rights rest with their respective owners."},
        { name: "<:9937redn2:1485220841741619280> About Me:", value: "> Komi-san is a discord bot made to help users with 🛡️ moderating their servers, and increasing server activity\*."},
        { name: "<:1262redn3:1485220839480885400> Developer:", value: "> ferbxyz"}, 
    ])
    


    message.reply({ embeds: [embed]})
  },
};
