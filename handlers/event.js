const { readdirSync } = require("fs");

module.exports = (client) => {
    try {
        readdirSync("./events/").forEach(dir => {
            const events = readdirSync(`./events/${dir}/`).filter(file => file.endsWith(".js"));
            for (const file of events) {
                const event = require(`../events/${dir}/${file}`);
                const eventName = file.replace(".js", "");
                if (event.once) {
                    client.once(event.name, event.run.bind(null, client));
                } else {
                    client.on(event.name, event.run.bind(null, client));
                }
                console.log(`[ EVENT ] Loaded event: ${eventName}`);
            }
        });
    } catch (error) {
        console.log(error)
    }
}