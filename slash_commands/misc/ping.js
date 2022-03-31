const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    data: {
        name: "ping",
        description: "Get the bot's ping",
        type: 1
    },
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