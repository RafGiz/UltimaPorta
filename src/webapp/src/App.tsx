import Router from "./components/Router";
import { withAxiosIntercepted } from "./hooks/withAxiosIntercepted";
import './styles.css';

function App() {

  return (
      <Router />
  );
}

export default withAxiosIntercepted(App)
