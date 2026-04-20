export type MenuBadge = "Hausgemacht" | "Vegetarisch" | "Chef's Choice";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  badge?: MenuBadge;
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};
