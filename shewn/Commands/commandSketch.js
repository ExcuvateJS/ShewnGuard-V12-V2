const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(client, message, args) => {
  
    message.channel.wsend("deneme")
  };

module.exports.configuration = {
    name: "deneme",
    aliases: ["deneme"],
    usage: "deneme",
    description: "Deneme Komutu."
};