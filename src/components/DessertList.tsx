import Card from "./Card";

import { Dessert, MyCart } from "../types";

interface DessertsListProps {
  desserts: Dessert[];
  myCart: MyCart[];
  addToCart: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
}

const DessertsList = ({
  desserts,
  myCart,
  addToCart,
  removeFromCart,
}: DessertsListProps) => {
  return (
    <div className="grid gap-5  grid-cols-1 md:grid-cols-3">
      {desserts.map((dessert) => (
        <Card
          key={dessert.id}
          id={dessert.id}
          image={dessert.image}
          name={dessert.name}
          category={dessert.category}
          price={dessert.price}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          storedQuantity={
            myCart.find((item) => item.id === dessert.id)?.quantity || 0
          }
        />
      ))}
    </div>
  );
};

export default DessertsList;
