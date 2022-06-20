const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    /**
     * @param {Client} client 
     * @param {CommandInteraction} interaction
     */
    run: async (client, interaction) => {
        if (interaction.isCommand()) {
            await interaction.deferReply({ ephemeral: false });
            const command = client.slash_commands.get(interaction.commandName);
            if (!command) interaction.followUp("This command does not exist.");
            try {
                command.run(client, interaction);
            } catch (error) {
                interaction.followUp(`An error occurred: ${error.message}`);
            };
        }
    }
};