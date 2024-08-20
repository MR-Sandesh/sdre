const linkgc = async (m, fox) => {
  try {
    const prefixMatch = m.body.match(/^[\\/!#.]/);
    const prefix = prefixMatch ? prefixMatch[0] : '/';
    const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

    const validCommands = ['linkgc', 'grouplink'];

    if (!validCommands.includes(cmd)) return;

    if (!m.isGroup) {
      return m.reply('*📛 THIS COMMAND CAN ONLY BE USED IN GROUPS.*');
    }
    const groupMetadata = await fox.groupMetadata(m.from);
    const botNumber = await fox.decodeJid(fox.user.id);
    const isBotAdmins = groupMetadata.participants.find(p => p.id === botNumber)?.admin;

    if (!isBotAdmins) {
      return m.reply('*📛 BOT MUST BE AN ADMIN TO USE THIS COMMAND.*');
    }

    const response = await fox.groupInviteCode(m.from);
    await fox.sendMessage(m.from, {
      text: `https://chat.whatsapp.com/${response}\n\nGroup Link: ${groupMetadata.subject}`,
      detectLink: true
    });

  } catch (error) {
    console.error('Error:', error);
    m.reply('An error occurred while processing the command.');
  }
};

export default linkgc;
