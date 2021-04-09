import './App.css';

//components
import Banner from './components/Banner';

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
    <ReduxStoreProvider
    store={store}
    >
      <MuiThemeProvider
      theme={theme}
      >
        <Banner />
      </MuiThemeProvider>
    </ReduxStoreProvider>
  );
}

export default App;
