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
        'Order 1 very long name example to check overflow askdjfhkasdfh gksajgdfh dksfjgh asdfg askjdfh saikjdfh difughsidufhg ksdjfh iuwe fiasdf hsakdfh iuse',
      date: '2017-06-29 12:09:33',
      description: 'desc',
    },
    {
      id: 2,
      title:
        'Order 2 very long name example to check overflow giroe glkadf gkljdsfh gkdjfhg irueh gi',
      date: '2017-06-29 12:09:33',
      description: 'desc',
    },
    {
      id: 3,
      title: 'Order 3',
      date: '2017-06-29 12:09:33',
      description: 'desc',
    },
  ] as Order[];
}

initOrders();
