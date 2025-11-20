import { supabase } from "./supabaseClient.js";

export const resolvers = {
  Query: {
    products: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*");

      if (error) throw new Error(error.message);
      return data;
    },

    product: async (_, { id }) => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw new Error(error.message);
      return data;
    },

    users: async () => {
      const { data, error } = await supabase
        .from("users")
        .select("*");

      if (error) throw new Error(error.message);
      return data;
    },

    user: async (_, { id }) => {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw new Error(error.message);
      return data;
    },
  },


  Mutation: {
    // addProduct(name, price)
    addProduct: async (_, { name, price }) => {
      const { data, error } = await supabase
        .from("products")
        .insert([{ name, price }])
        .select()
        .single();

      if (error) throw new Error(error.message);
      return data;
    },

    // addToCart(userId, productId)
    addToCart: async (_, { userId, productId }) => {
      const { data, error } = await supabase
        .from("carts")
        .insert([{ user_id: userId, product_id: productId }])
        .select()
        .single();

      if (error) throw new Error(error.message);
      return data;
    },

    // changePrice(id, price)
    changePrice: async (_, { id, price }) => {
      const { data, error } = await supabase
        .from("products")
        .update({ price })
        .eq("id", id)
        .select()
        .single();

      if (error) throw new Error(error.message);
      return data;
    },
  },
};
