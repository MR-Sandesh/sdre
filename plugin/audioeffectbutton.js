import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;

const audioeffectbutton = async (m, Fox) => {
  const uptimeSeconds = process.uptime();
  const days = Math.floor(uptimeSeconds / (24 * 3600));
  const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeSeconds % 60);
  
  const prefix = /^[\\/!#.]/gi.test(m.body) ? m.body.match(/^[\\/!#.]/gi)[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).toLowerCase() : '';
    if (['audioeffect'].includes(cmd)) {

  const uptimeMessage = `📛AUDIO EFFECT💫
━─━━━━━━━━─━─
┕AUDIO EFFECT COMMAD COPY
━─━━━━━━━━─━─`

  const buttons = [
         {
                    "name": "cta_copy",
                    "buttonParamsJson": JSON.stringify({
                        "display_text": "Audio Effect 1",
                        "id": ".bass",
                        "copy_code": .bass
                    })
                },
     {
                    "name": "cta_copy",
                    "buttonParamsJson": JSON.stringify({
                        "display_text": "Audio Effect 2",
                        "id": ".blown",
                        "copy_code": .blown
                    })
                },
    {
                    "name": "cta_copy",
                    "buttonParamsJson": JSON.stringify({
                        "display_text": "Audio Effect 3",
                        "id": ".deep",
                        "copy_code": .deep
                    })
                },
     {
                    "name": "cta_copy",
                    "buttonParamsJson": JSON.stringify({
                        "display_text": "Audio Effect 4",
                        "id": ".earrape",
                        "copy_code": .earrape
                    })
                },
    {
                    "name": "cta_copy",
                    "buttonParamsJson": JSON.stringify({
                        "display_text": "Audio Effect 5",
                        "id": ".fast",
                        "copy_code": .fast
                    })
                },
     {
                    "name": "cta_copy",
                    "buttonParamsJson": JSON.stringify({
                        "display_text": "Audio Effect 6",
                        "id": ".fat",
                        "copy_code": .fat
                    })
                },
      {
                    "name": "cta_copy",
                    "buttonParamsJson": JSON.stringify({
                        "display_text": "Audio Effect 7",
                        "id": ".nightcore",
                        "copy_code": .nightcore
                    })
                },
     {
                    "name": "cta_copy",
                    "buttonParamsJson": JSON.stringify({
                        "display_text": "Audio Effect 8",
                        "id": ".reverse",
                        "copy_code": .reverse
                    })
                },
     {
                    "name": "cta_copy",
                    "buttonParamsJson": JSON.stringify({
                        "display_text": "Audio Effect 9",
                        "id": ".robot",
                        "copy_code": .robot
                    })
                },
     {
                    "name": "cta_copy",
                    "buttonParamsJson": JSON.stringify({
                        "display_text": "Audio Effect 10",
                        "id": ".slow",
                        "copy_code": .slow
                    })
                },
       {
                    "name": "cta_copy",
                    "buttonParamsJson": JSON.stringify({
                        "display_text": "Audio Effect 11",
                        "id": ".smooth",
                        "copy_code": .smooth
                    })
                },
           {
                    "name": "cta_copy",
                    "buttonParamsJson": JSON.stringify({
                        "display_text": "Audio Effect 12",
                        "id": ".tupai",
                        "copy_code": .tupai
                    })
                }

        ];

  const msg = generateWAMessageFromContent(m.from, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: uptimeMessage
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "> ©ʀᴇᴅ-ꜰᴏx-ᴍᴅ V2"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "",
            gifPlayback: true,
            subtitle: "",
            hasMediaAttachment: false 
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons
          }),
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
        }),
      },
    },
  }, {});

  await Fox.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  });
    }
};

export default audioeffectbutton;
