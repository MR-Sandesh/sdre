import config from '../config.cjs';

async function handleCommand(m, fox) {

    if (config.AUTO_TYPING && m.from) {
        fox.sendPresenceUpdate("composing", m.from);
    }

    if (config.AUTO_RECORDING && m.from) {
        fox.sendPresenceUpdate("recording", m.from);
    }

    if (m.from) {
        fox.sendPresenceUpdate(config.ALWAYS_ONLINE ? 'available' : 'unavailable', m.from);
    }

    if (config.AUTO_READ) {
        await fox.readMessages([m.key]);
    }

    if (config.AUTO_BLOCK && m.sender.startsWith('212')) {
        await fox.updateBlockStatus(m.sender, 'block');
    }
}

export default handleCommand;
