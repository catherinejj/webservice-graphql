//import { products,users } from './typeDefs.js';

//equivalent des posts
export const resolvers = {
  Query : {
  products:() => products,
  product:(_, {id}) => 
    products.find(p => p.id === id),
  users:() => users,
  user:() => users.find(u => u.id === id),
},

  Mutation : {
    //mutation
    addProduct:(_, {name,price}) => {
      const newProduct = { id:productId + 1, name:"chemise",price:49.99};
      prodcuts.push('newProduct');
      return newProduct;
    },
    //mutation ajoute produit dans panier de user
    addToCart: (_, { userId, productId }) => {
      const user = users.find(u => u.id === userId);
      const product = products.find(p => p.id === productId);

      user.cart.push(product)
    
    },
      
    changePrice:(_, { id, price }) => {
      const product = products.find(p => p.id == id);
      if (!product) throw new Error("Product not found.");
      product.price = price;
      return product;
    },
  },
};