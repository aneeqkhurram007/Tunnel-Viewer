import { Collapse } from 'antd'
import React from 'react'
const { Panel } = Collapse;
const UserCards = ({ users }) => {
    return (
        <Collapse accordion>
            {
                users?.map((user, index) => (
                    <Panel key={index} header={user?.email} >
                        <p>Name: {user?.name}</p>
                        <p>Email: {user?.email}</p>
                    </Panel>
                ))
            }
        </Collapse>
    )
}

export default UserCards