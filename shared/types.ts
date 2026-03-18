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
  | "no aroma"
  | "mint"
  | "gastronomy"
  | "herbal";

export type Tag = Strength | Flavour;

export type MenuItem<T> = { value: T; content: string };

export type Card = {
  title: string;
  description: string;
  image: { src: string; alt: string };
  size: number;
  tags?: Tag[];
};
