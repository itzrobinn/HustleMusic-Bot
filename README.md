[![HustleMusic Bot](https://github-readme-stats.vercel.app/api/pin/?username=itzrobinn&repo=HustleMusic-Bot&theme=dark)](https://github.com/itzrobinn/HustleMusic-Bot)<br/>

An advanced Music Bot, with 30+ Radio Stations, with capability of filters, like Bassboost, Nightcore, etc. and reaction interactivity. Based on ytdl-core with discord.js Guide Handler.

<br>

 [![Run on Repl.it](https://replit.com/badge/github/itzrobinn/HustleMusic-Bot)](https://repl.it/github/itzrobinn/HustleMusic-Bot)</br>
 
#### Commands:

- `filter <FILTERNAME>` --    *Set Audio - Effects*
- `loop`                --    *Toggle music loop*
- `lyrics`              --    *Get lyrics for the currently playing song*
- `nowplaying`          --    *Show current song*
- `pause`               --    *Pause the currently playing music*
- `play <TITEL | URL>`  --    *Plays song from YouTube/Stream*
- `queue`               --    *Show the music queue and now playing*
- `radio <RADIOSTATION>`--    *Play a Radiostation*
- `remove`              --    *Remove song from the queue*
- `resume`              --    *Resume currently playing music*
- `search <TITEL | URL>`--    *Search and select videos to play*
- `shuffle`             --    *Shuffles the current Queue!*
- `skip`                --    *Skip the currently playing song*
- `skipto <QUEUE NUM.>` --    *Skip to the selected queue number*
- `stop`                --    *Stops the music*
- `volume <VOL. NUM.>`  --    *Change volume*
- `help [COMMAND]`      --    *Gives you a list of all help Commands*

**NO API-KEY NEEDED!** That's because it uses a scraper (`youtube-sr`)!

## Installation | How to use the Bot

 **1.** Install [node.js v12](https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode) or higher

 **2.** Install [ffmpeg@latest](https://ffmpeg.org) 

 **3.** Download this repo and unzip it    |    or git clone it
 
 **4.** Install all of the packages with **`npm install`**     |  the packages are   **`npm install node.js @discordjs/opus discord.js ffmpeg-static figlet lyrics-finder string-progressbar ytdl-core discord-ytdl-core youtube-sr`**
 
 **5.** start the bot with **`node index.js`**<br/>
 

## **TUTORIAL** 

Watch tutorial on YouTube!<br/>

[<img src="https://cdn.discordapp.com/attachments/887817613084876854/891722941421748224/discord.png?raw=true" width="350" height="350">](https://www.youtube.com/watch?v=IPv1uWSKC-Q)<br/>


## Usage | config.json

```json
{
  "TOKEN": "BOT TOKEN",
  "PREFIX": "YOUR PREFIX",
  "approveemoji": "EMOJI ID",
  "denyemoji": "EMOJI ID",
  "erroremoji": "EMOJI ID"
}
```

It is important that you fill in every item of the JSON FILE! every emoji used in this BOT is a custom emoji, the emojis are listed down below as images, which you can download and upload to your server to use them. NOTE: you gotta change emoji.id to emoji.name if you use discord / unicode emojis! Soon a new Repo with standard emojis will be awailable for easy usages!

## **NOTE:**

*Make sure that you have installed [FFmpeg](https://ffmpeg.org), and added it to Systemenvironment variables (PATH)*

*If you are having errors/problems with starting delete the package.json file and do, before you install the packages `npm init`*

## SUPPORT ME

<div align="center">
            <a href="https://www.instagram.com/robintheflyboy" target="_blank" style="display: inline-block;">
                <img
                    src="https://img.shields.io/badge/Follow-Instagram%20-red.svg?style=flat-circle" 
                    align="left"
                    color="red"
                />
            </a></div>

