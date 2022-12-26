import { createContext, useState, useContext } from "react";

const ContextSweaters = createContext();

export default function Sweaters({ children }) {
  const [sweaters, setSweaters] = useState([
    {
      id: 1,
      title: "BOSS",
      desc: "Boss gray wool cotton pa sweater grewneck",
      price: 148,
      sizes: ['S','M', 'L', 'XL', '2XL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/5/0/50478289_10244668_hmw18_000.jpg",
    },
    {
      id: 2,
      title: "GRAN SASSO",
      desc: "Gran sasso blue cashmere sweater",
      price: 468,
      sizes: ['S','M', 'L', 'XL', '2XL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/5/7/571611_15535589_gmw3_000.jpg",
    },
    {
      id: 3,
      title: "GRAN SASSO",
      desc: "Gran sasso gray cashmere sweater",
      price: 468,
      sizes: ['S','M', 'L', 'XL', '2XL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/5/7/571612_15535061_gmw4_000.jpg",
    },
    {
      id: 4,
      title: "MARCO PESCAROLO",
      desc: "Marco pescarolo cashmere ea sweater",
      price: 968,
      sizes: ['S','M', 'L', 'XL', '2XL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/m/i/mike14_46y1204_pmw9_000.jpg",
    },
    {
      id: 5,
      title: "MARCO PESCAROLO",
      desc: "Marco pescarolo blue lycra cashmere ea sweater crewneck",
      price: 425,
      sizes: ['S','M', 'L', 'XL', '2XL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/t/o/tom1_46y0103_pmw8_000.jpg",
    },
    {
      id: 6,
      title: "MARCO PESCAROLO",
      desc: "Marco pescarolo gray lycra cashmere ea sweater crewneck",
      price: 425,
      sizes: ['S','M', 'L', 'XL', '2XL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/t/o/tom2_46y0101_pmw7_000.jpg",
    },
    {
      id: 7,
      title: "BRUNELLO CUCINELLI",
      desc: "Brunello cucinelli light gray cashmere sweater crewneck",
      price: 936,
      sizes: ['S','M', 'L', 'XL', '2XL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/m/2/m22001005_cv276_cmw12_000.jpg",
    },
    {
      id: 8,
      title: "BRUNELLO CUCINELLI",
      desc: "Brunello cucinelli beige cashmere sweater crewneck",
      price: 936,
      sizes: ['S','M', 'L', 'XL', '2XL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/m/2/m22001006_c077a_cmw13_000.jpg",
    },
    {
      id: 9,
      title: "BRUNELLO CUCINELLI",
      desc: "Brunello cucinelli blue cashmere sweater turtleneck",
      price: 1053,
      sizes: ['S','M', 'L', 'XL', '2XL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/m/2/m2200103_ca058_cmw14_000.jpg",
    },
    {
      id: 10,
      title: "BRUNELLO CUCINELLI",
      desc: "Brunello cucinelli white cashmere sweater turtleneck",
      price: 1053,
      sizes: ['S','M', 'L', 'XL', '2XL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/m/2/m22001031_c0312_cmw15_000.jpg",
    },
    {
      id: 11,
      title: "BRUNELLO CUCINELLI",
      desc: "Brunello cucinelli gray cashmere sweater turtleneck",
      price: 1053,
      sizes: ['S','M', 'L', 'XL', '2XL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/m/2/m22001032_ck773_cmw16_000.jpg",
    },
    {
      id: 12,
      title: "BRUNELLO CUCINELLI",
      desc: "Brunello cucinelli blue jute cotton pa sweater full zip",
      price: 3173,
      sizes: ['S','M', 'L', 'XL', '2XL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/m/3/m3yr02506_c2641_cmww2_000_1.jpg",
    },
  ]);

  return (
    <ContextSweaters.Provider value={[sweaters, setSweaters]}>
      {children}
    </ContextSweaters.Provider>
  );
}

const useSweaters = () => useContext(ContextSweaters);

export { useSweaters };
