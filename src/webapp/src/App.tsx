import Router from "./components/Router";
import { withAxiosIntercepted } from "./hooks/withAxiosIntercepted";
import './styles.css';
import { AppContainer } from "./App.styles";

function App() {

  return (
    <AppContainer>
       <Router />
    </AppContainer>
     
  );
}

export default withAxiosIntercepted(App)
