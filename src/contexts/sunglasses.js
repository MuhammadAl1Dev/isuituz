import { createContext, useState, useContext } from "react";

const ContextSunglasses = createContext();

export default function Sunglasses({ children }) {
  const [sunglasses, setSunglasses] = useState([
    {
      id: 1,
      title: "ZILLI",
      desc: "Black titanium acetate sunglasses",
      price: 280,
      sizes: [4.5,5.1,5.25,5.5,5.75],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/z/o/zo46_000_bla_000_1.jpg",
    },
    {
      id: 2,
      title: "ZILLI",
      desc: "Black titanium acetate sunglasses",
      price: 840,
      sizes: [4.5,5.1,5.25,5.5,5.75],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/z/o/zo47_000_bla_000_1.jpg",
    },
    {
      id: 3,
      title: "ZILLI",
      desc: "Black titanium acetate sunglasses",
      price: 350,
      sizes: [4.5,5.1,5.25,5.5,5.75],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/z/o/zo48_000_bla_000_1.jpg",
    },
    {
      id: 4,
      title: "ZILLI",
      desc: "Black acetate silk sunglasses",
      price: 320,
      sizes: [4.5,5.1,5.25,5.5,5.75],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/z/o/zo5_000_bla_000_1.jpg",
    },
    {
      id: 5,
      title: "ZILLI",
      desc: "Black titanium acetate sunglasses",
      price: 280,
      sizes: [4.5,5.1,5.25,5.5,5.75],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/z/o/zo51_000_bla_000_1.jpg",
    },
    {
      id: 6,
      title: "ZILLI",
      desc: "Black titanium acetate sunglasses",
      price: 348,
      sizes: [4.5,5.1,5.25,5.5,5.75],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/z/o/zo52_000_bla_000_1.jpg",
    },
    {
      id: 7,
      title: "ZILLI",
      desc: "Silver titanium acetate sunglasses",
      price: 1200,
      sizes: [4.5,5.1,5.25,5.5,5.75],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/z/o/zo53_000_sil_000_1.jpg",
    },
    {
      id: 8,
      title: "ZILLI",
      desc: "Silver titanium genuine horn sunglasses",
      price: 280,
      sizes: [4.5,5.1,5.25,5.5,5.75],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/z/o/zo55_000_sil_000_1.jpg",
    },
    {
      id: 9,
      title: "ZILLI",
      desc: "Black titanium acetate sunglasses",
      price: 1000,
      sizes: [4.5,5.1,5.25,5.5,5.75],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/z/o/zo59_000_bla_000_1.jpg",
    },
    {
      id: 10,
      title: "ZILLI",
      desc: "Brown titanium acetate sunglasses",
      price: 280,
      sizes: [4.5,5.1,5.25,5.5,5.75],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/z/o/zo6_000_bro_000_1.jpg",
    },
    {
      id: 11,
      title: "ZILLI",
      desc: "Silver titanium acetate sunglasses",
      price: 840,
      sizes: [4.5,5.1,5.25,5.5,5.75],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/z/o/zo61_000_sil_000_1.jpg",
    },
    {
      id: 12,
      title: "ZILLI",
      desc: "Beige titanium acetate sunglasses",
      price: 840,
      sizes: [4.5,5.1,5.25,5.5,5.75],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/z/o/zo7_000_bei_000_1.jpg",
    },
  ]);

  return (
    <ContextSunglasses.Provider value={[sunglasses, setSunglasses]}>
      {children}
    </ContextSunglasses.Provider>
  );
}

const useSunglasses = () => useContext(ContextSunglasses);

export { useSunglasses };