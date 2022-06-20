const { Client, SelectMenuInteraction } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    /**
     * @param {Client} client 
     * @param {SelectMenuInteraction} interaction
     */
    run: async (client, interaction) => {
        if (interaction.isSelectMenu()) {
            await interaction.deferReply({ ephemeral: false });
            const command = client.select_commands.get(interaction.customId);
            if (!command) interaction.followUp("This command does not exist.");
            try {
                command.run(client, interaction);
            } catch (error) {
                interaction.followUp(`An error occurred: ${error.message}`);
            };
        }
    }
};