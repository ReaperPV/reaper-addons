import Location from "../../tska/skyblock/Location.js";
import Settings from "../settings";

export default function BlockPickobulus() {
  let rightHeld

  const blockPickobulus = register(Java.type("net.minecraftforge.client.event.MouseEvent"), (event) => {
    if (!Settings.blockMiningAbilities || event.button != 1) return;
    if (rightHeld) {
      rightHeld = false;
      return;
    }

    heldItem = Player.getHeldItem();
    if (!heldItem) return;
    heldItemName = heldItem.getRegistryName();

    if (heldItemName.includes('pickaxe') || heldItemName == 'minecraft:prismarine_shard') {
      cancel(event);
    }
  }).unregister();

  Location.onWorldChange(() => {
    if (!Settings.blockMiningAbilities) return;
    setTimeout(() => { // because it doesn't work without the timeout for some reason
      if (Location.inWorld('private island')) {
        if (Java.type("org.lwjgl.input.Mouse").isButtonDown(1)) rightHeld = true;
        blockPickobulus.register();
      } else {
        blockPickobulus.unregister();
      }
    }, 1); 
  });
};
