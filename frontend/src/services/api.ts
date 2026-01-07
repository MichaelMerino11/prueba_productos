import axios from "axios";
import type { Product } from "../types/Product";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const getProducts = () => api.get<Product[]>("/products");
export const createProduct = (product: Product) =>
  api.post<Product>("/products", product);
