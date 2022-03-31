const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    /**
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    run: async (client, interaction) => {
        if (interaction.isCommand) {
            const command = client.slash_commands.get(interaction.commandName);
            if (!command) interaction.followUp("This command does not exist.");
            if (command && command.data.type === 1) {
                command.run(client, interaction);
            }
        }
        if (interaction.isContextMenu) {
            const command = client.slash_commands.get(interaction.commandName);
            if (!command) interaction.followUp("This command does not exist.");

            if ((command.data.type === 2) || (command.data.type === 3)) {
                command.run(client, interaction);
            }
            
        }
    }
};