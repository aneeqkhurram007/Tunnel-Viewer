import { Button } from 'antd'
import xlsx from 'json-as-xlsx'
import React from 'react'
import { useLocation } from 'react-router'
const DataTable = () => {
    const location = useLocation()
    const downloadData = () => {

        let data = [
            {
                sheet: "Location",
                columns: [
                    { label: "Name", value: "user" },
                    { label: "AP Primary", value: "primary" },
                    { label: "AP Seconday", value: "secondary" },
                    { label: "Distance", value: "distance" },

                ],
                content: [
                    {
                        user: location.state.name, primary: location.state.AcessPoint,
                        secondary: location.state["Secondary AP"],
                        distance: location.state?.distance.toFixed(2)
                    },
                ],
            },

        ]

        let settings = {
            fileName: "data",
            extraLength: 3,
            writeOptions: {},
        }

        xlsx(data, settings)
    }
    return (
        <div className='flex flex-col space-y-4 p-4'>
            <h1 className='text-2xl font-semibold'>User Data</h1>
            <table className='border'>
                <thead>
                    <tr>
                        <th className="text-center border">Name</th>
                        <th className="text-center border">AP Primary</th>
                        <th className="text-center border">AP Secondary</th>
                        <th className="text-center border">Distance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center border">{location.state.name}</td>
                        <td className="text-center border">{location.state.AcessPoint}</td>
                        <td className="text-center border">{location.state["Secondary AP"]}</td>
                        <td className="text-center border">{location.state?.distance.toFixed(2)}</td>

                    </tr>

                </tbody>
            </table>
            <div>
                <Button type='primary' size='large' className='my-3' onClick={downloadData}>Get Data</Button>

            </div>
        </div>
    )
}

export default DataTable