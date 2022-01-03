const Discord = require("discord.js");
module.exports = async () => {
    client.user.setPresence({ activity: { name: config.activity, type: config.type }, status: config.status });
   }; 
  module.exports.configuration = {
      name: "ready"
    }