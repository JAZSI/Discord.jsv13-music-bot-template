const { MessageEmbed } = require('discord.js');
const status = queue => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filters.join(", ") || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``

module.exports = (client, queue, song) => {
    const embed = new MessageEmbed()
        .setColor(client.config.color)
        .setTitle("Started Playing")
        .setDescription(`**${song.name}** started playing. \`${song.formattedDuration}\``)
        .addField("Status", "" + status(queue))
        .setFooter({text: `${client.user.username} | Song`, iconURL: client.user.displayAvatarURL()})
    queue.textChannel.send({ embeds: [embed] });
}