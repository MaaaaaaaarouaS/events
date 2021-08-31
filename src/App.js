import Event from "./pages/Event";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import About from "./pages/About";
import Profil from "./pages/Profil";
import Maps from "./pages/Maps";
import Notif from "./pages/Notif";
import NewEvent from "./pages/NewEvent";
import DetailEvent from "./pages/DetailEvent";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
       <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/index' component={Event} />
          <Route path='/chat' component={Chat} />
          <Route path='/register' component={Register} />
          <Route path='/about' component={About} />
          <Route path="/profil/:id" component={Profil} />
          <Route path='/notifications' component={Notif} />
          <Route path='/maps' component={Maps} />
          <Route path='/new-event' component={NewEvent} />
          <Route path="/event/:id" component={DetailEvent} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;