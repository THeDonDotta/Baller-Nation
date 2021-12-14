import { Link, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './screens/Home'
import MainContainer from './container/MainContainer'
import Layout from './layout/Layout'
import Landing from './screens/Landing'


function App() {
  return (
    <div className="App" >
      <Layout>
        <Switch >
          <Route path="/">
            <MainContainer />
          </Route>
        </Switch>
    </Layout>
    </div>
  );
}

export default App;
