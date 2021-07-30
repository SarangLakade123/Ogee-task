import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  AppBar,
  Box,
  ButtonGroup,
  Tab,
  Tabs,
  Button,
} from "@material-ui/core";
import ListItem from "../component/ListItem";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabSection() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <AppBar position="static" color="white">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="simple tabs example"
        >
          <Tab label="General" {...a11yProps(0)} />
          <Tab label="Criteria" {...a11yProps(1)} />
          <Tab label="Action" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        General
      </TabPanel>
      <TabPanel value={value} index={1}>
        Criteria
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ListItem title="Set Profile: MasterProfile9.v1" SrNo="1" />
        <ListItem title="Notify: Email" SrNo="2" />

        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "inline-block" }}>
            <Typography>Add Action : </Typography>
          </div>
          <div style={{ display: "inline-block" }}>
            <ButtonGroup>
              <Button variant="text" color="primary">
                Simple
              </Button>
              <Button variant="text" color="primary">
                conditional
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </TabPanel>
    </div>
  );
}
export default TabSection;
