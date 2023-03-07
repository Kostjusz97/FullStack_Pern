import React, {useState, useContext} from 'react';
import { Container, Form, Card, Button} from 'react-bootstrap';
import { NavLink , useLocation, useNavigate} from 'react-router-dom';
import { login, registration } from '../http/userAPI';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Auth = observer(() => {
  const {user}= useContext(Context);
  const location =  useLocation()
  const navigate =  useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data
      if (isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password)
      }
      user.setUser(data)
      user.setIsAuth(true)
      navigate(SHOP_ROUTE)
    } catch (e) {
        alert(e.response.data.message)
    }

  }

  
    return (
      <Container 
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}
      >

        <Card style={{width: 600}} className="p-5">
          <h2 className="m-auto">{isLogin ? 'Autorization' : 'Registration'}</h2>
          <Form className="d-flex flex-column">
            <Form.Control
              className="mt-3"
              placeholder="Enter your email..."
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Form.Control
              className="mt-3"
              placeholder="Enter your password..."
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
            <Form className="d-flex justify-content-between mt-3 ">
              {isLogin ? 
              <div>
              Don't have account?<NavLink className={"ms-2"} to={REGISTRATION_ROUTE}>Create account</NavLink>
              </div>
              :
              <div>
              Have account?<NavLink className={"ms-2"} to={LOGIN_ROUTE}>Sign in</NavLink>
              </div>
              }
              <Button
                variant={"outline-secondary"}
                onClick={click}
              >
              {isLogin ? 'Sign in' : 'Sign up'}
              </Button>
            </Form>
          </Form>
        </Card>
      </Container>
    );
})

export default Auth;
