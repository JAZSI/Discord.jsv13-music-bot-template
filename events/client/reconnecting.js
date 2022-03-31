const { Client } = require("discord.js");

module.exports = {
    name: "reconnecting",
    /**
     * @param {Client} client
     */
    run: async (client) => {
        console.log(`${client.user.tag} is reconnecting...`);
    }
}