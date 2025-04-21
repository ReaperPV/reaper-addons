import Location from "../../tska/skyblock/Location.js";
import Settings from "../settings";

export default function RiftTimeReminder() {
  let alertShown = false;

  const checkTime = () => {
    if (Location.inWorld("the rift")) {
      step.register();
    } else {
      step.unregister();
    }
  };

  const getRiftTime = () => {
    for (const name of TabList.getNames()) {
      if (name.includes("Rift Time Left")) {
        const match = name.removeFormatting().match(/(\d+h|\d+m|\d+s)/g);
        if (!match) return false;

        return match.reduce((total, part) => {
          const value = parseInt(part);
          const unit = part.slice(-1);
          return total + (unit === 'h' ? value * 3600 : unit === 'm' ? value * 60 : value);
        }, 0);
      }
    }
    return false;
  };

  Location.onWorldChange(() => {
    alertShown = false;
    if (!Settings.riftTimeAlert) return;

    setTimeout(checkTime, 1); // Doesn't work without the timeout
  });

  const step = register("step", () => {
    if (alertShown) return;

    const riftTime = getRiftTime();
    const thresholdInSeconds = Settings.riftTimeAlertThreshold * 60;

    if (riftTime && riftTime <= thresholdInSeconds) {
      ChatLib.chat(`&4&lReaperAddons: &r&4You have less than ${Settings.riftTimeAlertThreshold} minutes of rift time left!`);
      Client.showTitle("&4Low on rift time!", "", 0.5, 50, 0.5);
      World.playSound(Settings.alertSound || "random.anvil_land", 1, 1);
      alertShown = true;
    }
  }).setDelay(5).unregister();
}
