import iconConfirmOrder from "../../public/assets/images/icon-order-confirmed.svg";
import { MyCart, ModalPops } from "../types";

const Modal = ({
  myCartItems,
  getDessertInfo,
  orderTotal,
  clearCart,
}: ModalPops) => {
  const formatPrice = (price: number) => price.toFixed(2);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="max:h-[95%] w-[95%] md:w-[400px] overflow-y-auto bg-white rounded-md p-5">
        <img src={iconConfirmOrder} alt="check icon" className="w-6 h-6 mb-4" />
        <h1 className="font-redHat text-Rose-900 text-2xl font-bold mb-2 ">
          Order Confirmed
        </h1>
        <p className="font-redHat text-Rose-400  text-xs">
          We hope you enjoy your food!
        </p>
        <div className="bg-Rose-50 my-5 p-4">
          <ul>
            {myCartItems.map((item: MyCart) => {
              const { name, price, image } = getDessertInfo(item.id);
              return (
                <li
                  key={item.id}
                  className="border-b border-Rose-100 py-2 flex justify-between items-center">
                  <div className="flex gap-3">
                    <img
                      src={image.thumbnail}
                      alt={name}
                      className=" block w-10 h-10"
                    />
                    <div>
                      <p className="text-Rose-900 font-redHat font-semibold text-xs ">
                        {name}
                      </p>
                      <p className="">
                        <span className="text-Red text-xs font-redHat font-semibold mr-3">
                          {item.quantity}x
                        </span>
                        <span className="text-Rose-300 text-xs font-redHat ">
                          @ ${formatPrice(price)}
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="text-Rose-900 text-sm font-semibold font-redHat">
                    ${formatPrice(price * item.quantity)}
                  </p>
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
        </div>
        <div>
          <button
            className="text-center font-redHat font-semibold text-xs text-Rose-100 rounded-full bg-Red active:scale-95 w-full py-[10px]"
            onClick={clearCart}>
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
