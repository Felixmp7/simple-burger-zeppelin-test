import {
    BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import App from 'App';
import ScreenLoader from 'components/widgets/ScreenLoader';

const MainRouter = (): JSX.Element => (
    <Router>
        <Switch>
            <Route exact path="/"><App /></Route>
            <Route exact path="/order-finished"><ScreenLoader /></Route>
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
);

export default MainRouter;
