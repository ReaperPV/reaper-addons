import Location from "../../tska/skyblock/Location.js";
import Settings from "../settings";

export default function BlockPickobulus() {
  const blockPickobulus = register(Java.type("net.minecraftforge.client.event.MouseEvent"), (event) => {
    if (!Settings.blockMiningAbilities || event.button != 1) return;

    heldItem = Player.getHeldItem();
    if (!heldItem) return;
    heldItemName = heldItem.getRegistryName();

    if (heldItemName.includes('pickaxe') || heldItemName == 'minecraft:prismarine_shard') {
      cancel(event);
    }
  }).unregister();

  Location.onWorldChange(() => {
    if (!Settings.blockMiningAbilities) return;
    setTimeout(() => { // because it doesn't work without the timout for some reason
      if (Location.inWorld('private island')) {
        blockPickobulus.register();
      } else {
        blockPickobulus.unregister();
      }
    }, 1); 
  });
};
