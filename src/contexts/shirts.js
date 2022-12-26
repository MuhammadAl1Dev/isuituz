import { createContext, useState, useContext } from "react";

const ContextShirts = createContext();

export default function Shirts({ children }) {
  const [shirts, setShirts] = useState([
    {
      id: 1,
      title: "KITON",
      desc: "Kiton green cotton shirt",
      price: 191,
      sizes: [14.5,15,15.5,15.75,16],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/2/2/22h31_shirt_22h31_000.jpg",
    },
    {
      id: 2,
      title: "KITON",
      desc: "Kiton multicolor cotton shirt",
      price: 191,
      sizes: [14.5,15,15.5,15.75,16],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/2/2/22h32_shirt_22h32_000.jpg",
    },
    {
        id: 3,
        title: "KITON",
        desc: "Kiton multicolor cotton cashmere shirt",
        price: 212,
        sizes: [14.5,15,15.5,15.75,16],
        img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/2/2/22h33_shirt_22h33_000.jpg",
      },
      {
        id: 4,
        title: "KITON",
        desc: "Kiton multicolor cotton shirt",
        price: 191,
        sizes: [14.5,15,15.5,15.75,16],
        img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/2/2/22h34_shirt_22h34_000.jpg",
      },
      {
        id: 5,
        title: "KITON",
        desc: "Kiton multicolor cotton shirt",
        price: 191,
        sizes: [14.5,15,15.5,15.75,16],
        img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/2/2/22h35_shirt_22h35_000.jpg",
      },
      {
        id: 6,
        title: "KITON",
        desc: "Kiton multicolor cotton shirt",
        price: 191,
        sizes: [14.5,15,15.5,15.75,16],
        img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/2/2/22h36_shirt_22h36_000.jpg",
      },
      {
        id: 7,
        title: "KITON",
        desc: "Kiton multicolor cotton shirt",
        price: 191,
        sizes: [14.5,15,15.5,15.75,16],
        img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/2/2/22h39_shirt_22h39_000.jpg",
      },
      {
        id: 8,
        title: "KITON",
        desc: "Kiton gray white multicolor cotton shirt",
        price: 191,
        sizes: [14.5,15,15.5,15.75,16],
        img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/2/2/22h40_shirt_22h40_000.jpg",
      },
      {
        id: 9,
        title: "KITON",
        desc: "Kiton multicolor cotton shirt",
        price: 191,
        sizes: [14.5,15,15.5,15.75,16],
        img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/2/2/22h40_shirt_22h40_000.jpg",
      },
      {
        id: 10,
        title: "KITON",
        desc: "Kiton multicolor cotton shirt short sleeve",
        price: 191,
        sizes: [14.5,15,15.5,15.75,16],
        img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/2/2/22h42_shirt_22h42_000.jpg",
      },
      {
        id: 11,
        title: "KITON",
        desc: "Kiton white orange cotton shirt",
        price: 191,
        sizes: [14.5,15,15.5,15.75,16],
        img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/2/2/22h43_shirt_22h43_000.jpg",
      },
      {
        id: 12,
        title: "KITON",
        desc: "Kiton multicolor cotton shirt",
        price: 191,
        sizes: [14.5,15,15.5,15.75,16],
        img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/2/2/22h44_shirt_22h44_000.jpg",
      },
  ]);
  
  return (
    <ContextShirts.Provider value={[shirts, setShirts]}>
      {children}
    </ContextShirts.Provider>
  );
}

const useShirts = () => useContext(ContextShirts);

export { useShirts };
