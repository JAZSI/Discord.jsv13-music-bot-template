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
            "\r",
            "module.exports = {",
			"\tdata: {",
			"\t\tname: \"\",",
			"\t\tdescription: \"\",",
			"\t\ttype: 1",
			"\t},",
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

module.exports = {
    data: {
        name: "",
        description: "",
        type: 1
    },
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */
    run: async (client, interaction) => {

    }
}
```
### Slash command notes
```js
module.exports = {
    data: {
        name: "",
        description: "",
        type: 1, // The type of command
        options: [
            name: "", // The name of the option
            description: "", // The description of the option
            type: 3, // The type of the option
            required: true, // Whether the option is required
            choices: [
                { 
                    name: "", // The name of the choice
                    value: "" // The value of the choice
                }
            ],
            min_value: 0, // The minimum value of the option if the type is Integer or Number
            channel_types: 0, // The channel types the command can be used in
        ],
        
    },
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction // Replace CommandInteraction with ContextMenuInteraction for context menus
     */
    run: async (client, interaction) => {

    }
}
```
Command types:
| Name | Type |
|:----:|:----:|
| CHAT_INPUT | 1 |
| USER | 2 |
| MESSAGE | 3 |

Option types:
| Name | Value | Note |
|:----:|:----:|:---:|
| SUB_COMMAND |	1 |	|
| SUB_COMMAND_GROUP | 2	| |
| STRING | 3 | |	
| INTEGER | 4 | Any integer between -2^53 and 2^53 |
| BOOLEAN | 5 | |
| USER | 6 | |	
| CHANNEL | 7 | Includes all channel types + categories |
| ROLE | 8 | |
| MENTIONABLE | 9 | Includes users and roles | 
| NUMBER | 10 | Any double between -2^53 and 2^53 |
| ATTACHMENT | 11 | attachment object |

Channel types:
| Type | ID | Description |
|:----:|:---:|:-----------|
| GUILD_TEXT | 0 | a text channel within a server |
| DM | 1 | a direct message between users |
| GUILD_VOICE | 2 | a voice channel within a server |
| GROUP_DM | 3 | a direct message between multiple users |
| GUILD_CATEGORY | 4 | an organizational category that contains up to 50 channels |
| GUILD_NEWS | 5 | a channel that users can follow and crosspost into their own server |
| GUILD_STORE | 6 | a channel in which game developers can sell their game on Discord |
| GUILD_NEWS_THREAD | 10 | a temporary sub-channel within a GUILD_NEWS channel |
| GUILD_PUBLIC_THREAD | 11 | a temporary sub-channel within a GUILD_TEXT channel |
| GUILD_PRIVATE_THREAD | 12 | a temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission |
| GUILD_STAGE_VOICE | 13 | a voice channel for hosting events with an audience 

> This template is from my private discord bot (Jelly) I made for my own use.
> I just took the code from my own bot and made it into a template.