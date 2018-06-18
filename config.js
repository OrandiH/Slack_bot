//Load configurations from env file from here

const dotenv = require('dotenv');
const ENV = process.env.NODE_ENV || 'development'
//IF the node env is development load the env file
if(ENV === 'development') dotenv.load()

//config object with necessary config details
const config = {
    ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    SLACK_TOKEN: process.env.SLACK_TOKEN,
    SLACK_CHANNEL: process.env.SLACK_CHANNEL
}

//Export the config JSON object
module.exports = (key) => {
    if (!key) return config

    return config[key]
}