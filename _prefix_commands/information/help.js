const { Client, Message, MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");

module.exports = {
    name: "help",
    aliases: ["h"],
    usage: "[command]",
    description: "Get help about commands",
    botPermissions: [],
    userPermissions: [],
    voiceChannel: false,
    nsfw: false,
    disabled: false,
    ownerOnly: false,
    guildOwnerOnly: false,
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {Array<String>} args
     */
    run: async (client, message, args) => {
        const prefix = client.config.prefix;
        let categories = [];
        const command = args[0];
        if (!command) {
            readdirSync("./prefix_commands/").forEach(dir => {
                if (!categories.includes(dir)) categories.push(dir);
            });
            const embed = new MessageEmbed()
                .setColor(client.config.color)
                .setTitle(`${client.user.username}'s Commands`)
                .setDescription(`**Prefix:** \`${prefix}\`\nUse \`${prefix}help <command>\` to get more information about a command.\nUsage types: <required>, [optional]`)
                .setTimestamp()
                .setFooter({text: `${client.user.username} v${client.version}`, iconURL: client.user.displayAvatarURL()});
            for (let category of categories) {
                const dirEmojis = `${client.config.category[category]} ${category.toUpperCase()}`;
                embed.addField(dirEmojis, ">>> " + client.prefix_commands.filter(c => c.category === category).map(c => `\`${c.name}\``).join(", "), true);
            }
            message.channel.send({ embeds: [embed] });
        } else {
        const cmd = client.prefix_commands.get(command) || client.prefix_commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
        if (!cmd) return message.channel.send("That command doesn't exist.");
        const embed = new MessageEmbed()
            .setColor(client.config.color)
            .setTitle(`Command: ${cmd.name}`)
            .setDescription(cmd.description || "No description provided.")
            .addField("Aliases", cmd.aliases.length > 0 ? cmd.aliases.map(a => `\`${a}\``).join(", ") : "None", true)
            .addField("Category", "" + cmd.category, true)
            .addField("Usage", `\`${prefix}${cmd.name} ${cmd.usage || ""}\``, true)
            .addField("Bot Permissions", "" + cmd.botPermissions ? cmd.botPermissions.join(", ") : "None", true)
            .addField("User Permissions", "" + cmd.userPermissions ? cmd.userPermissions.join(", ") : "None", true)
            .addField("\u200B", "\u200B", true)
            .addField("Voice Channel", cmd.voiceChannel ? "Yes" : "No", true)
            .addField("NSFW", cmd.nsfw ? "Yes" : "No", true)
            .addField("Disabled", cmd.disabled ? "Yes" : "No", true)
            .addField("Owner Only", cmd.ownerOnly ? "Yes" : "No", true)
            .addField("Guild Owner Only", cmd.guildOwnerOnly ? "Yes" : "No", true)
            .addField("\u200B", "\u200B", true)
            .setTimestamp()
            .setFooter({ text: `${client.user.username} v${client.version}`, iconURL: client.user.avatarURL() });
        return message.channel.send({embeds: [embed]});
        }
    }
};