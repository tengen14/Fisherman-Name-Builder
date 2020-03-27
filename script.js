const fishNouns = [
  "Anglerfish",
  "Albacore",
  "Arctic Grayling",
  "Archerfish",
  "Algae",
  "Airsac Catfish",
  "Alligator Gar",
  "Amberjack",
  "Anchovy",
  "Arthropod",
  "Asian Carp",
  "Australian Herring",
  "Avalanche",
  "Ayu",
  "Bream",
  "Barracuda",
  "Bear Lake Whitefish",
  "Billfish",
  "Blowfish",
  "Bonneville Whitefish",
  "Brown Trout",
  "Burbot",
  "Catfish",
  "Carp",
  "Central Mudminnow",
  "Chub",
  "Cisco",
  "Clownfish",
  "Cod",
  "Crawdad",
  "Cutthroat Trout",
  "Dorado",
  "Dartfish",
  "Dealfish",
  "Discus",
  "Dolphin",
  "Dragonfish",
  "Duckbill",
  "Eel",
  "Eagle Ray",
  "Electric Ray",
  "Elasmobranch",
  "Elephantnose Fish",
  "Emperor Bream",
  "European Flounder",
  "Escolar",
  "European Perch",
  "Elver",
  "Firefish",
  "Fangtooth",
  "Featherback",
  "Filefish",
  "Flounder",
  "Frogfish",
  "Goldfish",
  "Garibaldi",
  "Ganges Shark",
  "Gibberfish",
  "Glassfish",
  "Golden Trout",
  "Grayling",
  "Guppy",
  "Halibut",
  "Hake",
  "Herring",
  "Houndshark",
  "Huchen",
  "Icefish",
  "Ilisha",
  "Inanga",
  "Inconnu",
  "Ide",
  "Iberian Barbel",
  "Jack Dempsey",
  "Jackfish",
  "Jewelfish",
  "Jellynose Fish",
  "John Dory",
  "June Sucker",
  "Koi",
  "Kaluga",
  "Kelpfish",
  "Kingfish",
  "Kokanee Salmon",
  "Knifejaw",
  "Loach",
  "Largemouth Bass",
  "Lemon Sole",
  "Lingcod",
  "Longfin",
  "Lungfish",
  "Mackerel",
  "Marlin",
  "Medusafish",
  "Minnow",
  "Mountain Whitefish",
  "Noodlefish",
  "Nase",
  "Nibble Fish",
  "Northern Pike",
  "Oarfish",
  "Oldwife",
  "Orfe",
  "Opah",
  "Orbicular Batfish",
  "Oscar",
  "Perch",
  "Parrotfish",
  "Pencilfish",
  "Piranha",
  "Porcupine Fish",
  "Prowfish",
  "Quillfish",
  "Red Snapper",
  "Rainbow Trout",
  "Redside Shiner",
  "Ribbonfish",
  "Roundhead",
  "Salmon",
  "Sacramento Perch",
  "Sculpin",
  "Seahorse",
  "Shad",
  "Silver Carp",
  "Striped Bass",
  "Stingray",
  "Tiger Trout",
  "Tarpon",
  "Tench",
  "Thornfish",
  "Tiger Muskellunge",
  "Toadfish",
  "Trumpetfish",
  "Utah Chub",
  "Vendace",
  "Vanjaram",
  "Velvetfish",
  "Viperfish",
  "White Bass",
  "Walleye",
  "Weeverfish",
  "Wiper",
  "X-Ray Fish",
  "Yellow Perch",
  "Yellowfin Tuna",
  "Zebrafish",
  "Zander"
];
const fishAdjs = [
  "Admirable",
  "Abloom",
  "Active",
  "Adequate",
  "Agile",
  "Ailing",
  "Alluring",
  "Ambitious",
  "Angelic",
  "Articulate",
  "Astonishing",
  "Austere",
  "Avid",
  "Awesome",
  "Boss",
  "Bashful",
  "Beefy",
  "Bipedal",
  "Blustering",
  "Bombastic",
  "Brutish",
  "Buttery",
  "Courageous",
  "Capricious",
  "Cerulean",
  "Challenging",
  "Civilized",
  "Clamorous",
  "Coy",
  "Cretaceous",
  "Cuddly",
  "Dynamic",
  "Dainty",
  "Devious",
  "Dignified",
  "Dominating",
  "Driven",
  "Dubious",
  "Eerie",
  "Eager",
  "Educated",
  "Effusive",
  "Elaborate",
  "Emphatic",
  "Eruptive",
  "Esoteric",
  "Euphoric",
  "Evasive",
  "Flightless",
  "Fanged",
  "Feral",
  "Fiery",
  "Flaming",
  "Frenzied",
  "Genial",
  "Gaelic",
  "Gelatinous",
  "Gifted",
  "Glimmery",
  "Goofy",
  "Grizzly",
  "Gutsy",
  "Hardened",
  "Hardy",
  "Heroic",
  "Honorable",
  "Humongous",
  "Inspiring",
  "Illustrious",
  "Imperturbable",
  "Invigorating",
  "Ironclad",
  "Isometrical",
  "Juvenile",
  "Jawless",
  "Jeweled",
  "Jittery",
  "Jovial",
  "Jurassic",
  "Knobby",
  "Kaleidoscopic",
  "Keen",
  "Kinetic",
  "Kookie",
  "Kyphotic",
  "Likable",
  "Lavish",
  "Leathered",
  "Lithe",
  "Loyal",
  "Lucent",
  "Mystical",
  "Matte",
  "Mesmerizing",
  "Miniature",
  "Monstrous",
  "Nebulous",
  "Navigational",
  "Nifty",
  "Nourishing",
  "Odorless",
  "Olive",
  "Ominous",
  "Oneiric",
  "Ornate",
  "Oscillating",
  "Pleasant",
  "Pacifistic",
  "Persevering",
  "Photovoltaic",
  "Powerful",
  "Princely",
  "Quizzical",
  "Rambunctious",
  "Ravishing",
  "Reassuring",
  "Rigorous",
  "Roughhewn",
  "Swashbuckling",
  "Sanctified",
  "Scaleless",
  "Serpentine",
  "Shimmery",
  "Singing",
  "Soldierly",
  "Sturdy",
  "Tantalizing",
  "Talented",
  "Temperate",
  "Thundering",
  "Titillating",
  "Torrential",
  "Triumphant",
  "Ultraviolet",
  "Volcanic",
  "Vagrant",
  "Venturesome",
  "Virulent",
  "Wondrous",
  "Walloping",
  "Welcoming",
  "Winged",
  "Xylotomous",
  "Youthful",
  "Yeasty",
  "Zealous",
  "Zesty"
];

const randomAdj = fishAdjs[Math.floor(Math.random() * fishAdjs.length)];
const randomNoun = fishNouns[Math.floor(Math.random() * fishNouns.length)];

console.log(randomAdj + " " + randomNoun);
