## About
Wheat Better CMD is a exclusive package of Bot Discord **Wheat** 
## Install 
You can install this package via NPM
```
npm i wheat-better-cmd
```
## Example
```
const bot = require('wheat-better-cmd')
const {Client, Intents} = require('discord.js')
const client = new Client({intents: [Intents.FLAGS.GUILDS]})

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
})

client.on('messageCreate', async message => {
	if(message.content === 'ping') {
		bot.wheatSend(`pong`)
	}
})

client.login('token')
```
## License
Wheat Better CND is licensed under the terms of Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0).
### You are free to:
- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material
### Under the following terms:
- Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- NonCommercial — You may not use the material for commercial purposes.
