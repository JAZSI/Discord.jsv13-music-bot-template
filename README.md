# Discord.js v13 template
> Feel free to use this template for your projects, remove the license, and add your own content.
> Giving credit to the original author is optional, but appreciated.
## Requirements
- [Node.js](https://nodejs.org/)

## How to get Discord Token
- Go to [Discord Developer Portal](https://discordapp.com/developers/applications/me)
- Create a new application
- Add a bot
- Get the token
- Add the token to the .env file as the "TOKEN" variable

## Visual Studio Code Snippets

### Snippet for adding new prefix commands:
```json
{
    "Discord Prefix Command": {
        "prefix": "!dpcmd",
        "body": [
            "const { Client, Message, MessageEmbed } = require(\"discord.js\");",
            "\r",
            "module.exports = {",
            "\tname: \"\",",
            "\taliases: [],",
            "\tusage: \"\",",
            "\tdescription: \"\",",
            "\tbotPermissions: [],",
            "\tuserPermissions: [],",
            "\tvoiceChannel: false,",
            "\tnsfw: false,",
            "\tdisabled: false,",
            "\townerOnly: false,",
            "\tguildOwnerOnly: false,",
            "\t/**",
            "\t * @param {Client} client",
            "\t * @param {Message} message",
            "\t * @param {Array<String>} args",
            "\t */",
            "\trun: async (client, message, args) => {",
            "\r",
            "\t}",
            "}"
        ],
        "description": "Discord.js prefix command"
	}
}
```
```js
const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
    name: "",
    aliases: [],
    usage: "",
    description: "",
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

    }
}
```
### Snippet for adding new slash commands:
```json
{
    "Discord Slash Command": {
        "prefix": "!dscmd",
        "body": [
            "const { Client, CommandInteraction, MessageEmbed } = require(\"discord.js\");",
			"const { SlashCommandBuilder } = require(\"@discordjs/builders\");",
            "\r",
            "module.exports = {",
			"\tdata: new SlashCommandBuilder()",
			"\t\t.setName(\"\")",
			"\t\t.setDescription(\"\"),",
			"\t/**",
			"\t * @param {Client} client",
			"\t * @param {CommandInteraction} interaction",
			"\t */",
			"\trun: async (client, interaction) => {",
			"\r",
			"\t}",
			"}",
        ],
        "description": "Discord.js slash command"
    }
}
```
```js
const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("")
        .setDescription(""),
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */
    run: async (client, interaction) => {

    }
}
```