const { Client, ModalSubmitInteraction } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    /**
     * @param {Client} client 
     * @param {ModalSubmitInteraction} interaction
     */
    run: async (client, interaction) => {
        if (interaction.isModalSubmit()) {
            await interaction.deferReply({ ephemeral: false });
            const command = client.modal_commands.get(interaction.customId);
            if (!command) interaction.followUp("This command does not exist.");
            try {
                command.run(client, interaction);
            } catch (error) {
                interaction.followUp(`An error occurred: ${error.message}`);
            };
        }
    }
};