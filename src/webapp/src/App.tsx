import Router from "./components/Router";
import { withAxiosIntercepted } from "./hooks/withAxiosIntercepted";
import './styles.css';
import './background.css';

function App() {

  return (
      <Router />
  );
}

export default withAxiosIntercepted(App)
