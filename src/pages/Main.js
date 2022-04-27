import { Layout, Menu, Breadcrumb } from 'antd';
import { useEffect, useState } from 'react';
import { UserOutlined, MenuOutlined } from "@ant-design/icons"
import { useNavigate, useLocation, Link } from "react-router-dom"
import MainCards from '../components/MainCards';
import UserCards from '../components/UserCards';
import { ref, onValue } from "firebase/database"
import { db } from "../firebase"
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
    const [users, setusers] = useState([])
    useEffect(() => {
        async function getUsers() {
            onValue(ref(db, "users"), snapshot => {
                const data = snapshot.val();
                setusers(Object.values(data))
            })
        }
        getUsers()
    }, [location])

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
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                />
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