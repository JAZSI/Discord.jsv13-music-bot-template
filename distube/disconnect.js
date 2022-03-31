const { MessageEmbed } = require("discord.js")

module.exports = (client, queue) => {
    const embed = new MessageEmbed()
        .setColor(client.config.color)
        .setDescription("Leaving the voice channel...")
        .setFooter({text: `${client.user.username} | Disconnect`, iconURL: client.user.displayAvatarURL()})
        .setTimestamp()
    queue.textChannel.send({ embeds: [embed] })
}