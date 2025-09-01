import { api } from "..";

export const getProducts = () => {
  return api({
    endpoint: "/products",
  });
};
