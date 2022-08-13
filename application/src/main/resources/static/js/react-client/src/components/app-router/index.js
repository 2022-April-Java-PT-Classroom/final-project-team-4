import { Route, Switch } from 'react-router-dom';
import ContactPage from '../../pages/contact-us';
// import TreatmentsPage from '../../pages/treatments';
import TreatmentPage from '../../pages/treatment';
import HomeScreen from '../../pages/home-screen';
import MyMapApp from '../../pages/podiatrist-finder/BingMap';
import AilmentsScreen from '../../pages/ailments-screen';
import AboutUs from '../../pages/about-us';
import Massage from '../../pages/massage';
import quizPage from '../../pages/quiz/index';
import SingleAilmentScreen from '../../pages/singleailment-screen';


const AppRouter = () => {
  return (
      <Switch>
          <Route exact path={'/'} component={HomeScreen} />
          <Route exact path={'/map'} component={MyMapApp} />
          <Route exact path={'/contact'} component={ContactPage} />
          <Route exact path={'/treatment/:id'} component={TreatmentPage}/>
          {/* <Route exact path={'/ailment/:id'} component={TreatmentsPage} /> */}
          <Route exact path={'/ailment'} component={AilmentsScreen} />
          <Route exact path={'/about-us'} component={AboutUs} />
          <Route exact path={'/quiz'} component={quizPage} />
          <Route exact path={'/massage'} component={Massage} />
          <Route exact path={'/ailment/:id'} component={SingleAilmentScreen} />

      </Switch>
  );
}

export default AppRouter;