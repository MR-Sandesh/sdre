import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';
import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;

// Get total memory and free memory in bytes
const totalMemoryBytes = os.totalmem();
const freeMemoryBytes = os.freemem();

// Define unit conversions
const byteToKB = 1 / 1024;
const byteToMB = byteToKB / 1024;
const byteToGB = byteToMB / 1024;

// Function to format bytes to a human-readable format
function formatBytes(bytes) {
  if (bytes >= Math.pow(1024, 3)) {
    return (bytes * byteToGB).toFixed(2) + ' GB';
  } else if (bytes >= Math.pow(1024, 2)) {
    return (bytes * byteToMB).toFixed(2) + ' MB';
  } else if (bytes >= 1024) {
    return (bytes * byteToKB).toFixed(2) + ' KB';
  } else {
    return bytes.toFixed(2) + ' bytes';
  }
}
// Bot Process Time
const uptime = process.uptime();
const day = Math.floor(uptime / (24 * 3600)); // Calculate days
const hours = Math.floor((uptime % (24 * 3600)) / 3600); // Calculate hours
const minutes = Math.floor((uptime % 3600) / 60); // Calculate minutes
const seconds = Math.floor(uptime % 60); // Calculate seconds

// Uptime
const uptimeMessage = `*I am alive now since ${day}d ${hours}h ${minutes}m ${seconds}s*`;
const runMessage = `*☀️ ${day} Day*\n*🕐 ${hours} Hour*\n*⏰ ${minutes} Minutes*\n*⏱️ ${seconds} Seconds*\n`;

const xtime = moment.tz("Asia/Colombo").format("HH:mm:ss");
const xdate = moment.tz("Asia/Colombo").format("DD/MM/YYYY");
const time2 = moment().tz("Asia/Colombo").format("HH:mm:ss");
let pushwish = "";

if (time2 < "05:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "11:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "15:00:00") {
  pushwish = `Good Afternoon 🌅`;
} else if (time2 < "18:00:00") {
  pushwish = `Good Evening 🌃`;
} else if (time2 < "19:00:00") {
  pushwish = `Good Evening 🌃`;
} else {
  pushwish = `Good Night 🌌`;
}

