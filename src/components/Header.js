import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, styled, IconButton, Drawer, List, ListItem, ListItemText, Link } from '@mui/material';
import { pink, purple } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery, useTheme } from '@mui/material';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: pink[500],
  transition: 'background-color 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: pink[500],
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  transition: 'color 0.3s ease-in-out',
  '&:hover': {
    color: theme.palette.common.black,
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '220px',
  },
}));

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));;

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 3 }} tex>
          Life @IITK
        </Typography>
        {!isMobile && (
          <nav>
            <StyledButton href="/" component="a" color="inherit">Home</StyledButton>
            <StyledButton href="/resources" component="a" color="inherit">Resources</StyledButton>
            <StyledButton href="/review" component="a" color="inherit">Reviews</StyledButton>
            <StyledButton href="/login" component="a" color="inherit">Login</StyledButton>
          </nav>
        )}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <StyledDrawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button component={Link} href="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} href="/resources">
            <ListItemText primary="Resources" />
          </ListItem>
          <ListItem button component={Link} href="/submitresource">
            <ListItemText primary="Submit Resources" />
          </ListItem>
          <ListItem button component={Link} href="/review">
            <ListItemText primary="Reviews" />
          </ListItem>
          <ListItem button component={Link} href="/submitreview">
            <ListItemText primary="Submit Reviews" />
          </ListItem>
          <ListItem button component={Link} href="/login">
            <ListItemText primary="Login" />
          </ListItem>
          <ListItem button component={Link} href="/signup">
            <ListItemText primary="SignUp" />
          </ListItem>
        </List>
      </StyledDrawer>
    </StyledAppBar>
  );
}

export default Header;
