import { useEffect, useState } from "react";
import emptyCart from "../../public/assets/images/illustration-empty-cart.svg";
import { MyCart, CartProps } from "../types";
import iconCarbonNeutral from "../../public/assets/images/icon-carbon-neutral.svg";
import Modal from "./Modal";

const Cart = ({ myCart, desserts, removeFromCart, resetCart }: CartProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemCount, setItemCount] = useState(myCart.length);
  const [myCartItems, setMyCartItems] = useState<MyCart[]>(myCart);
  const [orderTotal, setOrderTotal] = useState<any>(0);

  useEffect(() => {
    setItemCount(myCart.length);
    setMyCartItems(myCart);
    setOrderTotal(calculateOderTotal());
  }, [myCart]);

  const formatPrice = (price: number) => price.toFixed(2);

  const getDessertInfo = (id: number) => {
    const dessert = desserts.filter((item) => item.id === id)[0];
    return dessert;
  };

  const calculateOderTotal = () => {
    let total = 0;
    for (let index = 0; index < myCart.length; index++) {
      const dessert = desserts.filter(
        (item) => item.id === myCart[index].id
      )[0];
      total = total + dessert.price * myCart[index].quantity;
    }
    return formatPrice(total);
  };

  const clearCart = () => {
    resetCart();
    setIsModalOpen(false);
  };

  return (
    <div className="cart bg-white px-5 py-5 h-full w-full rounded-md ">
      <h2 className="font-redHat font-bold text-Red text-xl">
        Your Cart ({itemCount})
      </h2>
      {itemCount === 0 ? (
        <div className="flex flex-col justify-center items-center ">
          <img
            src={emptyCart}
            alt="empty cart"
            className="block w-40 h-40 lg:w-1/2 lg:h-1/2"
          />
          <p className="font-redHat font-bold text-Rose-400 my-5">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div>
          <ul>
            {myCartItems.map((item: MyCart) => {
              const { name, price } = getDessertInfo(item.id);
              return (
                <li
                  key={item.id}
                  className="border-b border-Rose-100 py-5 flex justify-between items-center">
                  <div>
                    <p className="text-Rose-900 font-redHat font-semibold text-sm mb-1">
                      {name}
                    </p>
                    <p className="">
                      <span className="text-Red font-redHat font-semibold mr-4">
                        {item.quantity}x
                      </span>
                      <span className="text-Rose-300 text-sm font-redHat mr-2">
                        @ ${formatPrice(price)}
                      </span>
                      <span className="text-Rose-500 text-sm font-semibold font-redHat">
                        ${formatPrice(price * item.quantity)}
                      </span>
                    </p>
                  </div>
                  <div>
                    <button
                      className="flex justify-center items-center border-[1.5px] border-Rose-300 rounded-full  active:scale-95 bg-inherit hover:border-Rose-900 "
                      onClick={() => removeFromCart(item.id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[14px] h-[14px] fill-current text-Rose-300 hover:text-Rose-900 p-[3px] "
                        viewBox="0 0 10 10">
                        <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
                      </svg>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-between items-center my-5">
            <p className="font-redHat text-Rose-500 text-sm font-semibold">
              Order Total
            </p>
            <p className="font-redHat font-bold text-xl text-Rose-900">
              ${orderTotal}
            </p>
          </div>
          <div className="bg-Rose-50 text-center py-3 mb-3 rounded-md flex justify-center items-center gap-2">
            <img src={iconCarbonNeutral} alt="carbon-neutral" className="" />
            <p className=" font-redHat text-xs">
              This is a{" "}
              <span className="text-Rose-900 font-semibold">
                carbon-neutral
              </span>{" "}
              delivery
            </p>
          </div>
          <div>
            <button
              className="text-center font-redHat font-semibold text-sm text-Rose-100 rounded-full bg-Red active:scale-95 w-full py-3"
              onClick={() => setIsModalOpen(true)}>
              Confirm Oder
            </button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <Modal
          myCartItems={myCartItems}
          getDessertInfo={getDessertInfo}
          orderTotal={orderTotal}
          clearCart={clearCart}
        />
      )}
    </div>
  );
};

export default Cart;
