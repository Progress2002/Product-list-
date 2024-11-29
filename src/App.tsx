import { useCallback, useEffect, useState } from "react";
import DessertsList from "./components/DessertList";
import Cart from "./components/Cart";
import data from "./data.json";
import "./App.css";
import { Dessert, MyCart } from "./types";

function App() {
  // Destructure desserts from data
  const desserts: Dessert[] = data;

  // Initialize cart from localStorage or fallback to an empty array
  const localData = localStorage.getItem("myCart");
  const storedCart = localData ? JSON.parse(localData) : [];

  // Initialize myCart state with storedCart
  const [myCart, setMyCart] = useState<MyCart[]>(storedCart);

  //  Update localStorage whenever myCart changes
  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(myCart));
  }, [myCart]);

  // Add to cart function
  const addToCart = useCallback(
    (id: number, quantity: number) => {
      const index = myCart.findIndex((item) => item.id === id);
      if (index === -1) {
        setMyCart([...myCart, { id, quantity }]);
      } else {
        const newCart = [...myCart];
        newCart[index].quantity = quantity;
        setMyCart(newCart);
      }
    },
    [myCart]
  );

  // Remove from cart function
  const removeFromCart = useCallback(
    (id: number) => {
      const newCart = myCart.filter((item) => item.id !== id);
      setMyCart(newCart);
    },
    [myCart]
  );

  const resetCart = () => {
    const newCart: MyCart[] = [];
    setMyCart(newCart);
    localStorage.setItem("myCart", JSON.stringify(newCart));
  };

  return (
    <main className="p-7 lg:p-14 bg-Rose-100 min-h-screen ">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-4">
        <section className="flex-1" aria-labelledby="card-section-heading">
          <h1 id="card-section-heading" className="font-redHat font-extrabold text-3xl mb-7 text-Rose-900">
            Desserts
          </h1>
          <DessertsList
            desserts={desserts}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            myCart={myCart}
          />
        </section>
        <section className="h-fit w-full lg:w-[350px]" aria-labelledby="card-section">
          <div id="card-section">
            <Cart
              myCart={myCart}
              desserts={desserts}
              removeFromCart={removeFromCart}
              resetCart={resetCart}
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default App;
