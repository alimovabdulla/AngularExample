// src/app/dependency/classDI.ts
export class ClassDI {
  getProducts(): Product[] {
    return [
      { name: 'Apple', price: '900' },
      { name: 'Samsung', price: '677' },
      { name: 'Techno', price: '342' },
      { name: 'Nokia', price: '743' },
    ];
  }
}

export class Product {
  name: string;
  price: string;
}
