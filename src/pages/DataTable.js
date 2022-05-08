import { Button } from 'antd'
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { auth } from '../firebase'
import xlsx from 'json-as-xlsx'

const DataTable = () => {
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (!auth.currentUser) {
            navigate("/login", { replace: true })
        }
    }, [location])
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
                content: location?.state
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
                    {
                        location.state?.map((ele, index) => (
                            <tr key={index} >
                                <td className="text-center border">{ele?.name}</td>
                                <td className="text-center border">{ele?.AcessPoint}</td>
                                <td className="text-center border">{ele["Secondary AP"]}</td>
                                <td className="text-center border">{ele?.distance.toFixed(2)}</td>

                            </tr>
                        ))
                    }


                </tbody>
            </table>
            <div>
                <Button type="primary"
                    size='large'
                    className='my-3'
                    onClick={downloadData}>Download Excel</Button>

            </div>
        </div>
    )
}

export default DataTable