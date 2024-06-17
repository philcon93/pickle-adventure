import { SceneProps } from "./scene";

type DataId = string;
type Scenes = Record<DataId, SceneProps>;

export const scenes: Scenes = {
  intro: {
    title: "Choose Your Adventure",
    description: `You are an employee of the UIPlat team, a group renowned for creating the most innovative user interfaces in the kingdom. Your mission is to find the most outstanding engineer and present them with the 'Pickle Pick' award for their tireless work on Shareable Scenarios. The engineer, known for their incredible contributions, has been elusive. Your journey to find and honor them begins now.`,
    links: [
      {
        label: "Begin",
        url: "/1",
      },
    ],
  },
  "pickle-bri": {
    title: "Congratulations!",
    links: [
      {
        label: "Play again?",
        url: "/",
      },
    ],
  },
  "1": {
    title: "The Enchanted UIPlat Office",
    description: `You start your mission in the enchanted UIPlat office where your manager, a wise old wizard, gives you three leads on where the award recipient might be.`,
    links: [
      {
        label: "Visit the Mystic Forest: Known for hiding ancient secrets",
        url: "/2A",
      },
      {
        label:
          "Investigate the Abandoned Castle: Rumored to be the engineer's secret workshop",
        url: "/2B",
      },
      {
        label:
          "Go to the Crystal Cave: A place where many geniuses go to find inspiration",
        url: "/2C",
      },
    ],
  },
  "2A": {
    title: "Mystic Forest",
    description: `You venture into the Mystic Forest, a place filled with magical creatures and whispering trees. You come across a talking owl who claims to know the engineer you seek.`,
    links: [
      {
        label: "Follow the owl",
        url: "/3A",
      },
      {
        label: "Continue deeper into the forest on your own",
        url: "/3B",
      },
    ],
  },
  "2B": {
    title: "Abandoned Castle",
    description: `The abandoned castle is eerie and filled with old enchantments. You find a clue pointing to a hidden laboratory in the dungeons.`,
    links: [
      {
        label: "Explore the dungeons",
        url: "/3C",
      },
      {
        label: "Search the main halls thoroughly",
        url: "/3D",
      },
    ],
  },
  "2C": {
    title: "Crystal Cave",
    description: `The Crystal Cave sparkles with magical energy. You meet a wise old miner who speaks of an engineer who used to visit.`,
    links: [
      {
        label: "Follow the miner's directions",
        url: "/3E",
      },
      {
        label: "Explore the cave on your own",
        url: "/3F",
      },
    ],
  },
  //
  "3A": {
    title: "Following the Owl",
    description: `The owl leads you to a hidden glade where you find an entrance to an underground workshop filled with amazing inventions.`,
    links: [
      {
        label: "Enter the workshop",
        url: "/4A",
      },
      {
        label: "Look around the glade for more clues",
        url: "/4B",
      },
    ],
  },
  "3B": {
    title: "Deeper into the Forest",
    description: `You find an ancient tree with carvings that lead you to a secret underground chamber.`,
    links: [
      {
        label: "Enter the chamber",
        url: "/4A",
      },
      {
        label: "Investigate the carvings further",
        url: "/4B",
      },
    ],
  },
  "3C": {
    title: "Dungeon Exploration",
    description: `The dungeons are dark and filled with traps. You find a hidden door that seems to lead to a secret lab.`,
    links: [
      {
        label: "Open the hidden door",
        url: "/4C",
      },
      {
        label: "Search the dungeons for more clues",
        url: "/4D",
      },
    ],
  },
  "3D": {
    title: "Main Hall Search",
    description: `You find a secret passage in the main hall leading to a hidden workshop.`,
    links: [
      {
        label: "Enter the workshop",
        url: "/4C",
      },
      {
        label: "Look for more hidden passages",
        url: "/4D",
      },
    ],
  },
  "3E": {
    title: "Following Directions",
    description: `The miner's directions lead you to a secluded part of the cave with a magical barrier.`,
    links: [
      {
        label: "Find a way to break the barrier",
        url: "/4E",
      },
      {
        label: "Look for another entrance",
        url: "/4F",
      },
    ],
  },
  "3F": {
    title: "Exploring the Cave",
    description: `You find a hidden tunnel leading to an underground laboratory filled with glowing crystals and strange devices.`,
    links: [
      {
        label: "Enter the laboratory",
        url: "/4E",
      },
      {
        label: "Search the tunnel for more clues",
        url: "/4F",
      },
    ],
  },
  "4A": {
    title: "Underground Workshop",
    description: `Inside the underground workshop, you see someone working tirelessly on new magical inventions. It's Bri! You present her with the Pickle Pick award for her outstanding work on Shareable Scenarios.`,
    links: [
      {
        label:
          "Congratulations! You found Bri and presented her with the Pickle Pick award!",
        url: "/pickle-bri",
      },
    ],
  },
  "4B": {
    title: "Glade and Carvings",
    description: `The carvings lead you to a hidden door that opens into a workshop where you find Bri. You present her with the Pickle Pick award for her amazing contributions.`,
    links: [
      {
        label:
          "Congratulations! You found Bri and presented her with the Pickle Pick award!",
        url: "/pickle-bri",
      },
    ],
  },
  "4C": {
    title: "Secret Lab",
    description: `You enter the secret lab and find Bri working on a complex machine. You present her with the Pickle Pick award for her tireless efforts.`,
    links: [
      {
        label:
          "Congratulations! You found Bri and presented her with the Pickle Pick award!",
        url: "/pickle-bri",
      },
    ],
  },
  "4D": {
    title: "Dungeon Clues",
    description: `You find more clues that direct you to a hidden lab where Bri is working. You present her with the Pickle Pick award for her extraordinary work.`,
    links: [
      {
        label:
          "Congratulations! You found Bri and presented her with the Pickle Pick award!",
        url: "/pickle-bri",
      },
    ],
  },
  "4E": {
    title: "Magical Laboratory",
    description: `Inside the magical laboratory, you see Bri working with glowing crystals. You present her with the Pickle Pick award for her incredible innovations.`,
    links: [
      {
        label:
          "Congratulations! You found Bri and presented her with the Pickle Pick award!",
        url: "/pickle-bri",
      },
    ],
  },
  "4F": {
    title: "Hidden Tunnel",
    description: `The hidden tunnel leads you to a secret lab where you find Bri working. You present her with the Pickle Pick award for her outstanding engineering feats.`,
    links: [
      {
        label:
          "Congratulations! You found Bri and presented her with the Pickle Pick award!",
        url: "/pickle-bri",
      },
    ],
  },
};
