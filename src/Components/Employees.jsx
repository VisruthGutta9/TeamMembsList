import React, { useState } from "react";
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";

const Employees = () => {
  const [selectedTeam, setTeam] = useState("");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      fullName: "John Doe",
      designation: "Frontend Developer",
      gender: "Male",
      teamName: "A",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      designation: "Backend Developer",
      gender: "Female",
      teamName: "B",
    },
    {
      id: 3,
      fullName: "Alice Johnson",
      designation: "Full Stack Developer",
      gender: "Female",
      teamName: "C",
    },
    {
      id: 4,
      fullName: "Robert Brown",
      designation: "DevOps Engineer",
      gender: "Male",
      teamName: "D",
    },
    {
      id: 5,
      fullName: "Emily Davis",
      designation: "UI/UX Designer",
      gender: "Female",
      teamName: "D",
    },
    {
      id: 6,
      fullName: "Michael Wilson",
      designation: "Frontend Developer",
      gender: "Male",
      teamName: "C",
    },
    {
      id: 7,
      fullName: "Jessica Lee",
      designation: "Backend Developer",
      gender: "Female",
      teamName: "A",
    },
    {
      id: 8,
      fullName: "David Harris",
      designation: "Full Stack Developer",
      gender: "Male",
      teamName: "B",
    },
    {
      id: 9,
      fullName: "Laura Clark",
      designation: "QA Engineer",
      gender: "Female",
      teamName: "B",
    },
    {
      id: 10,
      fullName: "Daniel Lewis",
      designation: "DevOps Engineer",
      gender: "Male",
      teamName: "A",
    },
    {
      id: 11,
      fullName: "Sophia Young",
      designation: "UI/UX Designer",
      gender: "Female",
      teamName: "C",
    },
    {
      id: 12,
      fullName: "James Allen",
      designation: "Frontend Developer",
      gender: "Male",
      teamName: "D",
    },
  ]);
  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
  }
  function handleEmployeeCardClick(event) {
    const tranformedEmployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setEmployees(tranformedEmployees);
  }
  return (
    <>
      <main className="container">
        <div class="row justify-content-center mt-3 mb-3">
          <div class="col-6">
            <select
              className="form-select form-select-lg"
              value={selectedTeam}
              onChange={handleTeamSelectionChange}
            >
              <option>Select a Team</option>
              <option value="TeamA">Team-A</option>
              <option value="TeamB">Team-B</option>
              <option value="TeamC">Team-C</option>
              <option value="TeamD">TeamD</option>
            </select>
          </div>
        </div>

        <div class="row justify-content-center mt-3 mb-3">
          <div class="col-10">
            <div class="card-collection">
              {employees.map((employee) => (
                <div
                  id={employee.id}
                  className="card m-2"
                  style={{ cursor: "pointer" }}
                  onClick={handleEmployeeCardClick}
                >
                  {employee.gender === "Male" ? (
                    <img src={maleProfile} className="card-img-top" />
                  ) : (
                    <img src={femaleProfile} className="card-img-top" />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">
                      Full Name: {employee.fullName}
                    </h5>
                    <p className="card-text">
                      <b>Designation:</b> {employee.designation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Employees;
