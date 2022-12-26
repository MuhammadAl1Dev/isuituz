import { createContext, useState, useContext } from "react";

const ContextTShirt = createContext();

export default function TShirt({ children }) {
  const [tshirt, setTShirt] = useState([
    {
      id: 1,
      title: "PREMIATA",
      desc: "Premiata white cotton t-shirt",
      price: 85,
      sizes: ['S','M', 'L', 'XL', '2XL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/j/e/jerseycotone_pr26kruger_prmw1_000.jpg",
    },
    {
      id: 2,
      title: "PREMIATA",
      desc: "Premiata green cotton t-shirt",
      price: 85,
      sizes: ['S','M', 'L', 'XL', '2XL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/j/e/jerseycotone1_pr26kruger_prmw2_000.jpg",
    },
    {
      id: 3,
      title: "PREMIATA",
      desc: "Premiata black cotton t-shirt",
      price: 85,
      sizes: ['S','M', 'L', 'XL', '2XL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/j/e/jerseycotone2_pr26kruger_prmw3_000.jpg",
    },
    {
      id: 4,
      title: "BRUNELLO CUCINELLI",
      desc: "Brunello cucinelli green cotton t-shirt",
      price: 1260,
      sizes: ['S','M', 'L', 'XL', '2XL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/m/8/m8z838502_c9421_cmww8_000_1.jpg",
    },
    {
      id: 5,
      title: "BOSS",
      desc: "Boss X NBA multicolor cotton t-shirt",
      price: 85,
      sizes: ['S','M', 'L', 'XL', '2XL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/5/0/50483_108344_hmw7_000.jpg",
    },
    {
      id: 6,
      title: "BRUNELLO CUCINELLI",
      desc: "Brunello cucinelli yellow cotton t-shirt",
      price: 683,
      sizes: ['S','M', 'L', 'XL', '2XL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/m/0/m0a45el6621_c8612_cmww7_000_1.jpg",
    },
    {
      id: 7,
      title: "KITON",
      desc: "Blue white cotton t-shirt",
      price: 319,
      sizes: ['S','M', 'L', 'XL', '2XL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/s/2/s21m254_000_000.jpg",
    },
    {
      id: 8,
      title: "CESARE ATTLINI",
      desc: "White beige silk patterned t-shirt",
      price: 223,
      sizes: ['S','M', 'L', 'XL', '2XL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/c/a/camu21_000_000.jpg",
    },
    {
      id: 9,
      title: "ZILLI",
      desc: "Light blue silk cotton t-shirt",
      price: 420,
      sizes: ['S','M', 'L', 'XL', '2XL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/m/b/mbrts10058_nc100mc_m148_000.jpg",
    },
    {
      id: 10,
      title: "KNT",
      desc: "Kiton KNT blue cotton t-shirt",
      price: 329,
      sizes: ['S','M', 'L', 'XL', '2XL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/m/umm02_7001001_000.jpg",
    },
    {
      id: 11,
      title: "KNT",
      desc: "Kiton KNT black cotton t-shirt",
      price: 329,
      sizes: ['S','M', 'L', 'XL', '2XL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/m/umm021_7005001_000.jpg",
    },
    {
      id: 12,
      title: "ZILLI",
      desc: "Orange light blue silk cotton t-shirt",
      price: 436,
      sizes: ['S','M', 'L', 'XL', '2XL'],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/m/b/mbtrn110_nc110mc_000.jpg",
    },
  ]);

  return (
    <ContextTShirt.Provider value={[tshirt, setTShirt]}>
      {children}
    </ContextTShirt.Provider>
  );
}

const useTShirt = () => useContext(ContextTShirt);

export { useTShirt };
