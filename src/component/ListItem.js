import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#D1E2EA",
    padding: "10px",
    marginBottom: "10px",
  },
  title: {
    display: "inline-block",
  },
  digit: {
    border: "1px solid black",
    display: "inline-block",
    marginRight: "10px",
    paddingInline: "7px",
  },
}));

function ListItem({ SrNo, title }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.digit}>
        <Typography my={1}>{SrNo}</Typography>
      </div>
      <div className={classes.title}>{title}</div>
    </div>
  );
}

export default ListItem;
