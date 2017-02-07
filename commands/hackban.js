exports.run = (message, bot, suffix, args) => {
    if (!args[0]) return message.channel.sendMessage("Ban a user by their ID. Use for people who are not currently in your server.");
    message.guild.ban(args[0]).then(() => {
        message.channel.sendMessage("Banning the ID `"+args[0]+"`")
    }).catch(err => {
        message.channel.sendMessage("The ID `"+args[0]+"` is not a valid user.");
    })
}

exports.conf = {
  userPerm:["BAN_MEMBERS"],
  botPerm:["SEND_MESSAGES", "BAN_MEMBERS"],
  coolDown:0,
  dm:true,
  category:"Utility",
  help:"Ban a user by their ID, even if they haven't joined your server.",
  args:"<id>",
}