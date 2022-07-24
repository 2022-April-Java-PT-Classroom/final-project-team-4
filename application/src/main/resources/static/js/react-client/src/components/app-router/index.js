import { Route, Switch } from 'react-router-dom';
import HomeScreen from '../../pages/home-screen';

const AppRouter = () => {
  return (
      <Switch>
          <Route exact path={'/'} component={HomeScreen} />
      </Switch>
  );
}

export default AppRouter;