const menu = async (m, Fox) => {
  let selectedListId;
  const selectedButtonId = m?.message?.templateButtonReplyMessage?.selectedId;
  const interactiveResponseMessage = m?.message?.interactiveResponseMessage;
  if (interactiveResponseMessage) {
    const paramsJson = interactiveResponseMessage.nativeFlowResponseMessage?.paramsJson;
    if (paramsJson) {
      const params = JSON.parse(paramsJson);
      selectedListId = params.id;
     // console.log(selectedListId);
    }
  }
  const selectedId = selectedListId || selectedButtonId;
  
  const prefix = /^[\\/!#.]/gi.test(m.body) ? m.body.match(/^[\\/!#.]/gi)[0] : '.';
        const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).toLowerCase() : '';
        let mrhansamala = {
    public: true 
};

let mode = mrhansamala.public ? 'public' : 'private';

        const validCommands = ['list', 'help', 'menu'];

  if (validCommands.includes(cmd)) {
    let msg = generateWAMessageFromContent(m.from, {
      viewOnceMessage: {
        message: {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `┏━━━━━━━━━━━━━━┈⊷
> 🤖 ʙᴏᴛ ɴᴀᴍᴇ: ʀᴇᴅ-ꜰᴏx-ᴍᴅ
> 📍 ᴠᴇʀꜱɪᴏɴ: 2.0
> 👨‍💻 ᴏᴡɴᴇʀ : ᴍʀ ʜᴀɴꜱᴀᴍᴀʟᴀ      
> 👤 ɴᴜᴍʙᴇʀ: 94781708673
> 📡 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
> 🛡  ᴍᴏᴅᴇ: *${mode}*
┗━━━━━━━━━━━━━┈⊷  `
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: "> ©ʀᴇᴅ-ꜰᴏx-ᴍᴅ V2"
            }),
            header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./src/ethix.jpg')}, { upload: Fox.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: "",
                  hasMediaAttachment: false  
                }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                  {
"name": "quick_reply",
"buttonParamsJson": JSON.stringify({
display_text: "ᴀʟʟ ᴍᴇɴᴜ",
id: `View All Menu`
})
},
{
"name": "quick_reply",
"buttonParamsJson": JSON.stringify({
display_text: "ᴅᴏᴡɴʟᴀᴏᴅᴇʀ ᴍᴇɴᴜ",
id: `Downloader Menu`
})
},
{
"name": "quick_reply",
"buttonParamsJson": JSON.stringify({
display_text: "ɢʀᴏᴜᴘ ᴍᴇɴᴜ",
id: `Group Menu`
})
},
{
"name": "quick_reply",
"buttonParamsJson": JSON.stringify({
display_text: "ᴛᴏᴏʟ ᴍᴇɴᴜ",
id: `Tool Menu`
})
},
{
"name": "quick_reply",
"buttonParamsJson": JSON.stringify({
display_text: "ᴍᴀɪɴ ᴍᴇɴᴜ",
id: `Main Menu`
})
},
{
"name": "quick_reply",
"buttonParamsJson": JSON.stringify({
display_text: "ᴏᴡɴᴇʀ ᴍᴇɴᴜ",
id: `Owner Menu`
})
},
{
"name": "quick_reply",
"buttonParamsJson": JSON.stringify({
display_text: "ᴀɪ ᴍᴇɴᴜ",
id: `Ai Menu`
})
},
{
"name": "quick_reply",
"buttonParamsJson": JSON.stringify({
display_text: "sᴇᴀʀᴄʜ ᴍᴇɴᴜ",
id: `Search Menu`
})
},
{
"name": "quick_reply",
"buttonParamsJson": JSON.stringify({
display_text: "sᴛᴀʟᴋ ᴍᴇɴᴜ",
id: `Stalk Menu`
})
},
{
"name": "quick_reply",
"buttonParamsJson": JSON.stringify({
display_text: "ᴄᴏᴠᴇʀᴛᴇʀ ᴍᴇɴᴜ",
id: `Converter Menu`
   })
    },
   {
                  "name": "single_select",
                  "buttonParamsJson": `{"title":"ꜱᴇʟᴇᴄᴛ",
                 "sections":
                   [{
                    "title":"🧛ᴍʀ-ʜᴀɴꜱᴀᴍᴀʟᴀ🧛",
                    "highlight_label":"🦊ʀᴇᴅ-ꜰᴏx🦊V2",
                    "rows":[
                      {
                       "header":"",
                       "title":"​🇦​​🇱​​🇮​​🇻​​🇪​",
                       "description":"ʙᴏᴛ ᴏɴʟɪɴᴇ ᴛᴇꜱᴛ",
                       "id":".alive"
                      },
                      {
                        "header":"",
                        "title":"​​🇴​​🇼​​🇳​​🇪​​🇷​",
                        "description":"​🇴​​🇼​​🇳​​🇪​​🇷​ ​🇳​​🇺​​🇲​​🇧​​🇪​​🇷​",
                        "id":".owner"
                      },
                      {
                        "header":"",
                        "title":"🇵​​🇮​​🇳​​🇬​​",
                        "description":"ʙᴏᴛ ꜱᴘᴇᴇᴅ ᴛᴇꜱᴛ",
                        "id":".ping"
                      },
                      {
                        "header":"",
                        "title":"ʀᴇꜱᴛᴀʀᴛ",
                        "description":"ʙᴏᴛ ʀᴇꜱᴛᴀʀᴛ",
                        "id":".restart"
                      }
                    ]}
                  ]}`
                },
              ],
            }),
           contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                   gJid: '120363323232348869@g',
                  gName: "RED-FOX-MD-V2",
                  serverMessageId: 143
                }
              }
          }),
        },
      },
    }, {});
    await Fox.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id
    });
  }
      if (selectedId == "View All Menu") {
        const mode = process.env.MODE;
        const str = `hey ${m.pushName} ${pushwish}
┏━━━━━━━━━━━━━━┈⊷
> 🤖 ʙᴏᴛ ɴᴀᴍᴇ: ʀᴇᴅ-ꜰᴏx-ᴍᴅ
> 📍 ᴠᴇʀꜱɪᴏɴ: 2.0
> 👨‍💻 ᴏᴡɴᴇʀ : ᴍʀ ʜᴀɴꜱᴀᴍᴀʟᴀ      
> 👤 ɴᴜᴍʙᴇʀ: 94781708673
> 📡 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
> 🛡 ᴍᴏᴅᴇ: *${mode}*
┗━━━━━━━━━━━━━┈⊷  
┏━♼ ᴄᴏɴᴠᴇʀᴛᴇʀ ♽━┓ 
> 🦊⃝🎋.ᴀᴛᴛᴘ
> 🦊⃝🎋.ᴀᴛᴛᴘ2
> 🦊⃝🎋.ᴀᴛᴛᴘ3
> 🦊⃝🎋.ᴇʙɪɴᴀʀʏ
> 🦊⃝🎋.ᴅʙɪɴᴀʀʏ
> 🦊⃝🎋.ᴇᴍᴏᴊɪᴍɪx
> 🦊⃝🎋.ᴍᴘ3
┗━━━━━━━━━━━━━━━⪼
┏━♼  ᴀɪ ♽━┓
> 🦊⃝🎋.ᴀɪ
> 🦊⃝🎋.ʙᴜɢ
> 🦊⃝🎋.ʀᴇᴘᴏʀᴛ
> 🦊⃝🎋.ɢᴘᴛ
> 🦊⃝🎋.ᴅᴀʟʟᴇ
> 🦊⃝🎋.ʀᴇᴍɪɴɪ
> 🦊⃝🎋.ɢᴇᴍɪɴɪ
┗━━━━━━━━━━━━━━━⪼
┏━♼ ᴛᴏᴏʟ ♽━┓
> 🦊⃝🎋.ᴄᴀʟᴄᴜʟᴀᴛᴏʀ
> 🦊⃝🎋.ᴛᴇᴍᴘᴍᴀɪʟ
> 🦊⃝🎋.ᴄʜᴇᴄᴋᴍᴀɪʟ
> 🦊⃝🎋.ᴛʀᴛ
> 🦊⃝🎋.ᴛᴛꜱ
┗━━━━━━━━━━━━━━━⪼
┏━♼ ɢʀᴏᴜᴘ ♽━┓
> 🦊⃝🎋.ʟɪɴᴋɢʀᴏᴜᴘ
> 🦊⃝🎋.ꜱᴇᴛᴘᴘɢᴄ
> 🦊⃝🎋.ꜱᴇᴛɴᴀᴍᴇ
> 🦊⃝🎋.ꜱᴇᴛᴅᴇꜱᴄ
> 🦊⃝🎋.ɢʀᴏᴜᴘ
> 🦊⃝🎋.ɢᴄꜱᴇᴛᴛɪɴɢ
> 🦊⃝🎋.ᴡᴇʟᴄᴏᴍᴇ
> 🦊⃝🎋.ᴀᴅᴅ
> 🦊⃝🎋.ᴋɪᴄᴋ
> 🦊⃝🎋.ʜɪᴅᴇᴛᴀɢ
> 🦊⃝🎋.ᴛᴀɢᴀʟʟ
> 🦊⃝🎋.ᴀɴᴛɪʟɪɴᴋ
> 🦊⃝🎋.ᴀɴᴛɪᴛᴏxɪᴄ
> 🦊⃝🎋.ᴘʀᴏᴍᴏᴛᴇ
> 🦊⃝🎋.ᴅᴇᴍᴏᴛᴇ
> 🦊⃝🎋.ɢᴇꜰʙɪᴏ
┗━━━━━━━━━━━━━━━⪼
┏━♼ ᴅᴏᴡɴʟᴏᴀᴅ ♽━┓
> 🦊⃝🎋 .ᴀᴘᴋ
> 🦊⃝🎋.ꜰᴀᴄᴇʙᴏᴏᴋ
> 🦊⃝🎋.ᴍᴇᴅɪᴀꜰɪʀᴇ
> 🦊⃝🎋.ᴘɪɴᴛᴇʀᴇꜱᴛᴅʟ
> 🦊⃝🎋.ɢᴜᴛᴄʟᴏɴᴇ
> 🦊⃝🎋.ɢᴅʀɪᴠᴇ
> 🦊⃝🎋.ɪɴꜱʀᴀ
> 🦊⃝🎋.ʏᴛᴍᴘ3
> 🦊⃝🎋.ʏᴛᴍᴘ4
> 🦊⃝🎋.ᴘʟᴀʏ
> 🦊⃝🎋.ꜱᴏɴɢ
> 🦊⃝🎋.ᴠɪᴅᴇᴏ
> 🦊⃝🎋.ʏᴛᴍᴘ3ᴅᴏᴄ
> 🦊⃝🎋.ʏᴛᴍᴘ4ᴅᴏᴄ
> 🦊⃝🎋.ᴛɪᴋᴛᴏᴋ
┗━━━━━━━━━━━━━━━⪼
┏━♼ ꜱᴇᴀʀᴄʜ ♽━┓
> 🦊⃝🎋.ᴘʟᴀʏ
> 🦊⃝🎋.ʏᴛꜱ
> 🦊⃝🎋.ɪᴍᴅʙ
> 🦊⃝🎋.ɢᴏᴏɢʟᴇ
> 🦊⃝🎋.ɢɪᴍᴀɢᴇ
> 🦊⃝🎋.ɪᴍɢ
> 🦊⃝🎋.ᴘɪɴᴛᴇʀᴇꜱᴛ
> 🦊⃝🎋.ᴡᴀʟʟᴘᴀᴘᴇʀ
> 🦊⃝🎋.ᴡɪᴋɪᴍᴇᴅɪᴀ
> 🦊⃝🎋.ʏᴛꜱᴇᴀʀᴄʜ
> 🦊⃝🎋.ʀɪɴɢᴛᴏɴᴇ
> 🦊⃝🎋.ʟʏʀɪᴄꜱ
┗━━━━━━━━━━━━━━━⪼
┏━♼ ᴍᴀɪɴ ♽━┓
> 🦊⃝🎋.ᴘɪɴɢ
> 🦊⃝🎋.ᴀʟɪᴠᴇ
> 🦊⃝🎋.ᴏᴡɴᴇʀ
> 🦊⃝🎋.ᴍᴇɴᴜ
> 🦊⃝🎋.ʜᴇʟᴘ
> 🦊⃝🎋.ɪɴꜰᴏʙᴏᴛ
┗━━━━━━━━━━━━━━━⪼
┏━♼ ᴏᴡɴᴇʀ ♽━┓
> 🦊⃝🎋.ᴊᴏɪɴ
> 🦊⃝🎋.ʟᴇᴀᴠᴇ
> 🦊⃝🎋.ʙʟᴏᴄᴋ
> 🦊⃝🎋.ᴜɴʙʟᴏᴄᴋ
> 🦊⃝🎋.ꜱᴇᴛᴘᴘʙᴏᴛ
> 🦊⃝🎋.ᴀɴᴛɪᴄᴀʟʟ
> 🦊⃝🎋.ꜱᴇᴛꜱᴛᴀᴛᴜꜱ
> 🦊⃝🎋.ꜱᴇᴛɴᴀᴍᴇʙᴏᴛ
> 🦊⃝🎋.ᴀᴜᴛᴏᴛʏᴘɪɴɢ
> 🦊⃝🎋.ᴀʟᴡᴀʏꜱᴏɴʟɪɴᴇ
> 🦊⃝🎋.ᴀᴜᴛᴏʀᴇᴀᴅ
> 🦊⃝🎋.ᴀᴜᴛᴏꜱᴠɪᴇᴡ
> 🦊⃝🎋.ᴜᴘᴅᴀᴛᴇ
> 🦊⃝🎋.ʀᴇꜱᴛᴀʀᴛ
┗━━━━━━━━━━━━━━━⪼
┏━♼ ꜱᴛᴀʟᴋ ♽━┓
> 🦊⃝🎋 .ᴛʀᴜᴇᴄᴀʟʟᴇʀ
> 🦊⃝🎋 .ɪɴꜱᴛᴀꜱᴛᴀʟᴋ
> 🦊⃝🎋.ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ
┗━━━━━━━━━━━━━━━⪼
   `;
        let fgg = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    displayName: `RED-FOX-MD-V2`,
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:'mrhansamala'\nitem1.TEL;waid=${
                        m.sender.split("@")[0]
                    }:${
                        m.sender.split("@")[0]
                    }\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
            }
        };
       let { key } = await Fox.sendMessage(m.from, {
  image: fs.readFileSync('./src/ethix.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: "RED-FOX-MD-V2",
                  serverMessageId: 143
                }
              }
}, {
  quoted: fgg
});
}
  if ( selectedId == "Downloader Menu") {
const mode = process.env.MODE;
const str = `┏━♼ *s ᴇ ʀ ᴠ ᴇ ʀ* ━┓
> 🦊⃟💈ᴛᴏᴛᴀʟ ʀᴏᴍ : ${formatBytes(totalMemoryBytes)}
> 🦊⃟💈ꜰʀᴇᴇ ʀᴏᴍ ${formatBytes(freeMemoryBytes)}
┗━━━━━━━━━━━━━━━⪼
┏━♼ ᴅᴏᴡɴʟᴏᴀᴅ ♽━┓
> 🦊⃝🎋 .ᴀᴘᴋ
> 🦊⃝🎋.ꜰᴀᴄᴇʙᴏᴏᴋ
> 🦊⃝🎋.ᴍᴇᴅɪᴀꜰɪʀᴇ
> 🦊⃝🎋.ᴘɪɴᴛᴇʀᴇꜱᴛᴅʟ
> 🦊⃝🎋.ɢᴜᴛᴄʟᴏɴᴇ
> 🦊⃝🎋.ɢᴅʀɪᴠᴇ
> 🦊⃝🎋.ɪɴꜱʀᴀ
> 🦊⃝🎋.ʏᴛᴍᴘ3
> 🦊⃝🎋.ʏᴛᴍᴘ4
> 🦊⃝🎋.ᴘʟᴀʏ
> 🦊⃝🎋.ꜱᴏɴɢ
> 🦊⃝🎋.ᴠɪᴅᴇᴏ
> 🦊⃝🎋.ʏᴛᴍᴘ3ᴅᴏᴄ
> 🦊⃝🎋.ʏᴛᴍᴘ4ᴅᴏᴄ
> 🦊⃝🎋.ᴛɪᴋᴛᴏᴋ
┗━━━━━━━━━━━━━━━⪼`
let m = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
remoteJid: "status@broadcast"
},
message: {
contactMessage: {
displayName: `RED-FOX-MD-V2`,
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:'mrhansamala'\nitem1.TEL;waid=${
m.sender.split("@")[0]
}:${
m.sender.split("@")[0]
}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
}
}
};
let { key } = await Fox.sendMessage(m.from, {
image: fs.readFileSync('./src/ethix.jpg'),
caption: str,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: '',
newsletterName: "RED-FOX-MD-V2",
serverMessageId: 143
}
}
}, {
quoted: m
});
}

