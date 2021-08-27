import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Header, Footer } from './components/';
import { Help, Home, ListOxygenSeller, Login, Profile, Register, RsRujukan } from './pages';

function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <div className="container p-5">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" exact component={Home} />
            <Route path="/info-penting/rs-rujukan" component={RsRujukan} />
            <Route path="/info-penting/list-seller-oxygent" component={ListOxygenSeller} />
            <Route path="/help" component={Help} />
            <Route path="/profil" component={Profile} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
