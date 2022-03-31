const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
    name: "repeat",
    aliases: ["loop"],
    usage: "<off|song|queue>",
    description: "Repeat the current song or queue.",
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
        let mode = null
        if (args[0] === "off") {
            mode = 0
        } else 
        
        if (args[0] === "song") {
            mode = 1
        } else 
        
        if (args[0] === "queue") {
            mode = 2
        } else {
            message.channel.send(">>> Repeat types: \n-off\n-song\n-queue")
        }
        mode = queue.setRepeatMode(mode)
        mode = mode ? mode === 2 ? "Repeat queue" : "Repeat song" : "Off"
        message.channel.send(`Set repeat mode to \`${mode}\``)
    }
}