if ( selectedId == "Group Menu") {
const str = `┏━♼ *s ᴇ ʀ ᴠ ᴇ ʀ* ━┓
> 🦊⃟💈ᴛᴏᴛᴀʟ ʀᴏᴍ : ${formatBytes(totalMemoryBytes)}
> 🦊⃟💈ꜰʀᴇᴇ ʀᴏᴍ ${formatBytes(freeMemoryBytes)}
┗━━━━━━━━━━━━━━━⪼
┏━♼ ɢʀᴏᴜᴘ ♽━┓
> 🦊⃝🎋.ʟɪɴᴋɢʀᴏᴜᴘ
> 🦊⃝🎋.ꜱᴇᴛᴘᴘɢᴄ
> 🦊⃝🎋.ꜱᴇᴛɴᴀᴍᴇ
> 🦊⃝🎋.ꜱᴇᴛᴅᴇꜱᴄ
> 🦊⃝🎋.ɢʀᴏᴜᴘ
> 🦊⃝🎋.ɢᴄꜱᴇᴛᴛɪɴɢ
> 🦊⃝🎋.ᴡᴇʟᴄᴏᴍᴇ
> 🦊⃝🎋.ᴀᴅᴅ
> 🦊⃝🎋.ᴋɪᴄᴋ
> 🦊⃝🎋.ʜɪᴅᴇᴛᴀɢ
> 🦊⃝🎋.ᴛᴀɢᴀʟʟ
> 🦊⃝🎋.ᴀɴᴛɪʟɪɴᴋ
> 🦊⃝🎋.ᴀɴᴛɪᴛᴏxɪᴄ
> 🦊⃝🎋.ᴘʀᴏᴍᴏᴛᴇ
> 🦊⃝🎋.ᴅᴇᴍᴏᴛᴇ
> 🦊⃝🎋.ɢᴇꜰʙɪᴏ
┗━━━━━━━━━━━━━━━⪼
`
await Fox.sendMessage(m.from, {
image: fs.readFileSync('./src/ethix.jpg'),
caption: str,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999,
isForwarded: true,
}
}, {
quoted: m
});
}

