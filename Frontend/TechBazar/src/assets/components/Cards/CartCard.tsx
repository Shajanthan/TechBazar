import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const dummyCartItems: CartItem[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1000,
    image: "/images/Laptop.png",
    quantity: 1,
  },
  {
    id: 2,
    name: "Gaming Mouse",
    price: 1000,
    image: "/images/Iphone16Pro.jpg",
    quantity: 2,
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 1000,
    image: "/images/Iphone16Pro.jpg",
    quantity: 2,
  },
];

const CartCard: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(dummyCartItems);
  const [subtotal, setSubtotal] = useState<number>(0);
  const shipping = 200;
  const [tax, setTax] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const calcSubtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const calculatedTax = parseFloat((calcSubtotal * 0.1).toFixed(2));
    const calcTotal = calcSubtotal + calculatedTax + shipping;

    setSubtotal(calcSubtotal);
    setTax(calculatedTax);
    setTotal(calcTotal);
  }, [cartItems]);

  const increaseQty = (id: number): void => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id: number): void => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleQtyChange = (id: number, newQty: number): void => {
    if (newQty < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  const removeItem = (id: number): void => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 gap-y-4">
      {/* Cart Items List */}
      <div className="grid grid-cols-1 col-span-2 gap-2  w-full">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border border-gray-200 rounded "
          >
            <div className="flex items-center justify-center w-full p-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-[80px] h-[80px] object-fit rounded"
              />
            </div>
            <div className="w-full">
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-gray-500 text-sm">Rs {item.price}</p>
              </div>
            </div>
            <div className="w-full justify-center">
              <div className="flex justify-center items-center">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-2 text-lg bg-gray-100 rounded border border-gray-300 hover:bg-black hover:text-white transition-all duration-500"
                >
                  −
                </button>

                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    handleQtyChange(item.id, parseInt(e.target.value) || 1)
                  }
                  className="w-16 focus:outline-0 text-center border border-gray-300 rounded px-2 py-1 mx-2 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                />

                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-2 text-lg bg-gray-100 rounded border border-gray-300 hover:bg-black hover:text-white transition-all duration-500"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full">
              <div className="font-bold text-gray-700 w-full">
                Rs {item.price * item.quantity}
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-sm flex justify-center items-center w-full text-black hover:text-red-500 transition-all duration-500"
              >
                <MdDelete size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="w-full flex justify-center items-center">
        <div className="w-sm border border-gray-300 shadow-md rounded-md bg-gray-50 p-4">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span>Rs {subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Tax (10%)</span>
            <span>Rs {tax}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Shipping Fee</span>
            <span>Rs {shipping}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold text-red-600">
            <span>Total</span>
            <span>Rs {total}</span>
          </div>
          <button
            className="mt-6 w-full bg-black text-white py-3 rounded hover:bg-red-500 transition-all duration-500"
            onClick={() => alert("Proceeding to checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
