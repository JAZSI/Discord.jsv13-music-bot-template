const { MessageEmbed } = require("discord.js");

module.exports = async (client, message) => {
    const embed = new MessageEmbed()
        .setColor(client.config.color)
        .setTitle("Search Cancelled")
        .setDescription("Search has been cancelled.")
        .setFooter({text: `${client.user.username} | Search`, iconURL: client.user.displayAvatarURL()})
    message.channel.send({ embeds: [embed] });
    
}