import { createContext, useState, useContext } from "react";

const ContextDressShoes = createContext();

export default function DressShoes({ children }) {
  const [dressShoes, setDressShoes] = useState([
    {
      id: 1,
      title: "KITON",
      desc: "Kiton black leather with fur dress shoes",
      price: 1990,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/s/ussdechn00_67301000_22ks1_000.jpg",
    },
    {
      id: 2,
      title: "ZILLI",
      desc: "Brown leather shoes",
      price: 719,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/1/9/19ss4_000_000.jpg",
    },
    {
      id: 3,
      title: "KITON",
      desc: "Brown leather dress shoes",
      price: 756,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/s/2/s21s94_000_000.jpg",
    },
    {
      id: 4,
      title: "KITON",
      desc: "Black leather dress shoes",
      price: 756,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/s/2/s21s90_000_000.jpg",
    },
    {
      id: 5,
      title: "KITON",
      desc: "Yellow leather suede dress shoes",
      price: 472,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/s/2/s21s84_000_000.jpg",
    },
    {
      id: 6,
      title: "KITON",
      desc: "Black leather dress shoes",
      price: 826,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/s/2/s21s87_000_000.jpg",
    },
    {
      id: 7,
      title: "KITON",
      desc: "Blue leather suede dress shoes",
      price: 512,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/s/2/s21s80_000_000.jpg",
    },
    {
      id: 8,
      title: "KITON",
      desc: "Brown leather suede dress shoes",
      price: 416,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/s/2/s21s76_000_000.jpg",
    },
    {
      id: 9,
      title: "KITON",
      desc: "Brown leather dress shoes",
      price: 784,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/s/2/s21s72_000_000.jpg",
    },
    {
      id: 10,
      title: "KITON",
      desc: "Brown leather dress shoes",
      price: 683,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/s/2/s21s73_000_000.jpg",
    },
    {
      id: 11,
      title: "KITON",
      desc: "Brown leather dress shoes",
      price: 472,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/s/2/s21s67_000_000.jpg",
    },
    {
      id: 12,
      title: "KITON",
      desc: "Brown leather dress shoes",
      price: 746,
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/s/2/s21s497_000_000.jpg",
    },
  ]);

  return (
    <ContextDressShoes.Provider value={[dressShoes, setDressShoes]}>
      {children}
    </ContextDressShoes.Provider>
  );
}

const useDressShoes = () => useContext(ContextDressShoes);

export { useDressShoes };
