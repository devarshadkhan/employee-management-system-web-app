import React, { useEffect, useState } from "react";
import styles from "@/styles/Dashboard/Dashboard.module.css";
import axios from "axios";
import { convertToIndianTime, convertTounitTime } from "../utils/constant/Time";
const index = () => {
  const [employee, setEmployee] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add Employee");
  const [editingEmployeeId, setEditingEmployeeId] = useState(null);


  // Add Employee Hooks

  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [phoneNo,setPhoneNo] = useState()
  const [status,setStatus] = useState()
  const [jobType,setJobType] = useState()
  const [role,setRole] = useState()

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhoneNo("");
    setStatus("");
    setJobType("");
    setRole("");
  };
  const addEmployee = async ()=>{
     await axios.post("http://localhost:8000/employee",{
      "name": name,
      "email": email,
      "PhoneNo": phoneNo,
      "Status": status,
      "JobType": jobType,
      "role": role
    })
    .then((res)=>{
      clearForm()
      console.log(res);
    })
  }

  const toggleModal = (editEmployeeId = null) => {
    if (editEmployeeId) {
      // Editing an existing employee
      setModalTitle("Edit Employee");
      setEditingEmployeeId(editEmployeeId);
    } else {
      // Adding a new employee
      setModalTitle("Add Employee");
      setEditingEmployeeId(null);
    }
    setShowModal(true);
  };
  const employeeAPI = async () => {
    await axios.get("http://localhost:8000/employee").then((res) => {
      setEmployee(res.data);
    });
  };
  const delEmployee = async (id) => {
    await axios.delete(`http://localhost:8000/employee/${id}`).then((res) => {
      setEmployee((prevEmployees) =>
        prevEmployees.filter((employee) => employee.id !== id)
      );
    });
  };


  useEffect(() => {
    employeeAPI();
  }, []);
  return (
    <div>
      <div className={styles.dashboard}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-12">
              <h1>Welcome to our Dashboard</h1>
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => toggleModal()}
              >
                Add Employee
              </button>
            </div>
            <div className="col-12 col-md-12">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone No.</th>
                    <th scope="col">Status</th>
                    <th scope="col">Job Type</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Time</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {employee?.map((item, i) => {
                    return (
                      <>
                        <tr key={i}>
                          <th scope="row">{i + 1}</th>
                          <th scope="row">{item.id}</th>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.PhoneNo}</td>
                          <td>
                            {item.Status === "active" ? (
                              <>
                                <span style={{ color: "#32de84" }}>active</span>
                              </>
                            ) : (
                              <>
                                <span style={{ color: "#FF0800" }}>
                                  inActive
                                </span>
                              </>
                            )}
                          </td>
                          <td>{item.JobType}</td>
                          <td>{item.role}</td>
                          <td>{convertToIndianTime(item.id)}</td>
                          <td>
                            <div class="dropdown">
                              <button
                                class="btn  "
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-three-dots-vertical"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                </svg>
                              </button>
                              <ul class="dropdown-menu">
                                <li>
                                  <a
                                    class="dropdown-item"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => toggleModal(item.id)}
                                  >
                                    edit
                                  </a>
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item"
                                    onClick={() => delEmployee(item.id)}
                                  >
                                    delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Employee Modal */}

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                type={modalTitle === "Add Employee" ? "text" : "text"}
                placeholder="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
              <input
                type={modalTitle === "Add Employee" ? "email" : "email"}
                placeholder="enter email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <input
                type={modalTitle === "Add Employee" ? "number" : "number"}
                placeholder="enter phone number"
                value={phoneNo}
                onChange={(e)=>setPhoneNo(e.target.value)}
              />
              <select class="form-select" aria-label="Default select example" value={status} onChange={(e)=> setStatus(e.target.value)}>
                <option selected>Open this select menu status</option>
                <option value="active">active</option>
                <option value="inActive">inActive</option>
              </select>
              <select class="form-select" aria-label="Default select example" value={jobType} onChange={(e)=> setJobType(e.target.value)}>
                <option selected>Open this select menu Job Type</option>
                <option value="Permanent">Permanent</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Probation">Probation</option>
                <option value="Intern">Intern</option>
                <option value="Freelancer">Freelancer</option>
              </select>

              <input
                type={modalTitle === "Add Employee" ? "text" : "text"}
                placeholder="name"
                value={role}
                onChange={(e)=>setRole(e.target.value)}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary" onClick={addEmployee}>
                Add Employee
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
