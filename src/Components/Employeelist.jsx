import React from 'react'

export default function Employeelist() {
    const employee=[
        {
            id:"TY001",
            name:"Balu",
            designation:"Developer",
            salary:20000
        }, {
            id:"TY002",
            name:"Ajith",
            designation:"Developer",
            salary:25000
        }, {
            id:"TY003",
            name:"Vijay",
            designation:"Testing",
            salary:20000
        }, {
            id:"TY004",
            name:"Sandy",
            designation:"IT",
            salary:26000
        }
    ]
    return (
        <div className="container mt-5 shadow-lg p-3 mb-5 bg-white rounded">
            <h2>Employee List</h2>
            <table className="table table-dark">
                <tr>
                    <th>EmployeeId</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Salary</th>
                </tr>
                
                    {employee.map((data)=>{
                        return (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.designation}</td>
                                <td>{data.salary}</td>
                            </tr>
                        )
                    })}
                
            </table>

        </div>
    )
}
