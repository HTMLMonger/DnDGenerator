`strict`;

const races = [
  "Human",
  "Dwarf",
  "Orc",
  "Elf",
  "Wood Elf",
  "Gnome",
  "Half Elf",
  "Halfling",
  "Goblin",
  "Fairy",
  "Pixie",
  "Dragonborn",
  "Giant",
  "Tielfing",
];

const alignment = [
  "Lawful Good",
  "Neutral Good",
  "Chaotic Good",
  "Lawful Neutral",
  "True Neutral",
  "Chaotic Neutral",
  "Lawful Evil",
  "Neutral Evil",
  "Chaotic Evil",
  "Unaligned",
];

const chclass = [
  "Barbarian",
  "Bard",
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rogue",
  "Sorcerer",
  "Warlock",
  "Wizard",
];
function randomize() {
  //
  //
  //
  async function fetchData(url) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    } catch (error) {
      console.error("Unable to fetch data:", error);
    }
  }

  function fetchNames(nameType) {
    return fetchData(`https://www.randomlists.com/data/names-${nameType}.json`);
  }

  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  async function generateName(gender) {
    try {
      const response = await Promise.all([
        fetchNames(gender || pickRandom(["male", "female"])),
        fetchNames("surnames"),
      ]);

      const [firstNames, lastNames] = response;

      const firstName = pickRandom(firstNames.data);
      const lastName = pickRandom(lastNames.data);

      return `${firstName} ${lastName}`;
    } catch (error) {
      console.error("Unable to generate name:", error);
    }
  }
  (async () => {
    const meta = await generateName("male");
    document.getElementById("nameid").innerHTML = meta;
  })();

  //
  //
  //
  //Create Random Race value
  const race = races[Math.floor(Math.random() * races.length)];
  document.getElementById("raceid").innerHTML = race;
  console.log("Random Race Generated");

  //Create Random Alignment value
  const align = alignment[Math.floor(Math.random() * alignment.length)];
  document.getElementById("alignid").innerHTML = align;
  console.log("Random Alignment Generated");

  //Create Random Class value
  const usrclass = chclass[Math.floor(Math.random() * chclass.length)];
  document.getElementById("classid").innerHTML = usrclass;

  //Create Level Value
  let level = Math.floor(Math.random() * 20 + 1);
  document.getElementById("levelid").innerHTML = level;

  //Create Random Health value

  let health = Math.floor(Math.random() * 20) * 10 + 100;
  document.getElementById("healid").innerHTML = health;

  //Re adjust health based on character level
  let incrementh = 0;
  for (let chlevel = 0; chlevel < 21; chlevel++) {
    incrementh = incrementh + 0.5;
  }
  health = health * incrementh;

  document.getElementById("healid").innerHTML = health;
  console.log("Random Health Generated" + " " + health);

  //Create Random Stamina value
  let stamina = Math.floor(Math.random() * 20) * 10 + 100;
  document.getElementById("stamid").innerHTML = stamina;

  //Re adjust Stamina based on character level
  let increments = 0;
  for (let chlevel = 0; chlevel < 21; chlevel++) {
    increments = increments + 0.5;
  }
  stamina = stamina * increments;

  document.getElementById("stamid").innerHTML = stamina;
  console.log("Random Stamina Generated" + " " + stamina);

  //Create Random Mana value
  let mana = Math.floor(Math.random() * 20) * 10 + 100;
  document.getElementById("manaid").innerHTML = mana;

  //Re adjust Mana based on character level
  let incrementm = 0;
  for (let chlevel = 0; chlevel < 21; chlevel++) {
    incrementm = incrementm + 0.5;
  }
  mana = mana * incrementm;

  document.getElementById("manaid").innerHTML = mana;
  console.log("Random Mana Generated" + " " + mana);

  // //Generate random throws

  function distributeStatPoints(points) {
    const stats = {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
    };
    while (points > 0) {
      const statNames = Object.keys(stats);
      const randomStat =
        statNames[Math.floor(Math.random() * statNames.length)];

      stats[randomStat] += 1;
      points -= 1;
    }
    document.getElementById("strengthid").innerHTML = stats.strength;
    document.getElementById("dextid").innerHTML = stats.dexterity;
    document.getElementById("constid").innerHTML = stats.constitution;
    document.getElementById("intelid").innerHTML = stats.intelligence;
    document.getElementById("wisdid").innerHTML = stats.wisdom;
    document.getElementById("charid").innerHTML = stats.charisma;
    return stats;
  }

  const characterStats = distributeStatPoints(20);
  console.log(characterStats);
}
