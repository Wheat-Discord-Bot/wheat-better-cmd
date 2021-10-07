const Discord = require('discord.js')
const fs = require('fs')

module.exports.wheatSend = async (MESSAGE,content) => {
    try {
        const msg = await MESSAGE.channel.send(content)
        return msg
    } catch(error) {
        if(error) {
            await MESSAGE.author.send("Bot bị thiếu 1 trong các quyền `SEND_MESSAGES`, `EMBED_LINKS` hoặc `ATTACH_FILES` hoặc bot đang lỗi tạm thời!")
            return
        }
    }
}

module.exports.wheatEmbedSend = async (MESSAGE,embedArray) => {
    try {
        const msg = await MESSAGE.channel.send({embeds:embedArray})
        return msg
    } catch(error) {
        if(error) {
            await MESSAGE.author.send("Bot bị thiếu 1 trong các quyền `SEND_MESSAGES`, `EMBED_LINKS` hoặc `ATTACH_FILES` hoặc bot đang lỗi tạm thời!")
            return
        }
    }
}

module.exports.wheatEmbedAttachFilesSend = async (MESSAGE,embedArray,attachfilesArray) => {
    try {
        const msg = await MESSAGE.channel.send({embeds:embedArray,files:attachfilesArray})
        return msg
    } catch(error) {
        if(error) {
            await MESSAGE.author.send("Bot bị thiếu 1 trong các quyền `SEND_MESSAGES`, `EMBED_LINKS` hoặc `ATTACH_FILES` hoặc bot đang lỗi tạm thời!")
            return
        }
    }
}

module.exports.wheatSampleEmbedGenerate = async (type=false) => {
    const embed = new Discord.MessageEmbed()
    embed.setColor('#ffd500')
    if(type) embed.setThumbnail('https://i.imgur.com/o31SePR.png')
    return embed
}

module.exports.wheatReadJSON = async (addressJSON) => {
    const json = JSON.parse(fs.readFileSync(addressJSON, 'utf8'))
    return json
}

module.exports.wheatGetUserByIdOrMention = async ({client,arguments,defaultID}) => {
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

module.exports.wheatSendErrorMessage = async (MESSAGE,content,customTitle=undefined) => {
    const embed = new Discord.MessageEmbed()
    embed.setColor('#ffd500')
    embed.setThumbnail('https://i.imgur.com/o31SePR.png')
    embed.setTitle(customTitle?customTitle:`Thực Thi Thất Bại`)
    embed.setDescription(content)

    try {
        const msg = await MESSAGE.channel.send({embeds:[embed]})
        return msg
    }
    catch(error) {
        if(error) {
            await MESSAGE.author.send("Bot bị thiếu 1 trong các quyền `SEND_MESSAGES`, `EMBED_LINKS` hoặc `ATTACH_FILES` hoặc bot đang lỗi tạm thời!")
            return
        }
    }
}

module.exports.wheatEmbedButton = async (MESSAGE,embedArray,componentsArray) => {
    try {
        const msg = await MESSAGE.channel.send({embeds:embedArray,components:componentsArray})
        return msg
    } catch(error) {
        if(error) {
            await MESSAGE.author.send("Bot bị thiếu 1 trong các quyền `SEND_MESSAGES`, `EMBED_LINKS` hoặc `ATTACH_FILES` hoặc bot đang lỗi tạm thời!")
            return
        }
    }
}