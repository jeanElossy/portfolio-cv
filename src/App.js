import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/competences" component={Knowledges}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;


