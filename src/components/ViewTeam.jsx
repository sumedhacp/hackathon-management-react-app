import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewTeam = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.post("http://localhost:3000/view-team").then(

            (response) => {
                changeData(response.data)
            }

        ).catch()
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Team ID</th>
                                    <th scope="col">Team Name</th>
                                    <th scope="col">Team Leader Name</th>
                                    <th scope="col">Leader Email</th>
                                    <th scope="col">College Name</th>
                                    <th scope="col">Number of Members</th>
                                    <th scope="col">Project Title</th>
                                    <th scope="col">Problem Statement Track</th>
                                    <th scope="col">Technology Stack</th>
                                    <th scope="col">Mentor Name:</th>
                                    <th scope="col">Registartion Date</th>
                                    <th scope="col">Table/Station Number</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value, index) => {
                                            return (
                                                <tr>
                                                    <td>{value.teamId}</td>
                                                    <td>{value.teamName}</td>
                                                    <td>{value.leaderName}</td>
                                                    <td>{value.leaderEmail}</td>
                                                    <td>{value.collegeName}</td>
                                                    <td>{value.noOfMembers}</td>
                                                    <td>{value.projectTitle}</td>
                                                    <td>{value.problemStatement}</td>
                                                    <td>{value.techStack}</td>
                                                    <td>{value.mentorName}</td>
                                                    <td>{value.registrationDate}</td>
                                                    <td>{value.stationNumber}</td>
                                                </tr>
                                            )
                                        }
                                    )
                                }

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewTeam
                                                            
                                                            