import React, {useContext} from 'react'
import { Context } from '..';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate} from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import {Button, Container} from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
  const {user} = useContext(Context)
  const navigate = useNavigate()

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }


  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink className="ms-2"style={{color: 'white'}} to={SHOP_ROUTE}>BuyDevice</NavLink>
          {user.isAuth ?
          <Nav className="ms-auto" style={{color: 'white'}}> 
            <Button 
              variant="outline-light" 
              onClick={() => navigate(ADMIN_ROUTE)}
            > 
              Admin panel
            </Button>
            <Button 
              variant="outline-light ms-2" 
              onClick={() => logOut()}
              className="ml-2"
            >
              Sign out
              </Button>
          </Nav>
          :
          <Nav className="ms-auto" style={{color: 'white'}}> 
            <Button variant="outline-light" onClick={() => navigate(LOGIN_ROUTE)}>Autorization</Button>
          </Nav>
          }
      </Container>
    </Navbar>
  )
})

export default NavBar
