import { WordGroup } from "./Game.tsx";

export interface GameData {
  words: string[];
  groups: WordGroup[];
}

export const gameData: GameData = {
  words: [ "Canes",
    "Princess",
    "Love",
    "Chinese",
    "Omakase",
    "Angel",
    "Smash",
    "Obsession",
    "Pancakes",
    "Lucky",
    "Szechuan",
    "Titayas",
    "Adoration",
    "Korean",
    "Beautiful",
    "Girl"
    ],
  groups: [
    {
      description: "Good Morning Text",
      className: "easy",
      words: ["Beautiful", "Angel", "Princess", "Girl"],
    },
    {
      description: "Our Favorite Cuisines",
      className: "medium",
      words: ["Omakase", "Szechuan", "Chinese", "Korean"],
    },
    {
      description: "Our First Meetings",
      className: "hard",
      words: ["Smash", "Titayas", "Canes", "Pancakes"],
    },
    {
      description: "How I Feel About You",
      className: "tricky",
      words: ["Obsession", "Love", "Adoration", "Lucky"],
    },
  ],
};
