"use client";
import { decrease, increase } from "@/store/cartSlice";
import { addCart } from "@/store/cartSlice";
import { useSelector, useDispatch } from "react-redux";

interface Product {
  id: number;
  img: string;
  name: string;
  price: number; 
  descrption: string;
  stock: number;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.products); 

  const existingCartItem = cartItems.find(
    (item: any) => item.product.id === product.id
  );

  const quantityInCart = existingCartItem ? existingCartItem.count : 0;

  // const addToCart = () => {
  //   if (quantity > 0) {
  //     dispatch(
  //       addCart({
  //         id: product.id,
  //         img: product.img,
  //         name: product.name,
  //         price: Number(product.price), // Convert price to number
  //         descrption: product.descrption,
  //         quantity,
  //         stock: product.stock,
  //       })
  //     );
  //     setQuantity(0); // Reset the quantity after adding to the cart
  //     onClose(); // Close the modal
  //   }
  // };

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center mt-24 ">
        <div className="bg-[color:var(--bg-color)] rounded-2xl p-6 relative mx-5 ">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-[color:var(--main-color)] hover:text-gray-400 cursor-pointer "
          >
            &times;
          </button>
          <div className="md:flex gap-x-5 items-center pt-2 pb-4 px-3 ">
            <img
              src={product.img}
              alt={product.name} // Better accessibility with alt text
              className="rounded-lg w-72 lg:max-w-60 m-auto"
            />
            <div className="mt-4 md:mt-0 space-y-4">
              <div className="flex justify-between">
                <h2 className="text-base font-semibold text-center text-black">
                  {product.name}
                </h2>
                <p className="text-base max-w-72 font-semibold text-black">
                  {product.price}
                </p>
              </div>
              <p className="text-base max-w-80 text-black">
                {product.descrption}
              </p>

              <div>
                <div className="flex flex-row-reverse justify-between items-center md:flex-col gap-2">
                  <div className="flex items-center gap-7 justify-center bg-[#F3F5F9] rounded p-1 w-full">
                    <button
                      onClick={() =>
                        existingCartItem ? dispatch(decrease(product)) : null
                      }
                      className="w-8 h-8 text-lg rounded cursor-pointer text-black"
                      disabled={quantityInCart <= 1}
                    >
                      −
                    </button>

                    <span className="text-black"> {quantityInCart}</span>

                    <button
                      onClick={() =>
                        existingCartItem ? dispatch(increase(product)) : null
                      }
                      className="w-8 h-8 text-lg rounded cursor-pointer text-black"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() =>
                      dispatch(
                        addCart({
                          ...product,
                          quantity: 1,
                        })
                      )
                    }
                    disabled={!!existingCartItem}
                    className="bg-[color:var(--main-color)] text-white py-2 rounded-lg cursor-pointer w-full disabled:opacity-50"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
