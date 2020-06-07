import * as Discord from 'discord.js';
import * as config from '../config.json';
const client = new Discord.Client();
//import { Canvas } from 'canvas';
import { CommandManager } from './commands/commandmanager';

const manager = new CommandManager();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', msg => {
    if (msg.content.startsWith(config.commandPrefix)) {
        /* if (msg.content === '!test') {
               msg.reply('OwO!');
        }*/
        const parts = msg.content.split(" ");
        const cmd = parts.shift().replace("!", "");
        manager.dispatch(cmd, parts);
    }
    if (msg.content === '!join') {
        client.emit('guildMemberAdd', msg.member);
    }
});

/*client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'benvenuto-welcome');
    if (!channel) return;
    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');

    const backgroundImage = await Canvas.loadImage('./background.png');
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome.png');

    // channel.send(`Welcome to the Ghost Crew, ${member}`, attachment);
});*/

client.login(config.token);
