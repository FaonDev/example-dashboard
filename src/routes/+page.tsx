import { discordClient } from '../app'

export default function () {
    return (
        <>
            <link href='/styles.css' rel='stylesheet' />

            <center>
                <img src={discordClient.user?.displayAvatarURL()} />
                <h2>{discordClient.user?.tag}</h2>
            </center>

            <center className='center'>
                <div className='card'>Servidores: {discordClient.guilds.cache.size}</div>
                <div className='card'>Usuários: {discordClient.users.cache.size}</div>
                <div className='card'>Latência: {discordClient.ws.ping}</div>
            </center>
        </>
    )
}