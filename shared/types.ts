import type { PropsWithChildren } from "react";

export type Filters = {
  brand?: string;
  flavour?: string;
  strength?: string;
};

export type Strength = "all" | "light" | "medium" | "strong";

export type Flavour =
  | "all"
  | "dessert"
  | "fruit"
  | "berry"
  | "alcohol"
  | "no"
  | "mint"
  | "gastronomy"
  | "herbal";

export type Tag = Strength | Flavour;

export type MenuItem<T> = { value: T; content: string };

type DefaultCard = {
  title: string;
  description: string;
};

export type Card = {
  image: { src: string; alt: string };
  size: number;
  tags?: Tag[];
} & DefaultCard;

export type StatisticCard = {
  caption: string[];
} & DefaultCard &
  PropsWithChildren;
