const splitInfo = {
    F1: [
        {
            name: "&2Blood Open",
            start: /^\[NPC\] Mort: Here, I found this map when I first entered the dungeon\.$/,
            end: /^The BLOOD DOOR has been opened!$/
        },
        {
            name: "&bBlood Clear",
            end: /^\[BOSS\] The Watcher: You have proven yourself\. You may pass\.$/
        },
        {
            name: "&9Boss Entry",
            start: /^\[NPC\] Mort: Here, I found this map when I first entered the dungeon\.$/,
            end: /^\[BOSS\] Bonzo: Gratz for making it this far, but I'm basically unbeatable\.$/
        },
        {
            name: "&dFirst Kill",
            end: /^\[BOSS\] Bonzo: Oh noes, you got me\.\. what ever will I do\?!$/
        },
        {
            name: "&5Second Kill",
            end: /^\[BOSS\] Bonzo: Alright, maybe I'm just weak after all\.\.$/
        },
        {
            name: "&7End Dialogue",
            end: /^\s*(Master Mode)? The Catacombs \- Floor I$/
        },
        {
            name: "&4Boss",
            start: /^\[BOSS\] Bonzo: Gratz for making it this far, but I'm basically unbeatable\.$/
        }
    ],
    F2: [
        {
            name: "&2Blood Open",
            start: /^\[NPC\] Mort: Here, I found this map when I first entered the dungeon\.$/,
            end: /^The BLOOD DOOR has been opened!$/
        },
        {
            name: "&bBlood Clear",
            end: /^\[BOSS\] The Watcher: You have proven yourself\. You may pass\.$/
        },
        {
            name: "&9Boss Entry",
            start: /^\[NPC\] Mort: Here, I found this map when I first entered the dungeon\.$/,
            end: /^\[BOSS\] Scarf: This is where the journey ends for you, Adventurers\.$/
        },
        {
            name: "&dUndeads",
            end: /^\[BOSS\] Scarf: Those toys are not strong enough I see\.$/
        },
        {
            name: "&5Scarf",
            end: /^\s*(Master Mode)? The Catacombs \- Floor II$/
        },
        {
            name: "&4Boss",
            start: /^\[BOSS\] Scarf: This is where the journey ends for you, Adventurers\.$/
        }
    ],
    F3: [
        {
            name: "&2Blood Open",
            start: /^\[NPC\] Mort: Here, I found this map when I first entered the dungeon\.$/,
            end: /^The BLOOD DOOR has been opened!$/
        },
        {
            name: "&bBlood Clear",
            end: /^\[BOSS\] The Watcher: You have proven yourself\. You may pass\.$/
        },
        {
            name: "&9Boss Entry",
            start: /^\[NPC\] Mort: Here, I found this map when I first entered the dungeon\.$/,
            end: /^\[BOSS\] The Professor: I was burdened with terrible news recently\.\.\.$/
        },
        {
            name: "&3Guardians",
            end: /^\[BOSS\] The Professor: Oh\? You found my Guardians' one weakness\?$/
        },
        {
            name: "&dPhase 1",
            end: /^\[BOSS\] The Professor: I see\. You have forced me to use my ultimate technique\.$/
        },
        {
            name: "&1Phase 2",
            end: /^\s*(Master Mode)? The Catacombs \- Floor III$/
        },
        {
            name: "&4Boss",
            start: /^\[BOSS\] The Professor: I was burdened with terrible news recently\.\.\.$/
        },
    ],
    F4: [
        {
            name: "&2Blood Open",
            start: /^\[NPC\] Mort: Here, I found this map when I first entered the dungeon\.$/,
            end: /^The BLOOD DOOR has been opened!$/
        },
        {
            name: "&bBlood Clear",
            end: /^\[BOSS\] The Watcher: You have proven yourself\. You may pass\.$/
        },
        {
            name: "&9Boss Entry",
            start: /^\[NPC\] Mort: Here, I found this map when I first entered the dungeon\.$/,
            end: /^\[BOSS\] Thorn: Welcome Adventurers! I am Thorn, the Spirit! And host of the Vegan Trials!$/
        },
        {
            name: "&7Dialogue",
            end: /^\[BOSS\] Thorn: Dance! Dance with my Spirit animals! And may you perish in a delightful way!$/
        },
        {
            name: "&dThorn Kill",
            end: /^\s*(Master Mode)? The Catacombs \- Floor IV$/

        },
        {
            name: "&4Boss",
            start: /^\[BOSS\] Thorn: Welcome Adventurers! I am Thorn, the Spirit! And host of the Vegan Trials!$/
        }
    ],
    F5: [
        {
            name: "&2Blood Open",
            start: /^\[NPC\] Mort: Here, I found this map when I first entered the dungeon\.$/,
            end: /^The BLOOD DOOR has been opened!$/
        },
        {
            name: "&bBlood Clear",
            end: /^\[BOSS\] The Watcher: You have proven yourself\. You may pass\.$/
        },
        {
            name: "&9Boss Entry",
            start: /^\[NPC\] Mort: Here, I found this map when I first entered the dungeon\.$/,
            end: /^\[BOSS\] Livid: Welcome, you've arrived right on time\. I am Livid, the Master of Shadows\.$/
        },
        {
            name: "&7Start Dialogue",
            end: /^\[BOSS\] Livid: I respect you for making it to here, but I'll be your undoing\.$/
        },
        {
            name: "&dLivid Kill",
            end: /^\[BOSS\] \w+ Livid: Impossible! How did you figure out which one I was\?!$/
        },
        {
            name: "7End Dialogue",
            end: /^\s*(Master Mode)? The Catacombs \- Floor V$/
        },
        {
            name: "&4Boss",
            start: /^\[BOSS\] Livid: Welcome, you've arrived right on time\. I am Livid, the Master of Shadows\.$/
        }
    ],
    F6: [
        {
            name: "&2Blood Open",
            start: /^\[NPC\] Mort: Here, I found this map when I first entered the dungeon\.$/,
            end: /^The BLOOD DOOR has been opened!$/
        },
        {
            name: "&bBlood Clear",
            end: /^\[BOSS\] The Watcher: You have proven yourself\. You may pass\.$/
        },
        {
            name: "&9Boss Entry",
            start: /^\[NPC\] Mort: Here, I found this map when I first entered the dungeon\.$/,
            end: /^\[BOSS\] Sadan: So you made it all the way here\.\.\. Now you wish to defy me\? Sadan\?!$/
        },
        {
            name: "&6Terracottas",
            end: /^\[BOSS\] Sadan: ENOUGH!$/
        },
        {
            name: "&aGiants",
            end: /^\[BOSS\] Sadan: You did it\. I understand now, you have earned my respect\.$/
        },
        {
            name: "&dSadan",
            end: /^\s*(Master Mode)? The Catacombs \- Floor VI$/
        },
        {
            name: "&4Boss",
            start: /^\[BOSS\] Sadan: So you made it all the way here\.\.\. Now you wish to defy me\? Sadan\?!$/
        }
    ],
    F7: [
        {
            name: "&2Blood Open",
            start: /^\[NPC\] Mort: Here, I found this map when I first entered the dungeon\.$/,
            end: /^The BLOOD DOOR has been opened!$/
        },
        {
            name: "&bBlood Clear",
            end: /^\[BOSS\] The Watcher: You have proven yourself\. You may pass\.$/
        },
        {
            name: "&9Boss Entry",
            start: /^\[NPC\] Mort: Here, I found this map when I first entered the dungeon\.$/,
            end: /^\[BOSS\] Maxor: WELL! WELL! WELL! LOOK WHO'S HERE!$/
        },
        {
            name: "&dMaxor",
            end: /^\[BOSS\] Storm: Pathetic Maxor, just like expected\.$/
        },
        {
            name: "&3Storm",
            end: /^\[BOSS\] Goldor: Who dares trespass into my domain\?$/
        },
        {
            name: "&6Terminals",
            end: /^The Core entrance is opening!$/
        },
        {
            name: "&8Goldor",
            end: /^\[BOSS\] Necron: You went further than any human before, congratulations\.$/
        },
        {
            name: "&cNecron",
            end: /^\s*(Master Mode)? The Catacombs \- Floor VII$/
        },
        {
            name: "&4Boss",
            start: /^\[BOSS\] Maxor: WELL! WELL! WELL! LOOK WHO'S HERE!$/
        }
    ],
    M7: [
        {
            name: "&2Blood Open",
            start: /^\[NPC\] Mort: Here, I found this map when I first entered the dungeon\.$/,
            end: /^The BLOOD DOOR has been opened!$/
        },
        {
            name: "&bBlood Clear",
            end: /^\[BOSS\] The Watcher: You have proven yourself\. You may pass\.$/
        },
        {
            name: "&9Boss Entry",
            start: /^\[NPC\] Mort: Here, I found this map when I first entered the dungeon\.$/,
            end: /^\[BOSS\] Maxor: WELL! WELL! WELL! LOOK WHO'S HERE!$/
        },
        {
            name: "&dMaxor",
            end: /^\[BOSS\] Storm: Pathetic Maxor, just like expected\.$/
        },
        {
            name: "&3Storm",
            end: /^\[BOSS\] Goldor: Who dares trespass into my domain\?$/
        },
        {
            name: "&6Terminals",
            end: /^The Core entrance is opening!$/
        },
        {
            name: "&8Goldor",
            end: /^\[BOSS\] Necron: You went further than any human before, congratulations\.$/
        },
        {
            name: "&cNecron",
            end: /^\[BOSS\] Necron: All this, for nothing\.\.\.$/
        },
        {
            name: "&5Dragons",
            end: /^\s*(Master Mode)? The Catacombs \- Floor VII$/
        },
        {
            name: "&4Boss",
            start: /^\[BOSS\] Maxor: WELL! WELL! WELL! LOOK WHO'S HERE!$/
        }
    ]
}

export default splitInfo