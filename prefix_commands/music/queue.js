const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
    name: "queue",
    aliases: [],
    usage: "",
    description: "Queue.",
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
        const status = queue => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filters.join(", ") || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send("There is no queue.")
        const q = queue.songs.map((song, i) => `${i === 0 ? "**Playing:**\n" : `${i}.`} ${song.name} - \`${song.formattedDuration}\``).join("\n")
        const embed = new MessageEmbed()
            .setColor("DARK_RED")
            .setTitle("**Song Queue**")
            .setDescription(`${q}\n${status(queue)}`)
        message.channel.send({embeds: [embed]});
    }
}