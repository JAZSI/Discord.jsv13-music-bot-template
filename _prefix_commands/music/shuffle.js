const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
    name: "shuffle",
    aliases: [],
    usage: "",
    description: "Shuffle the current queue.",
    botPermissions: [],
    userPermissions: [],
    voiceChannel: true,
    nsfw: false,
    disabled: false,
    ownerOnly: false,
    guildOwnerOnly: false,
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {Array<String>} args
     */
    run: async (client, message, args) => {
        if (message.guild.me.voice.channel) {
            if (message.guild.me.voice.channel.id !== message.member.voice.channel.id) return message.channel.send("I am not in the same voice channel as you.");
        }
        const queue = client.distube.getQueue(message);
        if (!queue) return message.channel.send("There is no queue.");
        queue.shuffle();
        message.channel.send("Shuffled the current queue.");
    }
}