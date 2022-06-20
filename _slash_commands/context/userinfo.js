const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const { ContextMenuCommandBuilder } = require("@discordjs/builders");
const moment = require("moment");

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName("userinfo")
        .setType(2),
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */
    run: async (client, interaction) => {
        const user = await client.users.fetch(interaction.targetId);
        const embed = new MessageEmbed()
            .setColor(client.config.color)
            .setTitle(`${user.username}#${user.discriminator}`)
            .setThumbnail(user.displayAvatarURL({ size: 2048 }))
            .addField("Username", "" + user.username, true)
            .addField("ID", "" + user.id, true)
            .addField("\u200B", "\u200B", true)
            .addField("Created at", "" + moment.utc(user.createdAt).format("LLLL"), true)
            .addField("Joined at", "" + moment.utc(user.joinedAt).format("LLLL"), true)
            .addField("\u200B", "\u200B", true)
            .setFooter({ 
                text: `Requested by ${interaction.user.username}`, 
                iconURL: interaction.user.displayAvatarURL({ size: 2048, dynamic: true }) 
            });
        return interaction.followUp({ embeds: [embed] });
    }
}