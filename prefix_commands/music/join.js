const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
    name: "join",
    aliases: [],
    usage: "[channel]",
    description: "Joins the voice channel of the user who sent the command or the given voice channel id.",
    botPermissions: [],
    userPermissions: [],
    voiceChannel: false,
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
        if (args[0]) {
            const voiceChannel = message.guild.channels.cache.find(c => c.type === "GUILD_VOICE" && c.id === args[0]);
            if (!voiceChannel) return message.channel.send("Invalid voice channel id.");
            if (!voiceChannel.joinable) return message.channel.send("I cannot join this voice channel.");
            if (!voiceChannel.speakable) return message.channel.send("I cannot speak in this voice channel.");
            if (message.member.voice.channel) {
                if (message.member.voice.channel.id === voiceChannel.id) return message.channel.send("I am already in this voice channel.");
            }
            return client.distube.voices.join(voiceChannel);
        } else {
            if (!message.member.voice.channel) return message.channel.send("You are not in a voice channel.");
            if (!message.member.voice.channel.joinable) return message.channel.send("I cannot join this voice channel.");
            if (!message.member.voice.channel.speakable) return message.channel.send("I cannot speak in this voice channel.");
            if (message.guild.me.voice.channel) {
                if (message.guild.me.voice.channel.id === message.member.voice.channel.id) return message.channel.send("I am already in this voice channel.");
            }
            return client.distube.voices.join(message.member.voice.channel);
        }
    }
}