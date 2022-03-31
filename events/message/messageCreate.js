const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
    name: "messageCreate",
    /**
     * @param {Client} client 
     * @param {Message} message 
     */
    run: async (client, message) => {
        if (message.channel.type !== "GUILD_TEXT") return;
        if ((message.content === `<@${client.user.id}>`) || (message.content === `<@!${client.user.id}>`)) {
            client.prefix_commands.get("help").run(client, message, []);
        }
    }
}