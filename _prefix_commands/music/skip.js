const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
    name: "skip",
    aliases: ["next"],
    usage: "",
    description: "Skip the current song.",
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
        if (!queue.autoplay && queue.songs.length <= 1) return message.channel.send("There is no song to skip.");
        if (!queue) return message.channel.send("There is no queue.");
        queue.skip();
        message.channel.send("Skipped the current song.");
    }
}