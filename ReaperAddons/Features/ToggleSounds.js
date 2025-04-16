import Settings from "../settings";

export default function ToggleSounds() {
    const alertSound = Settings.alertSound ? Settings.alertSound : "random.anvil_land";
    let toggleSounds = false;


    register("command", () => {
        toggleSounds = !toggleSounds;
        ChatLib.chat(`&4&lReaperAddons: &aSounds &r${!toggleSounds ? "&aEnabled" : "&cDisabled"}`);
    }).setName("togglesounds")

    register('soundPlay', (pos, name, vol, pitch, cat, event) => {
        if (!toggleSounds) return;
        if (name !== alertSound) cancel(event);
    })
};
