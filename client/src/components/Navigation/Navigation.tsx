import { Progress } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import UserContext from '../../context/User';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import SignIn from '../SignIn/SignIn';

const Navigation: React.FC = () => {
  const { loading, currentUser } = useContext(UserContext);

  if (loading) {
    return <Progress size="xs" colorScheme="green" isIndeterminate />;
  }

  return (
    <Layout>
      {!currentUser ? (
        <Switch>
          <Route exact path="/sign-in">
            <SignIn />
          </Route>
          <Redirect to="/sign-in" />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      )}
    </Layout>
  );
};

export default Navigation;
