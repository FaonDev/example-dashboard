import { Client } from 'discord.js'
import Env from '../env'

export const discordClient = new Client({
    intents: []
})

discordClient.login(Env.TOKEN)