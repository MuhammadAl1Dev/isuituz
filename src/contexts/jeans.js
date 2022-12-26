import { createContext, useState, useContext } from "react";

const ContextJeans = createContext();

export default function Jeans({ children }) {
  const [jeans, setJeans] = useState([
    {
      id: 1,
      title: "KITON",
      desc: "Kiton blue cotton jeans",
      price: 399,
      sizes: [31,32,33,34,35], 
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/p/upnjs29_catchsilk44_kjw30_001.jpg",
    },
    {
      id: 2,
      title: "KITON",
      desc: "Kiton black cotton jeans",
      price: 399,
      sizes: [31,32,33,34,35], 
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/p/upnjs30_kda47501_kjw31_001.jpg",
    },
    {
      id: 3,
      title: "KITON",
      desc: "Kiton blue cotton jeans",
      price: 399,
      sizes: [31,32,33,34,35], 
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/p/upnjs32_kda46971_kjw33_001_1.jpg",
    },
    {
      id: 4,
      title: "KITON",
      desc: "Kiton blue cotton jeans",
      price: 399,
      sizes: [31,32,33,34,35], 
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/p/upnjs33_catch8lt1_kjw34_001.jpg",
    },
    {
      id: 5,
      title: "KITON",
      desc: "Kiton blue cotton jeans",
      price: 399,
      sizes: [31,32,33,34,35], 
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/p/upnjs34_kda469711_kjw35_001.jpg",
    },
    {
      id: 6,
      title: "KITON",
      desc: "Kiton blue cotton jeans",
      price: 399,
      sizes: [31,32,33,34,35], 
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/p/upnjs37_slv16201_kjw38_001.jpg",
    },
    {
      id: 7,
      title: "KITON",
      desc: "Kiton blue cotton jeans",
      price: 399,
      sizes: [31,32,33,34,35], 
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/p/upnjs39_s1831_kjw40_001.jpg",
    },
    {
      id: 8,
      title: "KITON",
      desc: "Kiton light blue cotton jeans",
      price: 399,
      sizes: [31,32,33,34,35], 
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/p/upnjs40_jeans2_kjw41_001.jpg",
    },
    {
      id: 9,
      title: "KITON",
      desc: "Kiton light blue cotton jeans",
      price: 399,
      sizes: [31,32,33,34,35], 
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/p/upnjs41_jeans3_kjw42_001_1.jpg",
    },
    {
      id: 10,
      title: "KITON",
      desc: "Kiton light blue cotton jeans",
      price: 399,
      sizes: [31,32,33,34,35], 
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/p/upnjs42_jeans4_kjw43_001.jpg",
    },
    {
      id: 11,
      title: "KITON",
      desc: "Kiton light blue cotton jeans",
      price: 399,
      sizes: [31,32,33,34,35], 
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/p/upnjs43_jeans5_kjw44_001.jpg",
    },
    {
      id: 12,
      title: "KITON",
      desc: "Kiton light blue cotton jeans",
      price: 399,
      sizes: [31,32,33,34,35], 
      img: "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/c666a372f9ab3a0ae68d5a1772461bd9/u/p/upnjs44_jeans6_kjw45_001.jpg",
    },
  ]);

  return (
    <ContextJeans.Provider value={[jeans, setJeans]}>
      {children}
    </ContextJeans.Provider>
  );
}

const useJeans = () => useContext(ContextJeans);

export { useJeans };
