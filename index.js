const Discord = require('discord.js');
const fs = require('fs');
module.exports.wheatSend = async function (MESSAGE,content) {
    try
    {
        await MESSAGE.channel.send(content);
    }
    catch(error)
    {
        if(error)
        {
            await MESSAGE.author.send("Bot bị thiếu 1 trong các quyền `SEND_MESSAGES`, `EMBED_LINKS` hoặc `ATTACH_FILES`!")
            return;
        }
    }
}

module.exports.wheatEmbedSend = async function (MESSAGE,embedArray) {
    try
    {
        await MESSAGE.channel.send({embeds:embedArray});
    }
    catch(error)
    {
        if(error)
        {
            await MESSAGE.author.send("Bot bị thiếu 1 trong các quyền `SEND_MESSAGES`, `EMBED_LINKS` hoặc `ATTACH_FILES`!")
            return;
        }
    }
}

module.exports.wheatEmbedAttachFilesSend = async function (MESSAGE,embedArray,attachfilesArray) {
    try
    {
        await MESSAGE.channel.send({embeds:embedArray,file:attachfilesArray});
    }
    catch(error)
    {
        if(error)
        {
            await MESSAGE.author.send("Bot bị thiếu 1 trong các quyền `SEND_MESSAGES`, `EMBED_LINKS` hoặc `ATTACH_FILES`!")
            return;
        }
    }
}

module.exports.wheatSampleEmbedGenerate = async function () {
    let embed = new Discord.MessageEmbed();
    embed.setColor('#ffd500');
    embed.setThumbnail('https://cdn.discordapp.com/avatars/786234973308715008/b5188876273d8dc038739833a2e90629.png?size=1024');
    return embed;
}

module.exports.wheatReadJSON = async function (addressJSON) {
    let json = JSON.parse(fs.readFileSync(addressJSON, 'utf8'));
    return json;
}