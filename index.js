const Discord = require('discord.js');
const { prefix, token } = require('./congig.json');
const client = new Discord.Client();

client.once('ready', ()=>
{
    console.log('Ready:)')
})

client.on('message',message =>
{
    var x = message.content;
    console.log(message.content);

    if(x.startsWith(`${prefix}jatin`))
    {
        message.channel.send("STONK HAHAHA!")
    }
    else if(x.startsWith(`${prefix}roast`))
    {
        message.channel.send("Dank Memer went out of business when you used firstbotJT")
    }
})

client.login(token);