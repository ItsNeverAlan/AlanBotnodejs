const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = class SupportServerCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'supportserver',
      aliases: ['support', 'ss'],
      usage: 'supportserver',
      description: 'Displays the invite link to AlanBot\'s Discord Support Server.',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed = new MessageEmbed()
      .setTitle('Support Server')
      .setThumbnail('https://raw.githubusercontent.com/ItsNeverAlan/AlanBotnodejs/develop/data/images/AlanBot.png')
      .setDescription('Click [here](https://discord.gg/zaWhDx2) to join the AlanBot Support Server!')
      .addField('Other Links', 
        '**[Invite Me](https://discord.com/oauth2/authorize?client_id=668000424313356288&scope=bot&permissions=0) | ' +
        '[Repository](https://github.com/ItsNeverAlan/AlanBotnodejs)**'
      )
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
