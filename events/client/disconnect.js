const { Client } = require("discord.js");

module.exports = {
    name: "disconnect",
    /**
     * @param {Client} client
     * @param {CloseEvent} event
     */
    run: async (client, event) => {
        console.log(`${client.user.tag} is disconnecting...`);
    }
};