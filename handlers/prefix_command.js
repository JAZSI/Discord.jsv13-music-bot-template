const { readdirSync } = require("fs");

module.exports = (client) => {
    try {
        readdirSync("./_prefix_commands").forEach(dir => {
            const commands = readdirSync(`./_prefix_commands/${dir}/`).filter(file => file.endsWith(".js"));
            for (const file of commands) {
                const command = require(`../_prefix_commands/${dir}/${file}`);
                command.category = dir
                client.prefix_commands.set(command.name, command);
                if (command.aliases && Array.isArray(command.aliases)) command.aliases.forEach(alias => client.aliases.set(alias, command.name));
                console.log(`[ PREFIX COMMAND ] Loaded prefix command: ${command.name}`);
            }
        });
    } catch (error) {
        console.log(error)
    }
}