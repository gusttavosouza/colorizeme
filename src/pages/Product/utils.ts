type Product = {
  id: number,
  color: string
  name: string;
  photo: string 
}

const bege: Product[]= [
    {
      id: 6,
      color: "bage",
      name: "BLOOMY OFF WHITE",
      photo: "https://imagens.portobello.com.br/unsafe/fit-in/884x884/https://www.portobello.com.br/data/products/zoom/pi-concavo-areia-10x30-mate_53597.jpg?ts=1696271241"
    },
    {
      id: 7,
      color: "bage",
      name: "PI CONCAVO AREIA",
      photo: "https://imagens.portobello.com.br/unsafe/fit-in/884x884/https://www.portobello.com.br/data/products/zoom/pi-concavo-areia-10x30-mate_53597.jpg?ts=1696271241"
    },
    {
      id: 8,
      color: "bage",
      name: "SALT LAKE SUMMER",
      photo: "https://imagens.portobello.com.br/unsafe/884x979/https://www.portobello.com.br/data/products/related/salt-lake-summer-20x20-mate-1_49765.jpg?ts=1672428615"
    },
    {
      id: 9,
      color: "bage",
      name: "TERRACOTTA MURO TRAMONTO",
      photo: "https://imagens.portobello.com.br/unsafe/884x979/https://www.portobello.com.br/data/products/related/terracotta-muro-tramonto-07x26-mate_15139.jpg?ts=1611794604"
    }
]

const black: Product[]= [
  {
    id: 10,
    color: "black",
    name: "HORIZONTES JAIPUR",
    photo: "https://imagens.portobello.com.br/unsafe/fit-in/884x884/https://www.portobello.com.br/data/products/related/chelsea-dark-red-07x75-nat_32923.jpg?ts=1590495818"
  },
  {
    id: 11,
    color: "black",
    name: "ARTEMATICA MINI BASILICO",
    photo: "https://imagens.portobello.com.br/unsafe/884x979/https://www.portobello.com.br/data/products/zoom/artematica-mini-basilico-15-5x15-5-mate-1_49245.jpg?ts=1664825508"
  },
  {
    id: 12,
    color: "black",
    name: "BARLAVENTO LAGOON",
    photo: "https://imagens.portobello.com.br/unsafe/884x979/https://www.portobello.com.br/data/products/related/barlavento-lagoon-14-5x14-5-ext-1_41385.jpg?ts=1613739588"
  }
]

export function returnColor(color: string){
  switch(color){
    case 'bege':
      return bege;
    case 'black':
      return black
    default: 
      return bege;
  }
}