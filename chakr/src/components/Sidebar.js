import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import TaskIcon from '@mui/icons-material/Task';
import PeopleIcon from '@mui/icons-material/People';
import OpportunityIcon from '@mui/icons-material/Lightbulb';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div style={{ width: '250px', background: "#F5F5F5" }}>
      <List>
        <ListItem>
          <ListItemText primary="Demo" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/search">
          <ListItemIcon><SearchIcon /></ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>
        <Link to="/settings" className="no-underline">
          <ListItem button>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </Link>
        <ListItem button component={Link} to="/tasks">
          <ListItemIcon><TaskIcon /></ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItem>
        <ListItem style={{ marginTop: "2%" }}>
          <ListItemText primary="Workspace" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/people">
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary="People" />
        </ListItem>
        <Link to="/companies" className="no-underline">
          <ListItem button>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Companies" />
          </ListItem>
        </Link>
        <ListItem button component={Link} to="/opportunities">
          <ListItemIcon><OpportunityIcon /></ListItemIcon>
          <ListItemText primary="Opportunities" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
