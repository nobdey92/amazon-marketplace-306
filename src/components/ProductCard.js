import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import { getFromLocalStorage } from "../utils/getFromLocalStorage";

export const ProductCard = ({ product, mode = "search", handleRemove }) => {
  const handleAddToLS = () => {
    const itemsFromLS = getFromLocalStorage("wishList");

    const itemExists = itemsFromLS.find((item) => {
      return item.ASIN === product.ASIN;
    });

    if (!itemExists) {
      const newItems = [product, ...itemsFromLS];

      localStorage.setItem("wishList", JSON.stringify(newItems));
    }
  };

  const handleRemoveFromLS = () => {
    const itemsFromLS = getFromLocalStorage("wishList");

    const newItems = itemsFromLS.filter((item) => {
      return item.ASIN !== product.ASIN;
    });

    localStorage.setItem("wishList", JSON.stringify(newItems));

    handleRemove(newItems);
  };

  return (
    <Card
      sx={{
        width: 300,
        backgroundColor: "#edede9",
        m: 3,
      }}
      elevation={4}
    >
      <CardHeader
        avatar={product.isPrimeEligible === "1" ? <RocketLaunchIcon /> : null}
        title={
          <Typography variant="body1" color="text.secondary">
            {product.title}
          </Typography>
        }
        subheader={
          <Stack
            direction="row"
            alignItems="center"
            alignContent="center"
            justifyContent="space-between"
          >
            <Rating
              name="read-only"
              value={+product.rating}
              precision={0.1}
              readOnly
            />
            <Typography variant="caption" color="text.secondary">
              {product.totalReviews} reviews
            </Typography>
          </Stack>
        }
      />
      <CardMedia
        component="img"
        height="200"
        image={product.imageUrl}
        alt="Paella dish"
        sx={{ objectFit: "contain" }}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h6" color="text.secondary">
          {product.price}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
        {mode === "search" ? (
          <IconButton onClick={handleAddToLS}>
            <FavoriteIcon />
          </IconButton>
        ) : (
          <IconButton onClick={handleRemoveFromLS}>
            <RemoveCircleOutlineIcon />
          </IconButton>
        )}
        <IconButton href={product.detailPageURL} target="_blank">
          <VisibilityIcon />
        </IconButton>
        <IconButton>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
