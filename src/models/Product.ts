type Product = {
   title: string,
   price: number
}

const data: Product[] = [
   { title: 'Produto X', price: 10 },
   { title: 'Produto Y', price: 15 },
   { title: 'Produto Z', price: 20 },
];

export const Product = {
   //Pegar todos os produtos do BD (Provisoriamente é o array "data")
   getAll: (): Product[] => {
      return data;
   },
   //Filtrar produtos por valor
   getPriceAfter: (price: number): Product[] => {
      return data.filter(item => (item.price >= price) ? true : false)
   }
}