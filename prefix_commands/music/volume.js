const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
    name: "volume",
    aliases: ["vol"],
    usage: "<volume>",
    description: "Change the volume of the current song.",
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
        const volume = parseInt(args[0]);
        if (isNaN(volume)) return message.channel.send("Invalid volume.");
        if (volume < 0 || volume > 100) return message.channel.send("Volume must be between 0 and 100.");
        queue.setVolume(volume);
        message.channel.send(`Set volume to \`${volume}\``);
    }
}