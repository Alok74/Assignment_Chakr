import React, { useState } from 'react';
import { Tabs, Tab, Checkbox, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Divider } from '@mui/material';
import NotionIcon from '@mui/icons-material/Note';
import CalendarIcon from '@mui/icons-material/CalendarToday';

const Taskbar = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [tasks, setTasks] = useState([
    { text: 'Code', completed: false },
  ]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleToggle = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <Tab label="To do" />
        <Tab label="Done" />
      </Tabs>
      <Divider />
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index} button>
            <Checkbox
              edge="start"
              checked={task.completed}
              tabIndex={-1}
              disableRipple
              onChange={() => handleToggle(index)}
            />
            <ListItemText primary={task.text} />
            <ListItemSecondaryAction>
              <IconButton edge="end">
                <NotionIcon />
              </IconButton>
              <IconButton edge="end">
                <CalendarIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Taskbar;
