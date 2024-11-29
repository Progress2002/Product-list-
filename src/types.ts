export interface Dessert {
  id: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
}

export interface MyCart {
  id: number;
  quantity: number;
}

export interface ModalPops {
  myCartItems: MyCart[];
  getDessertInfo: (id: number) => Dessert;
  orderTotal: number;
  clearCart: () => void;
}

export interface CartProps {
  myCart: MyCart[];
  desserts: Dessert[];
  resetCart: () => void;
  removeFromCart: (id: number) => void;
}

export interface CardProps {
  id: number;
  image: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
  name: string;
  category: string;
  price: number;
  storedQuantity: number;
  addToCart: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
}
