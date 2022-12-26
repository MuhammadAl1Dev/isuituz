import { createContext, useState, useContext } from "react";

const ContextSneakers = createContext();

export default function Sneakers({ children }) {
  const [sneakers, setSneakers] = useState([
    {
      id: 1,
      title: "KITON",
      desc: "Kiton blue navy cotton EA sneakers",
      price: 465,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/s/ussfits_n00809902_ksw16_000_1.jpg",
    },
    {
      id: 2,
      title: "BRUNELLO CUCINELLI",
      desc: "Brunello cucinelli multicolor leather suede pm sneakers",
      price: 990,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/m/z/mz34g22671_c1276_bcsw1_000.jpg",
    },
    {
      id: 3,
      title: "TIMBERLAND",
      desc: "Timberland black blue rebotl sneakers",
      price: 140,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/t/b/tb0a5neb_015_tsw3_000.jpg",
    },
    {
      id: 4,
      title: "SANTONI",
      desc: "Santni gray leather suede leather sneakers",
      price: 430,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/m/b/mbal21788gr_sbhudg45_ssw6_000.jpg",
    },
    {
      id: 5,
      title: "PREMIATA",
      desc: "Premiata gray leather suede pa sneakers",
      price: 187,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/e/r/eric12_5921_ps11_000.jpg",
    },
    {
      id: 6,
      title: "FEFE GLAMOUR POCHETTE",
      desc: "Fefe multicolor velcro silk slip on",
      price: 57,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/s/l/slpon_devcr_fs1_000.jpg",
    },
    {
      id: 7,
      title: "BOSS",
      desc: "Boss white leather sneakers",
      price: 230,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/5/0/50470938_bluton_runn_hsw2_000.jpg",
    },
    {
      id: 8,
      title: "BOSS",
      desc: "Boss black leather sneakers",
      price: 230,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/5/0/504709381_bluton_runn_hsw6_000.jpg",
    },
    {
      id: 9,
      title: "BOSS",
      desc: "Boss black leather pu sneakers",
      price: 170,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/5/0/50480546_jonah_runn_hsw4_000.jpg",
    },
    {
      id: 10,
      title: "BOSS",
      desc: "Boss white leather pu sneakers",
      price: 170,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/5/0/504805461_jonah_runn_hsw5_000.jpg",
    },
    {
      id: 11,
      title: "BOSS",
      desc: "Boss black pl sneakers",
      price: 170,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/5/0/50480810_dean_runn_hsw1_000.jpg",
    },
    {
      id: 12,
      title: "BOSS",
      desc: "Boss blue pl sneakers",
      price: 170,
      sizes: [41, 42, 43, 44, 45],
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/5/0/504808101_dean_runn_hsw3_000.jpg",
    },
  ]);

  return (
    <ContextSneakers.Provider value={[sneakers, setSneakers]}>
      {children}
    </ContextSneakers.Provider>
  );
}

const useSneakers = () => useContext(ContextSneakers);

export { useSneakers };
