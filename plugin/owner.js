import config from '../config.cjs';

const ownerContact = async (m, fox) => {
    const ownernumber = config.OWNER_NUMBER;
    const prefixMatch = m.body.match(/^[\\/!#.]/);
    const prefix = prefixMatch ? prefixMatch[0] : '/';
    const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
    const text = m.body.slice(prefix.length + cmd.length).trim();

    if (cmd === 'owner') {
        try {
            await fox.sendContact(m.from, [ownernumber], m);
            await m.React("✅");
        } catch (error) {
            console.error('Error sending owner contact:', error);
            m.reply('Error sending owner contact.');
            await m.React("❌");
        }
    }
};

export default ownerContact;
