//54 itema
const itemsData = {
    "itemList": [
        {
            "name": "Aegis of the Legion",
            "id": 3105,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/2/22/Aegis_of_the_Legion_item.png",
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "tank": true,
                "support": true
            },
            "stats": {
                "ah": 10,
                "armor": 30,
                "mr": 30
            },
            "recipe": ["Null-Magic Mantle", "Cloth Armor"],
            "buy": 1400
        },
        {
            "name": "Aether Wisp",
            "id": 3113,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/c/cd/Aether_Wisp_item.png",
            "nickname": ["spooky ghost"],
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "mage": true,
                "movement": true
            },
            "stats": {
                "ap": 30
            },
            "effects": {
                "pass": {
                    "name": "Glide",
                    "unique": true,
                    "description": "Gain {{as|5% '''bonus''' movement speed}}."
                }
            },
            "recipe": ["Amplifying Tome"],
            "buy": 850
        },
        {
            "name": "Amplifying Tome",
            "id": 1052,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/b/b9/Amplifying_Tome_item.png",
            "nickname": ["amptome", "book"],
            "tier": 1,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "mage": true,
                "support": true
            },
            "stats": {
                "ap": 20
            },
            "buy": 435
        },
        {
            "name": "B. F. Sword",
            "id": 1038,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/a/ab/B._F._Sword_item.png",
            "nickname": ["bf"],
            "tier": 1,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "fighter": true,
                "marksman": true,
                "assassin": true
            },
            "stats": {
                "ad": 40
            },
            "buy": 1300
        },
        {
            "name": "Bami's Cinder",
            "id": 6660,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/d/d9/Bami%27s_Cinder_item.png",
            "nickname": ["fire"],
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "tank": true
            },
            "stats": {
                "hp": 300
            },
            "effects": {
                "pass": {
                    "name": "Immolate",
                    "unique": true,
                    "description": "Taking or dealing damage activates this passive for 3 seconds. Deal {{as|12 {{as|(+ 1% '''bonus''' health)}} magic damage|magic damage}} every second to enemies within {{tip|cr|icononly = true}} 325 (+ 100% '''bonus''' [[size]]) units, increased by 25% against minions and monsters. This executes minions that would be killed by one more tick of damage."
                }
            },
            "recipe": ["Ruby Crystal", "Ruby Crystal"],
            "buy": 1000
        },
        {
            "name": "Bandleglass Mirror",
            "id": 4642,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/d/dd/Bandleglass_Mirror_item.png",
            "nickname": ["yordle"],
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "support": true
            },
            "stats": {
                "ah": 10,
                "ap": 20,
                "mp5": 50
            },
            "recipe": ["Faerie Charm", "Amplifying Tome"],
            "buy": 950
        },
        {
            "name": "Blasting Wand",
            "id": 1026,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/3/3b/Blasting_Wand_item.png",
            "tier": 1,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "mage": true,
                "support": true
            },
            "stats": {
                "ap": 40
            },
            "buy": 850
        },
        {
            "name": "Blighting Jewel",
            "id": 4630,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/5/52/Blighting_Jewel_item.png",
            "nickname": ["purple"],
            "tier": 2,
            "itemlimit": "Void Pen",
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "mage": true
            },
            "stats": {
                "ap": 25,
                "mpen": 13
            },
            "recipe": ["Amplifying Tome"],
            "buy": 1250
        },
        {
            "name": "Bramble Vest",
            "id": 3076,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/a/af/Bramble_Vest_item.png",
            "nickname": ["grievous wounds"],
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "tank": true
            },
            "stats": {
                "armor": 30
            },
            "effects": {
                "pass": {
                    "name": "Thorns",
                    "unique": true,
                    "description": "When struck by a basic attack [[on-hit]], deal {{as|4 magic damage}} to the attacker and, if they are a champion, inflict them with 25% {{tip|Grievous Wounds}} for 3 seconds."
                }
            },
            "recipe": ["Cloth Armor", "Cloth Armor"],
            "buy": 800
        },
        {
            "name": "Caulfield's Warhammer",
            "id": 3133,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/2/29/Caulfield%27s_Warhammer_item.png",
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "fighter": true,
                "marksman": true,
                "assassin": true
            },
            "stats": {
                "ad": 25,
                "ah": 10
            },
            "recipe": ["Long Sword", "Long Sword"],
            "buy": 1100
        },
        {
            "name": "Chain Vest",
            "id": 1031,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/8/89/Chain_Vest_item.png",
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "fighter": true,
                "marksman": true,
                "assassin": true,
                "tank": true
            },
            "stats": {
                "armor": 40
            },
            "recipe": ["Cloth Armor"],
            "buy": 800
        },
        {
            "name": "Cloak of Agility",
            "id": 1018,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/3/3e/Cloak_of_Agility_item.png",
            "tier": 1,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "marksman": true
            },
            "stats": {
                "crit": 15
            },
            "buy": 600
        },
        {
            "name": "Cloth Armor",
            "id": 1029,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/6/6f/Cloth_Armor_item.png",
            "tier": 1,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "fighter": true,
                "marksman": true,
                "assassin": true,
                "mage": true,
                "tank": true,
                "support": true
            },
            "stats": {
                "armor": 15
            },
            "buy": 300
        },
        {
            "name": "Crystalline Bracer",
            "id": 3801,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/f/f1/Crystalline_Bracer_item.png",
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "tank": true,
                "support": true
            },
            "stats": {
                "hp": 200,
                "hp5": 100
            },
            "recipe": ["Ruby Crystal", "Rejuvenation Bead"],
            "buy": 800
        },
        {
            "name": "Dagger",
            "id": 1042,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/7/7e/Dagger_item.png",
            "tier": 1,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "fighter": true,
                "marksman": true,
                "assassin": true
            },
            "stats": {
                "as": 12
            },
            "buy": 300
        },
        {
            "name": "Executioner's Calling",
            "id": 3123,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/3/3d/Executioner%27s_Calling_item.png",
            "nickname": ["grievous"],
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "fighter": true,
                "marksman": true,
                "assassin": true
            },
            "stats": {
                "ad": 20
            },
            "effects": {
                "pass": {
                    "name": "Rend",
                    "unique": true,
                    "description": "Dealing {{as|physical damage}} to enemy champions inflicts them with 25% {{tip|Grievous Wounds}} for 3 seconds."
                }
            },
            "recipe": ["Long Sword"],
            "buy": 800
        },
        {
            "name": "Fiendish Codex",
            "id": 3108,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/a/a2/Fiendish_Codex_item.png",
            "nickname": ["book"],
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "mage": true
            },
            "stats": {
                "ah": 10,
                "ap": 35
            },
            "recipe": ["Amplifying Tome"],
            "buy": 900
        },
        {
            "name": "Forbidden Idol",
            "id": 3114,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/a/ae/Forbidden_Idol_item.png",
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "support": true
            },
            "stats": {
                "hsp": 8,
                "mp5": 50
            },
            "recipe": ["Faerie Charm"],
            "buy": 800
        },
        {
            "name": "Giant's Belt",
            "id": 1011,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/6/68/Giant%27s_Belt_item.png",
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "fighter": true,
                "mage": true,
                "tank": true
            },
            "stats": {
                "hp": 350
            },
            "recipe": ["Ruby Crystal"],
            "buy": 900
        },
        {
            "name": "Glacial Buckler",
            "id": 3024,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/b/b9/Glacial_Buckler_item.png",
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "tank": true,
                "support": true
            },
            "stats": {
                "ah": 10,
                "armor": 20,
                "mana": 250
            },
            "recipe": ["Sapphire Crystal", "Cloth Armor"],
            "buy": 900
        },
        {
            "name": "Hearthbound Axe",
            "id": 3051,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/1/11/Hearthbound_Axe_item.png",
            "nickname": ["blue arrow"],
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "fighter": true,
                "movement": true
            },
            "stats": {
                "ad": 15,
                "as": 15
            },
            "effects": {
                "pass": {
                    "name": "Nimble",
                    "unique": true,
                    "description": "Basic attacks grant {{as|{{rd|20|10}} '''bonus''' movement speed}} for 2 seconds."
                }
            },
            "recipe": ["Dagger", "Long Sword"],
            "buy": 1000
        },
        {
            "name": "Hexdrinker",
            "id": 3155,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/4/4d/Hexdrinker_item.png",
            "tier": 2,
            "itemlimit": "Lifeline",
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "fighter": true,
                "marksman": true,
                "assassin": true
            },
            "stats": {
                "ad": 25,
                "mr": 35
            },
            "effects": {
                "pass": {
                    "name": "Lifeline",
                    "unique": true,
                    "description": "If you would take {{as|magic damage}} that would reduce you below {{as|30% of your '''maximum''' health}}, you first gain a {{tip|shield}} that absorbs {{as|{{rd|110 to 280|82.5 to 210|pp=true}} magic damage}} for 3 seconds.",
                    "cd": "90"
                }
            },
            "recipe": ["Long Sword", "Null-Magic Mantle"],
            "buy": 1300
        },
        {
            "name": "Hextech Alternator",
            "id": 3145,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/b/bc/Hextech_Alternator_item.png",
            "nickname": ["revolver"],
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "mage": true
            },
            "stats": {
                "ap": 25,
                "hp": 150
            },
            "effects": {
                "pass": {
                    "name": "Revved",
                    "unique": true,
                    "description": "Damaging an enemy champion deals {{as|{{pp|50 to 125}} '''bonus''' magic damage}}.",
                    "cd": "40"
                }
            },
            "recipe": ["Amplifying Tome", "Ruby Crystal"],
            "buy": 1050
        },
        {
            "name": "Ironspike Whip",
            "id": 6029,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/c/c5/Ironspike_Whip_item.png",
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "fighter": true
            },
            "stats": {
                "ad": 30
            },
            "effects": {
                "act": {
                    "name": "Crescent",
                    "unique": true,
                    "description": "Deal {{as|100% '''base''' AD}} {{as|physical damage}} to enemies in a {{tip|cr|icononly = true}} 450 radius centered around you.",
                    "cd": "20 (affected by ability haste)"
                }
            },
            "recipe": ["Pickaxe"],
            "buy": 1100
        },
        {
            "name": "Kindlegem",
            "id": 3067,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/b/b8/Kindlegem_item.png",
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "fighter": true,
                "marksman": true,
                "assassin": true,
                "mage": true,
                "tank": true,
                "support": true
            },
            "stats": {
                "ah": 10,
                "hp": 200
            },
            "recipe": ["Ruby Crystal"],
            "buy": 800
        },
        {
            "name": "Kircheis Shard",
            "id": 2015,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/d/d1/Kircheis_Shard_item.png",
            "tags": ["HasOnHit", "HasOnAttack"],
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "marksman": true
            },
            "stats": {
                "as": 15
            },
            "effects": {
                "pass": {
                    "name": "Energized",
                    "unique": true,
                    "description": "Moving and basic attacking generates ''Energize'' stacks, up to 100."
                },
                "pass2": {
                    "name": "Jolt",
                    "unique": true,
                    "description": "When fully {{tip|Energized}}, your next basic attack deals {{as|80 '''bonus''' magic damage}} [[on-hit]]."
                }
            },
            "recipe": ["Dagger"],
            "buy": 700
        },
        {
            "name": "Last Whisper",
            "id": 3035,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/b/ba/Last_Whisper_item.png",
            "nickname": ["lw"],
            "tier": 2,
            "itemlimit": "Last Whisper",
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "fighter": true,
                "marksman": true,
                "assassin": true
            },
            "stats": {
                "ad": 20,
                "armpen": 18
            },
            "recipe": ["Long Sword", "Long Sword"],
            "buy": 1450
        },
        {
            "name": "Leeching Leer",
            "id": 4635,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/f/fe/Leeching_Leer_item.png",
            "nickname": ["wota", "catalyst"],
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "mage": true
            },
            "stats": {
                "ap": 20,
                "hp": 250,
                "omnivamp": 5
            },
            "recipe": ["Ruby Crystal", "Amplifying Tome"],
            "buy": 1300
        },
        {
            "name": "Long Sword",
            "id": 1036,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/6/64/Long_Sword_item.png",
            "tier": 1,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "fighter": true,
                "marksman": true,
                "assassin": true
            },
            "stats": {
                "ad": 10
            },
            "buy": 350
        },
        {
            "name": "Lost Chapter",
            "id": 3802,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/3/31/Lost_Chapter_item.png",
            "nickname": ["book"],
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "mage": true
            },
            "stats": {
                "ah": 10,
                "ap": 40,
                "mana": 300
            },
            "effects": {
                "pass": {
                    "name": "Enlighten",
                    "unique": true,
                    "description": "Upon leveling up, restores {{as|20% of '''maximum''' mana}} over 3 seconds."
                }
            },
            "recipe": ["Amplifying Tome", "Sapphire Crystal", "Amplifying Tome"],
            "buy": 1300
        },
        {
            "name": "Needlessly Large Rod",
            "id": 1058,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/1/13/Needlessly_Large_Rod_item.png",
            "nickname": ["nlr"],
            "tier": 1,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "mage": true
            },
            "stats": {
                "ap": 60
            },
            "buy": 1250
        },
        {
            "name": "Negatron Cloak",
            "id": 1057,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/f/ff/Negatron_Cloak_item.png",
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "fighter": true,
                "tank": true,
                "support": true
            },
            "stats": {
                "mr": 50
            },
            "recipe": ["Null-Magic Mantle"],
            "buy": 900
        },
        {
            "name": "Noonquiver",
            "id": 6670,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/6/68/Noonquiver_item.png",
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "marksman": true
            },
            "stats": {
                "ad": 30,
                "as": 15
            },
            "effects": {
                "pass": {
                    "name": "Precision",
                    "unique": true,
                    "description": "Basic attacks deal {{as|20 '''bonus''' physical damage}} [[on-hit]] against minions and monsters."
                }
            },
            "recipe": ["Long Sword", "Dagger", "Long Sword"],
            "buy": 1300
        },
        {
            "name": "Null-Magic Mantle",
            "id": 1033,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/2/2a/Null-Magic_Mantle_item.png",
            "tier": 1,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "fighter": true,
                "marksman": true,
                "assassin": true,
                "mage": true,
                "tank": true,
                "support": true
            },
            "stats": {
                "mr": 25
            },
            "buy": 450
        },
        {
            "name": "Oblivion Orb",
            "id": 3916,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/8/86/Oblivion_Orb_item.png",
            "nickname": ["grievous"],
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "mage": true,
                "support": true
            },
            "stats": {
                "ap": 35
            },
            "effects": {
                "pass": {
                    "name": "Cursed",
                    "unique": true,
                    "description": "Dealing {{as|magic damage}} to enemy champions inflicts them with 25% {{tip|Grievous Wounds}} for 3 seconds."
                }
            },
            "recipe": ["Amplifying Tome"],
            "buy": 800
        },
        {
            "name": "Phage",
            "id": 3044,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/2/28/Phage_item.png",
            "nickname": ["mallet"],
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "fighter": true,
                "tank": true
            },
            "stats": {
                "ad": 15,
                "hp": 200
            },
            "effects": {
                "pass": {
                    "name": "Sturdy",
                    "unique": true,
                    "description": "After dealing {{as|physical damage}} to an enemy champion, {{tip|heal}} for {{as|{{rd|{{fd|1.6}}%|{{fd|0.8}}%}} of '''maximum''' health}} over 6 seconds."
                }
            },
            "recipe": ["Ruby Crystal", "Long Sword"],
            "buy": 1100
        },
        {
            "name": "Pickaxe",
            "id": 1037,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/3/3b/Pickaxe_item.png",
            "tier": 1,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "fighter": true,
                "marksman": true,
                "assassin": true
            },
            "stats": {
                "ad": 25
            },
            "buy": 875
        },
        {
            "name": "Quicksilver Sash",
            "id": 3140,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/f/f9/Quicksilver_Sash_item.png",
            "nickname": ["qss"],
            "tier": 2,
            "itemlimit": "Quicksilver",
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "fighter": true,
                "marksman": true,
                "assassin": true
            },
            "stats": {
                "mr": 30
            },
            "effects": {
                "act": {
                    "name": "Quicksilver",
                    "unique": true,
                    "description": "Removes all {{tip|crowd control}} debuffs (except {{tip|Airborne}}) from your champion.",
                    "cd": "90"
                }
            },
            "recipe": ["Null-Magic Mantle"],
            "buy": 1300
        },
        {
            "name": "Rageknife",
            "id": 6677,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/f/ff/Rageknife_item.png",
            "nickname": ["angry"],
            "tags": ["HasOnHit", "OnHitAppliesLifeSteal"],
            "tier": 2,
            "itemlimit": "Crit Modifier",
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "fighter": true,
                "marksman": true,
                "onhit effects": true
            },
            "stats": {
                "as": 25
            },
            "effects": {
                "pass": {
                    "name": "Wrath",
                    "unique": true,
                    "description": "Convert every {{as|1% critical strike chance}} into {{as|{{fd|1.75}} '''bonus''' physical damage}} [[on-hit]], capped at {{as|100% critical strike chance}}, for a '''maximum''' of {{as|175 '''bonus''' physical damage}} on-hit. This damage is affected by {{tip|critical strike}} modifiers."
                }
            },
            "recipe": ["Dagger", "Dagger"],
            "buy": 800
        },
        {
            "name": "Recurve Bow",
            "id": 1043,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/8/8e/Recurve_Bow_item.png",
            "tags": ["HasOnHit", "OnHitAppliesLifeSteal"],
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "fighter": true,
                "marksman": true,
                "onhit effects": true
            },
            "stats": {
                "as": 25
            },
            "effects": {
                "pass": {
                    "name": "Steeltipped",
                    "unique": true,
                    "description": "Basic attacks deal {{as|15 '''bonus''' physical damage}} [[on-hit]]."
                }
            },
            "recipe": ["Dagger", "Dagger"],
            "buy": 1000
        },
        {
            "name": "Rejuvenation Bead",
            "id": 1006,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/0/0f/Rejuvenation_Bead_item.png",
            "tier": 1,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "tank": true
            },
            "stats": {
                "hp5": 100
            },
            "buy": 300,
            "sellratio": 0.4
        },
        {
            "name": "Ruby Crystal",
            "id": 1028,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/8/82/Ruby_Crystal_item.png",
            "nickname": ["red"],
            "tier": 1,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "fighter": true,
                "marksman": true,
                "assassin": true,
                "mage": true,
                "tank": true,
                "support": true
            },
            "stats": {
                "hp": 150
            },
            "buy": 400
        },
        {
            "name": "Seeker's Armguard",
            "id": 3191,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/7/78/Seeker%27s_Armguard_item.png",
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "mage": true
            },
            "stats": {
                "ap": 20,
                "armor": 15
            },
            "effects": {
                "pass": {
                    "name": "Witch's Path",
                    "unique": true,
                    "description": "Killing a unit grants {{as|{{fd|0.5}} '''bonus''' armor}}, up to a '''maximum''' of {{as|15|armor}}."
                }
            },
            "recipe": ["Amplifying Tome", "Cloth Armor"],
            "buy": 1000
        },
        {
            "name": "Serrated Dirk",
            "id": 3134,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/c/c2/Serrated_Dirk_item.png",
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "assassin": true,
                "armor pen": true
            },
            "stats": {
                "ad": 30
            },
            "effects": {
                "pass": {
                    "name": "Gouge",
                    "unique": true,
                    "description": "Gain {{Lethality|10}}."
                }
            },
            "recipe": ["Long Sword", "Long Sword"],
            "buy": 1100
        },
        {
            "name": "Sheen",
            "id": 3057,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/c/c6/Sheen_item.png",
            "nickname": ["jimmy neutron"],
            "tags": ["HasOnHit", "OnHitAppliesLifeSteal"],
            "tier": 1,
            "type": ["Basic"],
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "fighter": true,
                "marksman": true,
                "mage": true
            },
            "effects": {
                "pass": {
                    "name": "Spellblade",
                    "unique": true,
                    "description": "After using an [[Champion ability|ability]], your next basic attack within 10 seconds deals {{as|100% '''base''' AD}} {{as|'''bonus''' physical damage}} [[on-hit]].",
                    "cd": "{{fd|1.5}} (begins after using the empowered attack)"
                }
            },
            "buy": 700
        },
        {
            "name": "Spectre's Cowl",
            "id": 3211,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/1/10/Spectre%27s_Cowl_item.png",
            "nickname": ["hat", "ghost"],
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "tank": true
            },
            "stats": {
                "hp": 250,
                "mr": 25
            },
            "effects": {
                "pass": {
                    "name": "Incorporeal",
                    "unique": true,
                    "description": "After taking damage from a champion, gain {{as|150% base health regeneration}} for up to 10 seconds. Duration increases with subsequent champion damage taken."
                }
            },
            "recipe": ["Ruby Crystal", "Null-Magic Mantle"],
            "buy": 1250
        },
        {
            "name": "Stopwatch",
            "id": 2420,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/e/e6/Stopwatch_item.png",
            "nickname": ["zhg", "zonyas", "zhonyas"],
            "tier": 1,
            "limit": "Cannot be purchased while owning {{ii|Guardian Angel}} or {{ii|Zhonya's Hourglass}}. Transforms into {{ii|Broken Stopwatch}} when activated, which cannot be activated again. Once broken, all future purchases are also broken. Limited to 1 '''Stopwatch'''.",
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "fighter": true,
                "marksman": true,
                "assassin": true,
                "mage": true
            },
            "effects": {
                "act": {
                    "name": "Stasis",
                    "unique": true,
                    "description": "Put yourself in {{tip|stasis (buff)|stasis}} for {{fd|2.5}} seconds, rendering you {{tip|untargetable}} and {{tip|invulnerable}} for the duration but also unable to move, declare [[basic attack]]s, cast [[champion ability|abilities]], use [[summoner spell]]s, or [[active ability items|activate items]]."
                }
            },
            "buy": 650,
            "sellratio": 0.7
        },
        {
            "name": "Tear of the Goddess",
            "id": 3070,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/2/2b/Tear_of_the_Goddess_item.png",
            "tier": 1,
            "type": ["Starter"],
            "itemlimit": "Mana Charge",
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "marksman": true,
                "mage": true
            },
            "stats": {
                "mana": 240
            },
            "effects": {
                "pass": {
                    "name": "Focus",
                    "unique": true,
                    "description": "Basic attacks deal {{as|5 '''bonus''' physical damage}} on-hit against minions."
                },
                "pass2": {
                    "name": "Mana Charge",
                    "unique": true,
                    "description": "Grants a charge every 8 seconds, up to 4 charges. Affecting an enemy or ally with an ability consumes a charge and grants {{as|3 '''bonus''' mana}}, increased to {{as|6|mana}} if they are a champion, up to '''maximum''' of {{as|360 '''bonus''' mana}}."
                }
            },
            "buy": 400,
            "sellratio": 0.7
        },
        {
            "name": "Tiamat",
            "id": 3077,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/e/e3/Tiamat_item.png",
            "tier": 2,
            "itemlimit": "Hydra",
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "fighter": true,
                "tank": true
            },
            "stats": {
                "ad": 25
            },
            "effects": {
                "pass": {
                    "name": "Cleave",
                    "unique": true,
                    "description": "Basic attacks [[on-hit]] deal {{as|{{pp|type=distance|changedisplay=true|key=%|60 to 12 for 5|0 to 350}} AD}} {{as|physical damage}} to other enemies near the target."
                }
            },
            "recipe": ["Pickaxe"],
            "buy": 1200
        },
        {
            "name": "Vampiric Scepter",
            "id": 1053,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/e/ec/Vampiric_Scepter_item.png",
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "fighter": true,
                "marksman": true,
                "assassin": true
            },
            "stats": {
                "ad": 15,
                "lifesteal": 7
            },
            "recipe": ["Long Sword"],
            "buy": 900
        },
        {
            "name": "Verdant Barrier",
            "id": 4632,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/4/45/Verdant_Barrier_item.png",
            "nickname": ["necklace"],
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "mage": true
            },
            "stats": {
                "ap": 20,
                "mr": 25
            },
            "effects": {
                "pass": {
                    "name": "Adaptive",
                    "unique": true,
                    "description": "Killing a unit grants {{as|{{fd|0.3}} '''bonus''' magic resistance}}, up to a '''maximum''' of {{as|9|magic resistance}}."
                }
            },
            "recipe": ["Null-Magic Mantle", "Amplifying Tome"],
            "buy": 1000
        },
        {
            "name": "Warden's Mail",
            "id": 3082,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/f/ff/Warden%27s_Mail_item.png",
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "tank": true
            },
            "stats": {
                "armor": 40
            },
            "effects": {
                "pass": {
                    "name": "Rock Solid",
                    "unique": true,
                    "description": "Every incoming instance of {{tt|post-mitigation|Damage calculated after modifiers}}  {{tip|basic damage}} is [[damage modifier|reduced]] by 5 {{as|(+ {{fd|3.5}} per 1000 '''maximum''' health)}}, '''maximum''' 40% reduction each."
                }
            },
            "recipe": ["Cloth Armor", "Cloth Armor"],
            "buy": 1000
        },
        {
            "name": "Winged Moonplate",
            "id": 3066,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/2/23/Winged_Moonplate_item.png",
            "nickname": ["chaps", "pants", "leggings", "zoomin"],
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "tank": true,
                "movement": true
            },
            "stats": {
                "hp": 150
            },
            "effects": {
                "pass": {
                    "name": "Flight",
                    "unique": true,
                    "description": "Gain {{as|5% '''bonus''' movement speed}}."
                }
            },
            "recipe": ["Ruby Crystal"],
            "buy": 800
        },
        {
            "name": "Zeal",
            "id": 3086,
            "url": "https://static.wikia.nocookie.net/leagueoflegends/images/c/c6/Zeal_item.png",
            "tier": 2,
            "maps": {
                "sr": true,
                "ha": true,
                "nb": true
            },
            "menu": {
                "marksman": true,
                "movement": true
            },
            "stats": {
                "as": 18,
                "crit": 15
            },
            "effects": {
                "pass": {
                    "name": "Zealous",
                    "unique": true,
                    "description": "Gain {{as|7% '''bonus''' movement speed}}."
                }
            },
            "recipe": ["Cloak of Agility", "Dagger"],
            "buy": 1050
        }
    ]
}

export default itemsData;
