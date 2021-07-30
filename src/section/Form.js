import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, TextField, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const category = [
  {
    value: "Notify",
    label: "Notify",
  },
  {
    value: "A",
    label: "Abc",
  },
  {
    value: "X",
    label: "XYZ",
  },
];

function Header() {
  const classes = useStyles();
  const [select, setSelect] = React.useState("Notify");

  const handleChange = (event) => {
    setSelect(event.target.value);
  };
  return (
    <Grid container justifyContent="space-between">
      <Grid item lg={4} className={classes.form}>
        <form noValidate autoComplete="off" className={classes.form}>
          <TextField
            fullWidth
            select
            id="standard-basic"
            label="Action"
            value={select}
            onChange={handleChange}
          >
            {category.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField fullWidth id="standard-basic" label="Email" />
          <TextField fullWidth id="standard-basic" label="SMS" />
        </form>
      </Grid>
      <Grid item lg={4} className={classes.form}>
        <Typography>Type:</Typography>
        <Typography>Simple Action</Typography>
      </Grid>
    </Grid>
  );
}

export default Header;
