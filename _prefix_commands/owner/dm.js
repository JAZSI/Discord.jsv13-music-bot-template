const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
    name: "dm",
    aliases: [],
    usage: "<user> <message>",
    description: "Send a DM to a user",
    botPermissions: [],
    userPermissions: [],
    voiceChannel: false,
    nsfw: false,
    disabled: false,
    ownerOnly: true,
    guildOwnerOnly: false,
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {Array<String>} args
     */
    run: async (client, message, args) => {
        const user = message.mentions.users.first() || client.users.cache.get(args[0]);
        if (!user) return message.channel.send("Please provide a user to send a DM to.");
        const content = args.slice(1).join(" ");
        if (!content) return message.channel.send("Please provide a message to send.");
        try {
            await user.send(content);
            message.channel.send(`DM sent to ${user.tag}`);
        } catch (err) {
            message.channel.send(`Could not send DM to ${user.tag}`);
        }
    }
};