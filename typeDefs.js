//les type soit un peu l'équivalent des DTO
export const typeDefs = `
  type Product {
    id: ID!
    name: String!
    price: Float!
  }

  type User {
    id: ID!
    name: String!
    cart: [Product!]!
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product!
    users: [User!]!
    productPrice(id: ID!): Float!
    user(id: ID!): User!
  }
  type Mutation {
    addProduct(name: String!, price: Float!): Product!
    addToCart(userId: ID!, productId: ID!): User!
    changePrice(id: ID!, price: Float!): Product!
  }
`;