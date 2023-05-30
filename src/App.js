import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Switch, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Button, List, ListItem, ListItemText, IconButton, Badge, Icon as MIcons, duration } from '@material-ui/core';
import { Parking, EventAvailable, EventBusy, CardTravel } from '@material-ui/icons';
import Timer from './components/timer';
import { indigo } from '@material-ui/core/colors';



const App = () => {
   
  const [parkingSpaces, setParkingSpaces] = useState([
    { id: 1, available: true,currentTime : "0",time:() => <Timer/> },
    { id: 2, available: true ,currentTime : "0",time: () =><Timer/>},
    { id: 3, available: true,currentTime : "0",time:() =><Timer/> },
    { id: 4, available: true,currentTime : "0",time:() =><Timer/> },
    { id: 5, available: true,currentTime : "0",time:() =><Timer/> },
  ]);
  const Callback = (data) =>{
    debugger;
  }
  const ParkingList = ({ props }) => {   
   
    return (
      <List>
        {parkingSpaces.map((space) => (
          <ListItem key={space.id} className={space.available ? 'Available' : 'Occupied'}>
            <ListItemText  primary={`Space ${space.id}`} secondary={space.available ? 'Available' : 'Occupied'} />
            <div>
              {/* <Timer value={space.currentTime} handleCallback={Callback}  ></Timer> */}
           {space.currentTime}
            </div>
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => toggleAvailability(space.id,space.currentTime,space.available)}
            >
              {space.available ? <EventAvailable /> : <EventBusy />}
              </IconButton>
            
          </ListItem>
        ))}
      </List>
    );
  };
  const getTimeNow = () => {
    let t = new Date();
    return t.toLocaleTimeString();
  }
  const toggleAvailability = (spaceId,currentTime,toggleValue) => {
      setParkingSpaces((prevSpaces) =>
      prevSpaces.map((space) =>
      (space.id === spaceId && !toggleValue) ? { ...space, available: !space.available,currentTime: "0" } : 
        (space.id === spaceId && toggleValue) ? {...space,available: !space.available,currentTime: getTimeNow()} : space
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
