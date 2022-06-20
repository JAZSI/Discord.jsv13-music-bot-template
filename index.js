const { Client, Intents, Collection } = require("discord.js");
const { DisTube } = require("distube");
const { SpotifyPlugin } = require("@distube/spotify");
const { SoundCloudPlugin } = require("@distube/soundcloud");
const { YtDlpPlugin } = require("@distube/yt-dlp");
require("dotenv").config();

const client = new Client({ 
    partials: [
        "CHANNEL",
        "GUILD_MEMBER",
        "GUILD_SCHEDULED_EVENT", 
        "MESSAGE",
        "REACTION", 
        "USER"
    ],
    intents: [ 
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES, 
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_WEBHOOKS,
    ],
    allowedMentions: {
        parse: ["roles", "users", "everyone"],
        repliedUser: true
    },
});

client.prefix_commands = new Collection();
client.aliases = new Collection();
client.slash_commands = new Collection();
client.config = require('./config.json');
client.version = require("./package.json").version;

client.distube = new DisTube(client, {
    emitNewSongOnly: true,
	leaveOnEmpty: true,
	leaveOnFinish: true,
	leaveOnStop: true,
    nsfw: true,
    savePreviousSongs: true,
    searchSongs: 10,
    searchCooldown: 30,
    youtubeDL: false,
    ytdlOptions: {
        highWaterMark: 1 << 24,
        quality: "highestaudio",
        format: "audioonly"
    },
    plugins: [
        new SpotifyPlugin(),
        new SoundCloudPlugin(),
        new YtDlpPlugin()
    ],
});

for (const handler of [
    "prefix_command", 
    "slash_command",
    "event", 
    "distube"
])require(`./handlers/${handler}`)(client);

process.on("unhandledRejection", (error, promise) => {
    console.error(`Unhandled rejection: ${error.message}`);
    console.error(promise);
});

if (!process.env.TOKEN) {
    throw new Error("Missing TOKEN environment variable");
}

client.login(process.env.TOKEN);