const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
    name: "previous",
    aliases: [],
    usage: "",
    description: "Previous song.",
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
        const song = queue.previous();
        if (!song) return message.channel.send("There is no previous song.");
        const embed = new MessageEmbed()
            .setColor(client.config.color)
            .setTitle("Previous Song")
            .setDescription(`**${song.title}** started playing. \`${song.formattedDuration}\``)
            .setThumbnail(song.thumbnail)
            .setFooter({ text: `${client.user.username} - Music`, iconURL: client.user.displayAvatarURL() })
            .setTimestamp();
        message.channel.send({embeds: [embed]});
    }
}