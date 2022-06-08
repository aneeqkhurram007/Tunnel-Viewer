import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { useEffect, useState } from 'react';
import { UserOutlined, MenuOutlined } from "@ant-design/icons"
import { useNavigate, useLocation, Link } from "react-router-dom"
import MainCards from '../components/MainCards';
import UserCards from '../components/UserCards';
import { ref, onValue, getDatabase, get } from "firebase/database"
import { auth, db } from "../firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useStateValue } from '../utils/StateValue';
const { Header, Content, Footer, Sider } = Layout;

function Main() {
    const navigate = useNavigate();
    const location = useLocation()
    const mainState = {
        collapsed: false,
    };
    const [state, setState] = useState(mainState)
    const onCollapse = (collapsed) => {
        setState({
            ...state,
            collapsed,
        });
    };
    const items = [{
        key: 1,
        label: <Link to={"/"}>Menu</Link>,
        icon: <MenuOutlined />
    }, {
        key: 2,
        label: <Link to={"/users"}>Users</Link>,
        icon: <UserOutlined />
    }]
    const { collapsed } = state;
    const [{ users }] = useStateValue()
    const [{ loggedIn }, dispatch] = useStateValue()
    useEffect(() => {
        if (!auth.currentUser) {
            navigate("/login", { replace: true })
        }
    }, [loggedIn])


    const logout = async () => {
        signOut(auth)
        dispatch({
            type: "LOGGED_IN",
            payload: false
        })
        navigate("/login", { replace: true })
    }
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div>
                    <img src="images/tunnelViewer_logo.png" />
                </div>
                <Menu theme='dark' defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="flex justify-end items-center px-2 site-layout-background"

                >
                    <Button type="primary" onClick={logout}>Logout</Button>
                </Header>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >

                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        {location.pathname == "/" ? <MainCards users={users} /> :
                            <UserCards users={users} />}                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    &copy; Tunnel Portal
                </Footer>
            </Layout>
        </Layout>
    );
}

export default () => <Main />;