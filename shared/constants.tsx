import type { MenuItem, Card, Strength, Flavour, StatisticCard } from "./types";
import { FiBox, FiDroplet } from "react-icons/fi";
import { RiFireLine } from "react-icons/ri";
import { GrAchievement } from "react-icons/gr";

export const strengthItems: MenuItem<Strength>[] = [
  { value: "light", content: "Light" },
  { value: "medium", content: "Medium" },
  { value: "strong", content: "Strong" },
];

export const strengthFilters: MenuItem<Strength>[] = [
  { value: "all", content: "All Strength" },
  ...strengthItems,
];

export const flavourItems: MenuItem<Flavour>[] = [
  { value: "dessert", content: "Dessert" },
  { value: "fruit", content: "Fruit" },
  { value: "berry", content: "Berry" },
  { value: "alcohol", content: "Alcohol" },
  { value: "no", content: "No Aroma" },
  { value: "mint", content: "Mint" },
  { value: "gastronomy", content: "Gastronomy" },
  { value: "herbal", content: "Herbal" },
];

export const flavourFilters: MenuItem<Flavour>[] = [
  { value: "all", content: "All Profiles" },
  ...flavourItems,
];

// test cards content

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

export const statisticCardItems: StatisticCard[] = [
  {
    title: "1,450",
    description: "Total Stock",
    children: <FiBox />,
    caption: ["grams", "+125g this month"],
  },
  {
    title: "Dessert",
    description: "Top Profile",
    children: <FiDroplet />,
    caption: ["45% of stash", "Growing preference"],
  },
  {
    title: "Medium",
    description: "Avg. Strength",
    children: <RiFireLine />,
    caption: ["60% of stock", "Consistent"],
  },
  {
    title: "Darkside",
    description: "Top Brand",
    children: <GrAchievement />,
    caption: ["5 varieties", "Most stocked"],
  },
];
