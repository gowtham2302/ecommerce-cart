import React, { createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";


type cartType = {
  id: number;
  quantity: number;
};

type ShoppingCartContextprops = {
  getItemQuantity: (id: number) => number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeItem: (id: number) => void;
  openCart: () => void;
  closeCart: () => void;
  cartQuantity: number;
  cart: cartType[];
};

type ShoppingCartProviderprops = {
  children: React.ReactNode;
};

const ShoppingCartContext = createContext({} as ShoppingCartContextprops);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderprops) {

  const [cart, setcart] = useState<cartType[]>([]);

  const [open , setopen] = useState(false)

  const cartQuantity = cart.reduce(
    (quantity , item) => item.quantity + quantity,
    0
  ) 

  const openCart = () => setopen(true)

  const closeCart = () => setopen(false)

  function getItemQuantity(id: number) {
    return cart.find((item) => item.id == id)?.quantity || 0;
  }

  function increaseQuantity(id: number) {
    setcart((currItem) => {
      if (currItem.find((item) => item.id === id) == null) {
        return [...currItem, { id, quantity: 1 }];
      } else {
        return currItem.map((item) => {
          if (item.id == id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseQuantity(id: number) {
    setcart((currItem) => {
      if (currItem.find((item) => item.id === id)?.quantity === 1) {
        return currItem.filter((item) => item.id !== id);
      } else {
        return currItem.map((item) => {
          if (item.id == id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeItem(id: number) {
    setcart((currItem) => {
      return currItem.filter((item) => item.id !== id);
    });
  }



  return (
    <ShoppingCartContext.Provider
      value={{
        increaseQuantity,
        decreaseQuantity,
        getItemQuantity,
        removeItem,
        cart,
        cartQuantity,
        openCart,
        closeCart,
      }}
    >
      {children}
      <ShoppingCart open={open}/>
    </ShoppingCartContext.Provider>
  );
}
