<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Product } from "./types/Product";
import { getProducts, createProduct } from "./services/api";

const products = ref<Product[]>([]);
const newProduct = ref<Product>({ name: "", price: 0, stock: 0 });

const loadProducts = async () => {
  const { data } = await getProducts();
  products.value = data;
};

const handleSubmit = async () => {
  try {
    await createProduct(newProduct.value);
    newProduct.value = { name: "", price: 0, stock: 0 }; // Limpiar
    await loadProducts(); // Recargar lista
  } catch (error) {
    alert("Error al crear producto");
  }
};

onMounted(loadProducts);
</script>

<template>
  <div style="padding: 20px; font-family: sans-serif">
    <h1>Gestión de Productos</h1>

    <section>
      <h2>Nuevo Producto</h2>
      <form @submit.prevent="handleSubmit">
        <input v-model="newProduct.name" placeholder="Nombre" required />
        <input
          v-model.number="newProduct.price"
          type="number"
          step="0.01"
          placeholder="Precio"
          required
        />
        <input
          v-model.number="newProduct.stock"
          type="number"
          placeholder="Stock"
          required
        />
        <button type="submit">Guardar</button>
      </form>
    </section>

    <hr />

    <section>
      <h2>Listado</h2>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in products" :key="p.id">
            <td>{{ p.name }}</td>
            <td>${{ p.price }}</td>
            <td>{{ p.stock }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>
