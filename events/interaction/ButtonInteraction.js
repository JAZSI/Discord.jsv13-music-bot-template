const { Client, ButtonInteraction } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    /**
     * @param {Client} client 
     * @param {ButtonInteraction} interaction
     */
    run: async (client, interaction) => {
        if (interaction.isButton()) {
            await interaction.deferReply({ ephemeral: false });
            const command = client.button_commands.get(interaction.customId);
            if (!command) interaction.followUp("This command does not exist.");
            try {
                command.run(client, interaction);
            } catch (error) {
                interaction.followUp(`An error occurred: ${error.message}`);
            };
        }
    }
};