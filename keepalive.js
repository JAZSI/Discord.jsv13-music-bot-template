const { get } = require("https");
/**
 * @param {string} website The website to keep alive
 * @param {string} path The path of the website
 */
function keepAlive(website, path) {
    console.log("[ KEEPALIVE ] Keepalive is running...");
    setInterval(() =>{
        const options = {
            host: website,
            path: path
        };
        get(options, (res) => {
            res.on("data", (chunk) => {
                try {
                    console.log(`[ KEEPALIVE ] Response status: ${res.statusCode}`);
                } catch (err) {
                    console.log(err.message);
                }
            });
        }).on("error", (error) => {
            console.log("Error: " + error.message);
        });
    }, 1000 * 60 * 5);
}

module.exports = keepAlive;