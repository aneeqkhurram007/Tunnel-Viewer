import { Card, Row } from 'antd'
import React from 'react'

const MainCards = ({ users }) => {


    return (
        <Row>
            {users?.map((user, index) => (
                <Card key={index} title={user?.name} style={{ width: 300 }}>
                    <p>AP Primary: {user?.AcessPoint}</p>
                    <p>AP Secondary: {user["Secondary AP"]}</p>
                    <p>Distance: {user?.distance.toFixed(2)}m</p>
                </Card>
            ))}
        </Row>
    )
}

export default MainCards