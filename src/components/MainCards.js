import { Card, Row } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router'

const MainCards = ({ users }) => {
    const navigate = useNavigate();
    const getData = (user) => {
        navigate("/data", {
            state: user
        })
    }

    return (
        <Row>
            {users?.map((user, index) => (
                <Card key={index} className="cursor-pointer"
                    onClick={() => getData(user)}
                    title={user?.name} style={{ width: 300 }}>
                    <p>AP Primary: {user?.AcessPoint}</p>
                    <p>AP Secondary: {user["Secondary AP"]}</p>
                    <p>Distance: {user?.distance.toFixed(2)}m</p>
                </Card>
            ))}
        </Row>
    )
}

export default MainCards