if (selectedId == "Main Menu") {
const str =`┏━♼ *s ᴇ ʀ ᴠ ᴇ ʀ* ━┓
> 🦊⃟💈ᴛᴏᴛᴀʟ ʀᴏᴍ : ${formatBytes(totalMemoryBytes)}
> 🦊⃟💈ꜰʀᴇᴇ ʀᴏᴍ ${formatBytes(freeMemoryBytes)}
┗━━━━━━━━━━━━━━━⪼
┏━♼ ᴍᴀɪɴ ♽━┓
> 🦊⃝🎋.ᴘɪɴɢ
> 🦊⃝🎋.ᴀʟɪᴠᴇ
> 🦊⃝🎋.ᴏᴡɴᴇʀ
> 🦊⃝🎋.ᴍᴇɴᴜ
> 🦊⃝🎋.ʜᴇʟᴘ
> 🦊⃝🎋.ɪɴꜰᴏʙᴏᴛ
┗━━━━━━━━━━━━━━━⪼`
await Fox.sendMessage(m.from, {
image: fs.readFileSync('./src/ethix.jpg'),
caption: str,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: '120363249960769123@newsletter',
newsletterName: "Ethix-MD",
serverMessageId: 143
}
}
}, {
quoted: m
});
}

if (selectedId == "Owner Menu") {
const str = `┏━♼ *s ᴇ ʀ ᴠ ᴇ ʀ* ━┓
> 🦊⃟💈ᴛᴏᴛᴀʟ ʀᴏᴍ : ${formatBytes(totalMemoryBytes)}
> 🦊⃟💈ꜰʀᴇᴇ ʀᴏᴍ ${formatBytes(freeMemoryBytes)}
┗━━━━━━━━━━━━━━━⪼
┏━♼ ᴏᴡɴᴇʀ ♽━┓
> 🦊⃝🎋.ᴊᴏɪɴ
> 🦊⃝🎋.ʟᴇᴀᴠᴇ
> 🦊⃝🎋.ʙʟᴏᴄᴋ
> 🦊⃝🎋.ᴜɴʙʟᴏᴄᴋ
> 🦊⃝🎋.ꜱᴇᴛᴘᴘʙᴏᴛ
> 🦊⃝🎋.ᴀɴᴛɪᴄᴀʟʟ
> 🦊⃝🎋.ꜱᴇᴛꜱᴛᴀᴛᴜꜱ
> 🦊⃝🎋.ꜱᴇᴛɴᴀᴍᴇʙᴏᴛ
> 🦊⃝🎋.ᴀᴜᴛᴏᴛʏᴘɪɴɢ
> 🦊⃝🎋.ᴀʟᴡᴀʏꜱᴏɴʟɪɴᴇ
> 🦊⃝🎋.ᴀᴜᴛᴏʀᴇᴀᴅ
> 🦊⃝🎋.ᴀᴜᴛᴏꜱᴠɪᴇᴡ
> 🦊⃝🎋.ᴜᴘᴅᴀᴛᴇ
> 🦊⃝🎋.ʀᴇꜱᴛᴀʀᴛ
┗━━━━━━━━━━━━━━━⪼`
await Fox.sendMessage(m.from, {
image: fs.readFileSync('./src/ethix.jpg'),
caption: str,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: '120363249960769123@newsletter',
newsletterName: "Ethix-MD",
serverMessageId: 143
}
}
}, {
quoted: m
});
}

