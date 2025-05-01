import Location from "../../tska/skyblock/Location.js";
import Settings from "../settings";
export default function potionBag() {
    Location.onWorldChange(() => {
        setTimeout(() => {
        if (!Settings.potionBag) return

        let dungeonStart = false;
        let scoreboard = Scoreboard.getLines();
        if (!scoreboard.length) return;
        scoreboard.forEach((line) => {
            let lineName = line.getName();
            console.log(lineName)
            if (lineName.includes("Starting in") || lineName.includes("Auto-closing")) {
                dungeonStart = true;
            }
        })

        if (!dungeonStart) return

            if (!Location.inWorld("catacombs")) return
            ChatLib.command("pb")
        }, 100)
    })
}