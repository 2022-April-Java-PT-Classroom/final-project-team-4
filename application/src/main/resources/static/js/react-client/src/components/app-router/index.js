import { Route, Switch } from 'react-router-dom';
import ContactPage from '../../pages/contact-us';
import TreatmentsPage from '../../pages/treatments';
import TreatmentPage from '../../pages/treatment';
import HomeScreen from '../../pages/home-screen';
import MyMapApp from '../../pages/podiatrist-finder/BingMap';
import AilmentScreen from '../../pages/ailment-screen';


const AppRouter = () => {
  return (
      <Switch>
          <Route exact path={'/'} component={HomeScreen} />
          <Route exact path={'/map'} component={MyMapApp} />
          <Route exact path={'/contact'} component={ContactPage} />
          <Route exact path={'/ailment/:id'} component={TreatmentsPage} />
          <Route exact path={'/treatment/:id'} component={TreatmentPage}/>
          <Route exact path={'/ailment'} component={AilmentScreen} />

      </Switch>
  );
}

export default AppRouter;