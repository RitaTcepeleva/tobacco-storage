import { buttonRecipe } from "./button";
import { avatarSlotRecipe } from "./avatar";
import { inputRecipe } from "./input";
import { menuSlotRecipe } from "./menu";
import { badgeRecipe } from "./badge";
import { cardSlotRecipe } from "./card";

export const recipes = {
  button: buttonRecipe,
  input: inputRecipe,
  badge: badgeRecipe,
};
export const slotRecipes = {
  avatar: avatarSlotRecipe,
  menu: menuSlotRecipe,
  card: cardSlotRecipe,
};
