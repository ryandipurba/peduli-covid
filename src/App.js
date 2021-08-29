import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Header, Footer } from './components/';
import { CreatePost, Help, Home, ListOxygenSeller, Login, Profile, Register, RsRujukan } from './pages';
import { IntruksiDonatur, IntruksiPenerima } from './pages/Intruksi';
import { DetailPost, ListPost } from './pages/Post';

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
            <Route path="/help" component={Help} exact />
            <Route path="/profil" component={Profile} />
            <Route path="/help/intruksi-penerima" component={IntruksiPenerima} />
            <Route path="/help/intruksi-donatur" component={IntruksiDonatur} />
            <Route path="/help/create-post" component={CreatePost} />
            <Route path="/help/post/:postid" component={DetailPost} />
            <Route path="/help/post/" component={ListPost} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
