const { readdirSync } = require("fs");

module.exports = (client) => {
    try {
        readdirSync("./_slash_commands").forEach(dir => {
            const commands = readdirSync(`./_slash_commands/${dir}/`).filter(file => file.endsWith(".js"));
            for (const file of commands) {
                const command = require(`../_slash_commands/${dir}/${file}`);
                client.slash_commands.set(command.data.name, command);
                console.log(`[ SLASH COMMAND ] Loaded slash command: ${command.data.name}`);
            }
        });
    } catch (error) {
        console.log(error)
    }
}