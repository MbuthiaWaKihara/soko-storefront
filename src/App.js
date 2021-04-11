/**
 * @author Mbuthia Kihara
 */

import './App.css';

//pages
import HomePage from './pages/Home';
import AccountPage from './pages/Account';
import BagPage from './pages/Bag';

//react router
import {
  BrowserRouter as Router,
  //eslint-disable-next-line
  Route, Switch,
} from 'react-router-dom';

//components
import Banner from './components/Banner';
import StoreTitle from './components/StoreTitle';
import BottomNav from './components/BottomNav';

//redux
import store from './redux/store';
import { 
  Provider as ReduxStoreProvider,
} from 'react-redux';

//MUI
import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import { muiTheme } from './utilities/muitheme';

//MUI theme defination
const theme = createMuiTheme(muiTheme);

const App = () => {
  return (
    <Router
    >
      <ReduxStoreProvider
      store={store}
      >
        <MuiThemeProvider
        theme={theme}
        >
          <Banner />
          <StoreTitle />
          <BottomNav />
          <Switch>
            <Route path="/" exact render={props => <HomePage {...props} />}/>
            <Route path="/bag" exact render={props => <BagPage {...props} />}/>
            <Route path="/account" exact render={props => <AccountPage {...props} />}/>
          </Switch>
        </MuiThemeProvider>
      </ReduxStoreProvider>
    </Router>
  );
}

export default App;
