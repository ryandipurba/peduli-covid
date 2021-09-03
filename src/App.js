import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Header, Footer } from './components/';
import HeeaderAdmin from './components/HeaderAdmin';
import { CreatePost, Help, Home, ListOxygenSeller, ListPostAdmin, Login, Profile, Register, RsRujukan, DetailPostAdmin } from './pages';
import { IntruksiDonatur, IntruksiPenerima } from './pages/Intruksi';
import { DetailPost, ListPost } from './pages/Post';

function App() {
  return (
    <div className="">
      <Router>
        {(sessionStorage.userId === "61310c0f6df592cc30eb4857") ?
          <HeeaderAdmin />
          :
          <Header />
        }
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
            <Route path="/help/admin/posts" component={ListPostAdmin} />
            <Route path="/help/admin/post/:postid" component={DetailPostAdmin} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
