import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Loader from "./components/Loader";
import { useState, useEffect } from "react"

const App = () => {

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    },1000);
  }, [])

  return loader ? (
    <Loader />
  ) : (
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


