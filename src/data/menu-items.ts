export type MenuCategory = "coffee" | "food" | "beans";

export interface MenuItem {
  id: string;
  category: MenuCategory;
  name: { fr: string; en: string };
  description: { fr: string; en: string };
  price: number;
  image: string;
  featured?: boolean;
  tags?: string[];
}

export const menuItems: MenuItem[] = [
  // Coffee (6)
  {
    id: "espresso",
    category: "coffee",
    name: { fr: "Espresso", en: "Espresso" },
    description: {
      fr: "Un espresso intense et corsé, préparé avec nos grains fraîchement torréfiés.",
      en: "An intense, full-bodied espresso made with our freshly roasted beans.",
    },
    price: 3.5,
    image: "/images/products/coffee/espresso.webp",
    featured: true,
    tags: ["classic"],
  },
  {
    id: "cappuccino",
    category: "coffee",
    name: { fr: "Cappuccino", en: "Cappuccino" },
    description: {
      fr: "Le parfait équilibre entre espresso, lait chaud et mousse de lait onctueuse.",
      en: "The perfect balance of espresso, steamed milk and velvety milk foam.",
    },
    price: 5.0,
    image: "/images/products/coffee/cappuccino.webp",
    featured: true,
    tags: ["classic"],
  },
  {
    id: "latte-vanille",
    category: "coffee",
    name: { fr: "Latte Vanille", en: "Vanilla Latte" },
    description: {
      fr: "Un latte doux et crémeux infusé à la vanille de Madagascar.",
      en: "A smooth, creamy latte infused with Madagascar vanilla.",
    },
    price: 5.5,
    image: "/images/products/coffee/vanilla.webp",
    tags: ["sweet"],
  },
  {
    id: "matcha-latte",
    category: "coffee",
    name: { fr: "Matcha Latte", en: "Matcha Latte" },
    description: {
      fr: "Matcha cérémoniel du Japon mélangé avec du lait d'avoine mousseux.",
      en: "Ceremonial grade Japanese matcha blended with frothy oat milk.",
    },
    price: 6.0,
    image: "/images/products/coffee/matcha.webp",
    tags: ["new", "vegan"],
  },
  {
    id: "cafe-de-olla",
    category: "coffee",
    name: { fr: "Café de Olla", en: "Café de Olla" },
    description: {
      fr: "Recette traditionnelle mexicaine au piloncillo et à la cannelle.",
      en: "Traditional Mexican recipe with piloncillo and cinnamon.",
    },
    price: 5.5,
    image: "/images/products/coffee/olla.webp",
    tags: ["new"],
  },
  {
    id: "mocha",
    category: "coffee",
    name: { fr: "Mocha", en: "Mocha" },
    description: {
      fr: "Espresso, chocolat noir belge et lait chaud couronné de crème fouettée.",
      en: "Espresso, Belgian dark chocolate and steamed milk topped with whipped cream.",
    },
    price: 6.0,
    image: "/images/products/coffee/mocha.webp",
    tags: ["sweet"],
  },

  // Food (6)
  {
    id: "croissant",
    category: "food",
    name: { fr: "Croissant au beurre", en: "Butter Croissant" },
    description: {
      fr: "Feuilleté, doré et fondant, préparé chaque matin avec du beurre AOP.",
      en: "Flaky, golden and melt-in-your-mouth, made every morning with AOP butter.",
    },
    price: 2.5,
    image: "/images/products/food/croissant.webp",
    featured: true,
  },
  {
    id: "cookie",
    category: "food",
    name: { fr: "Cookie chocolat", en: "Chocolate Cookie" },
    description: {
      fr: "Moelleux au cœur et croustillant sur les bords, avec des pépites de chocolat noir.",
      en: "Soft in the center and crispy on the edges, with dark chocolate chips.",
    },
    price: 3.0,
    image: "/images/products/food/cookies.webp",
    featured: true,
  },
  {
    id: "mochi",
    category: "food",
    name: { fr: "Mochi glacé", en: "Mochi Ice Cream" },
    description: {
      fr: "Pâte de riz japonaise garnie de glace artisanale. Matcha, fraise ou sésame.",
      en: "Japanese rice dough filled with artisan ice cream. Matcha, strawberry or sesame.",
    },
    price: 4.5,
    image: "/images/products/food/mochi.webp",
    tags: ["new"],
  },
  {
    id: "churros",
    category: "food",
    name: { fr: "Churros", en: "Churros" },
    description: {
      fr: "Churros croustillants saupoudrés de sucre et cannelle, servis avec sauce chocolat.",
      en: "Crispy churros dusted with sugar and cinnamon, served with chocolate sauce.",
    },
    price: 4.0,
    image: "/images/products/food/churros.webp",
    tags: ["new"],
  },
  {
    id: "avocado-toast",
    category: "food",
    name: { fr: "Avocado Toast", en: "Avocado Toast" },
    description: {
      fr: "Pain au levain, avocat écrasé, œuf poché, graines de sésame et piment d'Espelette.",
      en: "Sourdough bread, smashed avocado, poached egg, sesame seeds and Espelette pepper.",
    },
    price: 8.5,
    image: "/images/products/food/avocado.webp",
    tags: ["vegan"],
  },
  {
    id: "carrot-cake",
    category: "food",
    name: { fr: "Carrot Cake", en: "Carrot Cake" },
    description: {
      fr: "Gâteau moelleux aux carottes, noix et glaçage cream cheese.",
      en: "Moist carrot cake with walnuts and cream cheese frosting.",
    },
    price: 5.0,
    image: "/images/products/food/carrot.webp",
  },

  // Beans (6)
  {
    id: "guatemala",
    category: "beans",
    name: { fr: "Guatemala Single Origin", en: "Guatemala Single Origin" },
    description: {
      fr: "Notes de chocolat, caramel et noisette. Torréfaction moyenne.",
      en: "Notes of chocolate, caramel and hazelnut. Medium roast.",
    },
    price: 11.0,
    image: "/images/products/beans/guatemala.webp",
    featured: true,
  },
  {
    id: "ethiopia",
    category: "beans",
    name: { fr: "Ethiopia Yirgacheffe", en: "Ethiopia Yirgacheffe" },
    description: {
      fr: "Arômes floraux et fruités, avec des notes de jasmin et de bergamote.",
      en: "Floral and fruity aromas, with notes of jasmine and bergamot.",
    },
    price: 13.0,
    image: "/images/products/beans/yirgacheffe.webp",
    featured: true,
  },
  {
    id: "colombia",
    category: "beans",
    name: { fr: "Colombia Supremo", en: "Colombia Supremo" },
    description: {
      fr: "Café rond et équilibré avec des notes de fruits rouges et de cacao.",
      en: "Smooth and balanced coffee with notes of red berries and cocoa.",
    },
    price: 10.0,
    image: "/images/products/beans/colombia.webp",
  },
  {
    id: "brazil",
    category: "beans",
    name: { fr: "Brazil Santos", en: "Brazil Santos" },
    description: {
      fr: "Doux et peu acide, avec des notes de noisette et de chocolat au lait.",
      en: "Smooth and low acidity, with notes of hazelnut and milk chocolate.",
    },
    price: 9.0,
    image: "/images/products/beans/brazil.webp",
  },
  {
    id: "kenya",
    category: "beans",
    name: { fr: "Kenya AA", en: "Kenya AA" },
    description: {
      fr: "Café vif et complexe avec une acidité brillante et des notes d'agrumes.",
      en: "Bright and complex coffee with brilliant acidity and citrus notes.",
    },
    price: 14.0,
    image: "/images/products/beans/kenya.webp",
  },
  {
    id: "house-blend",
    category: "beans",
    name: { fr: "House Blend", en: "House Blend" },
    description: {
      fr: "Notre mélange signature : équilibré, doux et parfait pour tous les jours.",
      en: "Our signature blend: balanced, smooth and perfect for everyday.",
    },
    price: 8.0,
    image: "/images/products/beans/house.webp",
    featured: true,
  },
];
