const { Client } = require("discord.js");
const { REST } = require("@discordjs/rest");
const { readdirSync } = require("fs");
const { Routes } = require("discord-api-types/v9");

module.exports = {
    name: "ready",
    once: true,
    /**
    * @param {Client} client
    */
    run: async (client) => {
        const slashCommands = [];
        readdirSync("./_slash_commands").forEach(dir => {
            const commands = readdirSync(`./_slash_commands/${dir}/`).filter(file => file.endsWith(".js"));
            for (const file of commands) {
                const command = require(`../../_slash_commands/${dir}/${file}`);;
                slashCommands.push(command.data);
            }
        });

        const rest = new REST({
            version: "9"
        }).setToken(client.token);

        if (process.env.NODE_ENV === "production") {
            await rest.put(Routes.applicationCommands(client.user.id), {
                body: slashCommands
            })
            console.log(`[ SLASH COMMAND ] ${slashCommands.length} commands registered globally.`);
        } else {
            await rest.put(Routes.applicationGuildCommands(client.user.id, client.config.guildID), {
                body: slashCommands
            })
            console.log(`[ SLASH COMMAND ] ${slashCommands.length} commands registered in ${client.config.guildID}.`);
        }
    }
}