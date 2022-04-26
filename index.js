const Discord = require('discord.js')
const fs = require('fs')
const errorSolve = require('./scripts/errorSolve')

/**
 * @param {Discord.Message} MESSAGE 
 * @param {string} content 
 */

module.exports.wheatSend = async (MESSAGE,content) => {
    try {
        const msg = await MESSAGE.channel.send(content)
        return msg
    } catch(error) {
        await errorSolve.errorSolve(MESSAGE,error)
    }
}

/**
 * @param {Discord.Message} MESSAGE 
 * @param {Array} embedArray
 */

module.exports.wheatEmbedSend = async (MESSAGE,embedArray) => {
    try {
        const msg = await MESSAGE.channel.send({embeds:embedArray})
        return msg
    } catch(error) {
        await errorSolve.errorSolve(MESSAGE,error)
    }
}

/**
 * @param {Discord.Message} MESSAGE 
 * @param {Array} embedArray
 * @param {Array} attachfilesArray
 */

module.exports.wheatEmbedAttachFilesSend = async (MESSAGE,embedArray,attachfilesArray) => {
    try {
        const msg = await MESSAGE.channel.send({embeds:embedArray,files:attachfilesArray})
        return msg
    } catch(error) {
        await errorSolve.errorSolve(MESSAGE,error)
    }
}

module.exports.wheatSampleEmbedGenerate = async (type=false) => {
    const embed = new Discord.MessageEmbed()
    embed.setColor('#ffd500')
    if(type) embed.setThumbnail('https://i.imgur.com/0NYNs86.png')
    return embed
}

/**
 * @param {string} addressJSON
 */

module.exports.wheatReadJSON = async (addressJSON) => {
    const json = JSON.parse(fs.readFileSync(addressJSON, 'utf8'))
    return json
}

/**
 * @param {String} arguments
 * @param {Discord.Client} client
 * @param {string} defaultID
 * @returns {Promise<Discord.User>}
 */

module.exports.wheatGetUserByIdOrMention = async (client,arguments,defaultID) => {
    let USER = defaultID
    if(arguments) {
        USER = ""
        for(const i in arguments) {
            if(48<=arguments.charCodeAt(i)&&arguments.charCodeAt(i)<=57)
                USER+=arguments[i]
        }
    }
    try {
        USER = await client.users.fetch(USER)
        return USER
    } catch (error) {
        // console.error(`getUserByIDorMentions: ${error.message}`)
        return undefined
    }
}

/**
 * @param {Discord.Message} MESSAGE 
 * @param {string} content 
 * @param {string} customTitle
 */

module.exports.wheatSendErrorMessage = async (MESSAGE,content,customTitle=undefined) => {
    const embed = new Discord.MessageEmbed()
    embed.setColor('#ffd500')
    embed.setThumbnail('https://i.imgur.com/0NYNs86.png')
    embed.setTitle(customTitle?customTitle:(require(`./language/${MESSAGE.language}.json`).failExecution))
    embed.setDescription(content)

    try {
        const msg = await MESSAGE.channel.send({embeds:[embed]})
        return msg
    }
    catch(error) {
        await errorSolve.errorSolve(MESSAGE,error)
    }
}

/**
 * @param {Discord.Message} MESSAGE 
 * @param {Array} embedArray
 * @param {Array} componentsArray
 */

module.exports.wheatEmbedButton = async (MESSAGE,embedArray,componentsArray) => {
    try {
        const msg = await MESSAGE.channel.send({embeds:embedArray,components:componentsArray})
        return msg
    } catch(error) {
        await errorSolve.errorSolve(MESSAGE,error)
    }
}

/**
 * @param {Array} array
 */

module.exports.wheatShuffleArray = (array) => {
    array.sort(() => Math.random()-Math.random())
    return array
}

/**
 * @param {Number} min
 * @param {Number} max
 */

module.exports.wheatRandomNumberBetween = (min, max) => {
    return Math.floor(Math.random()*(max-min+1)+min)
}

/**
 * @param {Array} array
 */

module.exports.wheatRandomElementFromArray = (array) => {
    return array[Math.floor(Math.random()*(array.length-1))]
}