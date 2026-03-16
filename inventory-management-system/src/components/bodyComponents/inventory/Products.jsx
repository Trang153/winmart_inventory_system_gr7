import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import productList from "./productList";
import Product from "./Product";
import AddProductForm from "./AddProductForm";

export default function Products() {
  const [rows, setRows] = useState(productList);
  const [open, setOpen] = useState(false);

  const handleAddProduct = (newProduct) => {
    setRows([...rows, newProduct]);
    setOpen(false); // đóng dialog sau khi thêm
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 400,
      renderCell: (cellData) => (
        <Product productName={cellData.row.product} />
      ),
    },
    { field: "category", headerName: "Category", width: 200 },
    {
      field: "price",
      headerName: "Price",
      width: 150,
      valueGetter: (params) => "$" + params.row.price,
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 200,
      valueGetter: (params) => params.row.stock + " pcs",
    },
  ];

  return (
    <div>
      {/* Nút mở dialog */}
      <Button variant="contained" sx={{ m: 2 }} onClick={() => setOpen(true)}>
        Add Product
      </Button>

      {/* Bảng sản phẩm */}
      <DataGrid
        sx={{ borderLeft: 0, borderRight: 0, borderRadius: 0 }}
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        autoHeight
      />

      {/* Dialog thêm sản phẩm */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
          <AddProductForm onAdd={handleAddProduct} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
