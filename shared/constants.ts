import type { MenuItem, Card, Strength, Flavour } from "./types";

export const strengthItems: MenuItem<Strength>[] = [
  { value: "all", content: "All Strength" },
  { value: "light", content: "Light" },
  { value: "medium", content: "Medium" },
  { value: "strong", content: "Strong" },
];

export const flavourItems: MenuItem<Flavour>[] = [
  { value: "all", content: "All Profiles" },
  { value: "dessert", content: "Dessert" },
  { value: "fruit", content: "Fruit" },
  { value: "berry", content: "Berry" },
  { value: "alcohol", content: "Alcohol" },
  { value: "no aroma", content: "No Aroma" },
  { value: "mint", content: "Mint" },
  { value: "gastronomy", content: "Gastronomy" },
  { value: "herbal", content: "Herbal" },
];

// test cellar cards content

export const cellarCardItems: Card[] = [
  {
    title: "Pinkman",
    description: "Musthave",
    image: { src: "/pinkman.jpg", alt: "Pinkman" },
    size: 125,
    tags: ["fruit", "berry", "medium"],
  },
  {
    title: "Supernova",
    description: "Darkside",
    image: { src: "/supernova.webp", alt: "Supernova" },
    size: 250,
    tags: ["mint", "medium"],
  },
  {
    title: "Kashmir Peach",
    description: "Tangiers",
    image: { src: "/kashmir.webp", alt: "Kashmir Peach" },
    size: 150,
    tags: ["fruit", "strong"],
  },
  {
    title: "Watermelon Halls",
    description: "Element",
    image: { src: "/watermelonhalls.png", alt: "Watermelon Halls" },
    size: 50,
    tags: ["fruit", "mint", "light"],
  },
  {
    title: "Corn",
    description: "Sebero",
    image: { src: "/corn.jpeg", alt: "Corn" },
    size: 25,
    tags: ["gastronomy", "medium"],
  },
  {
    title: "Dark Chocolate",
    description: "Bonche",
    image: { src: "/chocolate.webp", alt: "chocolate" },
    size: 100,
    tags: ["dessert", "strong"],
  },
  {
    title: "Pon Pon Chik",
    description: "Palitra",
    image: { src: "/ponponchik.png", alt: "ponponchik" },
    size: 100,
    tags: ["dessert", "light"],
  },
  {
    title: "Vanilla",
    description: "Bonche",
    image: { src: "/image.png", alt: "vanilla" },
    size: 50,
    tags: ["dessert", "strong"],
  },
];
