const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
    name: "play",
    aliases: ["p"],
    usage: "<query|url>",
    description: "Plays a song.",
    botPermissions: ["SPEAK", "CONNECT"],
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
        const query = args.join(" ");
        if (!query) return message.channel.send("Please provide a query.");
        client.distube.play(message.member.voice.channel, query, {
            member: message.member,
            textChannel: message.channel,
            message
        })
    }
}