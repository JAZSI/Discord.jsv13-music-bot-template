const { Client, ContextMenuInteraction, MessageEmbed } = require("discord.js");
const moment = require("moment");

module.exports = {
    data: {
        name: "userinfo",
        type: 2
    },
    /**
     * @param {Client} client
     * @param {ContextMenuInteraction} interaction
     */
    run: async (client, interaction) => {
        await interaction.deferReply({ ephemeral: false });
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