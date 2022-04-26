const Discord = require('discord.js')

/**
 * @param {Discord.Message} MESSAGE 
 */

module.exports.errorSolve = async (MESSAGE,error) => {
    const whatToSay = require(`../language/${MESSAGE.language}.json`)

    if(error.code === Discord.Constants.APIErrors.MISSING_PERMISSIONS) {
        try {
            await MESSAGE.channel.send(whatToSay.botMissingPermissions)
        } catch(err) {
            if(err.code === Discord.Constants.APIErrors.MISSING_PERMISSIONS) {
                try {
                    await MESSAGE.author.send(whatToSay.botMissingPermissions)
                } catch(e) {

                }
            }
        }
    } else {
        console.log(error)
        try {
            await MESSAGE.channel.send(whatToSay.undefinedError)
        } catch (err) {

        }
    }
}