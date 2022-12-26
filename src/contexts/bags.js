import { createContext, useState, useContext } from "react";

const ContextBags = createContext();

export default function Bags({ children }) {
  const [bags, setBags] = useState([
    {
      id: 1,
      title: "KITON",
      desc: "White leather backpack",
      price: 730,
      sizes: [16,20,22.5,25,30],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/k/b/kbaw6_000_whi_000.jpg",
    },
    {
      id: 2,
      title: "KITON",
      desc: "Kiton black pa pl leather backpack",
      price: 720,
      sizes: [16,20,22.5,25,30],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/b/ubfitkn0086_801004_kbaw11_000.jpg",
    },
    {
      id: 3,
      title: "Brunello cucinelli",
      desc: "Brunello cucinelli gray leather suede bag",
      price: 1850,
      sizes: [16,20,22.5,25,30],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/m/b/mbsmd2333_c8193_cbaww1_000_1.jpg",
    },
    {
      id: 4,
      title: "KITON",
      desc: "Kiton black leather crocodile backpack",
      price: 30000,
      sizes: [16,20,22.5,25,30],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/k/b/kbav4_000_bla_000.jpg",
    },
    {
      id: 5,
      title: "KITON",
      desc: "Light blue leather backpack",
      price: 730,
      sizes: [16,20,22.5,25,30],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/k/b/kbaw7_000_lig_000.jpg",
    },
    {
      id: 6,
      title: "KITON",
      desc: "Kiton black pa pl travel bag",
      price: 1020,
      sizes: [16,20,22.5,25,30],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/b/ubrelann1_0086801001_kbaw10_000.jpg",
    },
    {
      id: 7,
      title: "KITON",
      desc: "Black leather calfskin backpack",
      price: 1355,
      sizes: [16,20,22.5,25,30],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/k/b/kbau12_000_bla_000_4.jpg",
    },
    {
      id: 8,
      title: "KITON",
      desc: "Brown leather crocodilebriefcase",
      price: 15800,
      sizes: [16,20,22.5,25,30],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/k/b/kbau15_000_bro_000_4.jpg",
    },
    {
      id: 9,
      title: "KITON",
      desc: "Gray pa pl backpack",
      price: 1340,
      sizes: [16,20,22.5,25,30],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/k/b/kbau3_000_gra_000_2.jpg",
    },
    {
      id: 10,
      title: "KITON",
      desc: "Black leather calfskin briefcase",
      price: 2220,
      sizes: [16,20,22.5,25,30],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/k/b/kbau7_000_bla_001_4.jpg",
    },
    {
      id: 11,
      title: "KITON",
      desc: "Black pa backpack",
      price: 470,
      sizes: [16,20,22.5,25,30],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/k/b/kbau8_000_bla_001_4.jpg",
    },
    {
      id: 12,
      title: "KITON",
      desc: "Blue pa beauty case",
      price: 730,
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/k/b/kbav10_000_blu_000_4.jpg",
    },
  ]);

  return (
    <ContextBags.Provider value={[bags, setBags]}>
      {children}
    </ContextBags.Provider>
  );
}

const useBags = () => useContext(ContextBags);

export { useBags };
