import { useRoutes } from "react-router-dom"
import { auth } from "./firebase";
import appRoutes from "./routes";
import { useNavigate, useLocation } from "react-router-dom"
import { useEffect } from "react";
function App() {
  const routes = useRoutes(appRoutes)
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/login", { replace: true })

    }
  }, [])

  return (
    <div className="">
      {routes}
    </div>
  );
}

export default App;