if (selectedId == "Search Menu") {
const str =`┏━♼ *s ᴇ ʀ ᴠ ᴇ ʀ* ━┓
> 🦊⃟💈ᴛᴏᴛᴀʟ ʀᴏᴍ : ${formatBytes(totalMemoryBytes)}
> 🦊⃟💈ꜰʀᴇᴇ ʀᴏᴍ ${formatBytes(freeMemoryBytes)}
┗━━━━━━━━━━━━━━━⪼
┏━♼ ꜱᴇᴀʀᴄʜ ♽━┓
> 🦊⃝🎋.ᴘʟᴀʏ
> 🦊⃝🎋.ʏᴛꜱ
> 🦊⃝🎋.ɪᴍᴅʙ
> 🦊⃝🎋.ɢᴏᴏɢʟᴇ
> 🦊⃝🎋.ɢɪᴍᴀɢᴇ
> 🦊⃝🎋.ɪᴍɢ
> 🦊⃝🎋.ᴘɪɴᴛᴇʀᴇꜱᴛ
> 🦊⃝🎋.ᴡᴀʟʟᴘᴀᴘᴇʀ
> 🦊⃝🎋.ᴡɪᴋɪᴍᴇᴅɪᴀ
> 🦊⃝🎋.ʏᴛꜱᴇᴀʀᴄʜ
> 🦊⃝🎋.ʀɪɴɢᴛᴏɴᴇ
> 🦊⃝🎋.ʟʏʀɪᴄꜱ
┗━━━━━━━━━━━━━━━⪼`
await Fox.sendMessage(m.from, {
image: fs.readFileSync('./src/ethix.jpg'),
caption: str,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: '120363249960769123@newsletter',
newsletterName: "Ethix-MD",
serverMessageId: 143
}
}
}, {
quoted: m
});
}
if (selectedId == "Stalk Menu") {
const str =`┏━♼ *s ᴇ ʀ ᴠ ᴇ ʀ* ━┓
> 🦊⃟💈ᴛᴏᴛᴀʟ ʀᴏᴍ : ${formatBytes(totalMemoryBytes)}
> 🦊⃟💈ꜰʀᴇᴇ ʀᴏᴍ ${formatBytes(freeMemoryBytes)}
┗━━━━━━━━━━━━━━━⪼
┏━♼ ꜱᴛᴀʟᴋ ♽━┓
> 🦊⃝🎋 .ᴛʀᴜᴇᴄᴀʟʟᴇʀ
> 🦊⃝🎋 .ɪɴꜱᴛᴀꜱᴛᴀʟᴋ
> 🦊⃝🎋.ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ
┗━━━━━━━━━━━━━━━⪼`
await Fox.sendMessage(m.from, {
image: fs.readFileSync('./src/ethix.jpg'),
caption: str,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: '120363249960769123@newsletter',
newsletterName: "Ethix-MD",
serverMessageId: 143
}
}
}, {
quoted: m
});
}

