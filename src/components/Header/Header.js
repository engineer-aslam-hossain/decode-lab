import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import './Header.css';
import Accounting from '../Accounting/Accounting';
import Data from '../Data/Data';
import ECommerce from '../ECommerce/ECommerce';
import WebApp from '../WebApp/WebApp';

const AntTabs = withStyles({
  root: {
    // borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#00c49a',
    width: '20px !important',
    height: '20px',
    borderRadius: '50%',
    marginLeft: '60px',
    zIndex: '100000',
  },
})(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    color: '#00c49a',
    fontWeight: '400',
    marginRight: theme.spacing(4),
    '&:hover': {
      color: '#00c49a',
      opacity: 1,
    },
    '&$selected': {
      color: '#00c49a',
      fontWeight: '600',
    },
    '&:focus': {
      color: '#00c49a',
    },
  },
  selected: {},
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
    padding: '2rem 0',
  },
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label='ant example'>
          <AntTab label='Data & Technology' />
          <AntTab label='Accounting & Finance' />
          <AntTab label='E-commerce' />
          <AntTab label='Modern Web App' />
        </AntTabs>
      </div>
      <hr className='hrLine' />
      <div className='container'>
        <div className='row'>
          <TabPanel value={value} index={0}>
            <Data />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Accounting />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ECommerce />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <WebApp />
          </TabPanel>
        </div>
      </div>
    </div>
  );
};

export default Header;
