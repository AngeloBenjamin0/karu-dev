/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Tabs } from '@mui/material';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import TablaServices from './TablaServices';

const TabPanel = (props) => {
  const {
    children, value, index, ...other
  } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0.5 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
};

TabPanel.prototypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function allyProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const TabServices = (props) => {
  const [value, setValue] = useState(0);
  const { idSupervisor } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'silver' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="scrollable auto tabs example"
          indicatorColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Services" {...allyProps(0)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TablaServices idSupervisor={idSupervisor} />
      </TabPanel>
    </Box>
  );
};
