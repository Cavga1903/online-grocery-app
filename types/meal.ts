// types/meal.ts
export type Category = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

// types/offers.ts
export type Offer = {
  id: string;
  title: string;
  price: string;
  image: string;
  discount?: string;
};