if (selectedId == "Tool Menu") {
const str =`┏━♼ *s ᴇ ʀ ᴠ ᴇ ʀ* ━┓
> 🦊⃟💈ᴛᴏᴛᴀʟ ʀᴏᴍ : ${formatBytes(totalMemoryBytes)}
> 🦊⃟💈ꜰʀᴇᴇ ʀᴏᴍ ${formatBytes(freeMemoryBytes)}
┗━━━━━━━━━━━━━━━⪼
┏━♼ ᴛᴏᴏʟ ♽━┓
> 🦊⃝🎋.ᴄᴀʟᴄᴜʟᴀᴛᴏʀ
> 🦊⃝🎋.ᴛᴇᴍᴘᴍᴀɪʟ
> 🦊⃝🎋.ᴄʜᴇᴄᴋᴍᴀɪʟ
> 🦊⃝🎋.ᴛʀᴛ
> 🦊⃝🎋.ᴛᴛꜱ
┗━━━━━━━━━━━━━━━⪼`
await Fox.sendMessage(m.from, {
image: fs.readFileSync('./src/ethix.jpg'),
caption: str,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: '120363249960769123@newsletter',
newsletterName: "Ethix-MD",
serverMessageId: 143
}
}
}, {
quoted: m
});
}

if (selectedId == "Ai Menu") {
const str =`┏━♼ *s ᴇ ʀ ᴠ ᴇ ʀ* ━┓
> 🦊⃟💈ᴛᴏᴛᴀʟ ʀᴏᴍ : ${formatBytes(totalMemoryBytes)}
> 🦊⃟💈ꜰʀᴇᴇ ʀᴏᴍ ${formatBytes(freeMemoryBytes)}
┗━━━━━━━━━━━━━━━⪼
┏━♼ ᴀɪ ♽━┓
> 🦊⃝🎋.ᴀɪ
> 🦊⃝🎋.ʙᴜɢ
> 🦊⃝🎋.ʀᴇᴘᴏʀᴛ
> 🦊⃝🎋.ɢᴘᴛ
> 🦊⃝🎋.ᴅᴀʟʟᴇ
> 🦊⃝🎋.ʀᴇᴍɪɴɪ
> 🦊⃝🎋.ɢᴇᴍɪɴɪ
┗━━━━━━━━━━━━━━━⪼`
await Fox.sendMessage(m.from, {
image: fs.readFileSync('./src/ethix.jpg'),
caption: str,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: '120363249960769123@newsletter',
newsletterName: "Ethix-MD",
serverMessageId: 143
}
}
}, {
quoted: m
});
}

