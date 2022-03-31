const { MessageEmbed } = require("discord.js");

module.exports = async (client, message, result) => {
    let i = 0
    const embed = new MessageEmbed()
        .setColor(client.config.color)
        .setTitle("Search Results")
        .setDescription(`**Choose an option from below**\n${result.map(song => `**${++i}**. [${song.name}](${song.url}) - \`${song.formattedDuration}\``).join("\n")}`)
        .setFooter({text: `${client.user.username} | Search`, iconURL: client.user.displayAvatarURL()})
    message.channel.send({ embeds: [embed] });
}