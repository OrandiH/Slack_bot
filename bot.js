//Main js file with bot configurations

//Require important libs for the bot
const SlackBot = require('slackbots');
const config = require('./config');
const CronJob = require('cron').CronJob;
const channel = config('SLACK_CHANNEL');


//Define bot constant with Slack token
const bot = new SlackBot({
        token: config('SLACK_TOKEN'),
        name: "qwbot"
});

//What to do on start of bot
bot.on("start", function() {
        var job = new CronJob('00 30 09 * * 1-5', function(){
            bot.postMessageToChannel(channel, '<!here> Time for standup everyone! https://hangouts.google.com/hangouts/_/qualityworkscg.com/hsd-standup')
        
        },null,true,'Jamaica');

        console.log('Hello world');
});

//When a message is received,call the handleMessage function
bot.on("message", function(data){
        if(data.type !== "message"){
            return;
        }
        handleMessage(data.text);
});

//Depending on which message is sent to this function, the bot replies with a different greeting
function handleMessage(message){
    switch(message){
        case "hi":
        case "hello":
            sendGreeting();
            break;
        default:
            return;
    }
}

//Send out a greeting message to the channel
function sendGreeting(){
    var greeting = getGreeting();
    bot.postMessageToChannel(channel, greeting)
}

//This functions sends out different greetings
function getGreeting(){
    var greetings = [
        "hello!",
        "hi there!",
        "cheerio!",
        "how do you do!",
        "¡hola!"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
}

module.exports = bot
	