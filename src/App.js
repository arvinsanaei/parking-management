import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Switch, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Button, List, ListItem, ListItemText, IconButton, Badge } from '@material-ui/core';
import { Parking, EventAvailable, EventBusy } from '@material-ui/icons';



const App = () => {
  const [parkingSpaces, setParkingSpaces] = useState([
    { id: 1, available: true },
    { id: 2, available: true },
    { id: 3, available: false },
    { id: 4, available: true },
    { id: 5, available: false },
  ]);
  const ParkingList = ({ props }) => { 
    debugger;
    return (
      <List>
        {parkingSpaces.map((space) => (
          <ListItem key={space.id}>
            <ListItemText primary={`Space ${space.id}`} secondary={space.available ? 'Available' : 'Occupied'} />
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => toggleAvailability(space.id)}
            >
              {space.available ? <EventAvailable /> : <EventBusy />}
            </IconButton>
          </ListItem>
        ))}
      </List>
    );
  };

  const toggleAvailability = (spaceId) => {
    setParkingSpaces((prevSpaces) =>
      prevSpaces.map((space) =>
        space.id === spaceId ? { ...space, available: !space.available } : space
      )
    );
  };

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Parking Management</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route exact path="/" element={<ParkingList/>} > 
          </Route>
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
