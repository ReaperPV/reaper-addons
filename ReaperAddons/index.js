import Settings from "./settings";

// import Timers from "./Features/Timers";
import StupidCoatingParticles from "./Features/StupidCoatingParticles";
import ToggleSounds from "./Features/ToggleSounds";
import StonksReminder from "./Features/StonksReminder";
import RunSplits from "./Features/RunSplits";
import BlockPickobulus from "./Features/BlockPickobulus";
import RiftTimeReminder from "./Features/RiftTimeReminder";
import PotionBag from "./Features/PotionBag";
// Timers();
ToggleSounds();
StupidCoatingParticles();
StonksReminder();
BlockPickobulus();
RiftTimeReminder();
RunSplits(); 
PotionBag();

register("command", () => Settings.openGUI()).setName("ra").setAliases('reaper', 'reaperaddons', 'rape');
