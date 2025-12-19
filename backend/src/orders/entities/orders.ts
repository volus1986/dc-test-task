// file using to emulate date and restore it

export type Order = {
  id: number;
  title: string;
  date: string;
  description: string;
};

export let orders: Order[];

export function initOrders() {
  orders = [
    {
      id: 1,
      title:
        'Order 1 -- very long name example. Very long name. A lot letters can be here, even more text continues here, just extending the same long string further and further.',
      date: '2017-06-27 10:07:31',
      description: 'description 1',
    },
    {
      id: 2,
      title: 'Order 2 -- usual name example. Just for example.',
      date: '2017-06-28 11:08:32',
      description: 'description 2',
    },
    {
      id: 3,
      title: 'Order 3',
      date: '2017-06-29 12:09:33',
      description: 'description 3',
    },
  ] as Order[];
}

initOrders();