if (selectedId == "Converter Menu") {
const str =`┏━♼ *s ᴇ ʀ ᴠ ᴇ ʀ* ━┓
> 🦊⃟💈ᴛᴏᴛᴀʟ ʀᴏᴍ : ${formatBytes(totalMemoryBytes)}
> 🦊⃟💈ꜰʀᴇᴇ ʀᴏᴍ ${formatBytes(freeMemoryBytes)}
┗━━━━━━━━━━━━━━━⪼
┏━♼ ᴄᴏɴᴠᴇʀᴛᴇʀ ♽━┓
> 🦊⃝🎋.ᴀᴛᴛᴘ
> 🦊⃝🎋.ᴀᴛᴛᴘ2
> 🦊⃝🎋.ᴀᴛᴛᴘ3
> 🦊⃝🎋.ᴇʙɪɴᴀʀʏ
> 🦊⃝🎋.ᴅʙɪɴᴀʀʏ
> 🦊⃝🎋.ᴇᴍᴏᴊɪᴍɪx
> 🦊⃝🎋.ᴍᴘ3
┗━━━━━━━━━━━━━━━⪼
`
await Fox.sendMessage(m.from, {
image: fs.readFileSync('./src/ethix.jpg'),
caption: str,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: '120363249960769123@newsletter',
newsletterName: "Ethix-MD",
serverMessageId: 143
}
}
}, {
quoted: m
});
}
};

export default menu;
