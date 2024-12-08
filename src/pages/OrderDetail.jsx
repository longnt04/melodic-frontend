import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Divider } from "@mui/material";

const OrderDetail = () => {
  const location = useLocation();
  const { orderData, total } = location.state || {
    orderData: [],
    total: 0,
  };

  console.log(orderData);

  return (
    <Box sx={{ padding: "2vw", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
      <Typography variant="h4" sx={{ marginBottom: "2vw", color: "#e75565" }}>
        Order Details
      </Typography>
      {orderData ? (
        <Box>
          {/* Customer Information */}
          <Box sx={{ backgroundColor: "white", padding: "2vw", borderRadius: "8px", marginBottom: "2vw" }}>
            <Typography variant="h6" sx={{ marginBottom: "1vw", fontWeight: "bold" }}>
              Customer Information
            </Typography>
            <Typography>Name: {orderData.customerName || "John Doe"}</Typography>
            <Typography>Email: {orderData.customerEmail || "example@example.com"}</Typography>
            <Typography>Phone: {orderData.customerPhone || "123-456-7890"}</Typography>
            <Typography>Address: {orderData.shippingAddress || "123 Main St, City, Country"}</Typography>
            <Typography>Date: {new Date(orderData.orderDate).toLocaleDateString()}</Typography>
          </Box>

          {/* Shipping Information */}
          <Box sx={{ backgroundColor: "white", padding: "2vw", borderRadius: "8px", marginBottom: "2vw" }}>
            <Typography variant="h6" sx={{ marginBottom: "1vw", fontWeight: "bold" }}>
              Shipping Information
            </Typography>
            <Typography>Shipping Method: {orderData.shippingMethod || "Standard Shipping"}</Typography>
            <Typography>Estimated Delivery: {orderData.estimatedDelivery || "N/A"}</Typography>
            <Typography>Tracking Number: {orderData.trackingNumber || "N/A"}</Typography>
          </Box>

          {/* Order Status */}
          <Box sx={{ backgroundColor: "white", padding: "2vw", borderRadius: "8px", marginBottom: "2vw" }}>
            <Typography variant="h6" sx={{ marginBottom: "1vw", fontWeight: "bold" }}>
              Order Status
            </Typography>
            <Typography>Status: {orderData.status || "Pending"}</Typography>
            <Typography>Payment Status: {orderData.paymentStatus || "Paid"}</Typography>
          </Box>

          {/* Product List */}
          <Box sx={{ backgroundColor: "white", padding: "2vw", borderRadius: "8px", marginBottom: "2vw" }}>
            <Typography variant="h6" sx={{ marginBottom: "1vw", fontWeight: "bold" }}>
              Products Ordered
            </Typography>
            {orderData.merchandises.map((product, index) => (
              <Box key={index} sx={{ display: "flex", marginBottom: "1vw", borderBottom: "1px solid #e0e0e0", paddingBottom: "1vw" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    marginRight: "1vw",
                    borderRadius: "6px",
                  }}
                />
                <Box>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography color="gray">Quantity: {product.quantity}</Typography>
                  <Typography color="gray">Price per item: {product.price} $</Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: "0.5vw" }}>
                    Total: {product.price * product.quantity} $
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Order Summary */}
          <Box sx={{ backgroundColor: "white", padding: "2vw", borderRadius: "8px", textAlign: "right" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "1vw" }}>
              Order Summary
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Total Amount: {total} $
            </Typography>
          </Box>
        </Box>
      ) : (
        <Typography>No order data available.</Typography>
      )}
    </Box>
  );
};

export default OrderDetail;
