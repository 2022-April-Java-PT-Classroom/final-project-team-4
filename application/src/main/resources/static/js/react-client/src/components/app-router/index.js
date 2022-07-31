import { Route, Switch } from 'react-router-dom';

import HomeScreen from '../../pages/home-screen';
import initMap from '../../pages/podiatrist-finder/GgleMap';

const AppRouter = () => {
  return (
      <Switch>
          <Route exact path={'/'} component={HomeScreen} />
          <Route exact path={'/map'} component={initMap} />
          <Route exact path={'/contact'} component={ContactPage} />

      </Switch>
  );
}

export default AppRouter;