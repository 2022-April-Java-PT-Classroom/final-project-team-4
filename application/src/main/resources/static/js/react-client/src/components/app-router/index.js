import { Route, Switch } from 'react-router-dom';
import HomeScreen from '../../pages/home-screen';
import ContactPage from '../../pages/contact-us';

const AppRouter = () => {
  return (
      <Switch>
          <Route exact path={'/'} component={HomeScreen} />
          <Route exact path={'/contact'} component={ContactPage} />

      </Switch>
  );
}

export default AppRouter;