import { @Vigilant, @TextProperty, @ButtonProperty, @SliderProperty, @SwitchProperty } from 'Vigilance';

@Vigilant("ReaperAddons")
class Settings {
    @SwitchProperty({
      name: "Stonks Auction Reminder",
      description: "Alerts you when the Stonks Auction is about to end",
      category: "General",
      subcategory: "Stonks Reminder",
    })
    stonksReminder = true;

    @SliderProperty({
      name: "Volume",
      description: "The volume of the final alert",
      category: "General",
      subcategory: "Stonks Reminder",
      min: 1,
      max: 10,
    })
    volume = 5;

    @SwitchProperty({
      name: "Remove Coating particles",
      description: "Removes the particles from Divan's Powder Coating's",
      category: "General",
      subcategory: "Stupid Coating Particles",
    })
    removeCoatingParticles = true;

    @TextProperty({
      name: "Alerts Sound",
      description: "The sound played for all alerts in the mod, /togglesounds to mute all sounds aside from the alert sound",
      category: "General",
      placeholder: "random.anvil_land"
    })
    alertSound = "random.anvil_land";

    @ButtonProperty({
      name: "Open Sounds",
      description: "Opens a list of available sounds",
      category: "General",
      placeholder: "Open"
    })
  buttonAction() {
    java.awt.Desktop.getDesktop().browse(new java.net.URI("https://www.minecraftforum.net/forums/mapping-and-modding-java-edition/mapping-and-modding-tutorials/2213619-1-8-all-playsound-sound-arguments"));
  }

  
    
    constructor() {
        this.initialize(this);
        this.setCategoryDescription("General", "Some general settings...")
    }
}

export default new Settings();
