
const { Client, DiscordAPIError } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('../slappey.json');
const client = new Client();
const prefix = '-';
/*const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require('./commands/${file}');

    client.commands.set(command.name, command)
}*/

client.once('ready', () => {
    console.log('Char Aznable is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
      message.channel.send('Sieg Zeon!');
    } else if (command === 'char'){
      message.channel.send('https://www.youtube.com/watch?v=L1UmFd4Ylxc');
    } else if (command === 'coin'){
      let number = (Math.floor(Math.random() * 2) == 0);
        if (number) {
            message.channel.send('Heads');
        } else{
           (number)
            message.channel.send('Tails')
        }
    }
});

(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = config.prefix;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(config.token);
})();

