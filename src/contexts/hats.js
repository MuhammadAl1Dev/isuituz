import { createContext, useState, useContext } from "react";

const ContextHats = createContext();

export default function Hats({ children }) {
  const [hats, setHats] = useState([
    {
      id: 1,
      title: "KITON",
      desc: "Multicolor alpaca wool pl flat cap",
      price: 185,
      sizes: ['S','M','L','XL','XXL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/s/2/s21h130_000_mul_000.jpg",
    },
    {
      id: 2,
      title: "KITON",
      desc: "Multicolor virgin wool cashmere flat cap",
      price: 140,
      sizes: ['S','M','L','XL','XXL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/s/2/s21h137_000_mul_000.jpg",
    },
    {
      id: 3,
      title: "KITON",
      desc: "Blue gray cashmere silk flat cap",
      price: 175,
      sizes: ['S','M','L','XL','XXL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/s/2/s21h139_000_blu_000.jpg",
    },
    {
      id: 4,
      title: "KITON",
      desc: "Blue wool flat cap",
      price: 140,
      sizes: ['S','M','L','XL','XXL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/s/2/s21h142_000_blu_000.jpg",
    },
    {
      id: 5,
      title: "KITON",
      desc: "Kiton white cashmere beanie",
      price: 435,
      sizes: ['S','M','L','XL','XXL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/c/ucapp04_x0256b01000_khw1_000.jpg",
    },
    {
      id: 6,
      title: "KITON",
      desc: "Kiton gray cashmere beanie",
      price: 435,
      sizes: ['S','M','L','XL','XXL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/c/ucapp041_x0256b04000_khw2_000.jpg",
    },
    {
      id: 7,
      title: "KITON",
      desc: "Kiton dark gray cashmere beanie",
      price: 435,
      sizes: ['S','M','L','XL','XXL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/c/ucapp042_x0256b05001_khw3_000.jpg",
    },
    {
      id: 8,
      title: "KITON",
      desc: "Kiton green cashmere beanie",
      price: 435,
      sizes: ['S','M','L','XL','XXL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/c/ucapp043_x0256b08000_khw4_000.jpg",
    },
    {
      id: 9,
      title: "KITON",
      desc: "Kiton blue cashmere beanie",
      price: 435,
      sizes: ['S','M','L','XL','XXL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/c/ucapp044_x0256b06001_khw5_000.jpg",
    },
    {
      id: 10,
      title: "KITON",
      desc: "Kiton dark blue cashmere beanie",
      price: 435,
      sizes: ['S','M','L','XL','XXL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/c/ucapp045_x0256b07004_khw6_000.jpg",
    },
    {
      id: 11,
      title: "KITON",
      desc: "Kiton beige cashmere beanie",
      price: 435,
      sizes: ['S','M','L','XL','XXL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/c/ucapp046_x0256b03001_khw7_000.jpg",
    },
    {
      id: 12,
      title: "KITON",
      desc: "Kiton brown cashmere beanie",
      price: 435,
      sizes: ['S','M','L','XL','XXL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/c/ucapp047_x0256b10000_khw8_000.jpg",
    },
  ]);

  return (
    <ContextHats.Provider value={[hats, setHats]}>
      {children}
    </ContextHats.Provider>
  );
}

const useHats = () => useContext(ContextHats);

export { useHats };
