import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { useApp } from "../hooks/useApp";

export const Basket = () => {
  const { state } = useApp();

  return (
    <Stack spacing={3}>
      <List sx={{ width: "100%", border: "1px solid black" }}>
        {state.basket.map((item) => {
          return (
            <ListItem alignItems="flex-start">
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <ListItemAvatar>
                    <Avatar alt={item.title} src={item.imageUrl} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body1"
                        color="text.primary"
                      >
                        {item.title}
                      </Typography>
                    }
                    secondary={
                      <>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {item.price} | Qty. {item.quantity}
                        </Typography>
                      </>
                    }
                  />
                </Grid>
                <Grid item xs={2}>
                  <Stack direction="row" justifyContent="center">
                    <IconButton aria-label="delete">
                      <RemoveCircleOutlineIcon />
                    </IconButton>

                    <IconButton aria-label="delete">
                      <AddCircleOutlineIcon />
                    </IconButton>
                  </Stack>
                </Grid>
                <Grid item xs={2}>
                  <Typography component="span" variant="body2">
                    £{(item.priceAmount * item.quantity).toFixed(2)}
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          );
        })}
      </List>
      <Paper elevation={3} sx={{ p: 5, textAlign: "end" }}>
        <Typography component="span" variant="h5" color="text.primary">
          Total: £{state.total}
        </Typography>
      </Paper>
    </Stack>
  );
};
