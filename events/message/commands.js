module.exports = {
    name: "messageCreate",
    /**
     * @param {Client} client 
     * @param {Message} message 
     */
    run: async (client, message) => {
        const prefix = client.config.prefix;
        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
        const command = client.prefix_commands.get(cmd) || client.prefix_commands.get(client.aliases.get(cmd));
        if (!command) return;

        // Bot Permissions
        if (command.botPermissions) {
            const Permissions = command.botPermissions.filter(x => !message.guild.me.permissions.has(x)).map(x => "`" + x + "`")
            if (Permissions.length) return message.channel.send(`I need ${Permissions.join(", ")} permission(s) to execute the command!`)
        }

        // User Permissions
        if (command.userPermissions) {
            const Permissions = command.userPermissions.filter(x => !message.member.permissions.has(x)).map(x => "`" + x + "`")
            if (Permissions.length) return message.channel.send(`You need ${Permissions.join(", ")} permission(s) to execute the command!`)
        }

        // Voice channel
        if (command.voiceChannel && message.member.voice.channel === null) {
            return message.channel.send("You need to be in a voice channel to execute this command!");
        }

        // Channel is nsfw
        if (command.nsfw && !message.channel.nsfw) {
            return message.channel.send("This command is only available in nsfw channels!");
        }

        // Command is disabled
        if (command.disabled) {
            return message.channel.send("This command is disabled!");
        }

        // Command is owner only
        if (command.ownerOnly && message.author.id !== client.config.ownerID) {
            return message.channel.send("This command is owner only!");
        }

        // Command is guild owner only
        const owner = await message.guild.fetchOwner()
        if (command.guildOwnerOnly && message.author.id !== owner.id) {
            return message.channel.send("This command is guild owner only!");
        }

        // Run command
        try {
            command.run(client, message, args);
        }
        catch (error) {
            console.log(error);
        }
    }
}