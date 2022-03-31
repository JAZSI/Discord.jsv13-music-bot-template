const { Client } = require("discord.js");

module.exports = {
    name: "ready",
    once: true,
    /**
    * @param {Client} client
    */
    run: async (client) => {
        console.log(`[ CLIENT ] ${client.user.tag} is ready!`);

        const status = client.config.status[Math.floor(Math.random() * client.config.status.length)];
        client.user.setPresence({
            status: status.status,
            activities: [
                {
                    name: status.activity,
                    type: status.type
                }
            ]
        });
    }
}