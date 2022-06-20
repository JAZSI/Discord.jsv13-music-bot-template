const { SlashCommandBuilder } = require("@discordjs/builders");
const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("The ping of the bot."),
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */
    run: async (client, interaction) => {
        await interaction.deferReply({ ephemeral: false });
        const embed = new MessageEmbed()
            .setColor(client.config.color)
            .setTitle("Pong!")
            .setDescription(`${client.ws.ping}ms`)
            .setTimestamp();
        interaction.followUp({ embeds: [embed] });
    }
}