
const itemsData = {
        "itemList": [
            {"name": "Your Cut",
                "id": 3400,
                "tier": 1,
                "type": ["Distributed"],
                "limit": "Only granted by {{cai|Death from Below|Pyke}}.",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true,
                    "tt": true,
                    "cs": false
                },
                "effects": {
                    "consume": "Grants {{g|text=*none*}}{{pp|100;112;140;176;220;274;300|-7+x;0+|type=target's kill bounty|color=gold}}, increased by {{g|100}} for [[First Blood]]. '''Can be used while [[dead]].'''"
                }
            },
            {"name": "Abyssal Mask",
                "id": 8020,
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "tank": true
                },
                "stats": {
                    "ah": 10,
                    "hp": 450,
                    "mr": 35
                },
                "effects": {
                    "pass": {
                        "name": "Unmake",
                        "unique": true,
                        "description": "Enemy champions within {{tt|550 units|center to edge}} of you become cursed, reducing their {{as|magic resistance by 5}} {{as|(+ {{fd|1.2}}% '''bonus''' health)}}, capped at a reduction of {{as|25 magic resistance}}. Gain {{as|9 '''bonus''' magic resistance}} per cursed enemy."
                    }
                },
                "recipe": ["Kindlegem", "Spectre's Cowl"],
                "buy": 2700
            },
            {"name": "Aegis of the Legion",
                "id": 3105,
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
            {"name": "Aether Wisp",
                "id": 3113,
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
            {"name": "Amplifying Tome",
                "id": 1052,
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
            {"name": "Anathema's Chains",
                "id": 8001,
                "tier": 3,
                "caption": "She swore to dedicate her life to his destruction. The gauntlets heard.",
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
                    "hp": 650,
                    "ah": 20
                },
                "effects": {
                    "act": {
                        "name": "Vow",
                        "unique": true,
                        "description": "Curse the target enemy champion, designating them as your ''Nemesis'' and granting you 1 stack of ''Vendetta'' every 2 seconds over 60 seconds, up to 30 stacks, resetting upon selecting a new ''Nemesis''. '''Can be used while [[dead]].''' Cannot be cast for 15 seconds while in combat with champions.",
                        "cd": "90",
                        "range": "Global"
                    },
                    "pass": {
                        "name": "Vendetta",
                        "unique": true,
                        "description": "Take 1% reduced damage per stack of ''Vendetta'' from your ''Nemesis'', up to 30% reduced damage."
                    },
                    "pass2": {
                        "name": "Vengeance",
                        "unique": true,
                        "description": "At '''maximum''' stacks, your ''Nemesis'' has 20% reduced {{tip|tenacity}} while they are within {{tip|cr|icononly = true}} 700 units of you."
                    }
                },
                "recipe": ["Kindlegem", "Giant's Belt"],
                "buy": 2500
            },
            {"name": "Anti-Tower Socks",
                "id": 1508,
                "tier": 1,
                "type": ["Minion"],
                "caption": "They're a little stinky, but effective.",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true,
                    "tt": true,
                    "cs": true
                },
                "effects": {
                    "pass": {
                        "unique": true,
                        "description": "{{tip|Turrets}} basic attacks are modified to deal {{as|{{pp|key=%|14;11;8|Outer;Inner;Inhibitor/Nexus|type=turret type}} of this minion's '''maximum''' health}} as {{tt|pre-mitigation damage|Damage calculated before modifiers}}."
                    }
                }
            },
            {"name": "Archangel's Staff",
                "id": 3003,
                "nickname": ["aa"],
                "tier": 3,
                "type": "=>Seraph's Embrace",
                "itemlimit": "Mana Charge",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "mage": true
                },
                "stats": {
                    "ap": 60,
                    "hp": 200,
                    "mana": 500
                },
                "effects": {
                    "pass": {
                        "name": "Awe",
                        "unique": true,
                        "description": "Grants {{as|ability haste}} equal to {{as|{{fd|0.5}}% '''bonus''' mana}}."
                    },
                    "pass2": {
                        "name": "Mana Charge",
                        "unique": true,
                        "description": "Grants a charge every 8 seconds, up to 4 charges. Affecting an enemy or ally with an ability consumes a charge and grants {{as|3 '''bonus''' mana}}, increased to {{as|6|mana}} if they are a champion, up to a '''maximum''' of {{as|360 '''bonus''' mana}}."
                    },
                    "pass3": {
                        "description": "Transforms into {{ii|Seraph's Embrace}} at {{as|+360 mana}}."
                    }
                },
                "recipe": ["Tear of the Goddess", "Kindlegem", "Blasting Wand"],
                "buy": 2600
            },
            {"name": "Ardent Censer",
                "id": 3504,
                "nickname": ["censor"],
                "tags": ["HasOnHit", "OnHitAppliesLifeSteal"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "support": true,
                    "attack speed": true,
                    "onhit effects": true
                },
                "stats": {
                    "ap": 60,
                    "hsp": 8,
                    "mp5": 100
                },
                "effects": {
                    "pass": {
                        "name": "Sanctify",
                        "unique": true,
                        "description": "{{tip|Heal|Healing}} or {{tip|shield|shielding}} allied champions (''excluding yourself'') enhances you and them with {{as|{{pp|type=target's level|key=%|10 to 30}} '''bonus''' attack speed}} and {{as|{{pp|type=target's level|5 to 20}} '''bonus''' magic damage|magic damage}} [[on-hit]] on basic attacks for 6 seconds."
                    }
                },
                "recipe": ["Amplifying Tome", "Forbidden Idol", "Amplifying Tome"],
                "buy": 2300
            },
            {"name": "Axiom Arc",
                "id": 6696,
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "assassin": true
                },
                "stats": {
                    "ad": 55,
                    "ah": 25,
                    "lethality": 10
                },
                "effects": {
                    "pass": {
                        "name": "Flux",
                        "unique": true,
                        "description": "Scoring a {{tip|takedown}} against an enemy champion within 3 seconds of damaging them refunds 20% of your ultimate ability's '''total''' cooldown."
                    }
                },
                "recipe": ["Serrated Dirk", "Caulfield's Warhammer"],
                "buy": 3000
            },
            {"name": "B. F. Sword",
                "id": 1038,
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
            {"name": "Bami's Cinder",
                "id": 6660,
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
            {"name": "Bandleglass Mirror",
                "id": 4642,
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
            {"name": "Banshee's Veil",
                "id": 3102,
                "nickname": ["bv", "spellshield"],
                "tier": 3,
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
                    "ap": 80,
                    "mr": 45
                },
                "effects": {
                    "pass": {
                        "name": "Annul",
                        "unique": true,
                        "description": "Grants a {{tip|spell shield}} that blocks the next hostile ability.",
                        "cd": "40 (restarts upon taking damage from champions)"
                    }
                },
                "recipe": ["Fiendish Codex", "Verdant Barrier"],
                "buy": 2600
            },
            {"name": "Base Turret Reinforced Armor (Turret Item)",
                "id": 1506,
                "formatname": "Base Turret Reinforced Armor",
                "tier": 1,
                "type": ["Turret"],
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true,
                    "tt": true,
                    "cs": true
                },
                "effects": {
                    "pass": {
                        "unique": true,
                        "description": "While no enemy {{tip|minions}} or {{ui|Rift Herald|Summoned Rift Herald}} are within range, gain {{fd|66.67%}} damage reduction and immunity to {{as|true damage}}."
                    },
                    "pass2": {
                        "unique": true,
                        "description": "Base turrets have health regeneration, but cannot regenerate past their current segment. Base turrets are segmented at 33%, 66% and 100% health."
                    }
                }
            },
            {"name": "Berserker's Greaves",
                "id": 3006,
                "nickname": ["boots", "zerker"],
                "tier": 2,
                "type": ["Boots"],
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "stats": {
                    "as": 35,
                    "msflat": 45
                },
                "recipe": ["Boots", "Dagger"],
                "buy": 1100
            },
            {"name": "Black Cleaver",
                "id": 3071,
                "nickname": ["bc"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "fighter": true,
                    "assassin": true,
                    "onhit effects": true,
                    "armor pen": true,
                    "movement": true
                },
                "stats": {
                    "ad": 45,
                    "ah": 30,
                    "hp": 350
                },
                "effects": {
                    "pass": {
                        "name": "Carve",
                        "unique": true,
                        "description": "Dealing {{as|physical damage}} to an enemy champion applies a stack of ''Carve'' for 6 seconds, stacking up to 6 times. Each stack inflicts {{as|5% armor reduction}}, up to {{as|30%|armor}} at 6 stacks."
                    },
                    "pass2": {
                        "name": "Rage",
                        "unique": true,
                        "description": "Dealing {{as|physical damage}} to an enemy champion grants {{as|3 '''bonus''' movement speed}} per stack of ''Carve'' on them for 2 seconds, up to {{as|18|ms}}."
                    }
                },
                "recipe": ["Caulfield's Warhammer", "Kindlegem", "Long Sword"],
                "buy": 3100
            },
            {"name": "Black Mist Scythe",
                "id": 3864,
                "nickname": ["Support", "Economy", "Gold", "Sightstone", "Ward"],
                "tier": 3,
                "itemlimit": "=>Spectral Sickle",
                "limit": "warding",
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true,
                    "tt": false,
                    "cs": false
                },
                "menu": {
                    "support": true
                },
                "stats": {
                    "ad": 20,
                    "gp10": 3,
                    "hp": 75,
                    "mp5": 100
                },
                "effects": {
                    "act": {
                        "name": "Warding",
                        "unique": true,
                        "description": "Consumes a charge to place a {{tip|Stealth Ward}} at the target location, which grants {{tip|sight}} of the surrounding area. Charges refill upon visiting the shop.",
                        "charges": "4",
                        "range": "600"
                    },
                    "pass": {
                        "unique": true,
                        "description": "Receives diminishing gold from excessive minion kills."
                    }
                },
                "recipe": ["Harrowing Crescent"],
                "buy": "=>Spectral Sickle",
                "sellratio": "=>Spectral Sickle"
            },
            {"name": "Black Spear",
                "id": 3599,
                "tier": 1,
                "limit": "Unavailable after 3 minutes elapse.",
                "champion": ["Kalista", "Sylas"],
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true,
                    "tt": true,
                    "cs": true
                },
                "effects": {
                    "act": {
                        "name": "Oathsworn Bond",
                        "unique": true,
                        "description": "After a {{fd|3.5}}-second [[Channel#Casting Times|cast time]] and a 3-second {{tip|channel}} afterwards from the user and the target allied champion, both become bound allies. The target is unable to act for 6 seconds after the channel's duration. Afterwards, the target is dubbed ''Oathsworn''."
                    }
                }
            },
            {"name": "Blade of the Ruined King",
                "id": 3153,
                "nickname": ["brk", "bork", "botrk", "mist"],
                "tags": ["HasOnHit", "OnHitAppliesLifeSteal"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "fighter": true,
                    "marksman": true,
                    "movement": true
                },
                "stats": {
                    "ad": 40,
                    "as": 25,
                    "lifesteal": 8
                },
                "effects": {
                    "pass": {
                        "name": "Mist's Edge",
                        "unique": true,
                        "description": "Basic attacks deal {{as|{{rd|12%|8%}} of the target's '''current''' health}} {{as|'''bonus''' physical damage}} [[on-hit]], with a '''minimum''' of 15 against all units and a '''maximum''' of 60 against minions and monsters."
                    },
                    "pass2": {
                        "name": "Siphon",
                        "unique": true,
                        "description": "Basic attacks [[on-hit]] against enemy champions apply a stack for 6 seconds, stacking up to 3 times. The third stack consumes them all to deal {{as|{{pp|40 to 150}} '''bonus''' magic damage}} [[on-hit]] and {{tip|slow}} the target by 25% for 2 seconds, while also granting you {{as|25% '''bonus''' movement speed}} for the same duration.",
                        "cd": "20"
                    }
                },
                "recipe": ["Vampiric Scepter", "Recurve Bow", "Pickaxe"],
                "buy": 3300
            },
            {"name": "Blasting Wand",
                "id": 1026,
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
            {"name": "Blighting Jewel",
                "id": 4630,
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
            {"name": "Bloodthirster",
                "id": 3072,
                "nickname": ["bt", "healsword"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "marksman": true
                },
                "stats": {
                    "ad": 55,
                    "crit": 20,
                    "lifesteal": 18
                },
                "effects": {
                    "pass": {
                        "name": "Ichorshield",
                        "unique": true,
                        "description": "Convert the {{tip|healing}} received from {{sti|life steal}} in excess of {{as|'''maximum''' health}} into a {{tip|shield}} for up to {{pp|50 to 320}}, which slowly decays after not dealing or taking damage for 25 seconds."
                    }
                },
                "recipe": ["B. F. Sword", "Cloak of Agility", "Vampiric Scepter"],
                "buy": 3400
            },
            {"name": "Bloodward",
                "id": 7008,
                "tier": 4,
                "type": "=>Immortal Shieldbow",
                "itemlimit": "=>Immortal Shieldbow",
                "limit": "=>Immortal Shieldbow",
                "ornn": true,
                "caption": "{{sbc|{{ai|Master Craftsman|Ornn}}:}} All stats except Critical Strike Chance have been improved.",
                "maps": "=>Immortal Shieldbow",
                "menu": "=>Immortal Shieldbow",
                "stats": {
                    "ad": 65,
                    "as": 30,
                    "crit": "=>Immortal Shieldbow",
                    "lifesteal": 8
                },
                "effects": {
                    "pass": "=>Immortal Shieldbow",
                    "mythic": "=>Immortal Shieldbow"
                },
                "recipe": ["Immortal Shieldbow"],
                "buy": "=>Immortal Shieldbow"
            },
            {"name": "Boots",
                "id": 1001,
                "tier": 1,
                "type": ["Boots"],
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "stats": {
                    "msflat": 25
                },
                "buy": 300
            },
            {"name": "Boots of Swiftness",
                "id": 3009,
                "nickname": ["swifties"],
                "tier": 2,
                "type": ["Boots"],
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "stats": {
                    "msflat": 60,
                    "spec": "+25% [[slow resist]]"
                },
                "recipe": ["Boots"],
                "buy": 900
            },
            {"name": "Bramble Vest",
                "id": 3076,
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
            {"name": "Broken Stopwatch",
                "id": 2421,
                "formatname": "Broken Stopwatch",
                "tier": 1,
                "type": "=>Stopwatch",
                "limit": "After breaking one {{ii|Stopwatch}}, the shopkeeper will only sell you {{ii|Broken Stopwatch|Broken Stopwatches}}.",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "effects": {
                    "act": {
                        "name": "Shattered Time",
                        "unique": true,
                        "description": "Is broken, but can still be upgraded."
                    }
                },
                "buy": "=>Stopwatch",
                "builds": "=>Stopwatch"
            },
            {"name": "Bulwark of the Mountain",
                "id": 3860,
                "nickname": ["Support", "Economy", "Gold", "Sightstone", "Ward"],
                "tier": 3,
                "itemlimit": "=>Relic Shield",
                "limit": "warding",
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true,
                    "tt": false,
                    "cs": false
                },
                "menu": {
                    "tank": true,
                    "support": true
                },
                "stats": {
                    "ap": 20,
                    "gp10": 3,
                    "hp": 250,
                    "hp5": 100
                },
                "effects": {
                    "act": {
                        "name": "Warding",
                        "unique": true,
                        "description": "Consumes a charge to place a {{tip|Stealth Ward}} at the target location, which grants {{tip|sight}} of the surrounding area. Charges refill upon visiting the shop.",
                        "charges": "4",
                        "range": "600"
                    },
                    "pass": {
                        "unique": true,
                        "description": "Receives diminishing gold from excessive minion kills."
                    }
                },
                "recipe": ["Targon's Buckler"],
                "buy": "=>Relic Shield",
                "sellratio": "=>Relic Shield"
            },
            {"name": "Caesura",
                "id": 7024,
                "tier": 4,
                "type": "=>Crown of the Shattered Queen",
                "itemlimit": "=>Crown of the Shattered Queen",
                "limit": "=>Crown of the Shattered Queen",
                "ornn": true,
                "caption": "{{sbc|{{ai|Master Craftsman|Ornn}}:}} All stats have been improved.",
                "maps": "=>Crown of the Shattered Queen",
                "menu": "=>Crown of the Shattered Queen",
                "stats": {
                    "ah": 25,
                    "ap": 90,
                    "hp": 350,
                    "mana": 800
                },
                "effects": {
                    "pass": "=>Crown of the Shattered Queen",
                    "pass2": "=>Crown of the Shattered Queen",
                    "mythic": "=>Crown of the Shattered Queen"
                },
                "recipe": ["Crown of the Shattered Queen"],
                "buy": "=>Crown of the Shattered Queen"
            },
            {"name": "Caulfield's Warhammer",
                "id": 3133,
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
            {"name": "Ceaseless Hunger",
                "id": 7015,
                "nickname": ["slurp"],
                "tier": 4,
                "type": "=>Goredrinker",
                "itemlimit": "=>Goredrinker",
                "limit": "=>Goredrinker",
                "ornn": true,
                "caption": "{{sbc|{{ai|Master Craftsman|Ornn}}:}} All stats have been improved.",
                "maps": "=>Goredrinker",
                "menu": "=>Goredrinker",
                "stats": {
                    "ad": 70,
                    "ah": 25,
                    "hp": 450,
                    "omnivamp": 12
                },
                "effects": {
                    "act": "=>Goredrinker",
                    "mythic": "=>Goredrinker"
                },
                "recipe": ["Goredrinker"],
                "buy": "=>Goredrinker"
            },
            {"name": "Chain Vest",
                "id": 1031,
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
            {"name": "Chempunk Chainsword",
                "id": 6609,
                "nickname": ["grievous"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "fighter": true,
                    "assassin": true
                },
                "stats": {
                    "ad": 55,
                    "ah": 25,
                    "hp": 250
                },
                "effects": {
                    "pass": {
                        "name": "Hackshorn",
                        "unique": true,
                        "description": "Dealing {{as|physical damage}} to enemy champions inflicts them with 25% {{tip|Grievous Wounds}} for 3 seconds, increased to 40% if the target is left with less than {{as|50% of their '''maximum''' health}}."
                    }
                },
                "recipe": ["Executioner's Calling", "Ruby Crystal", "Caulfield's Warhammer"],
                "buy": 2800
            },
            {"name": "Chemtech Putrifier",
                "id": 3011,
                "nickname": ["putrid", "grievous wounds", "purifier"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "support": true
                },
                "stats": {
                    "ah": 20,
                    "ap": 60,
                    "mp5": 100
                },
                "effects": {
                    "pass": {
                        "name": "Puffcap Toxin",
                        "unique": true,
                        "description": "Dealing {{as|magic damage}} to enemy champions inflicts them with 25% {{tip|Grievous Wounds}} for 3 seconds. {{tip|Heal|Healing}} or {{tip|shield|shielding}} allied champions (''excluding yourself'') empowers your and their next instance of damage against enemy champions within 5 seconds to apply 40% {{tip|Grievous Wounds}} for 3 seconds."
                    }
                },
                "recipe": ["Oblivion Orb", "Bandleglass Mirror"],
                "buy": 2300
            },
            {"name": "Cloak of Agility",
                "id": 1018,
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
            {"name": "Cloth Armor",
                "id": 1029,
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
            {"name": "Commencing Stopwatch",
                "id": 2419,
                "formatname": "Commencing Stopwatch",
                "tier": 1,
                "type": ["Distributed", "Basic"],
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "effects": {
                    "pass": {
                        "description": "Transforms into a {{ii|Perfectly Timed Stopwatch}} after 14 minutes. Scoring a {{tip|takedown}} against an enemy champion reduces this timer by 2 minutes. That '''Stopwatch''' contributes {{g|250}} to the items it builds into."
                    }
                }
            },
            {"name": "Control Ward",
                "id": 2055,
                "nickname": ["kleptomancy", "orange", "red", "pink",],
                "tier": 1,
                "limit": "Can only carry 2 Control Wards in inventory. Limited to 1 Control Ward on the map per player.",
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true
                },
                "effects": {
                    "consume": "Places a visible {{tip|Control Ward}} at the target location (600 range), which {{lcfirst:{{tip data/Control ward|pst2|description}}}}"
                },
                "buy": 75,
                "sellratio": 0.4
            },
            {"name": "Corrupting Potion",
                "id": 2033,
                "tier": 2,
                "type": ["Potion"],
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "mana and reg": true,
                    "health and reg": true
                },
                "effects": {
                    "consume": "Consumes a charge to [[Health regeneration|regenerate]] {{as|{{fd|4.166}} health}} and {{as|{{fd|3.125}} mana}} every {{fd|0.5}} seconds over 12 seconds, for a total of {{as|100 health}} and {{as|75 mana}}. During this time, [[basic attack]]s and damaging [[champion ability|abilities]] against enemy champions burn them, dealing {{as|15 '''bonus''' magic damage}} over 3 seconds, increased to {{as|20|magic damage}} while the user cannot regenerate {{as|mana}}. '''Bonus''' damage is halved if applied by [[area of effect]] or [[damage over time]].",
                    "pass": {
                        "description": "Holds charges that refill upon visiting the [[shop]].",
                        "charges": "3"
                    },
                    "pass2": {
                        "description": "'''Corrupting Potion''' can be used even at full [[health]] and [[mana]]."
                    }
                },
                "recipe": ["Refillable Potion"],
                "buy": 500,
                "sellratio": 0.4
            },
            {"name": "Cosmic Drive",
                "id": 4629,
                "nickname": ["hat"],
                "tier": 3,
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
                    "ah": 30,
                    "ap": 65,
                    "hp": 200,
                    "ms": 5
                },
                "effects": {
                    "pass": {
                        "name": "Spelldance",
                        "unique": true,
                        "description": "After dealing 3 instances of damage from basic attacks or [[ability damage]] to champions within 3 seconds, gain {{as|15% '''bonus''' movement speed}}, decaying to {{as|5%|ms}} over 2 seconds, and {{as|40 ability power}} for 5 seconds, refreshing on damage dealt to champions though not resetting the effect."
                    }
                },
                "recipe": ["Fiendish Codex", "Aether Wisp", "Ruby Crystal"],
                "buy": 3000
            },
            {"name": "Crown of the Shattered Queen",
                "id": 4644,
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "mage": true
                },
                "stats": {
                    "ah": 20,
                    "ap": 70,
                    "hp": 250,
                    "mana": 600
                },
                "effects": {
                    "pass": {
                        "name": "Safeguard",
                        "unique": true,
                        "description": "Become ''Safeguarded'' and reduce incoming champion damage by 75%, lingering for {{fd|1.5}} seconds after taking damage from a champion.",
                        "cd": "40 (restarts upon taking damage from champions)"
                    },
                    "pass2": {
                        "name": "Poise",
                        "unique": true,
                        "description": "While ''Safeguarded'', gain {{as|{{pp|10 to 40|1;9 to 18 by 1|formula=10, then +3 per level starting at level 9}} ability power}}, lingering for 3 seconds after ''Safeguard'' is deactivated."
                    },
                    "mythic": {
                        "ap": 8,
                        "ms": 1
                    }
                },
                "recipe": ["Lost Chapter", "Kindlegem", "Amplifying Tome"],
                "buy": 2800
            },
            {"name": "Crystalline Bracer",
                "id": 3801,
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
            {"name": "Cull",
                "id": 1083,
                "nickname": ["dblade"],
                "tags": ["HasOnHit"],
                "tier": 1,
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true
                },
                "menu": {
                    "fighter": true,
                    "marksman": true,
                    "assassin": true,
                    "lifesteal vamp": true
                },
                "stats": {
                    "ad": 7,
                    "spec": "+3 [[health]] [[on-hit]]"
                },
                "effects": {
                    "pass": {
                        "name": "Reap",
                        "unique": true,
                        "description": "[[Kill]]ing a [[minion]] grants {{g|1}}, up to a '''maximum''' of {{g|100}}.",
                        "description2": "After having killed 100 minions, grants an additional {{g|350}} and permanently disables this passive."
                    }
                },
                "buy": 450
            },
            {"name": "Dagger",
                "id": 1042,
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
            {"name": "Dark Seal",
                "id": 1082,
                "nickname": ["Noxian"],
                "tier": 1,
                "type": ["Starter"],
                "itemlimit": "Glory",
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true
                },
                "menu": {
                    "mage": true
                },
                "stats": {
                    "ap": 15,
                    "hp": 40
                },
                "effects": {
                    "pass": {
                        "name": "Glory",
                        "unique": true,
                        "description": "Gain 2 stacks for each champion [[kill]] and 1 stack for each [[assist]], up to a '''maximum''' of 10 stacks. Lose 5 stacks on [[death]]. Stacks are preserved when upgrading to {{ii|Mejai's Soulstealer}}."
                    },
                    "pass2": {
                        "name": "Dread",
                        "unique": true,
                        "description": "Gain {{as|4 ability power}} for each stack of ''Glory''."
                    }
                },
                "buy": 350
            },
            {"name": "Dead Man's Plate",
                "id": 3742,
                "nickname": ["dmp", "gangplank", "juggernaut", "dreadnought"],
                "tier": 3,
                "caption": "There's only one way you'll get this armor from me... - forgotten namesake",
                "limit": "{{tip|Ranged}} champions do not apply the slow.",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "tank": true
                },
                "stats": {
                    "armor": 45,
                    "hp": 300,
                    "ms": 5
                },
                "effects": {
                    "pass": {
                        "name": "Shipwrecker",
                        "unique": true,
                        "description": "While moving, generates 7 stacks of ''Momentum'' each {{fd|0.25}} seconds, granting up to {{as|40 '''bonus''' movement speed}} at 100 stacks after {{fd|3.75}} seconds of moving. ''Momentum'' decays by 15 every {{fd|0.25}} seconds while {{tip|immobilize|immobilized}}. Basic attacks consume all stacks to deal {{pp|0 to 40 for 11|0 to 100|type=Momentum|label1=stacks of Momentum|formula=1 for every 1 stack of Momentum, capped at 40}} {{as|(+ {{pp|0 to 100 for 11|0 to 100|key=%|type=Momentum|label1=stacks of Momentum|formula=1% for every 1 stack of Momentum, capped at 100}} '''base''' AD)}} {{as|'''bonus''' physical damage}} [[on-hit]]. At '''maximum''' stacks, the target is also {{tip|slow|slowed}} by 50% for 1 second."
                    }
                },
                "recipe": ["Winged Moonplate", "Ruby Crystal", "Chain Vest"],
                "buy": 2900
            },
            {"name": "Death's Dance",
                "id": 6333,
                "nickname": ["dd", "<s>Bloodbag</s>"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "fighter": true
                },
                "stats": {
                    "ad": 55,
                    "ah": 15,
                    "armor": 45
                },
                "effects": {
                    "pass": {
                        "name": "Ignore Pain",
                        "unique": true,
                        "description": "Stores {{rd|30%|10%}} of all {{tt|post-mitigation|Damage calculated after modifiers}} {{as|physical|physical damage}} and {{as|magic|magic damage}} damage received, including on {{tip|shield|shields}}, which is successively taken as {{as|true damage}} over 3 seconds instead, dealing a third of the stored damage each second."
                    },
                    "pass2": {
                        "name": "Defy",
                        "unique": true,
                        "description": "If an enemy champion dies within 3 seconds of you damaging them, removes ''Ignore Pain's'' remaining stored damage, and {{tip|heals}} you for {{as|120% '''bonus''' AD}} over 2 seconds."
                    }
                },
                "recipe": ["Chain Vest", "Caulfield's Warhammer", "Pickaxe"],
                "buy": 3300
            },
            {"name": "Death's Daughter",
                "id": 3902,
                "tier": 1,
                "req": "Requires 500 {{ai|Silver Serpents|Gangplank}}.",
                "champion": ["Gangplank"],
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "effects": {
                    "pass": {
                        "name": "Death's Daughter",
                        "unique": true,
                        "description": "A massive cannonball lands after {{ais|Cannon Barrage|Gangplank}} first cluster of waves, dealing {{sti|true damage|{{as|{{ap|120 to 300 3}}|true damage}}}} {{as|(+ 30% AP)}} {{as|true damage}} to enemies struck and {{tip|slow|slowing}} them by 60% for {{fd|1.5}} seconds."
                    }
                }
            },
            {"name": "Deicide",
                "id": 7017,
                "nickname": ["devourer"],
                "tier": 4,
                "type": "=>Divine Sunderer",
                "itemlimit": "=>Divine Sunderer",
                "limit": "=>Divine Sunderer",
                "ornn": true,
                "caption": "{{sbc|{{ai|Master Craftsman|Ornn}}:}} All stats have been improved.",
                "maps": "=>Divine Sunderer",
                "menu": "=>Divine Sunderer",
                "stats": {
                    "ad": 60,
                    "ah": 25,
                    "hp": 450
                },
                "effects": {
                    "pass": "=>Divine Sunderer",
                    "mythic": "=>Divine Sunderer"
                },
                "recipe": ["Divine Sunderer"],
                "buy": "=>Divine Sunderer"
            },
            {"name": "Demonic Embrace",
                "id": 4637,
                "nickname": ["helmet"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "mage": true
                },
                "stats": {
                    "ap": 60,
                    "hp": 450
                },
                "effects": {
                    "pass": {
                        "name": "Dark Pact",
                        "unique": true,
                        "description": "Gain {{as|ability power}} equal to {{as|2% '''bonus''' health}}."
                    },
                    "pass2": {
                        "name": "Azakana Gaze",
                        "unique": true,
                        "description": "Dealing {{tip|ability damage}} curses enemies, causing them to take{{ft|{{as|{{rd|{{fd|7.2}}%|4%}} of their '''maximum''' health}} as {{as|'''total''' magic damage}} over 4 seconds.|{{as|{{rd|{{fd|1.8}}%|1%}} of their '''maximum''' health}} as {{as|magic damage}} every second over 4 seconds.}}"
                    }
                },
                "recipe": ["Blasting Wand", "Giant's Belt", "Amplifying Tome"],
                "buy": 3000
            },
            {"name": "Divine Sunderer",
                "id": 6632,
                "nickname": ["devourer"],
                "tags": ["HasOnHit", "OnHitAppliesLifeSteal"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "fighter": true,
                    "armor pen": true,
                    "magic pen": true,
                    "lifesteal vamp": true
                },
                "stats": {
                    "ad": 40,
                    "ah": 20,
                    "hp": 300
                },
                "effects": {
                    "pass": {
                        "name": "Spellblade",
                        "unique": true,
                        "description": "After using an [[champion ability|ability]], your next basic attack within 10 seconds deals {{as|125% '''base''' AD}} {{as|(+ {{rd|6%|3%}} of target's '''maximum''' health)}} as {{as|'''bonus''' physical damage}} [[on-hit]], with a '''minimum''' damage equal to {{as|150% '''base''' AD}} and a '''maximum''' damage against monsters equal to {{as|250% '''base''' AD}}. If the target is a champion, {{tip|heal}} for {{as|{{fd|81.25}}% '''base''' AD}} {{as|(+ {{rd|{{fd|3.9}}%|{{fd|1.95}}%}} of target's '''maximum''' health)}}.",
                        "cd": "{{fd|1.5}} (begins after using the empowered attack)"
                    },
                    "mythic": {
                        "armpen": 3,
                        "mpen": 3
                    }
                },
                "recipe": ["Caulfield's Warhammer", "Sheen", "Kindlegem"],
                "buy": 3300
            },
            {"name": "Doran's Blade",
                "id": 1055,
                "nickname": ["dblade"],
                "tier": 1,
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true
                },
                "menu": {
                    "fighter": true,
                    "marksman": true,
                    "assassin": true,
                    "lifesteal vamp": true
                },
                "stats": {
                    "ad": 8,
                    "hp": 80
                },
                "effects": {
                    "pass": {
                        "name": "Warmonger",
                        "unique": true,
                        "description": "+{{fd|2.5}}% [[omnivamp]]"
                    }
                },
                "buy": 450
            },
            {"name": "Doran's Ring",
                "id": 1056,
                "nickname": ["dring"],
                "tags": ["HasOnHit"],
                "tier": 1,
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true
                },
                "menu": {
                    "mage": true,
                    "mana and reg": true
                },
                "stats": {
                    "ap": 15,
                    "hp": 70
                },
                "effects": {
                    "pass": {
                        "name": "Focus",
                        "unique": true,
                        "description": "Basic attacks deal {{as|5 '''bonus''' physical damage}} on-hit against [[minion]]s."
                    },
                    "pass2": {
                        "name": "Drain",
                        "unique": true,
                        "description": "Restore {{as|1 mana}} every second, increased to {{as|{{fd|1.5}}|mana}} for 10 seconds when you damage an enemy champion. If you cannot gain mana, {{tip|heal}} for {{ft|45% of this value|{{ap|1.5*0.45}}}}instead."
                    }
                },
                "buy": 400
            },
            {"name": "Doran's Shield",
                "id": 1054,
                "nickname": ["dshield"],
                "tags": ["HasOnHit"],
                "tier": 1,
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true
                },
                "menu": {
                    "fighter": true,
                    "marksman": true,
                    "assassin": true,
                    "mage": true,
                    "tank": true
                },
                "stats": {
                    "hp": 80,
                    "hp5flat": 6
                },
                "effects": {
                    "pass": {
                        "name": "Focus",
                        "unique": true,
                        "description": "Basic attacks deal {{as|5 '''bonus''' physical damage}} on-hit against [[minions]]."
                    },
                    "pass2": {
                        "name": "Endure",
                        "unique": true,
                        "description": "After taking damage from a [[champion]] or large [[monster]], gain [[health regeneration]] equal to {{pp|0 to 40 for 11|type='''current missing''' health|color=health|key1=%|0 to 75|formula=0.53 health regen for every 1% missing health}} health over 8 seconds. Reduced to{{ft|66% effectiveness|{{pp|0 to 26.4 for 11|type='''current missing''' health|color=health|key1=%|0 to 75|formula=0.35 health regen for every 1% missing health}}}} on {{tip|ranged}} champions or when triggered by [[area of effect]], [[damage over time]], or [[damage|proc]]."
                    }
                },
                "buy": 450
            },
            {"name": "Draktharr's Shadowcarver",
                "id": 7002,
                "tier": 4,
                "type": "=>Duskblade of Draktharr",
                "itemlimit": "=>Duskblade of Draktharr",
                "limit": "=>Duskblade of Draktharr",
                "ornn": true,
                "caption": "{{sbc|{{ai|Master Craftsman|Ornn}}:}} All stats have been improved.",
                "maps": "=>Duskblade of Draktharr",
                "menu": "=>Duskblade of Draktharr",
                "stats": {
                    "ad": 75,
                    "ah": 25,
                    "lethality": 26
                },
                "effects": {
                    "pass": "=>Duskblade of Draktharr",
                    "mythic": "=>Duskblade of Draktharr"
                },
                "recipe": ["Duskblade of Draktharr"],
                "buy": "=>Duskblade of Draktharr"
            },
            {"name": "Dreamshatter",
                "id": 7016,
                "nickname": ["kneecapper", "whip"],
                "tier": 4,
                "type": "=>Stridebreaker",
                "itemlimit": "=>Stridebreaker",
                "limit": "=>Stridebreaker",
                "ornn": true,
                "caption": "{{sbc|{{ai|Master Craftsman|Ornn}}:}} All stats have been improved.",
                "maps": "=>Stridebreaker",
                "menu": "=>Stridebreaker",
                "stats": {
                    "ad": 60,
                    "ah": 25,
                    "as": 30,
                    "hp": 400
                },
                "effects": {
                    "act": "=>Stridebreaker",
                    "pass": "=>Stridebreaker",
                    "mythic": "=>Stridebreaker"
                },
                "recipe": ["Stridebreaker"],
                "buy": "=>Stridebreaker"
            },
            {"name": "Duskblade of Draktharr",
                "id": 6691,
                "tier": 3,
                "limit": "{{tip|Ranged}} champions do not apply the slow.",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "assassin": true
                },
                "stats": {
                    "ad": 60,
                    "ah": 20,
                    "lethality": 18
                },
                "effects": {
                    "pass": {
                        "name": "Nightstalker",
                        "unique": true,
                        "description": "Your next basic attack against an enemy champion deals {{as|{{rd|75|55}} {{as|(+ {{rd|30%|25%}} '''bonus''' AD)}} '''bonus''' physical damage|physical damage}} [[on-hit]] and {{tip|slow|slows}} the target by 99% for {{fd|0.25}} seconds.",
                        "description2": "Scoring a {{tip|takedown}} against an enemy champion within 3 seconds of damaging them resets this effect's cooldown and grants you {{tip|invisibility}} for {{fd|1.5}} seconds.",
                        "cd": "15"
                    },
                    "mythic": {
                        "ah": 5,
                        "msflat": 5
                    }
                },
                "recipe": ["Serrated Dirk", "Caulfield's Warhammer"],
                "buy": 3100
            },
            {"name": "Eclipse",
                "id": 6692,
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "fighter": true,
                    "assassin": true,
                    "movement": true
                },
                "stats": {
                    "ad": 55,
                    "lethality": 18,
                    "omnivamp": 7
                },
                "effects": {
                    "pass": {
                        "name": "Ever Rising Moon",
                        "unique": true,
                        "description": "Hitting an enemy champion with 2 separate attacks or abilities within {{fd|1.5}} seconds deals them {{as|'''bonus''' physical damage}} equal to {{as|{{rd|6%|3%}} of target's '''maximum''' health}} and grants you {{as|15% '''bonus''' movement speed}} and a {{tip|shield}} for {{rd|160|80}} {{as|(+ {{rd|35%|{{fd|17.5}}%}} '''bonus''' AD)}} for 2 seconds.",
                        "cd": "{{rd|8|16}}"
                    },
                    "mythic": {
                        "armpen": 4,
                        "msflat": 5
                    }
                },
                "recipe": ["Serrated Dirk", "Long Sword", "Vampiric Scepter"],
                "buy": 3100
            },
            {"name": "Edge of Night",
                "id": 3814,
                "nickname": ["eon", "spellshield", "spell shield"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "assassin": true
                },
                "stats": {
                    "ad": 50,
                    "hp": 325,
                    "lethality": 10
                },
                "effects": {
                    "pass": {
                        "name": "Annul",
                        "unique": true,
                        "description": "Grants a {{tip|spell shield}} that blocks the next hostile ability.",
                        "cd": "40 (restarts upon taking damage from champions)"
                    }
                },
                "recipe": ["Long Sword", "Serrated Dirk", "Ruby Crystal"],
                "buy": 2900
            },
            {"name": "Elixir of Iron",
                "id": 2138,
                "nickname": ["orange", "white"],
                "tier": 1,
                "req": "[[Experience (champion)|Level 9]] required to purchase.",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "health and reg": true,
                    "movement": true
                },
                "effects": {
                    "consume": "Grants {{as|300 '''bonus''' health}}, 25% {{tip|Tenacity}}, and 15% increased [[size]] for 180 seconds. While active, moving leaves behind a ''path'' briefly that grants {{as|15% '''bonus''' movement speed}} to allied champions within. '''Can be used while [[death|dead]].'''"
                },
                "buy": 500,
                "sellratio": 0.4
            },
            {"name": "Elixir of Sorcery",
                "id": 2139,
                "nickname": ["blue", "brilliance", "illumination"],
                "tier": 1,
                "req": "[[Experience (champion)|Level 9]] required to purchase.",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "ability power": true,
                    "mana and reg": true
                },
                "effects": {
                    "consume": "Grants {{as|50 ability power}} and {{as|15 mana regeneration}} for 180 seconds. While active, going in combat by affecting enemy [[champion|champions]] or [[turrets]] deals them {{as|25 '''bonus''' true damage}} (5 second cooldown on each champion, no cooldown against turrets). '''Can be used while [[death|dead]].'''"
                },
                "buy": 500,
                "sellratio": 0.4
            },
            {"name": "Elixir of Wrath",
                "id": 2140,
                "nickname": ["red potion", "fortitude", "rage"],
                "tier": 1,
                "req": "[[Experience (champion)|Level 9]] required to purchase.",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "attack damage": true,
                    "lifesteal vamp": true
                },
                "effects": {
                    "consume": "Grants {{as|30 '''bonus''' attack damage}} and 12% [[physical vamp]] against champions for 180 seconds. '''Can be used while [[death|dead]].'''"
                },
                "buy": 500,
                "sellratio": 0.4
            },
            {"name": "Emberknife",
                "id": 1035,
                "nickname": ["jungle"],
                "tier": 1,
                "req": "Can only be purchased if you have {{si|Smite}}.",
                "itemlimit": "Jungle&Support",
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true,
                    "tt": false,
                    "cs": false
                },
                "menu": {
                    "fighter": true,
                    "marksman": true,
                    "assassin": true,
                    "mage": true,
                    "tank": true,
                    "lifesteal vamp": true
                },
                "stats": {
                    "spec": "+7% [[omnivamp]] against [[monster]]s"
                },
                "effects": {
                    "pass": {
                        "name": "Sear",
                        "unique": true,
                        "description": "Damaging monsters burns them for {{as|60 {{as|(+ 30% AP)}} {{as|(+ 5% '''bonus''' AD)}} {{as|(+ 2% '''bonus''' health)}} magic damage|magic damage}} over 5 seconds. Omnivamp against monsters provided by this item is not reduced by [[area of effect]] damage."
                    },
                    "pass2": {
                        "name": "Challenging Path",
                        "unique": true,
                        "description": "Using {{si|Smite}} 5 times '''consumes this item''' to upgrade your Smite into {{si|Challenging Smite}}, doubling its damage, and grants all of this item's effects permanently after a {{fd|2.5}}-second delay."
                    },
                    "pass3": {
                        "name": "Huntsman",
                        "unique": true,
                        "description": "Killing large [[monster]]s grants {{as|60 '''bonus''' experience}}. The first large monster killed grants an additional {{as|150 '''bonus''' experience}}, for a total of {{as|210|experience}}. If you are at least 2 levels below the average level of the game, large monster kills grant {{as|50 '''bonus''' experience}} per level below the average level of all players in the game. If your gold from minions is greater than 40% your gold from monsters, a lane minion will grant 13 less gold and 50% reduced experience. ''This penalty is removed at 20 minutes.''"
                    },
                    "pass4": {
                        "name": "Recoup",
                        "unique": true,
                        "description": "Regenerate up to {{as|{{pp|8 to 18}} mana}} per second while in the jungle or river, based on {{as|'''missing''' mana}}."
                    }
                },
                "buy": 350
            },
            {"name": "Equinox",
                "id": 7023,
                "tier": 4,
                "type": "=>Evenshroud",
                "itemlimit": "=>Evenshroud",
                "ornn": true,
                "caption": "{{sbc|{{ai|Master Craftsman|Ornn}}:}} All stats have been improved.",
                "maps": "=>Evenshroud",
                "menu": "=>Evenshroud",
                "stats": {
                    "ah": 25,
                    "armor": 40,
                    "hp": 400,
                    "mr": 40
                },
                "effects": {
                    "pass": "=>Evenshroud",
                    "mythic": "=>Evenshroud"
                },
                "recipe": ["Evenshroud"],
                "buy": "=>Evenshroud"
            },
            {"name": "Essence Reaver",
                "id": 3508,
                "nickname": ["er", "<s>bloothirster</s>"],
                "tags": ["HasOnHit", "OnHitAppliesLifeSteal"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "marksman": true,
                    "mana and reg": true
                },
                "stats": {
                    "ad": 45,
                    "ah": 20,
                    "crit": 20
                },
                "effects": {
                    "pass": {
                        "name": "Spellblade",
                        "unique": true,
                        "description": "After using an [[champion ability|ability]], your next basic attack [[on-hit]] within 10 seconds deals {{as|100% '''base''' AD (+ 40% '''bonus''' AD)}} {{as|'''bonus''' physical damage}} and restores {{as|mana}} equal to {{as|40% '''base''' AD (+ 16% '''bonus''' AD)}}.",
                        "cd": "{{fd|1.5}} (begins after using the empowered attack)"
                    }
                },
                "recipe": ["Caulfield's Warhammer", "Sheen", "Cloak of Agility"],
                "buy": 2800
            },
            {"name": "Eternal Winter",
                "id": 7014,
                "nickname": ["GLP", "hose", "super soaker"],
                "tier": 4,
                "type": "=>Everfrost",
                "itemlimit": "=>Everfrost",
                "limit": "=>Everfrost",
                "ornn": true,
                "caption": "{{sbc|{{ai|Master Craftsman|Ornn}}:}} All stats have been improved.",
                "maps": "=>Everfrost",
                "menu": "=>Everfrost",
                "stats": {
                    "ah": 25,
                    "ap": 90,
                    "hp": 350,
                    "mana": 800
                },
                "effects": {
                    "act": "=>Everfrost",
                    "mythic": "=>Everfrost"
                },
                "recipe": ["Everfrost"],
                "buy": "=>Everfrost"
            },
            {"name": "Evenshroud",
                "id": 3001,
                "tier": 3,
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
                    "ah": 20,
                    "armor": 30,
                    "hp": 200,
                    "mr": 30
                },
                "effects": {
                    "pass": {
                        "name": "Coruscation",
                        "unique": true,
                        "description": "Becoming affected by or applying an {{tip|immobilize|immobilizing}} or {{tip|ground|grounding}} effect to or from an enemy champion affects them and all enemy champions in {{tip|cr|icononly = true}} 600 radius around you with ''Repent'', increasing the damage they take by 9% for 4 seconds."
                    },
                    "mythic": {
                        "armor": 5,
                        "mr": 5
                    }
                },
                "recipe": ["Kindlegem", "Aegis of the Legion"],
                "buy": 2500
            },
            {"name": "Everfrost",
                "id": 6656,
                "nickname": ["GLP", "hose", "supersoaker"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "mage": true
                },
                "stats": {
                    "ah": 20,
                    "ap": 70,
                    "hp": 250,
                    "mana": 600
                },
                "effects": {
                    "act": {
                        "name": "Glaciate",
                        "unique": true,
                        "description": "Unleash a fan of icy shards in a cone in the target direction, dealing {{as|100 {{as|(+ 30% AP)}} magic damage|magic damage}} to enemies struck within and {{tip|slow|slowing}} them by 65% for 1 second. Enemies hit in the center of the cone are {{tip|root|rooted}} for the same duration instead.",
                        "cd": "30"
                    },
                    "mythic": {
                        "ap": 10
                    }
                },
                "recipe": ["Lost Chapter", "Kindlegem", "Amplifying Tome"],
                "buy": 2800
            },
            {"name": "Executioner's Calling",
                "id": 3123,
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
            {"name": "Eye of Luden",
                "id": 7013,
                "nickname": ["boomstick"],
                "tier": 4,
                "type": "=>Luden's Tempest",
                "itemlimit": "=>Luden's Tempest",
                "limit": "=>Luden's Tempest",
                "ornn": true,
                "caption": "{{sbc|{{ai|Master Craftsman|Ornn}}:}} All stats have been improved.",
                "maps": "=>Luden's Tempest",
                "menu": "=>Luden's Tempest",
                "stats": {
                    "ah": 25,
                    "ap": 100,
                    "mana": 800,
                    "mpenflat": 10
                },
                "effects": {
                    "pass": "=>Luden's Tempest",
                    "mythic": "=>Luden's Tempest"
                },
                "recipe": ["Luden's Tempest"],
                "buy": "=>Luden's Tempest"
            },
            {"name": "Eye of the Herald",
                "id": 3513,
                "formatname": "Eye of the Herald",
                "tier": 1,
                "type": ["Basic Trinket", "Distributed"],
                "limit": "The '''Eye of the Herald''' will be lost if not used within 240 seconds.",
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true,
                    "tt": false,
                    "cs": false
                },
                "effects": {
                    "consume": "{{Unique|Herald's Call|{{tip|Channel}} for 1 second and summon the '''Eye of the Herald''' in front of you, which is crushed over 5 seconds to summon an allied {{ui|Rift Herald}} that sieges enemy [[structures]]. This effect is placed on a 3-second cooldown while in [[combat status|combat]] with non-[[minion]]s.}}",
                    "pass": {
                        "name": "Glimpse of the Void",
                        "unique": true,
                        "description": "Gain {{si|Empowered Recall}}."
                    }
                }
            },
            {"name": "Faerie Charm",
                "id": 1004,
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
                    "mp5": 50
                },
                "buy": 250
            },
            {"name": "Farsight Alteration",
                "id": 3363,
                "nickname": ["blue", "totem", "trinket"],
                "tier": 1,
                "type": ["Basic Trinket"],
                "req": "Cannot be purchased until [[Experience (champion)|level 9]].",
                "limit": "trinket",
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true
                },
                "effects": {
                    "act": {
                        "name": "Trinket",
                        "unique": true,
                        "description": "Places a visible {{tip|Farsight Ward}} at the target location that grants {{tip|sight}} of the surrounding area, lasting indefinitely. Also grants sight of the area in a 900 radius for 2 seconds, with enemy champions inside at the time of placement being {{tip|standard sight|revealed}} for 5 seconds.",
                        "cd": "{{pp|198 to 99|type=average of all champion levels}}",
                        "range": "4000"
                    }
                },
                "buy": 0
            },
            {"name": "Fiendish Codex",
                "id": 3108,
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
            {"name": "Fimbulwinter",
                "id": 3121,
                "tier": 4,
                "itemlimit": "=>Winter's Approach",
                "maps": "=>Winter's Approach",
                "menu": "=>Winter's Approach",
                "stats": {
                    "hp": "=>Winter's Approach",
                    "ah": "=>Winter's Approach",
                    "mana": 860
                },
                "effects": {
                    "pass": "=>Winter's Approach",
                    "pass2": {
                        "name": "Everlasting",
                        "unique": true,
                        "description": "{{tip|immobilize|Immobilizing}}, or {{tip|slow|slowing}} if you are {{tip|melee}}, an enemy champion consumes {{as|3% '''current''' mana}} to grant a {{pp|100 to 180}} {{as|(+ {{fd|4.5}}% '''current''' mana)}} {{tip|shield}} for 3 seconds (8 second cooldown). The shield's strength is increased{{ft|by 80%|to {{pp|100*1.8 to 200*1.8}} {{as|(+ {{ap|5*1.8}}% '''current''' mana)}}}}if there is more than one enemy champion nearby. Can only activate if you have greater than {{as|20% '''maximum''' mana}}."
                    }
                },
                "recipe": ["Winter's Approach"],
                "buy": "=>Winter's Approach"
            },
            {"name": "Fire at Will",
                "id": 3901,
                "tier": 1,
                "req": "Requires 500 {{ai|Silver Serpents|Gangplank}}.",
                "champion": ["Gangplank"],
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true,
                    "tt": true,
                    "cs": true
                },
                "effects": {
                    "pass": {
                        "name": "Fire at Will",
                        "unique": true,
                        "description": "{{ai|Cannon Barrage|Gangplank}} fires 2 additional clusters of 3 waves over the duration at an increased rate of fire (1 cluster per {{fd|1.33}} seconds), for a total of 18 waves over the 8 seconds."
                    }
                }
            },
            {"name": "Forbidden Idol",
                "id": 3114,
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
            {"name": "Force of Nature",
                "id": 4401,
                "nickname": ["fon"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "tank": true
                },
                "stats": {
                    "hp": 350,
                    "mr": 70,
                    "ms": 5
                },
                "effects": {
                    "pass": {
                        "name": "Absorb",
                        "unique": true,
                        "description": "Taking {{as|magic damage}} from champions grants a stack of ''Steadfast'' for 7 seconds, stacking up to 6 times with the duration refreshing on subsequent {{as|magic damage}} from them and whenever dealing damage to them. Becoming {{tip|immobilize|immobilized}} by an enemy champion grants 2 stacks and also refreshes the duration. Damaging basic attacks and spells per {{tip|cast instance}} can only grant 1 stack of ''Steadfast'' every 1 second."
                    },
                    "pass2": {
                        "name": "Dissipate",
                        "unique": true,
                        "description": "While at 6 stacks of ''Steadfast'', gain {{as|10% '''bonus''' movement speed}} and reduce all incoming {{as|magic damage}} by 25%."
                    }
                },
                "recipe": ["Negatron Cloak", "Ruby Crystal", "Winged Moonplate"],
                "buy": 2900
            },
            {"name": "Forgefire Crest",
                "id": 7004,
                "nickname": ["funfire", "sunborn"],
                "tier": 4,
                "type": "=>Sunfire Aegis",
                "itemlimit": "=>Sunfire Aegis",
                "limit": "=>Sunfire Aegis",
                "ornn": true,
                "caption": "{{sbc|{{ai|Master Craftsman|Ornn}}:}} All stats have been improved.",
                "maps": "=>Sunfire Aegis",
                "menu": "=>Sunfire Aegis",
                "stats": {
                    "ah": 25,
                    "armor": 50,
                    "hp": 600,
                    "mr": 50
                },
                "effects": {
                    "pass": "=>Sunfire Aegis",
                    "pass2": "=>Sunfire Aegis",
                    "mythic": "=>Sunfire Aegis"
                },
                "recipe": ["Sunfire Aegis"],
                "buy": "=>Sunfire Aegis"
            },
            {"name": "Fortification",
                "id": 1501,
                "tier": 1,
                "type": ["Turret"],
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true,
                    "tt": true,
                    "cs": true
                },
                "effects": {
                    "pass": {
                        "unique": true,
                        "description": "Reduces all incoming damage by 50%. This item disappears after 5 minutes."
                    }
                }
            },
            {"name": "Frostfang",
                "id": 3851,
                "nickname": ["Support", "Economy", "Gold", "Sightstone", "Ward"],
                "tier": 2,
                "itemlimit": "=>Spellthief's Edge",
                "limit": "warding",
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true,
                    "tt": false,
                    "cs": false
                },
                "menu": {
                    "mage": true,
                    "support": true
                },
                "stats": {
                    "ap": 15,
                    "gp10": 3,
                    "hp": 70,
                    "mp5": 75
                },
                "effects": {
                    "act": {
                        "name": "Warding",
                        "unique": true,
                        "description": "Consumes a charge to place a {{tip|Stealth Ward}} at the target location, which grants {{tip|sight}} of the surrounding area. Charges refill upon visiting the shop.",
                        "charges": "3",
                        "range": "600"
                    },
                    "pass": {
                        "name": "Tribute",
                        "unique": true,
                        "description": "Grants a charge every 10 seconds, up to 3 charges. If an allied champion is {{tt|nearby|2000 range}}, damaging abilities and attacks against champions and structures consume a charge, up to one per attack or cast. Consuming a charge grants {{g|20}}. ''Receive diminishing gold from excessive minion kills.''"
                    },
                    "pass2": {
                        "name": "Quest",
                        "unique": true,
                        "description": "Earn {{g|500}} using this item to upgrade to {{ii|Shard of True Ice}}, increasing the {{sbc|Warding}} active to instead have 4 wards in stock."
                    }
                },
                "recipe": ["Spellthief's Edge"],
                "buy": "=>Spellthief's Edge",
                "sellratio": "=>Spellthief's Edge"
            },
            {"name": "Frostfire Gauntlet",
                "id": 6662,
                "nickname": ["iceborn", "chilly mittens"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "tank": true
                },
                "stats": {
                    "ah": 20,
                    "armor": 25,
                    "hp": 450,
                    "mr": 25
                },
                "effects": {
                    "pass": {
                        "name": "Immolate",
                        "unique": true,
                        "description": "Taking or dealing damage activates this passive for 3 seconds. Deal {{as|12 {{as|(+ 1% '''bonus''' health)}} magic damage|magic damage}} every second to enemies within {{tip|cr|icononly = true}} 325 (+ 100% '''bonus''' [[size]]) units, increased by 25% against minions and 150% against monsters. This executes minions that would be killed by one more tick of damage."
                    },
                    "pass2": {
                        "name": "Snowbind",
                        "unique": true,
                        "description": "Basic attacks create a 250 radius frost field around the target that lasts for {{fd|1.5}} seconds and deals {{as|{{rd|12 to 85|6 to 42.5|pp=true}}|magic damage}} {{as|magic damage}} to all enemies inside initially and {{tip|slow|slows}} all enemies within by {{rd|25%|{{fd|12.5%}}}} {{as|(+ {{rd|4%|2%}} per 1000 '''maximum''' health)}} for {{fd|1.5}} seconds.",
                        "cd": "{{rd|4|6}}"
                    },
                    "mythic": {
                        "hp": 100,
                        "spec": "6% increased [[size]]"
                    }
                },
                "recipe": ["Bami's Cinder", "Null-Magic Mantle", "Cloth Armor"],
                "buy": 2800
            },
            {"name": "Frozen Heart",
                "id": 3110,
                "nickname": ["fh"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "tank": true
                },
                "stats": {
                    "ah": 20,
                    "armor": 80,
                    "mana": 400
                },
                "effects": {
                    "aura": {
                        "name": "Winter's Caress",
                        "unique": true,
                        "description": "{{tip|Cripple|Cripples}} the [[attack speed]] of nearby enemies by 20%.",
                        "radius": "{{tt|700|center to edge}}"
                    },
                    "pass": {
                        "name": "Rock Solid",
                        "unique": true,
                        "description": "Every incoming instance of {{tt|post-mitigation|Damage calculated after modifiers}} {{tip|basic damage}} is [[Damage modifier|reduced]] by 7 {{as|(+ {{fd|3.5}} per 1000 '''maximum''' health)}}, '''maximum''' 40% reduction each."
                    }
                },
                "recipe": ["Warden's Mail", "Glacial Buckler"],
                "buy": 2500
            },
            {"name": "Galeforce",
                "id": 6671,
                "nickname": ["squallrider"],
                "tier": 3,
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
                    "ad": 60,
                    "as": 20,
                    "crit": 20
                },
                "effects": {
                    "act": {
                        "name": "Cloudburst",
                        "unique": true,
                        "description": "{{tip|Dash}} to the target location, though not through terrain, and fire three homing missiles at the {{tt|most wounded|Lowest health percent}} enemy within {{tt|750|Estimated, range type and precise value to be confirmed}} units of you at the end of the dash, prioritizing enemy champions. Each missile deals {{as|{{pp|180/3 to 315/3|1;10 to 18 by 1}} {{as|(+ 15% '''bonus''' AD)}} magic damage|magic damage}}, for a total of {{as|{{pp|180 to 315|1;10 to 18 by 1}} {{as|(+ 45% '''bonus''' AD)}}|magic damage}}, increased by {{pp|type= target's '''missing''' health|color=health|key=%|0 to 50|key1=%|0;7;14;21;28;35;42;49;56;63;70|formula=5% per 7% of enemies' '''missing''' health}}.",
                        "cd": "110",
                        "range": "200 - 425"
                    },
                    "mythic": {
                        "ms": 2
                    }
                },
                "recipe": ["Noonquiver", "Cloak of Agility", "Pickaxe"],
                "buy": 3400
            },
            {"name": "Gargoyle Stoneplate",
                "id": 3193,
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "tank": true
                },
                "stats": {
                    "ah": 15,
                    "armor": 60,
                    "mr": 60
                },
                "effects": {
                    "act": {
                        "name": "Monolith",
                        "unique": true,
                        "description": "Gain a {{tip|shield}} for 100 {{as|(+ 90% '''bonus''' health)}}, decaying over {{fd|2.5}} seconds, and 25% increased [[size]] while active.",
                        "cd": "90"
                    },
                    "pass": {
                        "name": "Fortify",
                        "unique": true,
                        "description": "Increase your {{as|'''bonus''' armor}} and {{as|'''bonus''' magic resistance}} by 5% for 6 seconds when a champion deals damage to you, stacks up to 5 times for a '''maximum''' of 25%. This stacks once per unique champion."
                    }
                },
                "recipe": ["Cloth Armor", "Aegis of the Legion", "Null-Magic Mantle"],
                "buy": 3200
            },
            {"name": "Giant's Belt",
                "id": 1011,
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
            {"name": "Glacial Buckler",
                "id": 3024,
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
            {"name": "Goredrinker",
                "id": 6630,
                "nickname": ["slurp"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "fighter": true
                },
                "stats": {
                    "ad": 55,
                    "ah": 20,
                    "hp": 300,
                    "omnivamp": 8
                },
                "effects": {
                    "act": {
                        "name": "Thirsting Slash",
                        "unique": true,
                        "description": "Deal {{as|175% '''base''' AD}} {{as|physical damage}} to enemies in a {{tip|cr|icononly = true}} 450 radius centered around you. {{tip|Heal}} for {{as|20% AD}} {{as|(+ 8% of your '''missing''' health)}} for each enemy champion hit.",
                        "cd": "15 (reduced by ability haste)"
                    },
                    "mythic": {
                        "ah": 7
                    }
                },
                "recipe": ["Ironspike Whip", "Caulfield's Warhammer", "Kindlegem"],
                "buy": 3300
            },
            {"name": "Guardian Angel",
                "id": 3026,
                "nickname": ["ga"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true
                },
                "menu": {
                    "fighter": true,
                    "marksman": true,
                    "assassin": true
                },
                "stats": {
                    "ad": 40,
                    "armor": 40
                },
                "effects": {
                    "pass": {
                        "name": "Rebirth",
                        "unique": true,
                        "description": "Upon taking [[death|lethal damage]], enter {{tip|resurrection}} for 4 seconds, during which you are {{tip|invulnerable}}, {{tip|untargetable}}, and unable to act, and afterwards {{tip|heal}} for {{as|50% of '''base''' health}} and restore {{as|30% of '''maximum''' mana}}.",
                        "cd": "300 (starts after resurrecting)"
                    }
                },
                "recipe": ["B. F. Sword", "Chain Vest", "Stopwatch"],
                "buy": 2800,
                "sellratio": 0.4
            },
            {"name": "Guardian's Blade",
                "id": 3177,
                "tier": 1,
                "itemlimit": "Guardian",
                "maps": {
                    "sr": false,
                    "ha": true,
                    "nb": false,
                    "tt": false,
                    "cs": false
                },
                "menu": {
                    "fighter": true,
                    "marksman": true,
                    "assassin": true,
                    "tank": true
                },
                "stats": {
                    "ad": 30,
                    "ah": 15,
                    "hp": 150
                },
                "effects": {
                    "pass": {
                        "name": "Legendary",
                        "unique": true,
                        "description": "This item counts as a Legendary item."
                    }
                },
                "buy": 950,
                "sellratio": 0.7
            },
            {"name": "Guardian's Hammer",
                "id": 3184,
                "tier": 1,
                "itemlimit": "Guardian",
                "maps": {
                    "sr": false,
                    "ha": true,
                    "nb": false,
                    "tt": false,
                    "cs": false
                },
                "menu": {
                    "fighter": true,
                    "marksman": true,
                    "assassin": true
                },
                "stats": {
                    "ad": 25,
                    "hp": 150,
                    "lifesteal": 10
                },
                "effects": {
                    "pass": {
                        "name": "Legendary",
                        "unique": true,
                        "description": "This item counts as a Legendary item."
                    }
                },
                "buy": 950,
                "sellratio": 0.7
            },
            {"name": "Guardian's Horn",
                "id": 2051,
                "nickname": ["Golden Arm of Kobe", "Golden Bicep of Kobe", "Horn", "Horn of the ManWolf", "ManWolf"],
                "tier": 1,
                "itemlimit": "Guardian",
                "maps": {
                    "sr": false,
                    "ha": true,
                    "nb": false,
                    "tt": false,
                    "cs": false
                },
                "menu": {
                    "fighter": true,
                    "tank": true,
                    "support": true
                },
                "stats": {
                    "hp": 150,
                    "hp5flat": 20
                },
                "effects": {
                    "pass": {
                        "name": "Undaunted",
                        "unique": true,
                        "description": "Reduces all sources of incoming champion damage by 15 ''({{fd|3.75}} against [[damage over time]] abilities)''."
                    },
                    "pass2": {
                        "name": "Legendary",
                        "unique": true,
                        "description": "This item counts as a Legendary item."
                    }
                },
                "buy": 950,
                "sellratio": 0.7
            },
            {"name": "Guardian's Orb",
                "id": 3112,
                "tier": 1,
                "itemlimit": "Guardian",
                "maps": {
                    "sr": false,
                    "ha": true,
                    "nb": false,
                    "tt": false,
                    "cs": false
                },
                "menu": {
                    "mage": true,
                    "tank": true,
                    "support": true,
                    "mana and reg": true
                },
                "stats": {
                    "ap": 40,
                    "hp": 150
                },
                "effects": {
                    "pass": {
                        "name": "Recovery",
                        "unique": true,
                        "description": "Restore {{as|10 mana}} every 5 seconds, manaless champions restore {{as|15 health}} instead."
                    },
                    "pass2": {
                        "name": "Legendary",
                        "unique": true,
                        "description": "This item counts as a Legendary item."
                    }
                },
                "buy": 950,
                "sellratio": 0.7
            },
            {"name": "Guinsoo's Rageblade",
                "id": 3124,
                "tags": ["HasOnHit", "OnHitAppliesLifeSteal"],
                "tier": 3,
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
                    "as": 45,
                    "crit": 20
                },
                "effects": {
                    "pass": {
                        "name": "Wrath",
                        "unique": true,
                        "description": "Convert every {{as|1% critical strike chance}} into {{as|2 '''bonus''' physical damage}} [[on-hit]], capped at {{as|100% critical strike chance}}, for a '''maximum''' of {{as|200 '''bonus''' physical damage}} on-hit. This damage is affected by {{tip|critical strike}} modifiers."
                    },
                    "pass2": {
                        "name": "Seething Strike",
                        "unique": true,
                        "description": "Basic attacks [[on-attack]] grant a stack for 6 seconds, up to 2 stacks. At 2 stacks, the next basic attack consumes all stacks on-attack to trigger a ''Phantom Hit'' that applies {{tip|on-hit}} effects to the target at 100% effectiveness after a {{fd|0.15}} second delay."
                    }
                },
                "recipe": ["Rageknife", "Cloak of Agility", "Dagger"],
                "buy": 2600
            },
            {"name": "Gusto",
                "id": 1509,
                "tier": 1,
                "type": ["Minion"],
                "caption": "Go hard or go home.",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true,
                    "tt": true,
                    "cs": true
                },
                "effects": {
                    "pass": {
                        "unique": true,
                        "description": "{{tip|Turrets}} basic attacks are modified to deal {{as|45% of this minion's '''maximum''' health}} as {{tt|pre-mitigation damage|Damage calculated before modifiers}}."
                    }
                }
            },
            {"name": "Hailblade",
                "id": 1039,
                "nickname": ["jungle"],
                "tier": 1,
                "req": "Can only be purchased if you have {{si|Smite}}.",
                "itemlimit": "Jungle&Support",
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true,
                    "tt": false,
                    "cs": false
                },
                "menu": {
                    "fighter": true,
                    "marksman": true,
                    "assassin": true,
                    "mage": true,
                    "tank": true,
                    "lifesteal vamp": true
                },
                "stats": {
                    "spec": "=>Emberknife"
                },
                "effects": {
                    "pass": "=>Emberknife",
                    "pass2": {
                        "name": "Chilling Path",
                        "unique": true,
                        "description": "Using {{si|Smite}} 5 times '''consumes this item''' to upgrade your Smite into {{si|Chilling Smite}}, doubling its damage, and grants all of this item's effects permanently after a {{fd|2.5}}-second delay."
                    },
                    "pass3": "=>Emberknife",
                    "pass4": "=>Emberknife"
                },
                "buy": 350
            },
            {"name": "Harrowing Crescent",
                "id": 3863,
                "nickname": ["Support", "Economy", "Gold", "Sightstone", "Ward"],
                "tier": 2,
                "itemlimit": "=>Spectral Sickle",
                "limit": "warding",
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true,
                    "tt": false,
                    "cs": false
                },
                "menu": {
                    "support": true
                },
                "stats": {
                    "ad": 10,
                    "gp10": 3,
                    "hp": 60,
                    "mp5": 50
                },
                "effects": {
                    "act": {
                        "name": "Warding",
                        "unique": true,
                        "description": "Consumes a charge to place a {{tip|Stealth Ward}} at the target location, which grants {{tip|sight}} of the surrounding area. Charges refill upon visiting the shop.",
                        "charges": "3",
                        "range": "600"
                    },
                    "pass": {
                        "name": "Tribute",
                        "unique": true,
                        "description": "Grants a charge every 10 seconds, up to 3 charges. If an allied champion is {{tt|nearby|2000 range}}, damaging abilities and attacks against champions and structures consume a charge, up to one per attack or cast. Consuming a charge grants {{g|20}}. ''Receive diminishing gold from excessive minion kills.''"
                    },
                    "pass2": {
                        "name": "Quest",
                        "unique": true,
                        "description": "Earn {{g|500}} using this item to upgrade to {{ii|Black Mist Scythe}}, increasing the {{sbc|Warding}} active to instead have 4 wards in stock."
                    }
                },
                "recipe": ["Spectral Sickle"],
                "buy": "=>Spectral Sickle",
                "sellratio": "=>Spectral Sickle"
            },
            {"name": "Health Potion",
                "id": 2003,
                "nickname": ["red"],
                "tier": 1,
                "type": ["Potion"],
                "limit": "Limited to 5 at a time.",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "health and reg": true
                },
                "effects": {
                    "consume": "[[Health regeneration|Regenerates]] {{as|4 [[health]]}} every {{fd|0.5}} seconds over 15 seconds, restoring a total of {{as|120 health}}."
                },
                "buy": 50,
                "sellratio": 0.4
            },
            {"name": "Hearthbound Axe",
                "id": 3051,
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
            {"name": "Hexdrinker",
                "id": 3155,
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
            {"name": "Hextech Alternator",
                "id": 3145,
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
            {"name": "Hextech Rocketbelt",
                "id": 3152,
                "nickname": ["protobelt", "rocket belt"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "mage": true,
                    "magic pen": true,
                    "movement": true
                },
                "stats": {
                    "ah": 15,
                    "ap": 90,
                    "hp": 250,
                    "mpenflat": 6
                },
                "effects": {
                    "act": {
                        "name": "Supersonic",
                        "unique": true,
                        "description": "{{tip|Dash}} 125 to 275 units in the target direction, though not through terrain, unleashing an arc of 7 rockets in the same direction that deal {{as|125 {{as|(+ 15% AP)}} magic damage|magic damage}}. Afterwards, gain {{as|30% '''bonus''' movement speed}} while moving towards nearby enemy champions for {{fd|1.5}} seconds.",
                        "description2": "''Supersonic'' [[Basic attack#Resets|resets]] the user's [[basic attack]] timer.",
                        "cd": "40"
                    },
                    "mythic": {
                        "mpenflat": 5
                    }
                },
                "recipe": ["Hextech Alternator", "Amplifying Tome", "Blasting Wand"],
                "buy": 3200
            },
            {"name": "Horizon Focus",
                "id": 4628,
                "nickname": ["snipe", "lock on"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "mage": true
                },
                "stats": {
                    "ap": 85,
                    "ah": 15,
                    "hp": 150
                },
                "effects": {
                    "pass": {
                        "name": "Hypershot",
                        "unique": true,
                        "description": "Dealing {{tip|ability damage}} to a champion with an [[champion ability|ability]] that is neither [[unit-targeted]] nor [[auto-targeted]] at more than {{tip|cr|icononly = true}} 700 units away or {{tip|slow|slowing}}, {{tip|immobilize|immobilizing}} or {{tip|polymorph|polymorphing}} one {{tip|standard sight|reveals}} them and increases your damage dealt to them by 10% for 6 seconds."
                    }
                },
                "recipe": ["Hextech Alternator", "Fiendish Codex"],
                "buy": 3000
            },
            {"name": "Hullbreaker",
                "id": 3181,
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "fighter": true
                },
                "stats": {
                    "ad": 50,
                    "hp": 400,
                    "hp5": 150
                },
                "effects": {
                    "pass": {
                        "name": "Boarding Party",
                        "unique": true,
                        "description": "While no allied champions are within {{tip|cr|icononly = true}} 1400 units, gain {{rd|10;20;35;43;51;59;67;75|5;10;17.5;21.5;25.5;29.5;33.5;37.5|levels=1;12 to 18 by 1|pp=true}} {{as|'''bonus''' armor}} and {{as|'''bonus''' magic resistance}} and 20% '''bonus''' {{tip|basic damage}} against [[structures]]. Nearby allied {{ui|Blue Siege Minion|link=Siege minion|siege minions}} and {{ui|Blue Super Minion|link=Super minion|super minions}} gain {{rd|10*3;20*3;35*3;43*3;51*3;59*3;67*3;75*3|5*3;10*3;17.5*3;21.5*3;25.5*3;29.5*3;33.5*3;37.5*3|levels=1;12 to 18 by 1|pp=true}} {{as|'''bonus''' armor}} and {{as|'''bonus''' magic resistance}}, 10% '''bonus''' [[size]] and deal 200% '''bonus''' damage against [[structures]]. '''Bonus''' resistances are lost instantly when an allied champion is nearby."
                    }
                },
                "recipe": ["Pickaxe", "Phage"],
                "buy": 2800
            },
            {"name": "Icathia's Curse",
                "id": 7009,
                "nickname": ["velkoz"],
                "tier": 4,
                "type": "=>Riftmaker",
                "itemlimit": "=>Riftmaker",
                "limit": "=>Riftmaker",
                "ornn": true,
                "caption": "{{sbc|{{ai|Master Craftsman|Ornn}}:}} All stats have been improved.",
                "maps": "=>Riftmaker",
                "menu": "=>Riftmaker",
                "stats": {
                    "ah": 20,
                    "ap": 90,
                    "hp": 450,
                    "omnivamp": 8
                },
                "effects": {
                    "pass": "=>Riftmaker",
                    "mythic": "=>Riftmaker"
                },
                "recipe": ["Riftmaker"],
                "buy": "=>Riftmaker"
            },
            {"name": "Immortal Shieldbow",
                "id": 6673,
                "tier": 3,
                "itemlimit": "Mythic/Lifeline",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "marksman": true,
                    "health and reg": true
                },
                "stats": {
                    "ad": 50,
                    "as": 20,
                    "crit": 20,
                    "lifesteal": 7
                },
                "effects": {
                    "pass": {
                        "name": "Lifeline",
                        "unique": true,
                        "description": "If you would take damage that would reduce you below {{as|30% of your '''maximum''' health}}, you first gain a {{tip|shield}} that absorbs {{pp|250 to 630|1;10 to 18 by 1}} damage for 3 seconds and {{as|{{pp|15 to 35|1;10 to 18 by 1}} '''bonus''' attack damage}} for 8 seconds.",
                        "cd": "90"
                    },
                    "mythic": {
                        "ad": 5,
                        "hp": 70
                    }
                },
                "recipe": ["Noonquiver", "Cloak of Agility", "Vampiric Scepter"],
                "buy": 3400
            },
            {"name": "Imperial Mandate",
                "id": 4005,
                "nickname": ["banner of command", "flag"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "support": true,
                    "movement": true
                },
                "stats": {
                    "ah": 20,
                    "ap": 40,
                    "hp": 200,
                    "mp5": 100
                },
                "effects": {
                    "pass": {
                        "name": "Coordinated Fire",
                        "unique": true,
                        "description": "Abilities that {{tip|slow}} or {{tip|immobilize}} enemy champions deal {{as|{{pp|45 to 75}} '''bonus''' magic damage}} and mark them for 4 seconds. Allied champions that damage marked enemies consume the mark to deal {{as|{{pp|90 to 150|type=ally's level}} '''bonus''' magic damage}} and grant you and the triggering ally {{as|20% '''bonus''' movement speed}} for 2 seconds.",
                        "cd": "6 (per champion, starts upon mark application)"
                    },
                    "mythic": {
                        "ap": 15
                    }
                },
                "recipe": ["Kindlegem", "Bandleglass Mirror"],
                "buy": 2500
            },
            {"name": "Infinity Edge",
                "id": 3031,
                "nickname": ["ie"],
                "tier": 2,
                "itemlimit": "Crit Modifier",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "marksman": true
                },
                "stats": {
                    "ad": 70,
                    "crit": 20
                },
                "effects": {
                    "pass": {
                        "name": "Perfection",
                        "unique": true,
                        "description": "Gain {{as|35% '''bonus''' critical strike damage}} if you have at least {{as|60% critical strike chance}}."
                    }
                },
                "recipe": ["B. F. Sword", "Pickaxe", "Cloak of Agility"],
                "buy": 3400
            },
            {"name": "Infinity Force",
                "id": 7018,
                "nickname": ["triforce", "tons of damage"],
                "tier": 4,
                "type": "=>Trinity Force",
                "itemlimit": "=>Trinity Force",
                "limit": "=>Trinity Force",
                "ornn": true,
                "caption": "{{sbc|{{ai|Master Craftsman|Ornn}}:}} All stats have been improved.",
                "maps": "=>Trinity Force",
                "menu": "=>Trinity Force",
                "stats": {
                    "ad": 45,
                    "ah": 25,
                    "as": 40,
                    "hp": 400
                },
                "effects": {
                    "pass": "=>Trinity Force",
                    "pass2": "=>Trinity Force",
                    "mythic": "=>Trinity Force"
                },
                "recipe": ["Trinity Force"],
                "buy": "=>Trinity Force"
            },
            {"name": "Ionian Boots of Lucidity",
                "id": 3158,
                "tier": 2,
                "type": ["Boots"],
                "caption": "This item is dedicated in honor of [[Ionia]]'s victory over [[Noxus]] in the [[Institute of War|Rematch]] for the Southern Provinces on 10 December, 20 CLE.",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "stats": {
                    "ah": 20,
                    "msflat": 45,
                    "spec": "+12 [[ability haste#Increasing summoner spell haste|summoner spell haste]]"
                },
                "recipe": ["Boots"],
                "buy": 950
            },
            {"name": "Ironspike Whip",
                "id": 6029,
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
            {"name": "Kindlegem",
                "id": 3067,
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
            {"name": "Kircheis Shard",
                "id": 2015,
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
            {"name": "Knight's Vow",
                "id": 3109,
                "nickname": ["kv"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "tank": true,
                    "support": true,
                    "movement": true
                },
                "stats": {
                    "ah": 20,
                    "hp": 400,
                    "hp5": 200
                },
                "effects": {
                    "act": {
                        "name": "Pledge",
                        "unique": true,
                        "description": "Designate an allied champion as ''Worthy'', forming a {{tip|tether}} between you and them. Champions can only be designated as ''Worthy'' by one '''Knight's Vow''' at a time.",
                        "cd": "60"
                    },
                    "pass": {
                        "name": "Sacrifice",
                        "unique": true,
                        "description": "While your ''Worthy'' ally is nearby and you are above {{as|30% of your '''maximum''' health}}, redirect 10% of the {{tt|post-mitigation|Damage calculated after modifiers}} {{as|physical|physical damage}} and {{as|magic|magic damage}} damage they take to you as {{as|true damage}} and {{tip|heal}} for 7% of the damage dealt by your ''Worthy'' ally to champions. If they are below {{as|30% '''maximum''' health}}, the damage redirection is increased to 20%."
                    }
                },
                "recipe": ["Crystalline Bracer", "Rejuvenation Bead", "Kindlegem"],
                "buy": 2300
            },
            {"name": "Kraken Slayer",
                "id": 6672,
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "marksman": true,
                    "armor pen": true
                },
                "stats": {
                    "ad": 65,
                    "as": 25,
                    "crit": 20
                },
                "effects": {
                    "pass": {
                        "name": "Bring It Down",
                        "unique": true,
                        "description": "Basic attacks [[on-attack]] grant a stack for 3 seconds, up to 2 stacks. At 2 stacks, the next basic attack consumes all stacks on-attack to deal {{as|50 {{as|(+ 40% '''bonus''' AD)}} '''bonus''' true damage|true damage}} [[on-hit]]."
                    },
                    "mythic": {
                        "as": 10
                    }
                },
                "recipe": ["Noonquiver", "Cloak of Agility", "Pickaxe"],
                "buy": 3400
            },
            {"name": "Last Whisper",
                "id": 3035,
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
            {"name": "Leeching Leer",
                "id": 4635,
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
            {"name": "Liandry's Anguish",
                "id": 6653,
                "nickname": ["last shadow", "ls"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "mage": true,
                    "magic pen": true
                },
                "stats": {
                    "ah": 20,
                    "ap": 80,
                    "mana": 600
                },
                "effects": {
                    "pass": {
                        "name": "Torment",
                        "unique": true,
                        "description": "Dealing {{tip|ability damage}} burns enemies, causing them to take{{ft|{{as|50 {{as|(+ 6% AP)}} {{as|(+ 4% target's '''maximum''' health)}} '''total''' magic damage|magic damage}} over 4 seconds, capped at 400 against monsters.|{{as|{{ap|50*0.125}} {{as|(+ {{ap|6*0.125}}% AP)}} {{as|(+ {{ap|4*0.125}}% target's '''maximum''' health)}} magic damage|magic damage}} every {{fd|0.5}} seconds over 4 seconds, capped at 50 against monsters.}}"
                    },
                    "pass2": {
                        "name": "Agony",
                        "unique": true,
                        "description": "Deal {{pp|type=target's '''bonus''' health|color=health|key=%|0 to 12 for 11|0 to 1250|formula=1.2% per 125 '''bonus''' health}} {{as|'''bonus''' magic damage}} against enemy champions."
                    },
                    "mythic": {
                        "ah": 5
                    }
                },
                "recipe": ["Lost Chapter", "Fiendish Codex"],
                "buy": 3200
            },
            {"name": "Liandry's Lament",
                "id": 7012,
                "nickname": ["last shadow", "ls"],
                "tier": 4,
                "type": "=>Liandry's Anguish",
                "itemlimit": "=>Liandry's Anguish",
                "limit": "=>Liandry's Anguish",
                "ornn": true,
                "caption": "{{sbc|{{ai|Master Craftsman|Ornn}}:}} All stats have been improved.",
                "maps": "=>Liandry's Anguish",
                "menu": "=>Liandry's Anguish",
                "stats": {
                    "ah": 25,
                    "ap": 110,
                    "mana": 800
                },
                "effects": {
                    "pass": "=>Liandry's Anguish",
                    "pass2": "=>Liandry's Anguish",
                    "mythic": "=>Liandry's Anguish"
                },
                "recipe": ["Liandry's Anguish"],
                "buy": "=>Liandry's Anguish",
                "sell": "=>Liandry's Anguish"
            },
            {"name": "Lich Bane",
                "id": 3100,
                "tags": ["HasOnHit", "OnHitAppliesLifeSteal"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "mage": true
                },
                "stats": {
                    "ah": 15,
                    "ap": 75,
                    "ms": 8
                },
                "effects": {
                    "pass": {
                        "name": "Spellblade",
                        "unique": true,
                        "description": "After using an [[Champion ability|ability]], your next basic attack within 10 seconds deals {{as|75% '''base''' AD}} {{as|(+ 50% AP)}} {{as|'''bonus''' magic damage}} [[on-hit]].",
                        "cd": "{{fd|1.5}} (begins after using the empowered attack)"
                    }
                },
                "recipe": ["Sheen", "Aether Wisp", "Fiendish Codex"],
                "buy": 3000
            },
            {"name": "Locket of the Iron Solari",
                "id": 3190,
                "tier": 3,
                "limit": "This effect is reduced by 75% if the target has been affected by another '''Locket of the Iron Solari''' in the last 20 seconds.",
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
                    "ah": 20,
                    "armor": 30,
                    "hp": 200,
                    "mr": 30
                },
                "effects": {
                    "act": {
                        "name": "Devotion",
                        "unique": true,
                        "description": "Grant allied champions within {{tip|cr|icononly=true}} 850 radius a {{tip|shield}} for {{pp|180 to 330|type=target's level}}, decaying over {{fd|2.5}} seconds.",
                        "cd": "90"
                    },
                    "pass": {
                        "name": "Consecrate",
                        "unique": true,
                        "description": "Grant allied champions within {{tt|850 radius|center to edge}} {{as|3 '''bonus''' armor}} and {{as|3 '''bonus''' magic resistance}}."
                    },
                    "mythic": "2 '''bonus''' resistances for this item's passive effect, ''Consecrate''"
                },
                "recipe": ["Kindlegem", "Aegis of the Legion"],
                "buy": 2500
            },
            {"name": "Long Sword",
                "id": 1036,
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
            {"name": "Lord Dominik's Regards",
                "id": 3036,
                "nickname": ["lw", "ldr", "doms"],
                "tier": 3,
                "itemlimit": "Last Whisper",
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
                    "armpen": 30,
                    "crit": 20
                },
                "effects": {
                    "pass": {
                        "name": "Giant Slayer",
                        "unique": true,
                        "description": "Deal {{pp|type='''maximum''' health difference|color=health|key=%|0 to 15 for 11|0 to 2000|formula=0.75% per 100 greater '''maximum''' health}} {{as|'''bonus''' physical damage|physical damage}} against enemy champions with greater {{as|'''maximum''' health}} than you."
                    }
                },
                "recipe": ["Last Whisper", "Cloak of Agility"],
                "buy": 3000
            },
            {"name": "Lost Chapter",
                "id": 3802,
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
            {"name": "Luden's Tempest",
                "id": 6655,
                "nickname": ["boomstick"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "mage": true
                },
                "stats": {
                    "ah": 20,
                    "ap": 80,
                    "mana": 600,
                    "mpenflat": 6
                },
                "effects": {
                    "pass": {
                        "name": "Echo",
                        "unique": true,
                        "description": "Dealing {{tip|ability damage}} to an enemy deals {{as|100 {{as|(+ 10% AP)}} '''additional''' magic damage|magic damage}} to them and launches orbs at up to 3 other enemies within {{tip|cr|icononly = true}} 600 units around them, impacting after {{rutngt|0.5}} to deal the same damage to each, and grants you {{as|15% '''bonus''' movement speed}} for 2 seconds. Dealing ability damage against champions reduces the cooldown of ''Echo'' by {{fd|0.5}} seconds per champion, up to a '''maximum''' of 3 seconds per cast.",
                        "cd": "10"
                    },
                    "mythic": {
                        "mpenflat": 5
                    }
                },
                "recipe": ["Lost Chapter", "Blasting Wand"],
                "buy": 3200
            },
            {"name": "Manamune",
                "id": 3004,
                "tags": ["HasOnHit"],
                "tier": 3,
                "type": "=>Muramana",
                "itemlimit": "Mana Charge",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "fighter": true,
                    "marksman": true,
                    "assassin": true,
                    "onhit effects": true
                },
                "stats": {
                    "ad": 35,
                    "ah": 15,
                    "mana": 500
                },
                "effects": {
                    "pass": {
                        "name": "Awe",
                        "unique": true,
                        "description": "Grants {{as|'''bonus''' [[attack damage]]}} equal to {{as|{{fd|2.5}}% '''maximum''' mana}}."
                    },
                    "pass2": {
                        "name": "Mana Charge",
                        "unique": true,
                        "description": "Grants a charge every 8 seconds, up to 4 charges. Consumes a charge [[on-hit]] and whenever affecting an enemy or ally with an ability to grant {{as|3 '''bonus''' mana}}, increased to {{as|6|mana}} for champion targets, up to a '''maximum''' of {{as|360 '''bonus''' mana}}."
                    },
                    "pass3": {
                        "description": "Transforms into {{ii|Muramana}} at {{as|+360 mana}}."
                    }
                },
                "recipe": ["Tear of the Goddess", "Caulfield's Warhammer", "Long Sword"],
                "buy": 2900
            },
            {"name": "Maw of Malmortius",
                "id": 3156,
                "tier": 3,
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
                    "ad": 55,
                    "ah": 20,
                    "mr": 50
                },
                "effects": {
                    "pass": {
                        "name": "Lifeline",
                        "unique": true,
                        "description": "If you would take {{as|magic damage}} that would reduce you below {{as|30% of your '''maximum''' health}}, you first gain a {{tip|shield}} that absorbs {{rd|200|150}} {{as|(+ {{rd|225%|{{fd|168.75}}%}} '''bonus''' AD)}} {{as|magic damage}} for 5 seconds.",
                        "cd": "75"
                    },
                    "pass2": {
                        "unique": true,
                        "description": "Triggering Lifeline also grants 10% omnivamp for 5 seconds. After 2 seconds into the duration, taking or dealing damage refreshes this effect to 3 seconds."
                    }
                },
                "recipe": ["Hexdrinker", "Caulfield's Warhammer"],
                "buy": 2900
            },
            {"name": "Mejai's Soulstealer",
                "id": 3041,
                "nickname": ["book"],
                "tier": 2,
                "itemlimit": "Glory",
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true
                },
                "menu": {
                    "mage": true,
                    "movement": true
                },
                "stats": {
                    "ap": 20,
                    "hp": 100
                },
                "effects": {
                    "pass": {
                        "name": "Glory",
                        "unique": true,
                        "description": "Gain 4 stacks for each champion [[kill]] and 2 stacks for each [[assist]], up to a '''maximum''' of 25 stacks. Lose 10 stacks on [[death]]. Stacks are preserved from {{ii|Dark Seal}}."
                    },
                    "pass2": {
                        "name": "Dread",
                        "unique": true,
                        "description": "Gain {{as|5 ability power}} for each stack of ''Glory'', up to {{as|125|ap}} at '''maximum''' stacks, and {{as|10% '''bonus''' movement speed}} if you have at least 10 stacks."
                    }
                },
                "recipe": ["Dark Seal"],
                "buy": 1600
            },
            {"name": "Mercurial Scimitar",
                "id": 3139,
                "nickname": ["merc scim"],
                "tier": 3,
                "itemlimit": "Quicksilver",
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
                    "ad": 40,
                    "crit": 20,
                    "mr": 30
                },
                "effects": {
                    "act": {
                        "name": "Quicksilver",
                        "unique": true,
                        "description": "Removes all {{tip|crowd control}} debuffs (except {{tip|Airborne}}) from your champion and grants {{as|50% '''bonus total''' movement speed}} and {{tip|ghosted|ghosting}} for 1 second.",
                        "cd": "90"
                    }
                },
                "recipe": ["Quicksilver Sash", "Cloak of Agility", "Pickaxe"],
                "buy": 3000
            },
            {"name": "Mercury's Treads",
                "id": 3111,
                "nickname": ["boots", "mercs"],
                "tier": 2,
                "type": ["Boots"],
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "stats": {
                    "mr": 25,
                    "msflat": 45,
                    "spec": "+30% [[tenacity]]"
                },
                "recipe": ["Boots", "Null-Magic Mantle"],
                "buy": 1100
            },
            {"name": "Mikael's Blessing",
                "id": 3222,
                "nickname": ["crucible", "michael"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "support": true
                },
                "stats": {
                    "ah": 15,
                    "hsp": 16,
                    "mp5": 100,
                    "mr": 50
                },
                "effects": {
                    "act": {
                        "name": "Purify",
                        "unique": true,
                        "description": "Remove all {{tip|crowd control}} debuffs (except {{tip|Airborne}}, {{tip|Blind}}, {{tip|Disarm}}, {{tip|Ground}}, {{tip|Nearsight}}, and {{tip|Suppression}}) from yourself or an allied champion and {{tip|heal}} the target for {{pp|100 to 180|type=target's level}}.",
                        "cd": "120"
                    }
                },
                "recipe": ["Forbidden Idol", "Negatron Cloak"],
                "buy": 2300
            },
            {"name": "Minion Dematerializer",
                "id": 2403,
                "nickname": ["Sojourner", "Hexplosive"],
                "tier": 1,
                "type": ["Distributed"],
                "limit": "Cannot be used for the first 180 seconds.",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "effects": {
                    "consume": "After a 1 second delay, {{tip|execute|executes}} the target enemy {{tip|minion}} ({{tip|er|icononly = true}} 550 range)."
                }
            },
            {"name": "Mobility Boots",
                "id": 3117,
                "nickname": ["boots", "mobies", "mobis", "zoomers"],
                "tier": 2,
                "type": ["Boots"],
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "stats": {
                    "msflat": 115
                },
                "effects": {
                    "pass": {
                        "description": "Reduces {{as|movement speed}} by {{as|90}} for 5 seconds while you are in [[combat status|in-combat]]. This duration can refresh while staying in-combat."
                    }
                },
                "recipe": ["Boots"],
                "buy": 1000
            },
            {"name": "Moonstone Renewer",
                "id": 6617,
                "nickname": ["yuumi"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "support": true
                },
                "stats": {
                    "ah": 20,
                    "ap": 40,
                    "hp": 200,
                    "mp5": 100
                },
                "effects": {
                    "pass": {
                        "name": "Starlit Grace",
                        "unique": true,
                        "description": "When affecting champions with attacks or abilities in combat, {{tip|heal}} the nearby allied champion (''excluding yourself'') with the most {{as|'''missing''' health}} for 60.",
                        "description2": "Each second spent in combat with champions grants 5% heal and shield power, stacking up to 4 times for '''maximum''' of 20%.",
                        "cd": "2"
                    },
                    "mythic": "8 heal for this item's passive effect, ''Starlit Grace''"
                },
                "recipe": ["Kindlegem", "Bandleglass Mirror"],
                "buy": 2500
            },
            {"name": "Morellonomicon",
                "id": 3165,
                "nickname": ["nmst", "grievous", "last shadow", "book", "forbidden book"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "mage": true
                },
                "stats": {
                    "ap": 90,
                    "hp": 300
                },
                "effects": {
                    "pass": {
                        "name": "Affliction",
                        "unique": true,
                        "description": "Dealing {{as|magic damage}} to enemy champions inflicts them with 25% {{tip|Grievous Wounds}} for 3 seconds, increased to 40% if the target is left with less than {{as|50% of their '''maximum''' health}}."
                    }
                },
                "recipe": ["Blasting Wand", "Oblivion Orb", "Ruby Crystal"],
                "buy": 2500
            },
            {"name": "Mortal Reminder",
                "id": 3033,
                "nickname": ["lw", "grievous"],
                "tier": 3,
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
                    "ad": 25,
                    "as": 25,
                    "crit": 20,
                    "ms": 7
                },
                "effects": {
                    "pass": {
                        "name": "Sepsis",
                        "unique": true,
                        "description": "Dealing {{as|physical damage}} to enemy champions inflicts them with 25% {{tip|Grievous Wounds}} for 3 seconds. Basic attacking a champion 2 times while they remain affected by {{tip|Grievous Wounds}} increases their effect to 40%, and dealing {{as|physical damage}} to a target affected by 40% {{tip|Grievous Wounds}} will refresh the empowered effect."
                    }
                },
                "recipe": ["Executioner's Calling", "Zeal"],
                "buy": 2500
            },
            {"name": "Muramana",
                "id": 3042,
                "tags": ["HasOnHit", "OnHitAppliesLifeSteal"],
                "tier": 4,
                "itemlimit": "=>Manamune",
                "maps": "=>Manamune",
                "menu": "=>Manamune",
                "stats": {
                    "ad": "=>Manamune",
                    "ah": "=>Manamune",
                    "mana": 860
                },
                "effects": {
                    "pass": "=>Manamune",
                    "pass2": {
                        "name": "Shock",
                        "unique": true,
                        "description": "Basic attacks [[on-hit]] against champions deal {{as|{{as|{{fd|1.5}}% '''maximum''' mana}} '''bonus''' physical damage}}. Dealing {{tip|ability damage}} to champions deals {{as|{{as|{{rd|{{fd|3.5}}%|{{fd|2.7}}%}} '''maximum''' mana}} {{as|(+ 6% AD)}} '''bonus''' physical damage|physical damage}}. Can only be triggered on the same target once every {{fd|6.5}} seconds from the same attack or cast."
                    }
                },
                "recipe": ["Manamune"],
                "buy": "=>Manamune"
            },
            {"name": "Nashor's Tooth",
                "id": 3115,
                "nickname": ["nashors"],
                "tags": ["HasOnHit", "OnHitAppliesLifeSteal"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "mage": true,
                    "onhit effects": true
                },
                "stats": {
                    "ap": 100,
                    "as": 50
                },
                "effects": {
                    "pass": {
                        "name": "Icathian Bite",
                        "unique": true,
                        "description": "Basic attacks deal {{as|15 {{as|(+ 20% AP)}} '''bonus''' magic damage|magic damage}} [[on-hit]]."
                    }
                },
                "recipe": ["Recurve Bow", "Blasting Wand", "Amplifying Tome"],
                "buy": 3000
            },
            {"name": "Navori Quickblades",
                "id": 6675,
                "nickname": ["crit shojin"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "marksman": true
                },
                "stats": {
                    "ad": 60,
                    "ah": 30,
                    "crit": 20
                },
                "effects": {
                    "pass": {
                        "name": "Deft Strikes",
                        "unique": true,
                        "description": "Basic attacks [[on-attack]] that {{tip|critically strike}} reduce your basic abilities' cooldowns by 20% of their remaining cooldowns."
                    }
                },
                "recipe": ["Caulfield's Warhammer", "Pickaxe", "Cloak of Agility"],
                "buy": 3400
            },
            {"name": "Needlessly Large Rod",
                "id": 1058,
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
            {"name": "Negatron Cloak",
                "id": 1057,
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
            {"name": "Night Harvester",
                "id": 4636,
                "nickname": ["dark", "scythe"],
                "tier": 3,
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
                    "ah": 25,
                    "ap": 90,
                    "hp": 300
                },
                "effects": {
                    "pass": {
                        "name": "Soulrend",
                        "unique": true,
                        "description": "Damaging an enemy champion deals {{as|125 {{as|(+ 15% AP)}} '''bonus''' magic damage|magic damage}} and grants you {{as|25% '''bonus''' movement speed}} for {{fd|1.5}} seconds, with the duration extending on subsequent triggers.",
                        "cd": "30 (per champion)"
                    },
                    "mythic": {
                        "ah": 5
                    }
                },
                "recipe": ["Hextech Alternator", "Fiendish Codex", "Amplifying Tome"],
                "buy": 3200
            },
            {"name": "Noonquiver",
                "id": 6670,
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
            {"name": "Null-Magic Mantle",
                "id": 1033,
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
            {"name": "Oblivion Orb",
                "id": 3916,
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
            {"name": "Obsidian Edge",
                "id": 1040,
                "nickname": ["jungle"],
                "tier": 1,
                "req": "Can only be purchased if you have [[Ultimate Spellbook#Attack-Smite|Placeholder and Attack-Smite]].",
                "itemlimit": "Jungle&Support",
                "maps": {
                    "sr": false,
                    "ha": false,
                    "nb": false,
                    "tt": false,
                    "cs": false
                },
                "menu": {
                    "fighter": true,
                    "marksman": true,
                    "assassin": true,
                    "mage": true,
                    "tank": true,
                    "lifesteal vamp": true
                },
                "stats": {
                    "spec": "+8% [[omnivamp]] against [[monster]]s"
                },
                "effects": {
                    "pass": {
                        "name": "Sear",
                        "unique": true,
                        "description": "Damaging monsters burns them for {{as|60 {{as|(+ 30% AP)}} {{as|(+ 5% '''bonus''' AD)}} {{as|(+ 2% '''bonus''' health)}} magic damage|magic damage}} over 5 seconds. Omnivamp against monsters provided by this item is not reduced by [[area of effect]] damage."
                    },
                    "pass2": {
                        "name": "Auto Path",
                        "unique": true,
                        "description": "Triggering ''Attack-Smite'' 5 times '''consumes this item''', granting all of the item's effects permanently as well as increasing the threshold and damage to 900."
                    },
                    "pass3": {
                        "name": "Huntsman",
                        "unique": true,
                        "description": "Killing large monsters grants {{as|60 '''bonus''' experience}}. The first large monster killed grants an additional {{as|150 '''bonus''' experience}}, for a total of {{as|210|experience}}. If you are at least 2 levels below the average level of the game, large monster kills grant {{as|50 '''bonus''' experience}} per level below the average level of all players in the game. If your gold from minions is greater than 40% your gold from monsters, a lane minion will grant 13 less gold and 50% reduced experience. ''This penalty is removed at 20 minutes.''"
                    },
                    "pass4": {
                        "name": "Recoup",
                        "unique": true,
                        "description": "Regenerate up to {{as|{{pp|8 to 18}} mana}} per second while in the jungle or river, based on {{as|'''missing''' mana}}."
                    }
                },
                "buy": 350
            },
            {"name": "Ohmwrecker (Turret Item)",
                "formatname": "Ohmwrecker",
                "tier": 1,
                "type": ["Turret"],
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "stats": {
                    "armpen": 30
                },
                "effects": {
                    "pass": {
                        "name": "Dodge Piercing",
                        "unique": true,
                        "description": "Turret attacks cannot be dodged."
                    },
                    "pass2": {
                        "name": "Warming Up",
                        "unique": true,
                        "description": "Turrets deal 40% increased damage each time their attacks strike a champion, up to a 120% increase."
                    }
                }
            },
            {"name": "Oracle Lens",
                "id": 3364,
                "nickname": ["red", "totem", "trinket", "sweeper", "spinny"],
                "tier": 1,
                "type": ["Basic Trinket"],
                "limit": "trinket",
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true
                },
                "effects": {
                    "act": {
                        "description": "Summons a {{tip|Sweeper Drone}} that escorts you for the next 10 seconds, detecting nearby enemies that are not {{tip|sight|visible}}.",
                        "cd": "{{pp|90 to 60|type=average of all champion levels}}",
                        "range": "750"
                    }
                },
                "buy": 0
            },
            {"name": "Overcharged",
                "id": 1507,
                "tier": 1,
                "type": ["Turret"],
                "exclusive": "Clash",
                "maps": {
                    "sr": true
                },
                "effects": {
                    "pass": {
                        "unique": true,
                        "description": "At 55 minutes, this turret begins to malfunction, losing {{as|armor}} and {{as|magic resist}}. After 5 minutes, it will start breaking down, losing an increasing percentage of its {{as|{{sti|health|'''maximum''' health}}}} every 30 seconds."
                    }
                }
            },
            {"name": "Pauldrons of Whiterock",
                "id": 3857,
                "nickname": ["Support", "Economy", "Gold", "Sightstone", "Ward"],
                "tier": 3,
                "itemlimit": "=>Steel Shoulderguards",
                "limit": "warding",
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true,
                    "tt": false,
                    "cs": false
                },
                "menu": {
                    "tank": true,
                    "support": true
                },
                "stats": {
                    "ad": 15,
                    "gp10": 3,
                    "hp": 250,
                    "hp5": 100
                },
                "effects": {
                    "act": {
                        "name": "Warding",
                        "unique": true,
                        "description": "Consumes a charge to place a {{tip|Stealth Ward}} at the target location, which grants {{tip|sight}} of the surrounding area. Charges refill upon visiting the shop.",
                        "charges": "4",
                        "range": "600"
                    },
                    "pass": {
                        "unique": true,
                        "description": "Receives diminishing gold from excessive minion kills."
                    }
                },
                "recipe": ["Runesteel Spaulders"],
                "buy": "=>Steel Shoulderguards",
                "sellratio": "=>Steel Shoulderguards"
            },
            {"name": "Perfectly Timed Stopwatch",
                "id": 2423,
                "nickname": ["zhg", "zonyas", "zhonyas"],
                "tier": 2,
                "type": ["Distributed", "Basic"],
                "limit": "Transforms into {{ii|Broken Stopwatch}} when activated, which cannot be activated again. Once broken, all future purchases are also broken. Upgrades cost {{g|400}} more than the {{ii|Stopwatch|real deal}}.",
                "maps": "=>Stopwatch",
                "effects": {
                    "act": "=>Stopwatch"
                },
                "recipe": ["Commencing Stopwatch"],
                "builds": "=>Stopwatch"
            },
            {"name": "Phage",
                "id": 3044,
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
            {"name": "Phantom Dancer",
                "id": 3046,
                "nickname": ["pd"],
                "tier": 3,
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
                    "ad": 20,
                    "as": 25,
                    "crit": 20,
                    "ms": 7
                },
                "effects": {
                    "pass": {
                        "name": "Spectral Waltz",
                        "unique": true,
                        "description": "Basic attacks [[on-attack]] grant {{tip|ghosting}}, {{as|7% '''bonus''' movement speed}}, and a stack of ''Spectral Waltz'' for 3 seconds, up to 4 stacks. While at 4 stacks, gain {{as|30% '''bonus''' attack speed}}."
                    }
                },
                "recipe": ["Long Sword", "Zeal", "Long Sword"],
                "buy": 2600
            },
            {"name": "Phreakish Gusto",
                "id": 1510,
                "tier": 1,
                "type": ["Minion"],
                "caption": "Maybe go a little less hard.",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "effects": {
                    "pass": {
                        "unique": true,
                        "description": "{{tip|Turrets}} basic attacks are modified to deal {{as|70% of this minion's '''maximum''' health}} as {{tt|pre-mitigation damage|Damage calculated before modifiers}}."
                    }
                }
            },
            {"name": "Pickaxe",
                "id": 1037,
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
            {"name": "Plated Steelcaps",
                "id": 3047,
                "nickname": ["boots", "ninja tabi"],
                "tier": 2,
                "type": ["Boots"],
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "stats": {
                    "armor": 20,
                    "msflat": 45
                },
                "effects": {
                    "pass": {
                        "unique": true,
                        "description": "Reduces incoming [[damage]] from all [[basic attack]]s by 12% (''excluding [[turret]] attacks'')."
                    }
                },
                "recipe": ["Boots", "Cloth Armor"],
                "buy": 1100
            },
            {"name": "Poro-Snax",
                "id": 2052,
                "tier": 1,
                "type": ["Distributed"],
                "limit": "Limited to 2 at a time.",
                "caption": "This savory blend of free-range, grass-fed Avarosan game hens and organic, non-ZMO Freljordian herbs contains the essential nutrients necessary to keep your Poro purring with pleasure.<br /><br />All proceeds will be donated towards fighting Noxian animal cruelty.",
                "maps": {
                    "sr": false,
                    "ha": true,
                    "nb": false,
                    "tt": false,
                    "cs": false
                },
                "effects": {
                    "consume": "Serves a scrumptious scoop to a nearby Poro, causing it to grow in [[size]]."
                }
            },
            {"name": "Prowler's Claw",
                "id": 6693,
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "assassin": true,
                    "movement": true
                },
                "stats": {
                    "ad": 60,
                    "ah": 20,
                    "lethality": 18
                },
                "effects": {
                    "act": {
                        "name": "Sandswipe",
                        "unique": true,
                        "description": "{{tip|Dash}} in a line through the target enemy champion's location, and upon completing the dash, deal {{as|75 {{as|(+ 30% '''bonus''' AD)}} physical damage|physical damage}} to the target and increase your damage dealt to them by 15% for the next 3 seconds.",
                        "cd": "90",
                        "range": "500"
                    },
                    "mythic": {
                        "lethality": 5,
                        "msflat": 5
                    }
                },
                "recipe": ["Serrated Dirk", "Caulfield's Warhammer"],
                "buy": 3100
            },
            {"name": "Quicksilver Sash",
                "id": 3140,
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
            {"name": "Rabadon's Deathcap",
                "id": 3089,
                "nickname": ["banksys", "dc", "dcap", "hat"],
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
                    "ap": 120
                },
                "effects": {
                    "pass": {
                        "name": "Magical Opus",
                        "unique": true,
                        "description": "Increase your {{as|ability power}} by 35%."
                    }
                },
                "recipe": ["Needlessly Large Rod", "Needlessly Large Rod"],
                "buy": 3600
            },
            {"name": "Rageknife",
                "id": 6677,
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
            {"name": "Raise Morale",
                "id": 3903,
                "tier": 1,
                "req": "Requires 500 {{ai|Silver Serpents|Gangplank}}.",
                "champion": ["Gangplank"],
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "effects": {
                    "pass": {
                        "name": "Raise Morale",
                        "unique": true,
                        "description": "{{ci|Gangplank}} and his allies within {{ai|Cannon Barrage|Gangplank}} gain {{as|30% '''bonus''' movement speed}}, which persists for 2 seconds after leaving the area."
                    }
                }
            },
            {"name": "Randuin's Omen",
                "id": 3143,
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "tank": true
                },
                "stats": {
                    "ah": 10,
                    "armor": 90,
                    "hp": 250
                },
                "effects": {
                    "act": {
                        "name": "Humility",
                        "unique": true,
                        "description": "Unleash a shockwave around you that {{tip|slow|slows}} nearby enemies by 99% for {{fd|0.25}} seconds and reduces their {{as|attack damage by 10%}} and {{as|critical strike damage by 20%}} for 4 seconds.",
                        "cd": "60"
                    },
                    "pass": {
                        "name": "Rock Solid",
                        "unique": true,
                        "description": "Every incoming instance of {{tt|post-mitigation|Damage calculated after modifiers}} {{tip|basic damage}} is [[Damage modifier|reduced]] by 5 {{as|(+ {{fd|3.5}} per 1000 '''maximum''' health)}}, '''maximum''' 40% reduction each."
                    }
                },
                "recipe": ["Warden's Mail", "Cloth Armor", "Kindlegem"],
                "buy": 2700
            },
            {"name": "Rapid Firecannon",
                "id": 3094,
                "nickname": ["canon", "rapidfire", "rfc"],
                "tags": ["HasOnHit", "HasOnAttack"],
                "tier": 3,
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
                    "as": 35,
                    "crit": 20,
                    "ms": 7
                },
                "effects": {
                    "pass": {
                        "name": "Energized",
                        "unique": true,
                        "description": "Moving and basic attacking generates ''Energize'' stacks, up to 100."
                    },
                    "pass2": {
                        "name": "Sharpshooter",
                        "unique": true,
                        "description": "When fully {{tip|Energized}}, your next basic attack deals {{as|120 '''bonus''' magic damage}} [[on-hit]]. Energized attacks gain 35% '''bonus''' [[range]], capped at 150."
                    }
                },
                "recipe": ["Zeal", "Kircheis Shard"],
                "buy": 2500
            },
            {"name": "Ravenous Hydra",
                "id": 3074,
                "nickname": ["rav hydra"],
                "tier": 3,
                "itemlimit": "Hydra",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "fighter": true,
                    "assassin": true
                },
                "stats": {
                    "ad": 70,
                    "ah": 20,
                    "omnivamp": 10
                },
                "effects": {
                    "pass": {
                        "name": "Cleave",
                        "unique": true,
                        "description": "Damaging basic attacks and {{tip|ability damage}} from [[champion ability|abilities]] deal {{as|{{pp|type=distance|changedisplay=true|key=%|60 to 12 for 5|0 to 350}} AD}} {{as|physical damage}} to other enemies near the target. Can only hit each target once per attack or ability, and may only trigger once every 10 seconds from the same cast."
                    }
                },
                "recipe": ["Tiamat", "Vampiric Scepter", "Caulfield's Warhammer"],
                "buy": 3300
            },
            {"name": "Recurve Bow",
                "id": 1043,
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
            {"name": "Redemption",
                "id": 3107,
                "tier": 3,
                "limit": "This effect is reduced by 50% if the target has been affected by another '''Redemption''' in the last 12 seconds.",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "support": true
                },
                "stats": {
                    "ah": 15,
                    "hp": 200,
                    "hsp": 16,
                    "mp5": 100
                },
                "effects": {
                    "act": {
                        "name": "Intervention",
                        "unique": true,
                        "description": "Call upon a beam of light to strike upon the target location after {{fd|2.5}} seconds, granting {{tip|sight}} of the area for the duration. Allies within the area are {{tip|heal|healed}} for {{pp|180 to 340|type=target's level}}, while enemy champions within take {{as|10% of target's '''maximum''' health}} as {{as|true damage}}. '''Can be used while [[dead]].'''",
                        "cd": "90",
                        "range": "5500"
                    }
                },
                "recipe": ["Kindlegem", "Forbidden Idol"],
                "buy": 2300
            },
            {"name": "Refillable Potion",
                "id": 2031,
                "nickname": ["Green Potion"],
                "tier": 1,
                "type": ["Potion"],
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "health and reg": true
                },
                "effects": {
                    "consume": "Consumes a charge to [[Health regeneration|regenerate]] {{as|{{fd|4.166}} [[health]]}} every {{fd|0.5}} seconds over 12 seconds, restoring a total of {{as|100 health}}.",
                    "pass": {
                        "unique": true,
                        "description": "Holds charges that refill upon visiting the [[shop]].",
                        "charges": "2"
                    }
                },
                "buy": 150,
                "sellratio": 0.4
            },
            {"name": "Reinforced Armor (Turret Item)",
                "id": 1502,
                "formatname": "Reinforced Armor",
                "tier": 1,
                "type": ["Turret"],
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "effects": {
                    "pass": {
                        "unique": true,
                        "description": "While no enemy {{tip|minions}} or {{ui|Rift Herald|Summoned Rift Herald}} are within range, gain {{fd|66.67%}} damage reduction and immunity to true damage."
                    }
                }
            },
            {"name": "Rejuvenation Bead",
                "id": 1006,
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
            {"name": "Relic Shield",
                "id": 3858,
                "nickname": ["Support", "Gold", "Economy"],
                "tier": 1,
                "type": ["Starter"],
                "itemlimit": "Jungle&Support",
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true,
                    "tt": false,
                    "cs": false
                },
                "menu": {
                    "tank": true,
                    "support": true
                },
                "stats": {
                    "ap": 5,
                    "gp10": 2,
                    "hp": 30,
                    "hp5": 25
                },
                "effects": {
                    "pass": {
                        "name": "Spoils of War",
                        "unique": true,
                        "description": "Grants a charge every 35 seconds, up to 3 charges. Basic attacks can consume a charge to execute minions. Basic attacks {{tip|execute}} minions {{as|'''below''' {{rd|50%|30%}} of their '''maximum''' health}}. Killing a minion by any means with a charge grants you and the nearest allied champion kill {{g|gold}}. These effects require an allied champion to be {{tt|nearby|1050 range}}. ''Receive diminishing gold from excessive minion kills.''"
                    },
                    "pass2": {
                        "name": "Quest",
                        "unique": true,
                        "description": "Earn {{g|500}} using this item to upgrade to {{ii|Targon's Buckler}}, gaining the {{sbc|Warding}} active with 3 wards in stock."
                    }
                },
                "buy": 400,
                "sellratio": 0.4
            },
            {"name": "Reliquary of the Golden Dawn",
                "id": 7019,
                "tier": 4,
                "type": "=>Locket of the Iron Solari",
                "itemlimit": "=>Locket of the Iron Solari",
                "limit": "=>Locket of the Iron Solari",
                "ornn": true,
                "caption": "{{sbc|{{ai|Master Craftsman|Ornn}}:}} All stats have been improved.",
                "maps": "=>Locket of the Iron Solari",
                "menu": "=>Locket of the Iron Solari",
                "stats": {
                    "ah": 25,
                    "armor": 40,
                    "hp": 400,
                    "mr": 40
                },
                "effects": {
                    "act": "=>Locket of the Iron Solari",
                    "pass": "=>Locket of the Iron Solari",
                    "mythic": "=>Locket of the Iron Solari"
                },
                "recipe": ["Locket of the Iron Solari"],
                "buy": "=>Locket of the Iron Solari"
            },
            {"name": "Riftmaker",
                "id": 4633,
                "nickname": ["velkoz"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "mage": true,
                    "magic pen": true
                },
                "stats": {
                    "ah": 15,
                    "ap": 70,
                    "hp": 300,
                    "omnivamp": 7
                },
                "effects": {
                    "pass": {
                        "name": "Void Corruption",
                        "unique": true,
                        "description": "For each second [[combat status|in combat]] with champions, deal 3% '''bonus''' damage, stacking up to 3 times for a '''maximum''' of 9%. While this effect is fully stacked, convert 100% of the '''bonus''' damage into {{as|true damage}}."
                    },
                    "mythic": {
                        "ap": 8,
                        "omnivamp": 2
                    }
                },
                "recipe": ["Leeching Leer", "Blasting Wand"],
                "buy": 3200
            },
            {"name": "Rimeforged Grasp",
                "id": 7005,
                "nickname": ["iceborn", "chilly mittens"],
                "tier": 4,
                "type": "=>Frostfire Gauntlet",
                "itemlimit": "=>Frostfire Gauntlet",
                "limit": "=>Frostfire Gauntlet",
                "ornn": true,
                "caption": "{{sbc|{{ai|Master Craftsman|Ornn}}:}} All stats have been improved.",
                "maps": "=>Frostfire Gauntlet",
                "menu": "=>Frostfire Gauntlet",
                "stats": {
                    "ah": 25,
                    "armor": 40,
                    "hp": 600,
                    "mr": 40
                },
                "effects": {
                    "pass": "=>Frostfire Gauntlet",
                    "pass2": "=>Frostfire Gauntlet",
                    "mythic": "=>Frostfire Gauntlet"
                },
                "recipe": ["Frostfire Gauntlet"],
                "buy": "=>Frostfire Gauntlet"
            },
            {"name": "Ruby Crystal",
                "id": 1028,
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
            {"name": "Runaan's Hurricane",
                "id": 3085,
                "tier": 3,
                "limit": "Can only be purchased on {{tip|ranged}} champions.",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "marksman": true,
                    "onhit effects": true,
                    "movement": true
                },
                "stats": {
                    "as": 45,
                    "crit": 20,
                    "ms": 7
                },
                "effects": {
                    "pass": {
                        "name": "Wind's Fury",
                        "unique": true,
                        "description": "Basic attacks [[on-attack]] fire additional bolts at up to 2 enemies {{tt|in front of you|180{{degree}}}}, each dealing {{as|40% AD}} {{as|physical damage}}. Bolts apply {{tip|on-hit}} effects at 100% effectiveness and are affected by {{tip|critical strike}} modifiers.",
                        "description2": "''The bolts will target the closest enemies to you that are not the main target.''"
                    }
                },
                "recipe": ["Dagger", "Zeal", "Dagger"],
                "buy": 2600
            },
            {"name": "Runesteel Spaulders",
                "id": 3855,
                "nickname": ["Support", "Economy", "Gold", "Sightstone", "Ward"],
                "tier": 2,
                "itemlimit": "=>Steel Shoulderguards",
                "limit": "warding",
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true
                },
                "menu": {
                    "tank": true,
                    "support": true
                },
                "stats": {
                    "ad": 6,
                    "gp10": 3,
                    "hp": 100,
                    "hp5": 50
                },
                "effects": {
                    "act": {
                        "name": "Warding",
                        "unique": true,
                        "description": "Consumes a charge to place a {{tip|Stealth Ward}} at the target location, which grants {{tip|sight}} of the surrounding area. Charges refill upon visiting the shop.",
                        "charges": "3",
                        "range": "600"
                    },
                    "pass": {
                        "name": "Spoils of War",
                        "unique": true,
                        "description": "Grants a charge every 35 seconds, up to 3 charges. Basic attacks can consume a charge to {{tip|execute}} minions {{as|'''below''' 50% of their '''maximum''' health}}. Killing a minion by any means with a charge grants you and the nearest allied champion kill {{g|gold}}. These effects require an allied champion to be {{tt|nearby|1050 range}}. ''Receive diminishing gold from excessive minion kills.''"
                    },
                    "pass2": {
                        "name": "Quest",
                        "unique": true,
                        "description": "Earn {{g|500}} using this item to upgrade to {{ii|Pauldrons of Whiterock}}, increasing the {{sbc|Ward}} active to instead have 4 wards in stock."
                    }
                },
                "recipe": ["Steel Shoulderguards"],
                "buy": "=>Steel Shoulderguards",
                "sellratio": "=>Steel Shoulderguards"
            },
            {"name": "Rylai's Crystal Scepter",
                "id": 3116,
                "nickname": ["rylais"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "mage": true
                },
                "stats": {
                    "ap": 75,
                    "hp": 400
                },
                "effects": {
                    "pass": {
                        "name": "Rimefrost",
                        "unique": true,
                        "description": "Dealing {{tip|ability damage}} {{tip|slow|slows}} affected [[unit]]s by 30% for 1 second."
                    }
                },
                "recipe": ["Blasting Wand", "Giant's Belt", "Amplifying Tome"],
                "buy": 2600
            },
            {"name": "Sandshrike's Claw",
                "id": 7000,
                "tier": 4,
                "type": "=>Prowler's Claw",
                "itemlimit": "=>Prowler's Claw",
                "limit": "=>Prowler's Claw",
                "ornn": true,
                "caption": "{{sbc|{{ai|Master Craftsman|Ornn}}:}} All stats have been improved.",
                "maps": "=>Prowler's Claw",
                "menu": "=>Prowler's Claw",
                "stats": {
                    "ad": 75,
                    "ah": 25,
                    "lethality": 26
                },
                "effects": {
                    "act": "=>Prowler's Claw",
                    "mythic": "=>Prowler's Claw"
                },
                "recipe": ["Prowler's Claw"],
                "buy": "=>Prowler's Claw"
            },
            {"name": "Sapphire Crystal",
                "id": 1027,
                "nickname": ["blue"],
                "tier": 1,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "mage": true,
                    "tank": true
                },
                "stats": {
                    "mana": 250
                },
                "buy": 350
            },
            {"name": "Scarecrow Effigy",
                "id": 3330,
                "tier": 1,
                "type": ["Basic Trinket"],
                "champion": ["Fiddlesticks"],
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true,
                    "tt": true,
                    "cs": true
                },
                "effects": {
                    "act": {
                        "name": "Trinket",
                        "unique": true,
                        "description": "Consume a charge to place a visible {{tip|Effigy}} at the target location, which grants {{tip|sight}} of the surrounding area for {{pp|130 to 300}} seconds. The effigy visually appears exactly as {{ci|Fiddlesticks}} does to enemies while idle. Enemy champions that approach an effigy while having {{tip|sight}} of it will activate it, causing the effigy to fake a random action, after which the effigy will deal 1 damage to itself.",
                        "recharge": "{{pp|115 to 30}}",
                        "charges": "2",
                        "range": "625"
                    }
                },
                "buy": 0
            },
            {"name": "Seat of Command",
                "id": 7022,
                "nickname": ["banner of command", "flag"],
                "tier": 4,
                "type": "=>Imperial Mandate",
                "itemlimit": "=>Imperial Mandate",
                "limit": "=>Imperial Mandate",
                "ornn": true,
                "caption": "{{sbc|{{ai|Master Craftsman|Ornn}}:}} All stats have been improved.",
                "maps": "=>Imperial Mandate",
                "menu": "=>Imperial Mandate",
                "stats": {
                    "ah": 25,
                    "ap": 70,
                    "hp": 300,
                    "mp5": 200
                },
                "effects": {
                    "pass": "=>Imperial Mandate",
                    "mythic": "=>Imperial Mandate"
                },
                "recipe": ["Imperial Mandate"],
                "buy": "=>Imperial Mandate"
            },
            {"name": "Seeker's Armguard",
                "id": 3191,
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
            {"name": "Seraph's Embrace",
                "id": 3040,
                "tier": 4,
                "itemlimit": "Mana Charge",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "stats": {
                    "ap": 80,
                    "hp": 250,
                    "mana": 860
                },
                "effects": {
                    "pass": {
                        "name": "Awe",
                        "unique": true,
                        "description": "Grants {{as|ability haste}} equal to {{as|{{fd|1.3}}% '''bonus''' mana}}."
                    },
                    "pass2": {
                        "name": "Empyrean",
                        "unique": true,
                        "description": "{{tip|Heal}} for {{as|25% of mana spent}}, up to {{pp|25 to 50}} {{as|(+ 10% AP)}} per cast. Toggle abilities can heal up to {{pp|25 to 50}} {{as|(+ 10% AP)}} per second."
                    }
                },
                "recipe": ["Archangel's Staff"],
                "buy": "=>Archangel's Staff"
            },
            {"name": "Serpent's Fang",
                "id": 6695,
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "assassin": true
                },
                "stats": {
                    "ad": 55,
                    "lethality": 12
                },
                "effects": {
                    "pass": {
                        "name": "Shield Reaver",
                        "unique": true,
                        "description": "Dealing damage to an enemy champion injects them with venom for 3 seconds, reducing any {{tip|shield|shields}} they gain within the duration by {{rd|50%|35%}}, and if the target was not already afflicted by the venom, reducing all of their active shields by the same amount."
                    }
                },
                "recipe": ["Serrated Dirk", "Pickaxe"],
                "buy": 2600
            },
            {"name": "Serrated Dirk",
                "id": 3134,
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
            {"name": "Serylda's Grudge",
                "id": 6694,
                "tier": 3,
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
                    "ad": 45,
                    "ah": 20,
                    "armpen": 30
                },
                "effects": {
                    "pass": {
                        "name": "Bitter Cold",
                        "unique": true,
                        "description": "Dealing {{tip|ability damage}} {{tip|slow|slows}} affected [[unit]]s by 30% for 1 second."
                    }
                },
                "recipe": ["Caulfield's Warhammer", "Last Whisper"],
                "buy": 3200
            },
            {"name": "Shadowflame",
                "id": 4645,
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "mage": true
                },
                "stats": {
                    "ap": 100,
                    "hp": 200
                },
                "effects": {
                    "pass": {
                        "name": "Cinderbloom",
                        "unique": true,
                        "description": "Dealing {{as|magic damage}} to champions ignores {{pp|type=target's '''current''' health|10 to 20 for 11|2500 to 1000}} of their {{as|magic resistance}}, increased to '''maximum''' value if the they were affected by a {{tip|shield}} within the last 5 seconds."
                    }
                },
                "recipe": ["Hextech Alternator", "Needlessly Large Rod"],
                "buy": 3000
            },
            {"name": "Shard of True Ice",
                "id": 3853,
                "nickname": ["Support", "Economy", "Gold", "Sightstone", "Ward"],
                "tier": 3,
                "itemlimit": "=>Spellthief's Edge",
                "limit": "warding",
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true
                },
                "menu": {
                    "mage": true,
                    "support": true
                },
                "stats": {
                    "ap": 40,
                    "gp10": 3,
                    "hp": 75,
                    "mp5": 115
                },
                "effects": {
                    "act": {
                        "name": "Warding",
                        "unique": true,
                        "description": "Consumes a charge to place a {{tip|Stealth Ward}} at the target location, which grants {{tip|sight}} of the surrounding area. Charges refill upon visiting the shop.",
                        "charges": "4",
                        "range": "600"
                    },
                    "pass": {
                        "unique": true,
                        "description": "Receives diminishing gold from excessive minion kills."
                    }
                },
                "recipe": ["Frostfang"],
                "buy": "=>Spellthief's Edge",
                "sellratio": "=>Spellthief's Edge"
            },
            {"name": "Sheen",
                "id": 3057,
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
            {"name": "Shurelya's Battlesong",
                "id": 2065,
                "nickname": ["shurelya", "reverie"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "tank": true,
                    "support": true,
                    "movement": true
                },
                "stats": {
                    "ap": 40,
                    "ah": 20,
                    "hp": 200,
                    "mp5": 100
                },
                "effects": {
                    "pass": {
                        "name": "Motivate",
                        "unique": true,
                        "description": "{{tip|Heal|Healing}}, {{tip|shield|shielding}}, or [[buff]]ing allied champions (''excluding yourself'') grants you and them {{as|25% '''bonus''' movement speed}} for {{fd|1.5}} seconds.",
                        "cd": "4 (per champion)"
                    },
                    "act": {
                        "name": "Inspire",
                        "unique": true,
                        "description": "Grants you and all allies within 1000 units of you {{as|30% '''bonus''' movement speed}} for 4 seconds.",
                        "cd": "75"
                    },
                    "mythic": {
                        "ah": 5
                    }
                },
                "recipe": ["Kindlegem", "Bandleglass Mirror"],
                "buy": 2500
            },
            {"name": "Shurelya's Requiem",
                "id": 7020,
                "nickname": ["shurelya", "reverie"],
                "tier": 4,
                "type": "=>Shurelya's Battlesong",
                "itemlimit": "=>Shurelya's Battlesong",
                "limit": "=>Shurelya's Battlesong",
                "ornn": true,
                "caption": "{{sbc|{{ai|Master Craftsman|Ornn}}:}} All stats have been improved.",
                "maps": "=>Shurelya's Battlesong",
                "menu": "=>Shurelya's Battlesong",
                "stats": {
                    "ap": 70,
                    "ah": 25,
                    "hp": 300,
                    "mp5": 200
                },
                "effects": {
                    "pass": "=>Shurelya's Battlesong",
                    "act": "=>Shurelya's Battlesong",
                    "mythic": "=>Shurelya's Battlesong"
                },
                "recipe": ["Shurelya's Battlesong"],
                "buy": "=>Shurelya's Battlesong"
            },
            {"name": "Silvermere Dawn",
                "id": 6035,
                "nickname": ["qss", "mace", "quicksilver sash", "mercurial scimitar"],
                "tier": 3,
                "itemlimit": "Quicksilver",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "fighter": true,
                    "assassin": true
                },
                "stats": {
                    "ad": 40,
                    "hp": 300,
                    "mr": 35
                },
                "effects": {
                    "act": {
                        "name": "Quicksilver",
                        "unique": true,
                        "description": "Removes all {{tip|crowd control}} debuffs (except {{tip|Airborne}}) from your champion and grants 40% {{tip|tenacity}}, 40% {{tip|slow resist}}, and {{tip|ghosting}} for 3 seconds.",
                        "cd": "90"
                    }
                },
                "recipe": ["Quicksilver Sash", "Pickaxe", "Ruby Crystal"],
                "buy": 3000
            },
            {"name": "Slightly Magical Boots",
                "id": 2422,
                "tier": 1,
                "type": ["Distributed", "Boots"],
                "limit": "Only available with {{ri|Magical Footwear}}. Cannot be re-purchased. Disables {{ii|Boots}}.",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": "=>Boots",
                "stats": {
                    "msflat": "=>Boots"
                },
                "effects": {
                    "pass": {
                        "name": "Slightly Quicker",
                        "unique": true,
                        "description": "Gain {{as|10 '''bonus''' movement speed}}."
                    }
                },
                "buy": 0,
                "sell": "=>Boots"
            },
            {"name": "Sorcerer's Shoes",
                "id": 3020,
                "nickname": ["boots", "sorcs"],
                "tier": 2,
                "type": ["Boots"],
                "caption": "For nearly a century, the greatest {{tip|mage}} in [[Valoran]] resided in the scorched desert of the Zear realm until the first crusade of the Rune Wars devastated the entire region forcing millions to flee. The crusaders [[kill]]ed all desperate travelers attempting the mass exodus from Zear, but one mage escaped their grasp by making such haste across the land that word spread throughout Valoran that the very shoes this mage wore must be imbued with immense power.",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "stats": {
                    "mpenflat": 18,
                    "msflat": 45
                },
                "recipe": ["Boots"],
                "buy": 1100
            },
            {"name": "Spectral Sickle",
                "id": 3862,
                "nickname": ["Support", "Gold", "Economy"],
                "tier": 1,
                "type": ["Starter"],
                "itemlimit": "Jungle&Support",
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true
                },
                "menu": {
                    "support": true
                },
                "stats": {
                    "ad": 5,
                    "gp10": 2,
                    "hp": 10,
                    "mp5": 25
                },
                "effects": {
                    "pass": {
                        "name": "Tribute",
                        "unique": true,
                        "description": "Grants a charge every 10 seconds, up to 3 charges. If an allied champion is {{tt|nearby|2000 range}}, damaging abilities and attacks against champions and structures consume a charge, up to one per attack or cast. Consuming a charge grants {{g|20}}. ''Receive diminishing gold from excessive minion kills.''"
                    },
                    "pass2": {
                        "name": "Quest",
                        "unique": true,
                        "description": "Earn {{g|500}} using this item to upgrade to {{ii|Harrowing Crescent}}, gaining the {{sbc|Warding}} active with 3 wards in stock."
                    }
                },
                "buy": 400,
                "sellratio": 0.4
            },
            {"name": "Spectre's Cowl",
                "id": 3211,
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
            {"name": "Spellthief's Edge",
                "id": 3850,
                "nickname": ["Support", "Economy", "Gold"],
                "tier": 1,
                "type": ["Starter"],
                "itemlimit": "Jungle&Support",
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true
                },
                "menu": {
                    "mage": true,
                    "support": true
                },
                "stats": {
                    "ap": 8,
                    "gp10": 2,
                    "hp": 10,
                    "mp5": 50
                },
                "effects": {
                    "pass": {
                        "name": "Tribute",
                        "unique": true,
                        "description": "Grants a charge every 10 seconds, up to 3 charges. If an allied champion is {{tt|nearby|2000 range}}, damaging abilities and attacks against champions and structures consume a charge, up to one per attack or cast. Consuming a charge grants {{g|20}}. ''Receive diminishing gold from excessive minion kills.''"
                    },
                    "pass2": {
                        "name": "Quest",
                        "unique": true,
                        "description": "Earn {{g|500}} using this item to upgrade to {{ii|Frostfang}}, gaining the {{sbc|Warding}} active with 3 wards in stock."
                    }
                },
                "buy": 400,
                "sellratio": 0.4
            },
            {"name": "Spirit Visage",
                "id": 3065,
                "nickname": ["sv"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "tank": true
                },
                "stats": {
                    "ah": 10,
                    "hp": 450,
                    "hp5": 100,
                    "mr": 50
                },
                "effects": {
                    "pass": {
                        "name": "Boundless Vitality",
                        "unique": true,
                        "description": "Increases all {{tip|heal|healing}} and {{tip|shield|shielding}} received by 25%."
                    }
                },
                "recipe": ["Spectre's Cowl", "Kindlegem"],
                "buy": 2900
            },
            {"name": "Staff of Flowing Water",
                "id": 6616,
                "nickname": ["nami"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "support": true
                },
                "stats": {
                    "ap": 50,
                    "hsp": 8,
                    "mp5": 100
                },
                "effects": {
                    "pass": {
                        "name": "Rapids",
                        "unique": true,
                        "description": "{{tip|Heal|Healing}} or {{tip|shield|shielding}} allied champions (''excluding yourself'') grants you and them {{as|{{pp|25 to 45|type=target's level}} ability power}} and {{as|20 ability haste}} for 4 seconds."
                    }
                },
                "recipe": ["Amplifying Tome", "Forbidden Idol", "Amplifying Tome"],
                "buy": 2300
            },
            {"name": "Starcaster",
                "id": 7021,
                "nickname": ["yuumi"],
                "tier": 4,
                "type": "=>Moonstone Renewer",
                "itemlimit": "=>Moonstone Renewer",
                "limit": "=>Moonstone Renewer",
                "ornn": true,
                "caption": "{{sbc|{{ai|Master Craftsman|Ornn}}:}} All stats have been improved.",
                "maps": "=>Moonstone Renewer",
                "menu": "=>Moonstone Renewer",
                "stats": {
                    "ah": 25,
                    "ap": 70,
                    "hp": 300,
                    "mp5": 200
                },
                "effects": {
                    "pass": "=>Moonstone Renewer",
                    "mythic": "=>Moonstone Renewer"
                },
                "recipe": ["Moonstone Renewer"],
                "buy": "=>Moonstone Renewer"
            },
            {"name": "Stealth Ward",
                "id": 3340,
                "nickname": ["yellow", "totem", "trinket"],
                "tier": 1,
                "type": ["Basic Trinket"],
                "limit": "trinket,warding",
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true
                },
                "effects": {
                    "act": {
                        "name": "Trinket",
                        "unique": true,
                        "description": "Consume a charge to place an invisible {{tip|Totem Ward}} at the target location, which grants {{tip|sight}} of the surrounding area for {{pp|90 to 120|type=average of all champion levels}} seconds.",
                        "recharge": "{{pp|240 to 120|type=average of all champion levels}}",
                        "charges": "2",
                        "range": "600"
                    }
                },
                "buy": 0
            },
            {"name": "Steel Shoulderguards",
                "id": 3854,
                "nickname": ["Support", "Gold", "Economy"],
                "tier": 1,
                "type": ["Starter"],
                "itemlimit": "Jungle&Support",
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true
                },
                "menu": {
                    "tank": true,
                    "support": true
                },
                "stats": {
                    "ad": 3,
                    "gp10": 2,
                    "hp": 30,
                    "hp5": 25
                },
                "effects": {
                    "pass": {
                        "name": "Spoils of War",
                        "unique": true,
                        "description": "Grants a charge every 35 seconds, up to 3 charges. Basic attacks can consume a charge to execute minions. Basic attacks {{tip|execute}} minions {{as|'''below''' {{rd|50%|30%}} of their '''maximum''' health}}. Killing a minion by any means with a charge grants you and the nearest allied champion kill {{g|gold}}. These effects require an allied champion to be {{tt|nearby|1050 range}}. ''Receive diminishing gold from excessive minion kills.''"
                    },
                    "pass2": {
                        "name": "Quest",
                        "unique": true,
                        "description": "Earn {{g|500}} using this item to upgrade to {{ii|Runesteel Spaulders}}, gaining the {{sbc|Warding}} active with 3 wards in stock."
                    }
                },
                "buy": 400,
                "sellratio": 0.4
            },
            {"name": "Sterak's Gage",
                "id": 3053,
                "nickname": ["juggernaut", "primal", "shield", "sterak's cage"],
                "tier": 3,
                "itemlimit": "Lifeline",
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
                    "hp": 400
                },
                "effects": {
                    "pass": {
                        "name": "The Claws that Catch",
                        "unique": true,
                        "description": "Gain {{as|45% '''base''' AD}} as '''bonus''' attack damage."
                    },
                    "pass2": {
                        "name": "Lifeline",
                        "unique": true,
                        "description": "If you would take damage that would reduce you below {{as|30% of your '''maximum''' health}}, gain a {{tip|shield}} equal to {{as|75% of '''bonus''' health}} that decays over {{fd|3.75}} seconds.",
                        "cd": "60"
                    }
                },
                "recipe": ["Pickaxe", "Phage", "Ruby Crystal"],
                "buy": 3100
            },
            {"name": "Stopwatch",
                "id": 2420,
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
            {"name": "Stormrazor",
                "id": 3095,
                "nickname": ["Windblade"],
                "tags": ["HasOnHit", "HasOnAttack"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "marksman": true
                },
                "stats": {
                    "ad": 40,
                    "as": 15,
                    "crit": 20
                },
                "effects": {
                    "pass": {
                        "name": "Energized",
                        "unique": true,
                        "description": "Moving and basic attacking generates ''Energize'' stacks, up to 100."
                    },
                    "pass2": {
                        "name": "Paralyze",
                        "unique": true,
                        "description": "When fully {{tip|Energized}}, your next basic attack deals {{as|120 '''bonus''' magic damage}} [[on-hit]]. Energized effects {{tip|slow}} by 75% for {{fd|0.5}} seconds."
                    }
                },
                "recipe": ["B. F. Sword", "Cloak of Agility", "Kircheis Shard"],
                "buy": 2700
            },
            {"name": "Stridebreaker",
                "id": 6631,
                "nickname": ["kneecapper", "whipchain"],
                "tier": 3,
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
                    "ad": 50,
                    "ah": 20,
                    "as": 20,
                    "hp": 300
                },
                "effects": {
                    "act": {
                        "name": "Halting Slash",
                        "unique": true,
                        "description": "Deal {{as|175% '''base''' AD}} {{as|physical damage}} to enemies in a {{tip|cr|icononly = true}} 450 radius centered around you and {{tip|slow}} them by 40% for 3 seconds. Can move while casting.",
                        "cd": "15 (reduced by ability haste)"
                    },
                    "pass": {
                        "name": "Heroic Gait",
                        "unique": true,
                        "description": "Dealing {{as|physical damage}} grants you {{as|20 '''bonus''' movement speed}} for 2 seconds."
                    },
                    "mythic": {
                        "ms": 2
                    }
                },
                "recipe": ["Ironspike Whip", "Hearthbound Axe", "Kindlegem"],
                "buy": 3300
            },
            {"name": "Sunfire Aegis",
                "id": 3068,
                "nickname": ["funfire", "sunborn"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "tank": true
                },
                "stats": {
                    "ah": 20,
                    "armor": 35,
                    "hp": 450,
                    "mr": 35
                },
                "effects": {
                    "pass": {
                        "name": "Immolate",
                        "unique": true,
                        "description": "Taking or dealing damage activates this passive for 3 seconds. Deal {{as|15 {{as|(+ {{fd|1.75}}% '''bonus''' health)}} magic damage|magic damage}} every second to enemies within {{tip|cr|icononly = true}} 325 (+ 100% '''bonus''' [[size]]) units, increased by 25% against minions and 150% against monsters. This executes minions that would be killed by one more tick of damage. Damaging enemy champions or epic monsters with this effect grants a stack for 5 seconds that increases subsequent ''Immolate'' damage by 10%, stacking up to 6 times for a 60% increase."
                    },
                    "pass2": {
                        "name": "Flametouch",
                        "unique": true,
                        "description": "At '''maximum''' stacks, your basic attacks create an explosion around you, applying a burn to all nearby enemies that deals your '''current''' ''Immolate'' damage to them over 3 seconds."
                    },
                    "mythic": {
                        "hp": 50,
                        "spec": "5% {{tip|tenacity}}",
                        "spec2": "5% {{tip|slow resist}}"
                    }
                },
                "recipe": ["Bami's Cinder", "Aegis of the Legion"],
                "buy": 3200
            },
            {"name": "Super Mech Armor",
                "id": 1511,
                "tier": 1,
                "type": ["Minion"],
                "caption": "Anything can be used as armor if you pile it on.",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true,
                    "tt": true,
                    "cs": true
                },
                "effects": {
                    "pass": {
                        "unique": true,
                        "description": "{{tip|Turrets}} basic attacks are modified to deal {{as|7% of this minion's '''maximum''' health}} as {{tt|pre-mitigation damage|Damage calculated before modifiers}}."
                    }
                }
            },
            {"name": "Super Mech Power Field",
                "id": 1512,
                "tier": 1,
                "type": ["Minion"],
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true,
                    "tt": true,
                    "cs": true
                },
                "effects": {
                    "pass": {
                        "unique": true,
                        "description": "Grants nearby minions (excluding super minions) {{as|35 armor}} and {{as|35 magic resistance}}."
                    }
                }
            },
            {"name": "Syzygy",
                "id": 7001,
                "tier": 4,
                "type": "=>Eclipse",
                "itemlimit": "=>Eclipse",
                "limit": "=>Eclipse",
                "ornn": true,
                "caption": "{{sbc|{{ai|Master Craftsman|Ornn}}:}} All stats have been improved.",
                "maps": "=>Eclipse",
                "menu": "=>Eclipse",
                "stats": {
                    "ad": 75,
                    "lethality": 26,
                    "omnivamp": 8
                },
                "effects": {
                    "pass": "=>Eclipse",
                    "mythic": "=>Eclipse"
                },
                "recipe": ["Eclipse"],
                "buy": "=>Eclipse"
            },
            {"name": "Targon's Buckler",
                "id": 3859,
                "nickname": ["Support", "Economy", "Gold", "Sightstone", "Ward"],
                "tier": 2,
                "itemlimit": "=>Relic Shield",
                "limit": "warding",
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true
                },
                "menu": {
                    "tank": true,
                    "support": true
                },
                "stats": {
                    "ap": 10,
                    "gp10": 3,
                    "hp": 100,
                    "hp5": 50
                },
                "effects": {
                    "act": {
                        "name": "Warding",
                        "unique": true,
                        "description": "Consumes a charge to place a {{tip|Stealth Ward}} at the target location, which grants {{tip|sight}} of the surrounding area. Charges refill upon visiting the shop.",
                        "charges": "3",
                        "range": "600"
                    },
                    "pass": {
                        "name": "Spoils of War",
                        "unique": true,
                        "description": "Grants a charge every 35 seconds, up to 3 charges. Basic attacks can consume a charge to {{tip|execute}} minions {{as|'''below''' 50% of their '''maximum''' health}}. Killing a minion by any means with a charge grants you and the nearest allied champion kill {{g|gold}}. These effects require an allied champion to be {{tt|nearby|1050 range}}. ''Receive diminishing gold from excessive minion kills.''"
                    },
                    "pass2": {
                        "name": "Quest",
                        "unique": true,
                        "description": "Earn {{g|500}} using this item to upgrade to {{ii|Bulwark of the Mountain}}, increasing the {{sbc|Ward}} active to instead have 4 wards in stock."
                    }
                },
                "recipe": ["Relic Shield"],
                "buy": "=>Relic Shield",
                "sellratio": "=>Relic Shield"
            },
            {"name": "Tear of the Goddess",
                "id": 3070,
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
            {"name": "The Collector",
                "id": 6676,
                "nickname": ["deathblade"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "marksman": true,
                    "assassin": true
                },
                "stats": {
                    "ad": 55,
                    "crit": 20,
                    "lethality": 12
                },
                "effects": {
                    "pass": {
                        "name": "Death and Taxes",
                        "unique": true,
                        "description": "If you deal {{tt|post-mitigation|Damage calculated after modifiers}} damage that would leave a champion below {{as|5% of their '''maximum''' health}}, {{tip|execute}} them. Champion kills grant you an additional {{g|25}}."
                    }
                },
                "recipe": ["Serrated Dirk", "Pickaxe", "Cloak of Agility"],
                "buy": 3000
            },
            {"name": "Thornmail",
                "id": 3075,
                "nickname": ["grievous wounds"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "tank": true
                },
                "stats": {
                    "armor": 60,
                    "hp": 350
                },
                "effects": {
                    "pass": {
                        "name": "Thorns",
                        "unique": true,
                        "description": "When struck by a basic attack [[on-hit]], deal {{as|10 {{as|(+ 20% '''bonus''' armor)}} magic damage|magic damage}} to the attacker and, if they are a champion, inflict them with 25% {{tip|Grievous Wounds}} for 3 seconds. {{tip|Immobilize|Immobilizing}} enemy champions also inflicts them with 40% {{tip|Grievous Wounds}} for 3 seconds."
                    }
                },
                "recipe": ["Bramble Vest", "Giant's Belt"],
                "buy": 2700
            },
            {"name": "Tiamat",
                "id": 3077,
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
            {"name": "Titanic Hydra",
                "id": 3748,
                "nickname": ["beefer", "juggernaut"],
                "tags": ["HasOnHit", "OnHitAppliesLifeSteal"],
                "tier": 3,
                "itemlimit": "Hydra",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "fighter": true,
                    "tank": true,
                    "onhit effects": true
                },
                "stats": {
                    "ad": 30,
                    "hp": 500
                },
                "effects": {
                    "pass": {
                        "name": "Colossus",
                        "unique": true,
                        "description": "Gain {{as|'''bonus''' attack damage}} equal to {{as|2% of '''bonus''' health}}."
                    },
                    "pass2": {
                        "name": "Cleave",
                        "unique": true,
                        "description": "Basic attacks [[on-hit]] deal {{as|{{rd|4|3}} {{as|(+ {{rd|{{fd|1.5}}%|{{fd|1.125}}%}} '''maximum''' health)}} '''bonus''' physical damage|physical damage}} to the target and {{as|{{rd|40|30}} {{as|(+ {{rd|3%|{{fd|2.25}}%}} '''maximum''' health)}} physical damage|physical damage}} to other enemies in a cone in the direction of the target."
                    }
                },
                "recipe": ["Tiamat", "Ruby Crystal", "Giant's Belt"],
                "buy": 3300
            },
            {"name": "Total Biscuit of Everlasting Will",
                "id": 2010,
                "nickname": ["kleptomancy"],
                "tier": 1,
                "type": ["Distributed"],
                "req": "Requires {{ri|Biscuit Delivery}}.",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true,
                    "tt": true,
                    "cs": true
                },
                "effects": {
                    "consume": "Restores {{as|8% of your '''missing''' health}} and {{as|8% of your '''missing''' mana}} over 5 seconds. Manaless champions instead restore {{as|12% of '''missing''' health}}."
                },
                "sell": 5
            },
            {"name": "Trinity Force",
                "id": 3078,
                "nickname": ["triforce", "tons of damage", "3333"],
                "tags": ["HasOnHit", "OnHitAppliesLifeSteal"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "fighter": true,
                    "marksman": true,
                    "movement": true
                },
                "stats": {
                    "ad": 35,
                    "ah": 20,
                    "as": 30,
                    "hp": 300
                },
                "effects": {
                    "pass": {
                        "name": "Threefold Strike",
                        "unique": true,
                        "description": "Basic attacks grant {{as|20 '''bonus''' movement speed}} for 3 seconds and, if the target is a champion or a structure, increase {{as|'''base''' attack damage by 4%}} for the same duration, stacking up to 5 times for a {{as|20% increase|attack damage}}. Stacks decay once every {{fd|0.5}} seconds after the duration ends."
                    },
                    "pass2": {
                        "name": "Spellblade",
                        "unique": true,
                        "description": "After using an [[Champion ability|ability]], your next basic attack within 10 seconds deals {{as|200% '''base''' AD}} {{as|'''bonus''' physical damage}} [[on-hit]].",
                        "cd": "{{fd|1.5}} (begins after using the empowered attack)"
                    },
                    "mythic": {
                        "ad": 3,
                        "ah": 3,
                        "msflat": 3
                    }
                },
                "recipe": ["Sheen", "Hearthbound Axe", "Kindlegem"],
                "buy": 3333
            },
            {"name": "Turbo Chemtank",
                "id": 6664,
                "nickname": ["catastrophe"],
                "tier": 3,
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
                    "ah": 20,
                    "armor": 25,
                    "hp": 450,
                    "mr": 25
                },
                "effects": {
                    "act": {
                        "name": "Supercharged",
                        "unique": true,
                        "description": "For 4 seconds, grants {{as|40% '''bonus''' movement speed}} and {{tip|ghosted|ghosting}} when moving towards a {{tip|turret}} or {{tip|sight|visible}} enemy champion within 2000 units. After the duration or when an enemy champion is within {{tt|225 units|center to edge}}, you emit a shockwave, {{tip|slow|slowing}} enemy champions within {{tip|cr|450}} range by 50% for {{fd|1.5}} seconds.",
                        "cd": "90"
                    },
                    "pass": {
                        "name": "Refuel",
                        "unique": true,
                        "description": "Moving and taking damage fills up the ''Chemtank'', gaining stacks. Gain 5 stacks per instance of damage taken from champions and large monsters per cast instance and 1 stack for every 25 units travelled, capped at 10 stacks when travelling by [[dash]]es or [[blink]]s. At 100 stacks, your next basic attack deals {{as|{{pp|40 to 120}}|magic damage}} {{as|(+ 1% '''maximum''' health)}} {{as|(+ 3% movement speed)}} {{as|magic damage}} to all nearby enemies, increased by 30% against minions and 200% against monsters."
                    },
                    "mythic": {
                        "ah": 5,
                        "hp": 50
                    }
                },
                "recipe": ["Bami's Cinder", "Null-Magic Mantle", "Cloth Armor"],
                "buy": 2800
            },
            {"name": "Turbocharged Hexperiment",
                "id": 7003,
                "nickname": ["catastrophe"],
                "tier": 4,
                "type": "=>Turbo Chemtank",
                "itemlimit": "=>Turbo Chemtank",
                "limit": "=>Turbo Chemtank",
                "ornn": true,
                "caption": "{{sbc|{{ai|Master Craftsman|Ornn}}:}} All stats have been improved.",
                "maps": "=>Turbo Chemtank",
                "menu": "=>Turbo Chemtank",
                "stats": {
                    "ah": 25,
                    "armor": 40,
                    "hp": 600,
                    "mr": 40
                },
                "effects": {
                    "act": "=>Turbo Chemtank",
                    "pass": "=>Turbo Chemtank",
                    "mythic": "=>Turbo Chemtank"
                },
                "recipe": ["Turbo Chemtank"],
                "buy": "=>Turbo Chemtank"
            },
            {"name": "Turret Plating",
                "id": 1515,
                "tier": 1,
                "type": ["Turret"],
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true,
                    "tt": false,
                    "cs": false
                },
                "effects": {
                    "pass": {
                        "unique": true,
                        "description": "Provides extra defensive measures. Attackers are rewarded for destroying portions of the plating. This item disappears after 14 minutes."
                    }
                }
            },
            {"name": "Typhoon",
                "id": 7006,
                "nickname": ["squallrider"],
                "tier": 4,
                "type": "=>Galeforce",
                "itemlimit": "=>Galeforce",
                "limit": "=>Galeforce",
                "ornn": true,
                "caption": "{{sbc|{{ai|Master Craftsman|Ornn}}:}} All stats except Critical Strike Chance have been improved.",
                "maps": "=>Galeforce",
                "menu": "=>Galeforce",
                "stats": {
                    "ad": 80,
                    "as": 35,
                    "crit": "=>Galeforce"
                },
                "effects": {
                    "act": "=>Galeforce",
                    "mythic": "=>Galeforce"
                },
                "recipe": ["Galeforce"],
                "buy": "=>Galeforce"
            },
            {"name": "Umbral Glaive",
                "id": 3179,
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "assassin": true
                },
                "stats": {
                    "ad": 50,
                    "ah": 15,
                    "lethality": 10
                },
                "effects": {
                    "pass": {
                        "name": "Blackout",
                        "unique": true,
                        "description": "When near an enemy [[Stealth#Stealthed_traps_and_wards|stealthed]] {{tip|ward}} or {{tip|stealthed trap|trap}}, gain ''Blackout'' for 8 seconds.",
                        "description2": "You {{tip|disabled ward|disable}} surrounding stealthed wards, as well as {{tip|expose}} and {{tip|true sight|reveal}} nearby stealthed wards and traps while ''Blackout'' is active.",
                        "cd": "40",
                        "radius": "400"
                    },
                    "pass2": {
                        "unique": true,
                        "description": "Your [[basic attack]]s instantly [[kill]] revealed traps and deal {{as|2 '''bonus''' true damage}} to wards."
                    }
                },
                "recipe": ["Long Sword", "Serrated Dirk", "Long Sword"],
                "buy": 2300
            },
            {"name": "Upgraded Aeropack",
                "id": 7011,
                "nickname": ["protobelt"],
                "tier": 4,
                "type": "=>Hextech Rocketbelt",
                "itemlimit": "=>Hextech Rocketbelt",
                "limit": "=>Hextech Rocketbelt",
                "ornn": true,
                "caption": "{{sbc|{{ai|Master Craftsman|Ornn}}:}} All stats have been improved.",
                "maps": "=>Hextech Rocketbelt",
                "menu": "=>Hextech Rocketbelt",
                "stats": {
                    "ah": 20,
                    "ap": 120,
                    "hp": 350,
                    "mpenflat": 10
                },
                "effects": {
                    "act": "=>Hextech Rocketbelt",
                    "mythic": "=>Hextech Rocketbelt"
                },
                "recipe": ["Hextech Rocketbelt"],
                "buy": "=>Hextech Rocketbelt"
            },
            {"name": "Vampiric Scepter",
                "id": 1053,
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
            {"name": "Verdant Barrier",
                "id": 4632,
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
            {"name": "Vespertide",
                "id": 7010,
                "nickname": ["dark", "scythe"],
                "tier": 4,
                "type": "=>Night Harvester",
                "itemlimit": "=>Night Harvester",
                "limit": "=>Night Harvester",
                "ornn": true,
                "caption": "{{sbc|{{ai|Master Craftsman|Ornn}}:}} All stats have been improved.",
                "maps": "=>Night Harvester",
                "menu": "=>Night Harvester",
                "stats": {
                    "ah": 30,
                    "ap": 120,
                    "hp": 400
                },
                "effects": {
                    "pass": "=>Night Harvester",
                    "mythic": "=>Night Harvester"
                },
                "recipe": ["Night Harvester"],
                "buy": "=>Night Harvester"
            },
            {"name": "Vigilant Wardstone",
                "id": 4643,
                "nickname": ["Support", "Ward", "sightstone"],
                "tier": 2,
                "req": "Automatically upgrades from {{ii|Watchful Wardstone}} after completing a support quest ({{g|1000}} generated gold) and reaching [[Experience (champion)|level 13]].",
                "itemlimit": "Sightstone",
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true
                },
                "menu": {
                    "support": true
                },
                "stats": {
                    "ah": 15,
                    "hp": 150
                },
                "effects": {
                    "pass": {
                        "name": "Arcane Cache",
                        "unique": true,
                        "description": "This item can store up to 3 purchased {{ii|Control Ward|Control Wards}}."
                    },
                    "pass2": {
                        "name": "Behold",
                        "unique": true,
                        "description": "Increase your {{tip|Stealth Ward}}, {{tip|Totem Ward}}, and {{tip|Control Ward}} caps by 1."
                    },
                    "pass3": {
                        "name": "Blessing of Ixtal",
                        "unique": true,
                        "description": "Increases {{as|'''bonus''' attack damage}}, {{as|'''bonus''' health}}, {{as|ability power}} and {{as|ability haste}} by 12%."
                    }
                },
                "recipe": ["Watchful Wardstone"],
                "buy": 1100
            },
            {"name": "Void Staff",
                "id": 3135,
                "tier": 3,
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
                    "ap": 65,
                    "mpen": 40
                },
                "recipe": ["Blighting Jewel", "Blasting Wand"],
                "buy": 2800
            },
            {"name": "Warden's Eye",
                "id": 1503,
                "tier": 1,
                "type": ["Turret"],
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true,
                    "tt": true,
                    "cs": true
                },
                "effects": {
                    "pass": {
                        "name": "True Sight",
                        "unique": true,
                        "description": "Can see {{tip|camouflage|camouflaged}} and {{tip|invisible}} units within 1200 units."
                    }
                }
            },
            {"name": "Warden's Mail",
                "id": 3082,
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
            {"name": "Warmog's Armor",
                "id": 3083,
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "tank": true
                },
                "stats": {
                    "ah": 10,
                    "hp": 800,
                    "hp5": 200
                },
                "effects": {
                    "pass": {
                        "unique": true,
                        "description": "Grants {{sbc|Warmog's Heart}} if you have at least {{as|1100 '''bonus''' health}}."
                    },
                    "pass2": {
                        "name": "Warmog's Heart",
                        "unique": true,
                        "description": "[[Health regeneration|Regenerate]] {{ft|{{as|{{fd|2.5}}% '''maximum''' health}} every {{fd|0.5}} seconds|{{as|25% '''maximum''' health}} every 5 seconds}} if [[damage]] has not been taken in the last 6 seconds (3 seconds for damage from non-champions)."
                    }
                },
                "recipe": ["Giant's Belt", "Kindlegem", "Crystalline Bracer"],
                "buy": 3000
            },
            {"name": "Watchful Wardstone",
                "id": 4638,
                "nickname": ["Support", "Ward"],
                "tier": 1,
                "type": ["Epic"],
                "itemlimit": "Sightstone",
                "maps": {
                    "sr": true,
                    "ha": false,
                    "nb": true
                },
                "menu": {
                    "support": true
                },
                "stats": {
                    "ah": 10,
                    "hp": 150
                },
                "effects": {
                    "pass": {
                        "unique": true,
                        "description": "Automatically upgrades to {{ii|Vigilant Wardstone}} after completing a support quest ({{g|1000}} generated gold) and reaching [[Experience (champion)|level 13]]."
                    },
                    "pass2": {
                        "name": "Arcane Cache",
                        "unique": true,
                        "description": "This item can store up to 3 purchased {{ii|Control Ward|Control Wards}}."
                    }
                },
                "buy": 1100
            },
            {"name": "Winged Moonplate",
                "id": 3066,
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
            {"name": "Winter's Approach",
                "id": 3119,
                "tier": 3,
                "type": "=>Fimbulwinter",
                "itemlimit": "Mana Charge",
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "fighter": true,
                    "marksman": true,
                    "assassin": true,
                    "onhit effects": true
                },
                "stats": {
                    "hp": 350,
                    "ah": 15,
                    "mana": 500
                },
                "effects": {
                    "pass": {
                        "name": "Awe",
                        "unique": true,
                        "description": "Grants {{as|'''bonus''' health}} equal to {{as|8% '''maximum''' mana}}."
                    },
                    "pass2": {
                        "name": "Mana Charge",
                        "unique": true,
                        "description": "Grants a charge every 8 seconds, up to 4 charges. Consumes a charge [[on-hit]] and whenever affecting an enemy or ally with an ability to grant {{as|3 '''bonus''' mana}}, increased to {{as|6|mana}} for champion targets, up to a '''maximum''' of {{as|360 '''bonus''' mana}}."
                    },
                    "pass3": {
                        "description": "Transforms into {{ii|Fimbulwinter}} at {{as|+360 mana}}."
                    }
                },
                "recipe": ["Tear of the Goddess", "Kindlegem", "Ruby Crystal"],
                "buy": 2700
            },
            {"name": "Wit's End",
                "id": 3091,
                "tags": ["HasOnHit", "OnHitAppliesLifeSteal"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "fighter": true,
                    "onhit effects": true,
                    "movement": true
                },
                "stats": {
                    "ad": 40,
                    "as": 40,
                    "mr": 40
                },
                "effects": {
                    "pass": {
                        "name": "Fray",
                        "unique": true,
                        "description": "Basic attacks deal {{as|{{pp|15;25;35;45;55;65;75;76.25;77.5;78.75;80|1;9 to 18 for 10|formula=15, then +10 per level starting at level 9, then +1.25 per level starting at level 15}} '''bonus''' magic damage}} [[on-hit]] and grant you {{as|20 '''bonus''' movement speed}} for 2 seconds."
                    }
                },
                "recipe": ["Hearthbound Axe", "Null-Magic Mantle", "Pickaxe"],
                "buy": 3100
            },
            {"name": "Wyrmfallen Sacrifice",
                "id": 7007,
                "tier": 4,
                "type": "=>Kraken Slayer",
                "itemlimit": "=>Kraken Slayer",
                "limit": "=>Kraken Slayer",
                "ornn": true,
                "caption": "{{sbc|{{ai|Master Craftsman|Ornn}}:}} All stats except Critical Strike Chance have been improved.",
                "maps": "=>Kraken Slayer",
                "menu": "=>Kraken Slayer",
                "stats": {
                    "ad": 85,
                    "as": 40,
                    "crit": "=>Kraken Slayer"
                },
                "effects": {
                    "pass": "=>Kraken Slayer",
                    "mythic": "=>Kraken Slayer"
                },
                "recipe": ["Kraken Slayer"],
                "buy": "=>Kraken Slayer"
            },
            {"name": "Youmuu's Ghostblade",
                "id": 3142,
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "assassin": true,
                    "movement": true
                },
                "stats": {
                    "ad": 55,
                    "ah": 15,
                    "lethality": 18
                },
                "effects": {
                    "act": {
                        "name": "Wraith Step",
                        "unique": true,
                        "description": "Gain {{as|20% '''bonus''' movement speed}} and {{tip|ghosted|ghosting}} for 6 seconds.",
                        "cd": "45"
                    },
                    "pass": {
                        "name": "Haunt",
                        "unique": true,
                        "description": "Gain {{as|40 '''bonus''' movement speed}} while out-of-combat."
                    }
                },
                "recipe": ["Serrated Dirk", "Caulfield's Warhammer"],
                "buy": 3000
            },
            {"name": "Zeal",
                "id": 3086,
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
            },
            {"name": "Zeke's Convergence",
                "id": 3050,
                "nickname": ["haroldandkumar"],
                "tags": ["HasOnHit"],
                "tier": 3,
                "maps": {
                    "sr": true,
                    "ha": true,
                    "nb": true
                },
                "menu": {
                    "tank": true,
                    "support": true,
                    "onhit effects": true
                },
                "stats": {
                    "ah": 20,
                    "armor": 35,
                    "hp": 250,
                    "mana": 250
                },
                "effects": {
                    "act": {
                        "name": "Conduit",
                        "unique": true,
                        "description": "Designate an allied champion as the ''Accomplice'', forming a {{tip|tether}} between you and them. Champions can only be designated as the ''Accomplice'' by one '''Zeke's Convergence''' at a time.",
                        "cd": "60"
                    },
                    "pass": {
                        "name": "Convergence",
                        "unique": true,
                        "description": "{{tip|Immobilize|Immobilizing}} enemy champions marks them for 8 seconds. Your ''Accomplice's'' basic attacks [[on-hit]] and ability hits against marked enemies fire a missile at them that deals them {{as|{{pp|30 to 70}} {{as|(+ {{fd|7.5}}% AP)}} {{as|(+ {{fd|1.5}}% '''maximum''' health)}} '''bonus''' magic damage|magic damage}} upon arrival."
                    }
                },
                "recipe": ["Kindlegem", "Glacial Buckler"],
                "buy": 2400
            },
            {"name": "Zhonya's Hourglass",
                "id": 3157,
                "nickname": ["zhg", "zonyas", "zhonyas"],
                "tier": 3,
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
                    "ap": 65,
                    "armor": 45
                },
                "effects": {
                    "act": {
                        "name": "Stasis",
                        "unique": true,
                        "description": "Put yourself in {{tip|stasis (buff)|stasis}} for {{fd|2.5}} seconds, rendering you {{tip|untargetable}} and {{tip|invulnerable}} for the duration but also unable to move, declare [[basic attack]]s, cast [[champion ability|abilities]], use [[summoner spell]]s, or [[active ability items|activate items]].",
                        "cd": "120"
                    }
                },
                "recipe": ["Seeker's Armguard", "Stopwatch", "Fiendish Codex"],
                "buy": 2600
            }
        
        ]
    }

export default itemsData;
