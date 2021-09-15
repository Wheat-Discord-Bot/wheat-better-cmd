const Discord = require('discord.js')
const fs = require('fs')

module.exports.wheatSend = async (MESSAGE,content) => {
    try {
        await MESSAGE.channel.send(content)
    }
    catch(error) {
        if(error) {
            await MESSAGE.author.send("Bot bị thiếu 1 trong các quyền `SEND_MESSAGES`, `EMBED_LINKS` hoặc `ATTACH_FILES`!")
            return
        }
    }
}

module.exports.wheatEmbedSend = async (MESSAGE,embedArray) => {
    try {
        await MESSAGE.channel.send({embeds:embedArray})
    }
    catch(error) {
        if(error) {
            await MESSAGE.author.send("Bot bị thiếu 1 trong các quyền `SEND_MESSAGES`, `EMBED_LINKS` hoặc `ATTACH_FILES`!")
            return
        }
    }
}

module.exports.wheatEmbedAttachFilesSend = async (MESSAGE,embedArray,attachfilesArray) => {
    try {
        await MESSAGE.channel.send({embeds:embedArray,file:attachfilesArray})
    }
    catch(error) {
        if(error) {
            await MESSAGE.author.send("Bot bị thiếu 1 trong các quyền `SEND_MESSAGES`, `EMBED_LINKS` hoặc `ATTACH_FILES`!")
            return
        }
    }
}

module.exports.wheatSampleEmbedGenerate = async () => {
    let embed = new Discord.MessageEmbed()
    embed.setColor('#ffd500')
    embed.setThumbnail('https://cdn.discordapp.com/avatars/786234973308715008/b5188876273d8dc038739833a2e90629.png?size=1024')
    return embed
}

module.exports.wheatReadJSON = async (addressJSON) => {
    const json = JSON.parse(fs.readFileSync(addressJSON, 'utf8'))
    return json
}

module.exports.getUserByIDorMentions = async (client,arguments,defaultID) => {
    let USER = defaultID
    if(arguments) {
        let _id = arguments.split('<@!') 
        _id = _id[_id.length-1].split('>')
        USER = _id[0]
    }
    try {
        USER = await client.users.fetch(USER)
        return USER
    } catch (error) {
        console.error(`getUserByIDorMentions: ${error.message}`)
        return undefined
    }
}