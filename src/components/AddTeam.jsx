import React, { useState } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar'


const AddTeam = () => {

    const [input, changeInput] = useState(

        {
            teamId: "",
            teamName: "",
            leaderName: "",
            leaderEmail: "",
            leaderPhone: "",
            collegeName: "",
            noOfMembers: "",
            stationNumber: "",
            projectTitle: "",
            problemStatement: "",
            techStack: "",
            mentorName: "",
            registrationDate: "",
        }

    )

    const inputHandler = (event) => {

        changeInput({ ...input, [event.target.name]: event.target.value })

    }

    const readValue = () => {

        console.log(input)

        axios.post("http://localhost:3000/add-team", input).then(

            (response) => {
                console.log(response.data)
                alert("Course Added Successfully")
            }

        ).catch(

            (error) => {
                console.error("Error Adding Course!", error)
                alert("Failed to Add Course!")
            }

        )

    }


    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Team ID : </label>
                                <input type="text" className="form-control" name="teamId" value={input.teamId} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Team Name: </label>
                                <input type="text" className="form-control" name="teamName" value={input.teamName} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Team Leader Name: </label>
                                <input type="text" className="form-control" name="leaderName" value={input.leaderName} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Leader Email: </label>
                                <input type="text" className="form-control" name="leaderEmail" value={input.leaderEmail} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Leader Phone: </label>
                                <input type="text" className="form-control" name="leaderPhone" value={input.leaderPhone} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">College Name: </label>
                                <input type="text" className="form-control" name="collegeName" value={input.collegeName} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Number of Members: </label>
                                <input type="text" className="form-control" name="noOfMembers" value={input.noOfMembers} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Project Title: </label>
                                <input type="text" className="form-control" name="projectTitle" value={input.projectTitle} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Project Statement Track: </label>
                                <input type="text" className="form-control" name="problemStatement" value={input.problemStatement} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Technology Stack: </label>
                                <input type="text" className="form-control" name="techStack" value={input.techStack} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Mentor Name: </label>
                                <input type="text" className="form-control" name="mentorName" value={input.mentorName} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Registartion Date: </label>
                                <input type="date" className="form-control" name="registrationDate" value={input.registrationDate} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Table/Station Number: </label>
                                <input type="text" className="form-control" name="stationNumber" value={input.stationNumber} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>Submit</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddTeam