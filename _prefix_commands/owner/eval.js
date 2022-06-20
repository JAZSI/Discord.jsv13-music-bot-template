const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
    name: "eval",
    aliases: ["ev"],
    usage: "<code>",
    description: "Evaluates code",
    botPermissions: ["SEND_MESSAGES"],
    userPermissions: [],
    voiceChannel: false,
    nsfw: false,
    disabled: false,
    ownerOnly: true,
    guildOwnerOnly: false,
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {Array<String>} args
     */
    run: async (client, message, args) => {

        if (!args[0]) return message.channel.send("What would you like to evaluate")

        try {
            const evaled = eval(args.join(" "));
            const cleaned = await clean(evaled);
            message.channel.send(`\`\`\`js\n${cleaned}\n\`\`\``);
        } catch (error) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${error}\n\`\`\``);
        }

        async function clean(text) {
            
            if (text && text.constructor.name == "Promise") {
                text = await text;
            }
        
            if (typeof text !== "string") {
                text = require("util").inspect(text, { depth: 1 });
            }
            
            text = text
                .replace(/`/g, "`" + String.fromCharCode(8203))
                .replace(/@/g, "@" + String.fromCharCode(8203))
                .replaceAll(client.token, "[REDACTED]");
            
            return text;
        }
    }
}

