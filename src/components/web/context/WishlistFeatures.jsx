import React, { createContext, useContext, useState } from 'react';

// Create the context
export const WishlistContext = createContext();

// Custom hook to use the context
export const useWishlistContext = () => {
  return useContext(WishlistContext);
};

// Provider component
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState({
    products: [], // Array to hold wishlist products
  });

  // Function to add a product to the wishlist
  const addToWishlist = (product) => {
    setWishlist({
      ...wishlist,
      products: [...wishlist.products, product],
    });
  };

  // Function to remove a product from the wishlist
  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.products.filter(
      (product) => product.productId !== productId
    );
    setWishlist({
      ...wishlist,
      products: updatedWishlist,
    });
  };

  // Other functions related to wishlist management

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
