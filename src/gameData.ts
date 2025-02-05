import { WordGroup } from "./Game.tsx";

export interface GameData {
  words: string[];
  groups: WordGroup[];
}

export const gameData: GameData = {
  words: [
    "Beautiful",
    "Angel",
    "Princess",
    "Girl",
    "Fingers",
    "Pillow",
    "Burrito",
    "Pyjama",
    "Chopsticks",
    "Donut",
    "Popcorn",
    "Canada",
    "Fork",
    "Spoon",
    "Bed",
    "Lamp",
  ],
  groups: [
    {
      description: "Good Morning Text",
      className: "easy",
      words: ["Beautiful", "Angel", "Princess", "Girl"],
    },
    {
      description: "Utensils",
      className: "medium",
      words: ["Fork", "Spoon", "Chopsticks", "Fingers"],
    },
    {
      description: "Things found in a bedroom",
      className: "hard",
      words: ["Pillow", "Pyjama", "Bed", "Lamp"],
    },
    {
      description: "Ones that don't fit the rest",
      className: "tricky",
      words: ["Shoe", "Ball", "Door", "Canada"],
    },
  ],
};
