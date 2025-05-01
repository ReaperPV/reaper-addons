import Settings from "../settings";
import request from "../../requestV2";

export default function StonksReminder() {
    let diaz = false;

    // Flags to track if warnings have been shown
    let warningsShown = {
        early: false,
        soon: false,
        verySoon: false,
        now: false
    };

    register("step", () => {
        checkDiaz();
    }).setDelay(1800);

    function checkDiaz() {
        if (!Settings.stonksReminder) return;
        request({
            url: 'https://api.hypixel.net/v2/resources/skyblock/election',
            json: true
        })
        .then((response) => {
            if (response.mayor.perks.some(perk => perk.name === "Stock Exchange") || (response.mayor.minister && response.mayor.minister.perk.name === "Stock Exchange")) {
                diaz = true;
            } else {
                diaz = false;
            }
        })
        .catch((err) => console.error(`StonksReminder: ${err.cause ?? err}`));
    }
    
    checkDiaz(); //initial check

    register("step", () => {
        if(!Settings.stonksReminder) return;
        if (!diaz) return;
        let scoreboard = Scoreboard.getLines();
        if (!scoreboard.length) return;
        let date = 0;
        let currentTime = 0;

        scoreboard.forEach((line) => {
            let lineName = line.getName();

            const timeRegex = /(?:§.)*([1-9]|1[0-2]):[0-5][0-9](?:am|pm)/i;
            const timeMatch = lineName.match(timeRegex);
            if (timeMatch) {
                const rawTime = timeMatch[0].replace(/§./g, '');
                currentTime = rawTime;

                // Convert to 24-hour format
                const [_, hourStr, minuteStr, period] = rawTime.match(/(\d{1,2}):(\d{2})(am|pm)/i);
                let hour = parseInt(hourStr, 10);
                const minute = parseInt(minuteStr, 10);

                if (period.toLowerCase() === "pm" && hour !== 12) {
                    hour += 12;
                } else if (period.toLowerCase() === "am" && hour === 12) {
                    hour = 0;
                }

                currentTime = hour * 100 + minute;
            }

            if (!(lineName.includes("Spring") || lineName.includes("Summer") || lineName.includes("Autumn") || lineName.includes("Winter"))) {
                return;
            }

            let match = lineName.match(/\d+/);
            if (match) {
                date = parseInt(match[0], 10);
            }
        });

        // Reset warnings if the date is not 31st
        if (date !== 31) {
            warningsShown = {
                early: false,
                soon: false,
                verySoon: false,
                now: false
            };
            return;
        }

        if (!currentTime) return;

        // Show warnings based on the current time
        if (currentTime < 30 && !warningsShown.early) {
            warn("Auction is ending in a bit.");
            warningsShown.early = true;
        } else if (currentTime > 1200 && currentTime < 1300 && !warningsShown.soon) {
            warn("Auction is ending soon.");
            warningsShown.soon = true;
        } else if (currentTime > 1800 && currentTime < 1900 && !warningsShown.verySoon) {
            warn("Auction is ending very soon!");
            warningsShown.verySoon = true;
        } else if (currentTime > 2200 && currentTime < 2400 && !warningsShown.now) {
            warn("AUCTION IS ENDING NOW!!!!");
            warningsShown.now = true;

            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    for (let i = 0; i < (Settings.volume ? Settings.volume : 5); i++) {
                        World.playSound(Settings.alertSound ? Settings.alertSound : "random.anvil_land", 1, 1);
                    }
                }, i * 200);
            }        
        }

    }).setDelay(10);

    function warn (message) {
        ChatLib.chat("&4&lReaperAddons: &r&4" + message);
        Client.showTitle("&4" + message, "", 0.5, 50, 0.5);
        World.playSound(Settings.alertSound ? Settings.alertSound : "random.anvil_land", 1, 1);
    }
    
};

