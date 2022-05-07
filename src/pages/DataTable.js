import { Button } from 'antd'
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { auth } from '../firebase'
const DataTable = () => {
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (!auth.currentUser) {
            navigate("/login", { replace: true })
        }
    }, [location])

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

        </div>
    )
}

export default DataTable