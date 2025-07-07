type Category = {
  id: string;
  name: string;
  photo?: string;
};

type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
};

type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
};

type Operation = Cost | Profit;

const generateId = (): string => Math.random().toString(36).substring(2, 9);

const getRandomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

const randomFromArray = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)];

const categories: Category[] = [
  { id: 'cat1', name: 'Electronics', photo: 'electronics.jpg' },
  { id: 'cat2', name: 'Clothing', photo: 'clothing.jpg' },
  { id: 'cat3', name: 'Food', photo: 'food.jpg' },
  { id: 'cat4', name: 'Furniture' },
  { id: 'cat5', name: 'Books', photo: 'books.jpg' },
];

const productNames: string[] = [
  'Smartphone',
  'Laptop',
  'T-Shirt',
  'Jeans',
  'Apple',
  'Banana',
  'Chair',
  'Table',
  'Novel',
  'Textbook',
];

const operationNames: string[] = [
  'Grocery shopping',
  'Salary',
  'Freelance work',
  'Restaurant bill',
  'Electricity bill',
  'Bonus',
];

export const createRandomProduct = (createdAt: string) => {
  const category = randomFromArray(categories);
  const name = randomFromArray(productNames);
  const price = getRandomInt(10, 1000);
  const oldPrice = Math.random() > 0.5 ? price + getRandomInt(5, 50) : undefined;

  return {
    id: generateId(),
    name,
    photo: `${name.toLowerCase().replace(' ', '-')}.jpg`,
    desc: Math.random() > 0.3 ? `Description for ${name}` : undefined,
    createdAt,
    oldPrice,
    price,
    category,
  };
};

export const createRandomOperation = (createdAt: string) => {
  const isCost = Math.random() > 0.5;
  const name = randomFromArray(operationNames);
  const amount = getRandomInt(5, 500);
  const category = randomFromArray(categories);

  const baseOperation = {
    id: generateId(),
    name,
    desc: Math.random() > 0.3 ? `Description for ${name}` : undefined,
    createdAt,
    amount,
    category,
  };

  return isCost ? { ...baseOperation, type: 'Cost' } : { ...baseOperation, type: 'Profit' };
};
