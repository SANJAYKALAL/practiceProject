import imageIndex from '@imageIndex';

export const menuData = [
  {
    id: 1,
    image: imageIndex.deliciousImage,
    name: 'Pizza',
    data: [
      {
        id: 1,
        image: imageIndex.pizzaA,
        pizzaName: 'Mediterranean pizza',
        category: 'Vegetarian',
        new: true,
        detail:
          'Ingredients: Tomato Base, Classic Crust with toppings of Mixed Peppers, Black Olives, Mozzarella Cheese and Chorizo',
        size: [
          {
            id: 1,
            size: 'Small 9”',
            price: '£ 7.99',
          },
          {
            id: 2,
            size: 'Medium 12”',
            price: '£ 9.99',
          },
          {
            id: 3,
            size: 'Large 14”',
            price: '£ 11.99',
          },
        ],
      },
      {
        id: 2,
        image: imageIndex.pizzaB,
        pizzaName: 'Vegetarian Supreme',
        category: 'Hot & Spicy',
        new: true,

        detail:
          'Tomato Base, Classic Crust with toppings of Red Onions, Mixed Peppers, Mozzarella Cheese and Meatball',
        size: [
          {
            id: 1,
            size: 'Small 9”',
            price: '£ 7.99',
          },
          {
            id: 2,
            size: 'Medium 12”',
            price: '£ 9.99',
          },
          {
            id: 3,
            size: 'Large 14”',
            price: '£ 11.99',
          },
        ],
      },
      {
        id: 3,
        image: imageIndex.pizzaC,
        pizzaName: '7 Cheesy pizza',
        category: 'Plant-Based',
        new: true,

        detail:
          'Tomato Base, Classic Crust with toppings of Red Onions, Mushrooms, Sweetcorn, Tomatoes, Mixed Peppers and Mozzarella Cheese',
        size: [
          {
            id: 1,
            size: 'Small 9”',
            price: '£ 7.99',
          },
          {
            id: 2,
            size: 'Medium 12”',
            price: '£ 9.99',
          },
          {
            id: 3,
            size: 'Large 14”',
            price: '£ 11.99',
          },
        ],
      },
      {
        id: 4,
        image: imageIndex.pizzaA,
        pizzaName: 'Farm pizza',
        category: 'Vegetarian',
        new: false,

        detail:
          'Ingredients: Tomato Base, Classic Crust with toppings of Mixed Peppers, Black Olives, Mozzarella Cheese and Chorizo',
        size: [
          {
            id: 1,
            size: 'Small 9”',
            price: '£ 7.99',
          },
          {
            id: 2,
            size: 'Medium 12”',
            price: '£ 9.99',
          },
          {
            id: 3,
            size: 'Large 14”',
            price: '£ 11.99',
          },
        ],
      },
      {
        id: 5,
        image: imageIndex.pizzaB,
        pizzaName: 'Supreme',
        category: 'Hot & Spicy',
        new: false,

        detail:
          'Tomato Base, Classic Crust with toppings of Red Onions, Mixed Peppers, Mozzarella Cheese and Meatball',
        size: [
          {
            id: 1,
            size: 'Small 9”',
            price: '£ 7.99',
          },
          {
            id: 2,
            size: 'Medium 12”',
            price: '£ 9.99',
          },
          {
            id: 3,
            size: 'Large 14”',
            price: '£ 11.99',
          },
        ],
      },
      {
        id: 6,
        image: imageIndex.pizzaC,
        pizzaName: 'Corn pizza',
        category: 'Plant-Based',
        new: false,

        detail:
          'Tomato Base, Classic Crust with toppings of Red Onions, Mushrooms, Sweetcorn, Tomatoes, Mixed Peppers and Mozzarella Cheese',
        size: [
          {
            id: 1,
            size: 'Small 9”',
            price: '£ 7.99',
          },
          {
            id: 2,
            size: 'Medium 12”',
            price: '£ 9.99',
          },
          {
            id: 3,
            size: 'Large 14”',
            price: '£ 11.99',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    image: imageIndex.garlicBreads,
    name: 'Gralic Bread',

    data: [
      {
        id: 7,
        image: imageIndex.garlicBread,
        pizzaName: 'Garlic Bread',
        category: 'Vegetarian',
        new: true,

        detail:
          'Ingredients: Tomato Base, Classic Crust with toppings of Mixed Peppers, Black Olives, Mozzarella Cheese and Chorizo',
        size: [
          {
            id: 1,
            size: 'Small 9”',
            price: '£ 7.99',
          },
          {
            id: 2,
            size: 'Medium 12”',
            price: '£ 9.99',
          },
          {
            id: 3,
            size: 'Large 14”',
            price: '£ 11.99',
          },
        ],
      },
      {
        id: 8,
        image: imageIndex.garlicBread,
        pizzaName: 'Premium Garlic Bread',
        category: 'Plant-Based',
        new: true,

        detail:
          'Tomato Base, Classic Crust with toppings of Red Onions, Mixed Peppers, Mozzarella Cheese and Meatball',
        size: [
          {
            id: 1,
            size: 'Small 9”',
            price: '£ 7.99',
          },
          {
            id: 2,
            size: 'Medium 12”',
            price: '£ 9.99',
          },
          {
            id: 3,
            size: 'Large 14”',
            price: '£ 11.99',
          },
        ],
      },
      {
        id: 9,
        image: imageIndex.garlicBread,
        pizzaName: 'Cheese and Garlic',
        category: 'Hot & Spicy',
        new: true,

        detail:
          'Tomato Base, Classic Crust with toppings of Red Onions, Mushrooms, Sweetcorn, Tomatoes, Mixed Peppers and Mozzarella Cheese',
        size: [
          {
            id: 1,
            size: 'Small 9”',
            price: '£ 7.99',
          },
          {
            id: 2,
            size: 'Medium 12”',
            price: '£ 9.99',
          },
          {
            id: 3,
            size: 'Large 14”',
            price: '£ 11.99',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    image: imageIndex.sides,
    name: 'Sides',

    data: [
      {
        id: 10,
        image: imageIndex.potatoWedges,
        pizzaName: 'Potato Wedges',
        category: 'Vegetarian',
        new: true,

        detail:
          'Ingredients: Tomato Base, Classic Crust with toppings of Mixed Peppers, Black Olives, Mozzarella Cheese and Chorizo',
        size: [
          {
            id: 1,
            size: 'Small 9”',
            price: '£ 7.99',
          },
          {
            id: 2,
            size: 'Medium 12”',
            price: '£ 9.99',
          },
          {
            id: 3,
            size: 'Large 14”',
            price: '£ 11.99',
          },
        ],
      },
      {
        id: 11,
        image: imageIndex.potatoWedges,
        pizzaName: 'Potato Wedges',
        category: 'Plant-Based',
        new: true,

        detail:
          'Tomato Base, Classic Crust with toppings of Red Onions, Mixed Peppers, Mozzarella Cheese and Meatball',
        size: [
          {
            id: 1,
            size: 'Small 9”',
            price: '£ 7.99',
          },
          {
            id: 2,
            size: 'Medium 12”',
            price: '£ 9.99',
          },
          {
            id: 3,
            size: 'Large 14”',
            price: '£ 11.99',
          },
        ],
      },
      {
        id: 12,
        image: imageIndex.potatoWedges,
        pizzaName: 'Potato Wedges',
        category: 'Hot & Spicy',
        new: true,

        detail:
          'Tomato Base, Classic Crust with toppings of Red Onions, Mushrooms, Sweetcorn, Tomatoes, Mixed Peppers and Mozzarella Cheese',
        size: [
          {
            id: 1,
            size: 'Small 9”',
            price: '£ 7.99',
          },
          {
            id: 2,
            size: 'Medium 12”',
            price: '£ 9.99',
          },
          {
            id: 3,
            size: 'Large 14”',
            price: '£ 11.99',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    image: imageIndex.specialChips,
    name: 'Special Chips',

    data: [
      {
        id: 13,
        image: imageIndex.nachos,
        pizzaName: 'Buffalo Nachos',
        category: 'Vegetarian',
        detail:
          'Ingredients: Tomato Base, Classic Crust with toppings of Mixed Peppers, Black Olives, Mozzarella Cheese and Chorizo',
        size: [
          {
            id: 1,
            size: 'Small 9”',
            price: '£ 7.99',
          },
          {
            id: 2,
            size: 'Medium 12”',
            price: '£ 9.99',
          },
          {
            id: 3,
            size: 'Large 14”',
            price: '£ 11.99',
          },
        ],
      },
      {
        id: 14,
        image: imageIndex.nachos,
        pizzaName: 'Cowboy Nachos',
        category: 'Plant-Based',
        detail:
          'Tomato Base, Classic Crust with toppings of Red Onions, Mixed Peppers, Mozzarella Cheese and Meatball',
        size: [
          {
            id: 1,
            size: 'Small 9”',
            price: '£ 7.99',
          },
          {
            id: 2,
            size: 'Medium 12”',
            price: '£ 9.99',
          },
          {
            id: 3,
            size: 'Large 14”',
            price: '£ 11.99',
          },
        ],
      },
      {
        id: 15,
        image: imageIndex.nachos,
        pizzaName: 'Chili Dog Nachos',
        category: 'Hot & Spicy',
        detail:
          'Tomato Base, Classic Crust with toppings of Red Onions, Mushrooms, Sweetcorn, Tomatoes, Mixed Peppers and Mozzarella Cheese',
        size: [
          {
            id: 1,
            size: 'Small 9”',
            price: '£ 7.99',
          },
          {
            id: 2,
            size: 'Medium 12”',
            price: '£ 9.99',
          },
          {
            id: 3,
            size: 'Large 14”',
            price: '£ 11.99',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    image: imageIndex.drinks,
    name: 'Drinks',

    data: [
      {
        id: 16,
        image: imageIndex.cola,
        pizzaName: 'Coca Cola',
        category: '',

        detail: '',
        size: [],
        price: '£ 7.99',
      },
      {
        id: 17,
        image: imageIndex.cola,
        pizzaName: 'Pepsi',
        category: '',

        detail: '',
        size: [],
        price: '£ 7.99',
      },
      {
        id: 18,
        image: imageIndex.cola,
        pizzaName: 'Fanta',
        category: '',

        detail: '',
        size: [],
        price: '£ 7.99',
      },
    ],
  },

  {
    id: 6,
    image: imageIndex.iceCream,
    name: 'Ice creams',

    data: [
      {
        id: 19,
        image: imageIndex.ice,
        pizzaName: 'Strawberry',
        category: 'Vegetarian',

        detail: '',
        size: [],
        price: '£ 7.99',
      },
      {
        id: 20,
        image: imageIndex.ice,
        pizzaName: 'Coffee',
        category: 'Plant-Based',

        detail: '',
        size: [],
        price: '£ 7.99',
      },
      {
        id: 21,
        image: imageIndex.ice,
        pizzaName: 'Mint chip',
        category: 'Plant-Based',

        detail: '',
        size: [],
        price: '£ 7.99',
      },
    ],
  },
  {
    id: 7,
    image: imageIndex.extras,
    name: 'Extras',

    data: [
      {
        id: 22,
        image: imageIndex.kidsSpecials,
        pizzaName: 'Tomato pizza',
        category: 'Vegetarian',

        detail:
          'Ingredients: Tomato Base, Classic Crust with toppings of Mixed Peppers, Black Olives, Mozzarella Cheese and Chorizo',
        size: [
          {
            id: 1,
            size: 'Small 9”',
            price: '£ 7.99',
          },
          {
            id: 2,
            size: 'Medium 12”',
            price: '£ 9.99',
          },
          {
            id: 3,
            size: 'Large 14”',
            price: '£ 11.99',
          },
        ],
      },
      {
        id: 23,
        image: imageIndex.kids,
        pizzaName: 'Supreme Pizza',
        category: 'Plant-Based',

        detail:
          'Tomato Base, Classic Crust with toppings of Red Onions, Mixed Peppers, Mozzarella Cheese and Meatball',
        size: [
          {
            id: 1,
            size: 'Small 9”',
            price: '£ 7.99',
          },
          {
            id: 2,
            size: 'Medium 12”',
            price: '£ 9.99',
          },
          {
            id: 3,
            size: 'Large 14”',
            price: '£ 11.99',
          },
        ],
      },
      {
        id: 24,
        image: imageIndex.kidsA,
        pizzaName: 'Cheese and Garlic',
        category: 'Hot & Spicy',

        detail:
          'Tomato Base, Classic Crust with toppings of Red Onions, Mushrooms, Sweetcorn, Tomatoes, Mixed Peppers and Mozzarella Cheese',
        size: [
          {
            id: 1,
            size: 'Small 9”',
            price: '£ 7.99',
          },
          {
            id: 2,
            size: 'Medium 12”',
            price: '£ 9.99',
          },
          {
            id: 3,
            size: 'Large 14”',
            price: '£ 11.99',
          },
        ],
      },
    ],
  },
  {
    id: 8,
    image: imageIndex.kidsSpecial,
    name: 'Kids special',

    data: [
      {
        id: 24,
        image: imageIndex.frenchFries,
        pizzaName: 'French fries',
        category: 'Vegetarian',

        detail: '',
        size: [],
        price: '£ 7.99',
      },
      {
        id: 26,
        image: imageIndex.ice,
        pizzaName: 'Ice Creame',
        category: 'Plant-Based',

        detail: '',
        size: [],
        price: '£ 7.99',
      },
      {
        id: 27,
        image: imageIndex.pizzaC,
        pizzaName: 'Cheese and Garlic',
        category: 'Hot & Spicy',

        detail:
          'Tomato Base, Classic Crust with toppings of Red Onions, Mushrooms, Sweetcorn, Tomatoes, Mixed Peppers and Mozzarella Cheese',
        size: [
          {
            id: 1,
            size: 'Small 9”',
            price: '£ 7.99',
          },
          {
            id: 2,
            size: 'Medium 12”',
            price: '£ 9.99',
          },
          {
            id: 3,
            size: 'Large 14”',
            price: '£ 11.99',
          },
        ],
      },
    ],
  },
];
