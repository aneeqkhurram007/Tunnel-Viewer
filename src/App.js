import { useRoutes } from "react-router-dom"
import { auth, db } from "./firebase";
import appRoutes from "./routes";
import { useNavigate, useLocation } from "react-router-dom"
import { useEffect } from "react";
import { useStateValue } from "./utils/StateValue";
import { onValue, ref } from "firebase/database";
function App() {
  const routes = useRoutes(appRoutes)
  const navigate = useNavigate()
  const location = useLocation()
  const [{ loggedIn }, dispatch] = useStateValue()
  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/login", { replace: true })

    }
  }, [])

  useEffect(() => {
    if (loggedIn) {

      const unsub = onValue(ref(db, "users"), snapshot => {
        console.log("In the snapshot")
        const data = snapshot.val();
        dispatch({
          type: "ADD_USERS", payload: Object.values(data)
        })

      })
      return () => unsub()
    }
  }, [loggedIn])

  return (
    <div className="">
      {routes}
    </div>
  );
}

export default App;
