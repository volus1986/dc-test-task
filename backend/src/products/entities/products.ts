// file using to emulate date and restore it

type Product = {
  id: number;
  serialNumber: number | string;
  isNew: number;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: {
    start: string;
    end: string;
  };
  price: {
    value: number;
    symbol: string;
    isDefault: number;
  }[];
  order: number;
  date: string;
};

export let products: Product[];

export function initProducts() {
  products = [
    {
      id: 1,
      serialNumber: 1234,
      isNew: 1,
      photo: '/pathToFile.jpg',
      title:
        'Product 1 very long name example. Very long name. A lot letters can be here, even more text continues here, just extending the same long string further and further. ',
      type: 'Monitors',
      specification: 'Specification 1',
      guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33',
      },
      price: [
        { value: 100, symbol: 'USD', isDefault: 0 },
        { value: 2600, symbol: 'UAH', isDefault: 1 },
      ],
      order: 1,
      date: '2017-06-29 12:09:33',
    },
    {
      id: 2,
      serialNumber: 1234,
      isNew: 1,
      photo: '/pathToFile.jpg',
      title: 'Product 2 -- usual name example. Just for example.',
      type: 'Monitors',
      specification: 'Specification 1',
      guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33',
      },
      price: [
        { value: 100, symbol: 'USD', isDefault: 0 },
        { value: 2600, symbol: 'UAH', isDefault: 1 },
      ],
      order: 1,
      date: '2017-06-29 12:09:33',
    },
    {
      id: 3,
      serialNumber: 1234,
      isNew: 1,
      photo: '/pathToFile.jpg',
      title: 'Product 3',
      type: 'Monitors',
      specification: 'Specification 1',
      guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33',
      },
      price: [
        { value: 100, symbol: 'USD', isDefault: 0 },
        { value: 2600, symbol: 'UAH', isDefault: 1 },
      ],
      order: 1,
      date: '2017-06-29 12:09:33',
    },
    {
      id: 4,
      serialNumber: 1234,
      isNew: 1,
      photo: '/pathToFile.jpg',
      title: 'Product 4',
      type: 'Monitors',
      specification: 'Specification 1',
      guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33',
      },
      price: [
        { value: 100, symbol: 'USD', isDefault: 0 },
        { value: 2600, symbol: 'UAH', isDefault: 1 },
      ],
      order: 1,
      date: '2017-06-29 12:09:33',
    },
    {
      id: 5,
      serialNumber: 1234,
      isNew: 1,
      photo: '/pathToFile.jpg',
      title: 'Product 5',
      type: 'Monitors',
      specification: 'Specification 1',
      guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33',
      },
      price: [
        { value: 100, symbol: 'USD', isDefault: 0 },
        { value: 2600, symbol: 'UAH', isDefault: 1 },
      ],
      order: 1,
      date: '2017-06-29 12:09:33',
    },
    {
      id: 6,
      serialNumber: 1234,
      isNew: 1,
      photo: '/pathToFile.jpg',
      title: 'Product 6',
      type: 'Laptops',
      specification: 'Specification 1',
      guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33',
      },
      price: [
        { value: 100, symbol: 'USD', isDefault: 0 },
        { value: 2600, symbol: 'UAH', isDefault: 1 },
      ],
      order: 2,
      date: '2017-06-29 12:09:33',
    },
    {
      id: 7,
      serialNumber: 1234,
      isNew: 1,
      photo: '/pathToFile.jpg',
      title: 'Product 7',
      type: 'Monitors',
      specification: 'Specification 1',
      guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33',
      },
      price: [
        { value: 100, symbol: 'USD', isDefault: 0 },
        { value: 2600, symbol: 'UAH', isDefault: 1 },
      ],
      order: 3,
      date: '2017-06-29 12:09:33',
    },
    {
      id: 8,
      serialNumber: 1234,
      isNew: 1,
      photo: '/pathToFile.jpg',
      title: 'Product 8',
      type: 'Monitors',
      specification: 'Specification 1',
      guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33',
      },
      price: [
        { value: 100, symbol: 'USD', isDefault: 0 },
        { value: 2600, symbol: 'UAH', isDefault: 1 },
      ],
      order: 3,
      date: '2017-06-29 12:09:33',
    },
    {
      id: 9,
      serialNumber: 1234,
      isNew: 1,
      photo: '/pathToFile.jpg',
      title: 'Product 9',
      type: 'Laptops',
      specification: 'Specification 1',
      guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33',
      },
      price: [
        { value: 100, symbol: 'USD', isDefault: 0 },
        { value: 2600, symbol: 'UAH', isDefault: 1 },
      ],
      order: 3,
      date: '2017-06-29 12:09:33',
    },
  ];
}

initProducts();
