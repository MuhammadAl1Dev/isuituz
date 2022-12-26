import { createContext, useState, useContext } from "react";

const ContextBoots = createContext();

export default function Boots({ children }) {
  const [boots, setBoots] = useState([
    {
      id: 1,
      title: "TIMBERLAND",
      desc: "Timberland black leather nubuck boots",
      price: 200,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/t/b/tb0a4455_015_tsw4_000.jpg",
    },
    {
      id: 2,
      title: "TIMBERLAND",
      desc: "Timberland taupe leather nubuck boots",
      price: 200,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/t/b/tb0a44rx_901_tsw5_000.jpg",
    },
    {
      id: 3,
      title: "TIMBERLAND",
      desc: "Timberland green black waterproof trakker shoes",
      price: 140,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/t/b/tb050aenfk_327_tsw6_000.jpg",
    },
    {
      id: 4,
      title: "TIMBERLAND",
      desc: "Timberland nubuck leather brown boots",
      price: 265,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/t/s/tsw2_1.jpg",
    },
    {
      id: 5,
      title: "TIMBERLAND",
      desc: "Timberland leather nubuck light brown boots",
      price: 245,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/t/b/tb010061_713_000.jpg",
    },
    {
      id: 6,
      title: "SANTONI",
      desc: "Santoni black leather boots",
      price: 424,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/m/b/mbcd21525_neaptmrn01_000.jpg",
    },
    {
      id: 7,
      title: "KITON",
      desc: "Kiton beige leather calf boots shoes",
      price: 1205,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/s/usstankn_0068907002_000.jpg",
    },
    {
      id: 8,
      title: "PREMIATA",
      desc: "Premiata black leather boots",
      price: 395,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/a/n/ander_31915z_000.jpg",
    },
    {
      id: 9,
      title: "PREMIATA",
      desc: "Premiata black leather boots",
      price: 374,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/v/o/volanato_31543_000.jpg",
    },
    {
      id: 10,
      title: "KITON",
      desc: "Beige leather crocodile boots conb",
      price: 2960,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/k/s/ksv40_000_bei_000_1.jpg",
    },
    {
      id: 11,
      title: "KITON",
      desc: "Blue leather crocodile boots conb",
      price: 2960,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/k/s/ksv39_000_000.jpg",
    },
    {
      id: 12,
      title: "KITON",
      desc: "Brown leather crocodile shoes",
      price: 2800,
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/k/s/ksv37_000_000.jpg",
    },
  ]);

  return (
    <ContextBoots.Provider value={[boots, setBoots]}>
      {children}
    </ContextBoots.Provider>
  );
}

const useBoots = () => useContext(ContextBoots);

export { useBoots };
