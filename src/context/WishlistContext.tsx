// src/context/WishlistContext.tsx
import React, { createContext, useContext, useState, type ReactNode } from 'react';

// Define what a wishlist item looks like
export interface WishlistItem {
  product_id: string;
  name: string;
  price: number;
  image: string;
}

interface WishlistContextType {
  wishlistItems: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (product_id: string) => void;
  isInWishlist: (product_id: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  const addToWishlist = (item: WishlistItem) => {
    setWishlistItems(prev => {
      // Prevent duplicates
      if (!prev.find(i => i.product_id === item.product_id)) {
        return [...prev, item];
      }
      return prev;
    });
  };

  const removeFromWishlist = (product_id: string) => {
    setWishlistItems(prev => prev.filter(item => item.product_id !== product_id));
  };

  // Helper function to easily check if a heart should be filled!
  const isInWishlist = (product_id: string) => {
    return wishlistItems.some(item => item.product_id === product_id);
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used within a WishlistProvider");
  return context;
};