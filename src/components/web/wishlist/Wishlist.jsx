import React, { useState, useEffect, useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import { useQuery } from "react-query";
import { WishlistContext } from "../context/WishlistFeatures.jsx";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader.jsx";
import { BsHeart } from "react-icons/bs";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');

  body {
    font-family: 'Dancing Script', cursive;
  }
`;

const WishlistContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
  flex-direction: column;
  p {
    margin: 0;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const ProductsSection = styled.div`
  flex: 2;
  padding: 20px;
  margin-right: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 640px) {
    margin: auto;
    width: 100%;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  color: var(--color3);
`;

const ItemCount = styled.span`
  font-size: 1em;
  font-weight: bold;
  @media (max-width: 400px) {
    font-size: 0.8em;
  }
`;

const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-right: 10px;
  }

  .details {
    flex: 1;
    display: flex;
    flex-direction: column;

    h4 {
      margin: 0;
    }
  }

  .actions {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      background-color: #ff4d4d;
      color: white;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 4px;
      margin-top: 5px;

      &:hover {
        background-color: #ff1a1a;
      }
    }

    .quantity-controls {
      display: flex;
      align-items: center;
      margin-top: 10px;

      button {
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 4px;
        margin: 0 5px;

        &:hover {
          background-color: #0056b3;
        }
      }

      span {
        margin: 0 5px;
        font-weight: bold;
      }
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;

    .details {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      margin-right: 10px;
    }
  }
`;

const NoProductsMessage = styled.p`
  text-align: center;
  font-size: 1.2em;
  color: #888;
  margin-top: 20px;
`;

const Wishlist = () => {
  // const navigate = useNavigate();
  // const { getWishlistContext, removeFromWishlistContext } =
  //   useContext(WishlistContext);
  const [wishlistData, setWishlistData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // const getWishlist = async () => {
  //   try {
  //     const res = await getWishlistContext();
  //     setWishlistData(res.wishlist.products);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching wishlist:", error);
  //   }
  // };

  // useEffect(() => {
  //   getWishlist();
  // }, []);

  // const handleRemoveFromWishlist = async (productId) => {
  //   await removeFromWishlistContext(productId);
  //   setWishlistData(wishlistData.filter((item) => item.productId !== productId));
  // };

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <>
      <GlobalStyle />
      <WishlistContainer>
      <nav aria-label="breadcrumb">
                <ol className="breadcrumb container">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Wishlist</li>
                </ol>
            </nav>
        <ProductsSection>
          <Title>
            <div>
              Wishlist | <BsHeart color="black" /> :
            </div>

            <ItemCount>{wishlistData.length}</ItemCount>
          </Title>
          {wishlistData.length === 0 ? (
            <NoProductsMessage>No products in your wishlist.</NoProductsMessage>
          ) : (
            wishlistData.map((product) => (
              <ProductItem key={product.productId}>
                <img
                  src={product.details.MainImage.secure_url}
                  alt={product.details.name}
                />
                <div className="details">
                  <h4>{product.details.name}</h4>
                  {product.details.discount === 0 && (
                    <p>Price: ${product.details.price}</p>
                  )}
                  {product.details.discount !== 0 && (
                    <div
                      style={{
                        display: "flex",
                        gap: ".5rem",
                        alignItems: "baseline",
                      }}
                    >
                      <DiscountPrice>
                        $<del>{product.details.price}</del>
                      </DiscountPrice>
                      <FinalPrice> ${product.details.FinalPrice}</FinalPrice>
                    </div>
                  )}
                </div>
                <div className="actions">
                  <button onClick={() => handleRemoveFromWishlist(product.productId)}>
                    Remove
                  </button>
                </div>
              </ProductItem>
            ))
          )}
        </ProductsSection>
      </WishlistContainer>
    </>
  );
};

export default Wishlist;
