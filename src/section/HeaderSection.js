import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, AppBar, Toolbar, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    borderTop: "10px solid #00B0F0",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    textTransform: "uppercase",
  },
}));

function Header({ title, subtitle }) {
  const classes = useStyles();
  var subtitleLength = subtitle.length;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>

          <Typography>
            {subtitle.slice(0, 6) +
              "..." +
              subtitle.slice(subtitleLength - 4, subtitleLength) +
              ".v1"}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
