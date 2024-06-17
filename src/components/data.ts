import { SceneProps } from "./scene";

type DataId = string;
type Scenes = Record<DataId, SceneProps>;

export const scenes: Scenes = {
  intro: {
    title: "Choose Your Adventure",
    description: `You are part of team UIPlat, a group renowned for creating the most innovative user interfaces in the kingdom. Your mission is to find the most outstanding engineer and present them with the 'Pickle Pick' award for their tireless work. However, the journey to find and honor them is filled with trials and challenges.`,
    image: {
      src: "/intro.webp",
    },
    links: [
      {
        label: "Begin Journey",
        url: "/1",
      },
    ],
  },
  "pickle-bri": {
    title: "Congratulations!",
    description: `Congratulations on receiving the prestigious Pickle Pick award Bri! Your tireless work on Shareable Scenarios has been nothing short of amazing. Your perseverance and relentless dedication hasn't gone unnoticed. You bring joy and enthusiasm to every conversation, thank you for your hard work, your brilliant ideas, and your infectious positive spirit!`,
    image: {
      src: "/pickle-bri.jpg",
    },
    links: [
      {
        label: "Play again?",
        url: "/",
      },
    ],
  },
  "1": {
    title: "The Enchanted UIPlat Office",
    description: `You start your mission in the enchanted UIPlat office where a goat, gives you three leads on where the award recipient might be.`,
    image: {
      src: "/1.webp",
    },
    links: [
      {
        label: "Visit the Mystic Forest",
        url: "/2A",
      },
      {
        label: "Investigate the Abandoned Castle",
        url: "/2B",
      },
      {
        label: "Go to the Crystal Cave",
        url: "/2C",
      },
    ],
  },
  "2A": {
    title: "Mystic Forest",
    description: `You venture into the Mystic Forest, a place filled with magical creatures and whispering trees. As you walk deeper into the forest, you come across a talking ibis who offers you guidance.`,
    image: {
      src: "/2A.webp",
    },
    links: [
      {
        label: "Follow the ibis",
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
    image: {
      src: "/2B.webp",
    },
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
    image: {
      src: "/2C.webp",
    },
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
  "3A": {
    title: "Following the Ibis",
    description: `The ibis leads you to a clearing where you encounter a guardian who demands you recite the Pickle Pledge to proceed.`,
    image: {
      src: "/3A.webp",
    },
    links: [
      {
        label:
          "Recite: I affirm it official, Your work’s so nimble, That’s why I’ve decided, To bestow you the pickle.",
        url: "/5A",
      },
      {
        label:
          "Recite: I proclaim it official, Your work’s fully sickle, That’s why I’ve decided, To give you the pickle.",
        url: "/4A",
      },
    ],
  },
  "3B": {
    title: "Deeper into the Forest",
    description: `You find an ancient tree with carvings that lead you to a secret underground chamber. To gain entry, you must choose between taking a treasure or sharing your resources with others.`,
    image: {
      src: "/3B.webp",
    },
    links: [
      {
        label: "Choose to share your resources",
        url: "/4B",
      },
      {
        label: "Choose to take the treasure",
        url: "/5B",
      },
    ],
  },
  "3C": {
    title: "Dungeon Exploration",
    description: `The dungeons are dark and filled with traps. You find a hidden door that requires you to recite the Pickle Pledge to open.`,
    image: {
      src: "/3C.webp",
    },
    links: [
      {
        label:
          "Recite: I proclaim it official, Your work’s fully sickle, That’s why I’ve decided, To give you the pickle.",
        url: "/4A",
      },
      {
        label:
          "Recite: I confirm it official, Your work’s remarkably brickle, That’s why I’ve decided, To honor you with the pickle.",
        url: "/5A",
      },
    ],
  },
  "3D": {
    title: "Main Hall Search",
    description: `You find a secret passage in the main hall leading to a hidden workshop. To open the passage, you must decide whether to share your knowledge or keep it to yourself.`,
    image: {
      src: "/3D.webp",
    },
    links: [
      {
        label: "Choose to share your knowledge",
        url: "/4B",
      },
      {
        label: "Choose to keep your knowledge",
        url: "/5B",
      },
    ],
  },
  "3E": {
    title: "Following Directions",
    description: `The miner's directions lead you to a secluded part of the cave with a magical barrier. To pass through, you must recite the Pickle Pledge.`,
    image: {
      src: "/3E.webp",
    },
    links: [
      {
        label:
          "Recite: I declare it official, Your work’s beyond fickle, That’s why I’ve decided, To award you the pickle.",
        url: "/5A",
      },
      {
        label:
          "Recite: I proclaim it official, Your work’s fully sickle, That’s why I’ve decided, To give you the pickle.",
        url: "/4A",
      },
    ],
  },
  "3F": {
    title: "Exploring the Cave",
    description: `You find a hidden tunnel leading to an underground laboratory filled with glowing crystals and strange devices. To enter, you must decide whether to share the discoveries or claim them for yourself.`,
    image: {
      src: "/3F.webp",
    },
    links: [
      {
        label: "Choose to share the discoveries",
        url: "/4B",
      },
      {
        label: "Choose to claim them for yourself",
        url: "/5B",
      },
    ],
  },
  "4A": {
    title: "Reciting the Pledge",
    description: `You correctly recite the Pickle Pledge: "I proclaim it official, Your work’s fully sickle, That’s why I’ve decided, To give you the pickle." A magical door opens, and you find yourself in a grand hall where Bri is working on a new invention.`,
    image: {
      src: "/4A.webp",
    },
    links: [
      {
        label: "Present Bri with the Pickle Pick award!",
        url: "/pickle-bri",
      },
    ],
  },
  "4B": {
    title: "Choosing to Share",
    description: `You decide to share, and a hidden door opens, revealing a grand hall where Bri is diligently working on her latest creation.`,
    image: {
      src: "/4B.webp",
    },
    links: [
      {
        label: "Present Bri with the Pickle Pick award!",
        url: "/pickle-bri",
      },
    ],
  },
  "5A": {
    title: "Reciting the wrong pledge",
    description: `The ground opens beneath you and you fall into a pit of despair, ending your journey`,
    image: {
      src: "/5A.webp",
    },
    links: [
      {
        label: "Try again?",
        url: "/intro",
      },
    ],
  },
  "5B": {
    title: "Choosing to keep for yourself",
    description: `A magical curse transforms you into a stone statue, forever guarding the secrets you tried to hoard`,
    image: {
      src: "/5B.webp",
    },
    links: [
      {
        label: "Try again?",
        url: "/intro",
      },
    ],
  },
};
