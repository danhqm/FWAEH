import React, { createContext, useContext, useState, type ReactNode } from 'react';

// Define the shape of a cart item
export interface CartItem {
  cart_item_id: string;
  product_id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size: string; // Added size since you have a size selector!
}

// Define everything our global brain will control
interface CartContextType {
  cartItems: CartItem[];
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (item: Omit<CartItem, 'cart_item_id'>) => void;
  removeFromCart: (cart_item_id: string) => void;
  updateQuantity: (cart_item_id: string, newQuantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (newItem: Omit<CartItem, 'cart_item_id'>) => {
    setCartItems(prevItems => {
      // Check if item with same ID AND SIZE is already in cart
      const existingItemIndex = prevItems.findIndex(
        item => item.product_id === newItem.product_id && item.size === newItem.size
      );

      if (existingItemIndex > -1) {
        // If it exists, just increase the quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
        return updatedItems;
      }
      
      // If it's brand new, give it a unique ID and add it
      return [...prevItems, { ...newItem, cart_item_id: Date.now().toString() }];
    });
    
    // Automatically slide the cart open so the user sees it was added!
    openCart();
  };

  const removeFromCart = (cart_item_id: string) => {
    setCartItems(prev => prev.filter(item => item.cart_item_id !== cart_item_id));
  };

  const updateQuantity = (cart_item_id: string, newQuantity: number) => {
    if (newQuantity < 1) return; // Don't allow 0 quantity
    setCartItems(prev => 
      prev.map(item => item.cart_item_id === cart_item_id ? { ...item, quantity: newQuantity } : item)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, isCartOpen, openCart, closeCart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to easily use the cart anywhere
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};