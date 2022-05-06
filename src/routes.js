import DataTable from "./pages/DataTable";
import Login from "./pages/Login";
import Main from "./pages/Main";

const routes = [
    {
        path: "/",
        element: <Main />
    },
    {
        path: "/users",
        element: <Main />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/data",
        element: <DataTable />
    }
]
export default routes;