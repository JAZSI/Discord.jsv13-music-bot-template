const { Client, ContextMenuInteraction, MessageEmbed } = require("discord.js");
const { ContextMenuCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName("avatar")
        .setType(2),
    /**
     * @param {Client} client
     * @param {ContextMenuInteraction} interaction
     */
    run: async (client, interaction) => {
        const user = await client.users.fetch(interaction.targetId);
        const embed = new MessageEmbed()
            .setColor(client.config.color)
            .setTitle(`${user.tag}'s Avatar`)
            .setImage(user.avatarURL({ size: 2048, dynamic: true }));
        return interaction.followUp({ embeds: [embed] });
    }
}