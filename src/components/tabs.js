import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types'; 
import Nylige from "../pages/routes/nylige";
import MestReist from '../pages/routes/mestReist';
import Favoritter from '../pages/routes/favoritter';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
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

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      margin: 10,
    },
});

const AntTabs = withStyles({
    root: {
      borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
      backgroundColor: '#1890ff',
    },
})(Tabs);

export default function TabBar (props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <Paper className={classes.root}>
            <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            variant="fullWidth"
            //textColor="primary"
            >
                <Tab label= {props.labelOne} />
                <Tab label= {props.labelTwo} />
                <Tab label= {props.labelThree} />
            </Tabs>

            <TabPanel value={value} index={0}>
                <Nylige/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <MestReist/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Favoritter/>
            </TabPanel>
        </Paper>
    );
}

