import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types'; 
import Nylige from '../../pages/tabFolders/nylige';
import MestReist from '../../pages/tabFolders/mestReist';
import Favoritter from '../../pages/tabFolders/favoritter';


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
          <Box p={3} style = {{padding:0}}>
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
      marginBottom: 110,
      padding: 0,
      backgroundColor: "#F8F8F8",
    },
    tab: {
      minWidth: '33%'
  }
});


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
            >
                <Tab label= {props.labelOne} classes={{ root: classes.tab }}/>
                <Tab label= {props.labelTwo} classes={{ root: classes.tab }}/>
                <Tab label= {props.labelThree} classes={{ root: classes.tab }}/>
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

