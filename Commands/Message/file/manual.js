/**
 * @type {import("../../../index.js").Mcommand}
 */
export default {
  name: "man",
  aliases: "manual",
  description: "Describes the setup info",
  userPermissions: ["SendMessages"],
  botPermissions: ["SendMessages", "EmbedLinks"],
  category: "",
  cooldown: 5,

  run: async ({ client, message, prefix }) => {
const args = message.content.slice(prefix.length).trim().split(/ +/);

const num = args[1];

const cmd = client.mcommands.get(num);
const description = cmd?.description ?? "No description";
message.reply(`${description}`)

  },
};
