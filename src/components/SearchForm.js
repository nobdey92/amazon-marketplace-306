import { useFormik } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export const SearchForm = ({ handleSubmit }) => {
  const onSubmit = ({ searchTerm }) => {
    handleSubmit(searchTerm);
  };

  const formik = useFormik({
    initialValues: { searchTerm: "" },
    onSubmit,
    validationSchema: Yup.object({
      searchTerm: Yup.string().required("Please enter a product name"),
    }),
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <TextField
        error={formik.touched.searchTerm && !!formik.errors.searchTerm}
        helperText={formik.errors.searchTerm}
        name="searchTerm"
        type="search"
        label="Enter product name"
        value={formik.values.searchTerm}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
