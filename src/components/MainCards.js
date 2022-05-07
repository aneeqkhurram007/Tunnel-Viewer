import { Button, Card, Row } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router'
import xlsx from 'json-as-xlsx'

const MainCards = ({ users }) => {
    const navigate = useNavigate();
    const downloadData = () => {

        let data = [
            {
                sheet: "Location",
                columns: [
                    { label: "Name", value: "name" },
                    { label: "AP Primary", value: "AcessPoint" },
                    { label: "AP Seconday", value: "Secondary AP" },
                    { label: "Distance", value: "distance" },

                ],
                content: users
            },

        ]

        let settings = {
            fileName: "data",
            extraLength: 3,
            writeOptions: {},
        }

        xlsx(data, settings)
    }
    const getData = () => {
        downloadData()
        navigate("/data", {
            state: users
        })
    }

    return (
        <>
            <Row>
                {users?.map((user, index) => (
                    <Card key={index} className="cursor-pointer"
                        onClick={() => getData()}
                        title={user?.name} style={{ width: 300 }}>
                        <p>AP Primary: {user?.AcessPoint}</p>
                        <p>AP Secondary: {user["Secondary AP"]}</p>
                        <p>Distance: {user?.distance.toFixed(2)}m</p>
                    </Card>
                ))}
            </Row>
            <Row className='my-3'>
                <Button type='primary' onClick={getData}>
                    Get Data
                </Button>
            </Row>
        </>

    )
}

export default MainCards