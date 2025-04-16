import Settings from "./settings";

// import Timers from "./Features/Timers";
import StupidCoatingParticles from "./Features/StupidCoatingParticles";
import ToggleSounds from "./Features/ToggleSounds";
import StonksReminder from "./Features/StonksReminder";

// Timers();
ToggleSounds();

if (Settings.removeCoatingParticles) {
    StupidCoatingParticles();
}

if (Settings.stonksReminder) {
    StonksReminder();
}

register("command", () => Settings.openGUI()).setName("ra").setAliases('reaper', 'reaperaddons');
