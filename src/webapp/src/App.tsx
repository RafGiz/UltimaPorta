import Router from "./components/Router";
import { withAxiosIntercepted } from "./hooks/withAxiosIntercepted";

function App() {

  return (
      <Router />
  );
}

export default withAxiosIntercepted(App)
