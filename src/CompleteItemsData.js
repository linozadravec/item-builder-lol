//88 itema
const itemsData = {
    "itemList": [
        {
            "name": "Abyssal Mask",
            "id": 8020,
            "url": "",
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
        {
            "name": "Anathema's Chains",
            "id": 8001,
            "url": "",
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
        {
            "name": "Archangel's Staff",
            "id": 3003,
            "url": "",
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
        {
            "name": "Ardent Censer",
            "id": 3504,
            "url": "",
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
        {
            "name": "Axiom Arc",
            "id": 6696,
            "url": "",
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
        {
            "name": "Banshee's Veil",
            "id": 3102,
            "url": "",
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
        {
            "name": "Black Cleaver",
            "id": 3071,
            "url": "",
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
        {
            "name": "Blade of the Ruined King",
            "id": 3153,
            "url": "",
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
        {
            "name": "Bloodthirster",
            "id": 3072,
            "url": "",
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
        {
            "name": "Chempunk Chainsword",
            "id": 6609,
            "url": "",
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
        {
            "name": "Chemtech Putrifier",
            "id": 3011,
            "url": "",
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
        {
            "name": "Cosmic Drive",
            "id": 4629,
            "url": "",
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
        {
            "name": "Crown of the Shattered Queen",
            "id": 4644,
            "url": "",
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
        {
            "name": "Dead Man's Plate",
            "id": 3742,
            "url": "",
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
        {
            "name": "Death's Dance",
            "id": 6333,
            "url": "",
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
        {
            "name": "Demonic Embrace",
            "id": 4637,
            "url": "",
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
        {
            "name": "Divine Sunderer",
            "id": 6632,
            "url": "",
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
        {
            "name": "Duskblade of Draktharr",
            "id": 6691,
            "url": "",
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
        {
            "name": "Eclipse",
            "id": 6692,
            "url": "",
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
        {
            "name": "Edge of Night",
            "id": 3814,
            "url": "",
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
        {
            "name": "Essence Reaver",
            "id": 3508,
            "url": "",
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
        {
            "name": "Evenshroud",
            "id": 3001,
            "url": "",
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
        {
            "name": "Everfrost",
            "id": 6656,
            "url": "",
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
        {
            "name": "Force of Nature",
            "id": 4401,
            "url": "",
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
        {
            "name": "Frostfire Gauntlet",
            "id": 6662,
            "url": "",
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
        {
            "name": "Frozen Heart",
            "id": 3110,
            "url": "",
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
        {
            "name": "Galeforce",
            "id": 6671,
            "url": "",
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
        {
            "name": "Gargoyle Stoneplate",
            "id": 3193,
            "url": "",
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
        {
            "name": "Goredrinker",
            "id": 6630,
            "url": "",
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
        {
            "name": "Guardian Angel",
            "id": 3026,
            "url": "",
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
        {
            "name": "Guinsoo's Rageblade",
            "id": 3124,
            "url": "",
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
        {
            "name": "Hextech Rocketbelt",
            "id": 3152,
            "url": "",
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
        {
            "name": "Horizon Focus",
            "id": 4628,
            "url": "",
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
        {
            "name": "Hullbreaker",
            "id": 3181,
            "url": "",
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
        {
            "name": "Immortal Shieldbow",
            "id": 6673,
            "url": "",
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
        {
            "name": "Imperial Mandate",
            "id": 4005,
            "url": "",
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
        {
            "name": "Infinity Edge",
            "id": 3031,
            "url": "",
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
        {
            "name": "Knight's Vow",
            "id": 3109,
            "url": "",
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
        {
            "name": "Kraken Slayer",
            "id": 6672,
            "url": "",
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
        {
            "name": "Liandry's Anguish",
            "id": 6653,
            "url": "",
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
        {
            "name": "Lich Bane",
            "id": 3100,
            "url": "",
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
        {
            "name": "Locket of the Iron Solari",
            "id": 3190,
            "url": "",
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
        {
            "name": "Lord Dominik's Regards",
            "id": 3036,
            "url": "",
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
        {
            "name": "Luden's Tempest",
            "id": 6655,
            "url": "",
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
        {
            "name": "Manamune",
            "id": 3004,
            "url": "",
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
        {
            "name": "Maw of Malmortius",
            "id": 3156,
            "url": "",
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
        {
            "name": "Mercurial Scimitar",
            "id": 3139,
            "url": "",
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
        {
            "name": "Mikael's Blessing",
            "id": 3222,
            "url": "",
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
        {
            "name": "Moonstone Renewer",
            "id": 6617,
            "url": "",
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
        {
            "name": "Morellonomicon",
            "id": 3165,
            "url": "",
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
        {
            "name": "Mortal Reminder",
            "id": 3033,
            "url": "",
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
        {
            "name": "Nashor's Tooth",
            "id": 3115,
            "url": "",
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
        {
            "name": "Navori Quickblades",
            "id": 6675,
            "url": "",
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
        {
            "name": "Night Harvester",
            "id": 4636,
            "url": "",
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
        {
            "name": "Phantom Dancer",
            "id": 3046,
            "url": "",
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
        {
            "name": "Prowler's Claw",
            "id": 6693,
            "url": "",
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
        {
            "name": "Rabadon's Deathcap",
            "id": 3089,
            "url": "",
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
        {
            "name": "Randuin's Omen",
            "id": 3143,
            "url": "",
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
        {
            "name": "Rapid Firecannon",
            "id": 3094,
            "url": "",
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
        {
            "name": "Ravenous Hydra",
            "id": 3074,
            "url": "",
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
        {
            "name": "Redemption",
            "id": 3107,
            "url": "",
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
        {
            "name": "Riftmaker",
            "id": 4633,
            "url": "",
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
        {
            "name": "Runaan's Hurricane",
            "id": 3085,
            "url": "",
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
        {
            "name": "Rylai's Crystal Scepter",
            "id": 3116,
            "url": "",
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
        {
            "name": "Serpent's Fang",
            "id": 6695,
            "url": "",
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
        {
            "name": "Serylda's Grudge",
            "id": 6694,
            "url": "",
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
        {
            "name": "Shadowflame",
            "id": 4645,
            "url": "",
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
        {
            "name": "Shurelya's Battlesong",
            "id": 2065,
            "url": "",
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
        {
            "name": "Silvermere Dawn",
            "id": 6035,
            "url": "",
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
        {
            "name": "Spirit Visage",
            "id": 3065,
            "url": "",
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
        {
            "name": "Staff of Flowing Water",
            "id": 6616,
            "url": "",
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
        {
            "name": "Sterak's Gage",
            "id": 3053,
            "url": "",
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
        {
            "name": "Stormrazor",
            "id": 3095,
            "url": "",
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
        {
            "name": "Stridebreaker",
            "id": 6631,
            "url": "",
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
        {
            "name": "Sunfire Aegis",
            "id": 3068,
            "url": "",
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
        {
            "name": "The Collector",
            "id": 6676,
            "url": "",
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
        {
            "name": "Thornmail",
            "id": 3075,
            "url": "",
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
        {
            "name": "Titanic Hydra",
            "id": 3748,
            "url": "",
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
        {
            "name": "Trinity Force",
            "id": 3078,
            "url": "",
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
        {
            "name": "Turbo Chemtank",
            "id": 6664,
            "url": "",
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
        {
            "name": "Umbral Glaive",
            "id": 3179,
            "url": "",
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
        {
            "name": "Void Staff",
            "id": 3135,
            "url": "",
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
        {
            "name": "Warmog's Armor",
            "id": 3083,
            "url": "",
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
        {
            "name": "Winter's Approach",
            "id": 3119,
            "url": "",
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
        {
            "name": "Wit's End",
            "id": 3091,
            "url": "",
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
        {
            "name": "Youmuu's Ghostblade",
            "id": 3142,
            "url": "",
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
        {
            "name": "Zeke's Convergence",
            "id": 3050,
            "url": "",
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
        {
            "name": "Zhonya's Hourglass",
            "id": 3157,
            "url": "",
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
