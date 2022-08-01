import { Route, Switch } from 'react-router-dom';
import HomeScreen from '../../pages/home-screen';
import ContactPage from '../../pages/contact-us';
import {TreatmentsPage,TreatmentPage} from '../../pages/treatment'

const AppRouter = () => {
  return (
      <Switch>
          <Route exact path={'/'} component={HomeScreen} />
          <Route exact path={'/contact'} component={ContactPage} />
          <Route exact path={'/ailment/:id'} component={TreatmentsPage} />
          <Route exact path={'/treatment/:id'} component={TreatmentPage}/>
      </Switch>
  );
}

export default AppRouter;