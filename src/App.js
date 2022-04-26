import { useRoutes } from "react-router-dom"
import appRoutes from "./routes";
function App() {
  const routes = useRoutes(appRoutes)
  return (
    <div className="">
      {routes}
    </div>
  );
}

export default App;
