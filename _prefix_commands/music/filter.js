const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
    name: "filter",
    aliases: [],
    usage: "",
    description: "Toggles the filter for the current voice channel.",
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
        // Check if the bot and the user are in the same voice channel.
        if (message.guild.me.voice.channel) {
            if (message.guild.me.voice.channel.id !== message.member.voice.channel.id) return message.channel.send("I am not in the same voice channel as you.");
        }
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send("There is no queue.")
        if (args[0] === "off" && queue.filters?.length) queue.setFilter(false)
        else if (Object.keys(client.distube.filters).includes(args[0])) queue.setFilter(args[0])
        else if (args[0]) return message.channel.send(`Not a valid filter`)
        message.channel.send(`Current Queue Filter: \`${queue.filters.join(", ") || "Off"}\``)
    }
}