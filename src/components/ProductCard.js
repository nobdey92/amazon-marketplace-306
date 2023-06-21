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

export const ProductCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "#edede9",
        m: 3,
      }}
      elevation={4}
    >
      <CardHeader
        avatar={<RocketLaunchIcon />}
        title={
          <Typography variant="body1" color="text.secondary">
            Honeywell TurboForce Power Fan (Quiet Operation Cooling, 90°
            Variable Tilt, 3 Speed Settings, Wall Mount Feature, Table Fan)
            HT900E
          </Typography>
        }
        subheader={
          <Stack
            direction="row"
            alignItems="center"
            alignContent="center"
            justifyContent="space-between"
          >
            <Rating name="read-only" value={3.4} precision={0.1} readOnly />
            <Typography variant="caption" color="text.secondary">
              24500 reviews
            </Typography>
          </Stack>
        }
      />
      <CardMedia
        component="img"
        height="200"
        image="https://images.unsplash.com/photo-1682685797439-a05dd915cee9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        alt="Paella dish"
        sx={{ objectFit: "contain" }}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h6" color="text.secondary">
          £24.99
        </Typography>
      </CardContent>
      <Divider />
      <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <VisibilityIcon />
        </IconButton>
        <IconButton aria-label="share">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
