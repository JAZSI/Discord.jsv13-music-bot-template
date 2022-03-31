const { Client } = require("discord.js");

module.exports = {
    name: "warn",
     /**
     * @param {Client} client 
     * @param {*} info 
     */
    run: async (client, info) => {
        console.log(`Warning: ${info}`);
    }
}