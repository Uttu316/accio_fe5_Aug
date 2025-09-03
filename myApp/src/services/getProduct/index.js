import { api } from "..";

export const getProduct = (productId) => {
  return api({
    endpoint: `/products/${productId}`,
  });
};
