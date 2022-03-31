module.exports = async (client, textChannel, e) => {
    textChannel.send(`An error occured: \`\`\`${e.toString().slice(0, 1974)}\`\`\``);
}