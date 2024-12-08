import React, { useEffect, useState } from "react";
import { Box, Typography, Avatar, Tabs, Tab, Button } from "@mui/material";
import CardGrid from "../components/common/CardGrid";

const ArtistShop = () => {
  const mockMer = [
    {
      id: 1,
      name: "Áo thun nam",
      price: 25,
      image:
        "https://shop.thenbhd.com/cdn/shop/products/NBHD-SCULPTURE-TEE_600x.png?v=1681766714",
      sold: 150,
      release_date: "2023-11-10",
      type: "others",
    },
    {
      id: 2,
      name: "Quần jeans nữ",
      price: 30,
      image:
        "https://shop.thenbhd.com/cdn/shop/files/NBHD-HOUSE-TEE_600x.png?v=1694035989",
      sold: 120,
      release_date: "2023-10-15",
      type: "others",
    },
    {
      id: 3,
      name: "Giày thể thao",
      price: 50,
      image:
        "https://shop.thenbhd.com/cdn/shop/products/HOLLYWOODHOODIE_600x.png?v=1634018637",
      sold: 200,
      release_date: "2023-12-01",
      type: "others",
    },
    {
      id: 4,
      name: "Album Vol. 1",
      price: 20,
      image:
        "https://shop.thenbhd.com/cdn/shop/products/HOLLYWOODHOODIE_600x.png?v=1634018637",
      sold: 300,
      release_date: "2023-08-20",
      type: "album",
    },
    {
      id: 5,
      name: "Album Vol. 2",
      price: 25,
      image:
        "https://shop.thenbhd.com/cdn/shop/products/HOLLYWOODHOODIE_600x.png?v=1634018637",
      sold: 250,
      release_date: "2024-01-05",
      type: "album",
    },
    {
      id: 6,
      name: "Hoodie Thời Trang",
      price: 40,
      image:
        "https://shop.thenbhd.com/cdn/shop/products/HOLLYWOODHOODIE_600x.png?v=1634018637",
      sold: 90,
      release_date: "2023-09-01",
      type: "others",
    },
    {
      id: 7,
      name: "Áo khoác bomber",
      price: 60,
      image:
        "https://shop.thenbhd.com/cdn/shop/products/HOLLYWOODHOODIE_600x.png?v=1634018637",
      sold: 180,
      release_date: "2023-07-10",
      type: "others",
    },
    {
      id: 8,
      name: "Album Remixes",
      price: 18,
      image:
        "https://shop.thenbhd.com/cdn/shop/products/HOLLYWOODHOODIE_600x.png?v=1634018637",
      sold: 100,
      release_date: "2024-02-01",
      type: "album",
    },
    {
      id: 9,
      name: "Túi đeo chéo",
      price: 35,
      image:
        "https://shop.thenbhd.com/cdn/shop/products/HOLLYWOODHOODIE_600x.png?v=1634018637",
      sold: 75,
      release_date: "2023-06-15",
      type: "others",
    },
    {
      id: 10,
      name: "Set phụ kiện",
      price: 20,
      image:
        "https://shop.thenbhd.com/cdn/shop/products/HOLLYWOODHOODIE_600x.png?v=1634018637",
      sold: 60,
      release_date: "2023-05-20",
      type: "others",
    },
    {
      id: 11,
      name: "Áo thun nữ",
      price: 25,
      image:
        "https://shop.thenbhd.com/cdn/shop/products/HOLLYWOODHOODIE_600x.png?v=1634018637",
      sold: 130,
      release_date: "2023-12-15",
      type: "others",
    },
    {
      id: 12,
      name: "Balo thời trang",
      price: 50,
      image:
        "https://shop.thenbhd.com/cdn/shop/products/HOLLYWOODHOODIE_600x.png?v=1634018637",
      sold: 85,
      release_date: "2023-04-10",
      type: "others",
    },
    {
      id: 13,
      name: "Album Live Show",
      price: 22,
      image:
        "https://shop.thenbhd.com/cdn/shop/products/HOLLYWOODHOODIE_600x.png?v=1634018637",
      sold: 140,
      release_date: "2023-09-30",
      type: "album",
    },
    {
      id: 14,
      name: "Nón lưỡi trai",
      price: 15,
      image:
        "https://shop.thenbhd.com/cdn/shop/products/HOLLYWOODHOODIE_600x.png?v=1634018637",
      sold: 95,
      release_date: "2023-03-15",
      type: "others",
    },
    {
      id: 15,
      name: "Áo polo nam",
      price: 35,
      image:
        "https://shop.thenbhd.com/cdn/shop/products/HOLLYWOODHOODIE_600x.png?v=1634018637",
      sold: 110,
      release_date: "2023-07-25",
      type: "others",
    },
    {
      id: 16,
      name: "Album Special Edition",
      price: 30,
      image:
        "https://shop.thenbhd.com/cdn/shop/products/HOLLYWOODHOODIE_600x.png?v=1634018637",
      sold: 220,
      release_date: "2024-01-20",
      type: "album",
    },
  ];

  const mockArtist = {
    id: "1997",
    name: "Jack",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8D6I_OM3e_cbZ5zhovzOMAm8BZxlsxxVsw&s",
  };

  const [merchandises, setMerchandises] = useState([]);
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(8); // Initial number of items shown

  useEffect(() => {
    setMerchandises(mockMer);
  }, []);

  const handleTabChange = (event, newValue) => {
    setFilterStatus(newValue);
    let filtered = [];
    switch (newValue) {
      case "ALL":
        filtered = mockMer;
        break;
      case "Best Sellers":
        filtered = [...mockMer].sort((a, b) => b.sold - a.sold);
        break;
      case "New Releases":
        filtered = [...mockMer].sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        );
        break;
      case "Albums":
        filtered = mockMer.filter((item) => item.type === "album");
        break;
      case "Others":
        filtered = mockMer.filter((item) => item.type === "others");
        break;
      default:
        filtered = mockMer;
    }
    setMerchandises(filtered);
    setVisibleCount(8); // Reset visible count when changing tabs
  };

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8); // Increase count to show more items
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        paddingBottom: "5vh",
      }}
    >
      {/* Artist Info */}
      <Box
        sx={{
          width: "85%",
          margin: "2% 5%",
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Avatar
          src={mockArtist.img}
          alt={mockArtist.name}
          sx={{ width: 80, height: 80 }}
        />
        <Box>
          <Typography variant="h5" fontWeight="bold">
            {mockArtist.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Official store of {mockArtist.name}
          </Typography>
        </Box>
      </Box>

      {/* Tabs */}
      <Box
        sx={{ borderBottom: 1, borderColor: "divider", marginBottom: "1vw" }}
      >
        <Tabs
          value={filterStatus}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: {
              xs: "95%",
              md: "90%",
            },
            margin: "2% 5%",
            "& .MuiTabs-indicator": {
              backgroundColor: "#e75565",
            },
          }}
        >
          <Tab
            label="All"
            value="All"
            disableRipple
            sx={{
              flex: 1,
              textAlign: "center",
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
              textTransform: "none",
              color: "#000",
              "&.Mui-selected": {
                color: "#e75565",
              },
            }}
          />
          <Tab
            label="Best Sellers"
            value="Best Sellers"
            disableRipple
            sx={{
              flex: 1,
              textAlign: "center",
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
              textTransform: "none",
              color: "#000",
              "&.Mui-selected": {
                color: "#e75565",
              },
            }}
          />
          <Tab
            label="New Releases"
            value="New Releases"
            disableRipple
            sx={{
              flex: 1,
              textAlign: "center",
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
              textTransform: "none",
              color: "#000",
              "&.Mui-selected": {
                color: "#e75565",
              },
            }}
          />
          <Tab
            label="Albums"
            value="Albums"
            disableRipple
            sx={{
              flex: 1,
              textAlign: "center",
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
              textTransform: "none",
              color: "#000",
              "&.Mui-selected": {
                color: "#e75565",
              },
            }}
          />
          <Tab
            label="Others"
            value="Others"
            disableRipple
            sx={{
              flex: 1,
              textAlign: "center",
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
              textTransform: "none",
              color: "#000",
              "&.Mui-selected": {
                color: "#e75565",
              },
            }}
          />
        </Tabs>
      </Box>

      {/* Merchandise List */}
      {merchandises.length > 0 ? (
        <Box
          sx={{
            width: "90%",
            margin: "2% 5%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardGrid List={merchandises.slice(0, visibleCount)} />
          {visibleCount < merchandises.length && (
            <Button
              variant="contained"
              onClick={loadMore}
              sx={{
                backgroundColor: "#e75565",
                color: "#fff",
                padding: "0.5rem 2rem",
                marginTop: "1rem",
                "&:hover": {
                  backgroundColor: "#d04757",
                },
              }}
            >
              Load More
            </Button>
          )}
        </Box>
      ) : (
        <Box sx={{ fontWeight: "Bold", fontSize: "1.5vw", marginLeft: "2vw" }}>
          No result found
        </Box>
      )}
    </Box>
  );
};

export default ArtistShop;
