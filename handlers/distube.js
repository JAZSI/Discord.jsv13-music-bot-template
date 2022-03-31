const { readdirSync } = require("fs");

module.exports = (client) => {
    try {
        readdirSync("./distube/").forEach(file => {
            const event = require(`../distube/${file}`);
            const eventName = file.replace(".js", "");
            client.distube.on(eventName, event.bind(null, client));
            console.log(`[ DISTUBE ] Loaded event: ${eventName}`);
        });
    } catch (error) {
        console.log(error)
    }
}