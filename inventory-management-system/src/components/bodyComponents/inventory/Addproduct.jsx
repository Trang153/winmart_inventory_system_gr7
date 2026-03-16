import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import productList from "./productList";

export default function AddProduct({ onAdd }) {
  const [formData, setFormData] = useState({
    id: "",
    product: "",
    category: "",
    price: "",
    stock: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // ép kiểu số cho price và stock
    const newProduct = {
      ...formData,
      id: Number(formData.id),
      price: Number(formData.price),
      stock: Number(formData.stock),
    };
    onAdd(newProduct);
    setFormData({ id: "", product: "", category: "", price: "", stock: "" });
  };

  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 2 }}>
      <TextField label="ID" name="id" value={formData.id} onChange={handleChange} />
      <TextField label="Product" name="product" value={formData.product} onChange={handleChange} />
      <TextField label="Category" name="category" value={formData.category} onChange={handleChange} />
      <TextField label="Price" name="price" value={formData.price} onChange={handleChange} />
      <TextField label="Stock" name="stock" value={formData.stock} onChange={handleChange} />
      <Button variant="contained" onClick={handleSubmit}>Add Product</Button>
    </Box>
  );
}
