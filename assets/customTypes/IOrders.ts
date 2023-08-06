interface IOrders {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  address2: string;
  city: string;
  region: string;
  country: string;
  zipcode: number;
  phone: number;
  cart: ICart[];
}

interface ICart {
  map(arg0: (item: any) => any): import("react").ReactNode;
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  jewelery: string;
  image: string;
  quantity: number;
  rating: IRating[];
}

interface IRating {
  rating: {
    rate: number;
    count: number;
  };
}

export type { IOrders, ICart, IRating };
