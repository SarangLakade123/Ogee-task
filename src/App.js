import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, Menu, Box } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import Header from "./section/HeaderSection";
import TabSection from "./section/Tabs";
import Form from "./section/Form";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  appBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: theme.palette.secondary,
  },
}));

function App() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [section, setSection] = React.useState(1);

  const clickedTab = (event) => {
    setSection(null);
    setAnchorEl(null);
  };

  const clickedForm = (event) => {
    setSection(1);
    setAnchorEl(null);
  };

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <Header title="New Publication Rule" subtitle="PublicationRule1" />
      {section === 1 ? <Form /> : <TabSection />}
      <div
        style={{
          position: "fixed",
          top: "auto",
          bottom: 0,
          width: "100%",
        }}
      >
        <Box display="flex" bgcolor="background.paper">
          <Box
            p={1}
            pl={2}
            flexGrow={1}
            bgcolor="#D1E2EA"
            onClick={() => console.log("Cancel")}
          >
            Cancel
          </Box>
          <Box
            px={3}
            py={1}
            mr={0.3}
            bgcolor="#00B0F0"
            onClick={() => console.log("Save")}
          >
            Save
          </Box>
          <Box p={1} bgcolor="#00B0F0" onClick={handleClickMenu}>
            <MoreVert />
          </Box>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={clickedTab}>Tabs</MenuItem>
            <MenuItem onClick={clickedForm}>Form</MenuItem>
          </Menu>
        </Box>
      </div>
    </div>
  );
}
export default App;
