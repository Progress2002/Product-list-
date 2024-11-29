import addToCartImg from "../../public/assets/images/icon-add-to-cart.svg";
import { useEffect, useState } from "react";
import { CardProps } from "../types";

const Card = ({
  id,
  image,
  name,
  category,
  price,
  storedQuantity,
  addToCart,
  removeFromCart,
}: CardProps) => {
  const [quantity, setQuantity] = useState(storedQuantity);
  const { desktop, mobile, tablet } = image;
  const formattedPrice = price.toFixed(2);

  useEffect(() => {
    setQuantity(storedQuantity);
  }, [storedQuantity]);

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    addToCart(id, newQuantity);
  };

  const decrementQuantity = () => {
    const newQuantity = quantity - 1;
    if (newQuantity <= 0) {
      setQuantity(0);
      removeFromCart(id);
    } else {
      setQuantity(newQuantity);
      addToCart(id, newQuantity);
    }
  };

  const isSelected = quantity > 0;

  return (
    <div className="card rounded-md">
      <div
        className={`card-image w-full md:w-[250px] h-fit rounded-md border-2 ${
          isSelected && "border-Red"
        }`}>
        <img
          src={mobile}
          alt={name}
          className="w-full h-full rounded-md md:hidden"
        />
        <img
          src={desktop}
          alt={name}
          className="w-full h-full rounded-md hidden lg:block"
        />
        <img
          src={tablet}
          alt={name}
          className="w-full h-full rounded-md hidden md:block lg:hidden"
        />
      </div>
      <div className="card-content flex flex-col gap-[2px] font-redHat">
        <div className="flex justify-center">
          {quantity > 0 ? (
            <div className="flex justify-between gap-4 items-center w-36  border-[1.5px] border-Red  rounded-full py-2 px-3 relative -top-5 shadow-md font-redHat font-semibold text-sm bg-Red ">
              <button
                onClick={decrementQuantity}
                className="flex justify-center items-center border-[1.5px] border-Rose-100 rounded-full  active:scale-95 bg-inherit hover:bg-Rose-100 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[14px] h-[14px] fill-current text-white hover:text-Red p-[3px] "
                  viewBox="0 0 10 2">
                  <path d="M0 .375h10v1.25H0V.375Z" />
                </svg>
              </button>
              <p className="text-white">{quantity}</p>
              <button
                onClick={incrementQuantity}
                className="flex justify-center items-center border-[1.5px] border-Rose-100 rounded-full  active:scale-95 bg-inherit hover:bg-Rose-100 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 10 10"
                  className="w-[14px] h-[14px] fill-current text-white hover:text-Red p-[3px] ">
                  <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
                </svg>
              </button>
            </div>
          ) : (
            <button
              onClick={incrementQuantity}
              className="flex justify-center items-center border-[1.5px] border-Rose-300 bg-white rounded-full py-2 w-36 relative -top-5 shadow-md active:scale-95 hover:text-Red hover:border-Red delay-100 font-redHat text-Rose-900 font-semibold text-sm ">
              <img
                src={addToCartImg}
                alt="add to cart icon"
                className="w-5 h-4 mr-2"
              />
              Add to Cart
            </button>
          )}
        </div>
        <p className="card-type text-Rose-400 text-sm font-semibold">
          {category}
        </p>
        <h3 className="card-title text-Rose-900 text-base font-semibold ">
          {name}
        </h3>
        <p className="card-price text-Red font-semibold">${formattedPrice}</p>
      </div>
    </div>
  );
};
export default Card;
