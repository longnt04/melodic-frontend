import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import MerchandiseCard from "../components/common/MerchandiseCard";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const ArtistAddNewMerchandise = () => {
  const [category, setCategory] = useState("");

  const merchandise = {
    name: `‘I LOVE YOU.’ 10th ANNIVERSARY EDITION 2xLP + ‘THE LOVE COLLECTION’ 7”
`,
    category: "Physical Album",
    price: "25",
    image:
      "https://shop.thenbhd.com/cdn/shop/products/TheNBHD_ILoveYouD2C_1024x1024@2x.png?v=1681914792",
  };
  const handleSelectChange = (event) => {
    // setCategory(event.target.value);
    event.target = event.ta;
  };

  return (
    <Box display="flex" flexDirection="column">
      <Typography
        component="h1"
        variant="h5"
        sx={{ textTransform: "uppercase", fontWeight: "bold" }}
      >
        Add new merchandise
      </Typography>
      <Box display="flex" flexFlow="row wrap">
        <Grid
          flex="1 1 50%"
          container
          component="form"
          columns={2}
          p={2}
          columnSpacing={2}
          rowSpacing={1}
          mr={5}
          sx={{ "& .MuiFormLabel-root": { color: "black" } }}
        >
          {/* {Merchandise Form} */}
          <Grid size={2}>
            <FormControl variant="composed" fullWidth required>
              <FormLabel component="h2" variant="h2">
                Merchandise Name
              </FormLabel>
              <OutlinedInput id="merchandise-name" fullWidth />
            </FormControl>
          </Grid>
          <Grid size={2}>
            <FormControl fullWidth required>
              <FormLabel>Category</FormLabel>
              <Select
                id="merchandise-category"
                onChange={handleSelectChange}
                value={category}
              >
                <MenuItem value="digital-album">Digital Album</MenuItem>
                <MenuItem value="physical-album">Physical Album</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={2}>
            <FormControl fullWidth required>
              <FormLabel>Related Albums</FormLabel>
              <Select
                id="merchandise-category"
                onChange={handleSelectChange}
                value={category}
              >
                <MenuItem value="chip-chrome">Chip Chrome</MenuItem>
                <MenuItem value="sweater-weather">Sweater Weather</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 2, sm: 2, md: 1 }}>
            <FormControl variant="composed" fullWidth required>
              <FormLabel>Price</FormLabel>
              <OutlinedInput id="merchandise-price" type="number" fullWidth />
            </FormControl>
          </Grid>
          <Grid size={{ xs: 2, sm: 2, md: 1 }}>
            <FormControl variant="composed" fullWidth required>
              <FormLabel>Quantity In Stock</FormLabel>
              <OutlinedInput
                id="merchandise-quantity-in-stock"
                type="number"
                fullWidth
              />
            </FormControl>
          </Grid>
          <Grid size={2}>
            <FormControl variant="composed" fullWidth>
              <FormLabel>Description</FormLabel>
              <OutlinedInput
                id="merchandise-desciption"
                multiline
                minRows={4}
                fullWidth
              />
            </FormControl>
          </Grid>
          <Grid size={2}>
            <FormControl variant="composed" fullWidth>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
                sx={{ backgroundColor: "#564c4d" }}
              >
                Upload image
              </Button>
            </FormControl>
          </Grid>
          <Grid size={2} variant="composed">
            <Box
              mt={2}
              display="flex"
              flexDirection="row"
              justifyContent="center"
              gap={2}
            >
              <FormControl fullWidth>
                <Button type="submit" variant="contained">
                  Publish
                </Button>
              </FormControl>
              <FormControl fullWidth>
                <Button type="reset" variant="outlined">
                  Cancel
                </Button>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <Box
          flex="1 1 50%"
          display={{ xs: "none", sm: "none", md: "flex" }}
          alignItems="center"
          flexDirection="column"
          p={4}
        >
          {/* {Preview} */}
          <Typography variant="h4" component="h2" alignSelf="start">
            Preview
          </Typography>
          <Typography component="p" alignSelf="start">
            This is how your merchandise appears in Artist Shop.
          </Typography>
          <MerchandiseCard merchandise={merchandise} />
        </Box>
      </Box>
    </Box>
  );
};

export default ArtistAddNewMerchandise;
