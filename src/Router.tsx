import {
    BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import App from 'App';
import ScreenMessage from 'components/widgets/ScreenMessage';

const MainRouter = (): JSX.Element => (
    <Router>
        <Switch>
            <Route exact path="/"><App /></Route>
            <Route exact path="/order-finished"><ScreenMessage message="Order Finished!" /></Route>
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
);

export default MainRouter;
