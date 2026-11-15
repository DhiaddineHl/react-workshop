export type Item = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export type User = {
  id: number;
  name: string;
  items: Item[];
};

export const usersList: User[] = [
  {
    id: 1,
    name: "John Doe",
    items: [
      { id: 1, name: "Laptop", description: "A 14-inch work laptop.", price: 1200 },
      { id: 2, name: "Headphones", description: "Noise-cancelling headphones.", price: 250 },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    items: [
      { id: 1, name: "Camera", description: "Mirrorless camera with a 24MP sensor.", price: 900 },
      { id: 2, name: "Tripod", description: "Lightweight aluminium tripod.", price: 80 },
      { id: 3, name: "Backpack", description: "Waterproof camera backpack.", price: 120 },
    ],
  },
  {
    id: 3,
    name: "Alice Johnson",
    items: [
      { id: 1, name: "Keyboard", description: "Mechanical keyboard with brown switches.", price: 150 },
    ],
  },
];
