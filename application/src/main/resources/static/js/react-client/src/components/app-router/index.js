import { Route, Switch } from 'react-router-dom';

import ContactPage from '../../pages/contact-us';
import HomeScreen from '../../pages/home-screen';
import MyMapApp from '../../pages/podiatrist-finder/BingMap';
import AilmentScreen from '../../pages/ailment-screen';


const AppRouter = () => {
  return (
      <Switch>
          <Route exact path={'/'} component={HomeScreen} />
          <Route exact path={'/map'} component={MyMapApp} />
          <Route exact path={'/contact'} component={ContactPage} />
          <Route exact path={'/ailment'} component={AilmentScreen} />

      </Switch>
  );
}

export default AppRouter;