import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

export default function AddProductForm({ onAdd }) {
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
    const newProduct = {
      id: Number(formData.id),
      product: formData.product,
      category: formData.category,
      price: Number(formData.price),
      stock: Number(formData.stock),
    };
    onAdd(newProduct);
    setFormData({ id: "", product: "", category: "", price: "", stock: "" });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
      <TextField label="ID" name="id" value={formData.id} onChange={handleChange} />
      <TextField label="Product" name="product" value={formData.product} onChange={handleChange} />
      <TextField label="Category" name="category" value={formData.category} onChange={handleChange} />
      <TextField label="Price" name="price" value={formData.price} onChange={handleChange} />
      <TextField label="Stock" name="stock" value={formData.stock} onChange={handleChange} />
      <Button variant="contained" onClick={handleSubmit}>Save</Button>
    </Box>
  );
}
