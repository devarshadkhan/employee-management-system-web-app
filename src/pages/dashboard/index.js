import React, { useEffect, useState } from "react";
import styles from "@/styles/Dashboard/Dashboard.module.css";
import axios from "axios";
import { convertToIndianTime } from "../utils/constant/Time";
import { ArrowDown, ArrowRight, ArrowUp } from "react-bootstrap-icons";
import { useContextAPi } from "../context/ContextAPi";

const index = () => {
  const [employee, setEmployee] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add Employee");
  const [editingEmployeeId, setEditingEmployeeId] = useState(null);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [status, setStatus] = useState();
  const [jobType, setJobType] = useState();
  const [role, setRole] = useState("");
  const [categories, setCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortColumn, setSortColumn] = useState("name"); // Default sorting column
  const [nameSortColor, setNameSortColor] = useState("gray");
  const [emailSortColor, setEmailSortColor] = useState("gray");
  // Add similar state variables for other columns you want to sort
  const sortedEmployee = [...employee].sort((a, b) => {
    if (sortOrder === "asc") {
      // Sort in ascending order
      return a[sortColumn].localeCompare(b[sortColumn]);
    } else {
      // Sort in descending order
      return b[sortColumn].localeCompare(a[sortColumn]);
    }
  });

  const handleSort = (column) => {
    if (column === sortColumn) {
      // If the same column is clicked, reverse the sorting order
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // If a different column is clicked, set it as the new sorting column
      setSortColumn(column);
      setSortOrder("asc"); // Set the default sorting order
    }

    // Update icon colors
    setNameSortColor(column === "name" ? "blue" : "gray");
    setEmailSortColor(column === "email" ? "blue" : "gray");
    // Update icon colors for other columns as needed
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhoneNo("");
    setStatus("");
    setJobType("");
    setRole("");
  };

  const toggleModal = (editEmployeeId = null) => {
    if (editEmployeeId) {
      setModalTitle("Edit Employee");
      setEditingEmployeeId(editEmployeeId);
      const employeeToEdit = employee.find(
        (item) => item.id === editEmployeeId
      );
      if (employeeToEdit) {
        setName(employeeToEdit.name);
        setEmail(employeeToEdit.email);
        setPhoneNo(employeeToEdit.PhoneNo);
        setStatus(employeeToEdit.Status);
        setJobType(employeeToEdit.JobType);
        setRole(employeeToEdit.role);
      }
    } else {
      setModalTitle("Add Employee");
      setEditingEmployeeId(null);
      clearForm();
    }
    setShowModal(true);
  };

  const employeeAPI = async () => {
    await axios.get("https://emp-api-v2.onrender.com/employee").then((res) => {
      setEmployee(res.data);
    });
  };

  const delEmployee = async (id) => {
    await axios.delete(`https://emp-api-v2.onrender.com/employee/${id}`).then((res) => {
      setEmployee((prevEmployees) =>
        prevEmployees.filter((employee) => employee.id !== id)
      );
    });
  };

  useEffect(() => {
    employeeAPI();
  }, []);

  const addOrEditEmployee = async () => {
    try {
      if (editingEmployeeId) {
        await axios.put(`https://emp-api-v2.onrender.com/employee/${editingEmployeeId}`, {
          name: name,
          email: email,
          PhoneNo: phoneNo,
          Status: status,
          JobType: jobType,
          role: categories,
        });
      } else {
        await axios.post("https://emp-api-v2.onrender.com/employee", {
          name: name,
          email: email,
          PhoneNo: phoneNo,
          Status: status,
          JobType: jobType,
          role: categories,
        });
      }
      clearForm();
      setShowModal(false);
      employeeAPI();
    } catch (error) {
      console.log(error);
    }
  };

  const addCategory = () => {
    if (role?.trim() !== "") {
      setCategories([...categories, role]);
      setRole("");
    }
  };

  const deleteCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };
// const {filter,setfilter} = useContextAPi()
const [statusFilter, setStatusFilter] = useState("");
const [jobTypeFilter, setJobTypeFilter] = useState("");
  const [filter,setfilter] = useState(" ")
  const [categoryFilter,setCategoryFilter] = useState(" ")
  const handleFilter = (e)=>{
    setfilter(e.target.value)
  }
  const handleByCategory = (e)=>{
    setCategoryFilter(e.target.value)
  }
  // const filteredEmployeeByCategory = employee.filter((item) => {
  //   const statusMatches = statusFilter === "" || item.Status === statusFilter;
  //   const jobTypeMatches = jobTypeFilter === "" || item.JobType === jobTypeFilter;

  //   return statusMatches && jobTypeMatches;
  // });
  const filteredEmployee = employee.filter((item)=>{
    if(filter === ""|| filter === " " ){
      return true
    }
    return item.Status === filter 
  })
  const filteredEmployeeByCategory = filteredEmployee.filter((item)=>{
    if(categoryFilter === ""|| categoryFilter === " " ){
      return true
    }
    return item.JobType === categoryFilter
  })
  return (
    <div>
      <div className={styles.dashboard}>
        <div className="container-fluid">
          <div className="row">
            <div className={"col-12 col-md-12" + " " + styles.heading}>
              <h1>Welcome to our Dashboard</h1>
              <select onChange={handleFilter} value={filter}>
                <option value="">Filter by Status</option>
                <option value="active">active</option>
                <option value="inActive">inActive</option>
              </select>
              <select onChange={handleByCategory} value={categoryFilter}>
                <option value="">Filter by Job Category</option>
                <option value="Permanent">Permanent</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Freelancer">Freelancer</option>
                <option value="Probation">Probation</option>
                <option value="Intern">Intern</option>
              </select>
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="btn btn-primary"
                onClick={() => toggleModal()}
              >
                Add Employee
              </button>
            </div>
            <div className="col-12 col-md-12">
              <table class="table custom-table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">id</th>
                    <th scope="col" onClick={() => handleSort("name")}>
                      Name
                      <i class="bi bi-arrow-up"></i>
                      {sortOrder === "asc" ? (
                        <>
                          <ArrowUp />
                        </>
                      ) : (
                        <>
                          <ArrowDown />
                        </>
                      )}
                      {/* <ArrowUp /> */}
                      {/* className={`bi bi-sort-down${
                          sortOrder === "asc" ? "-up" : "-down"
                        }`} */}
                    </th>
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
                 {filteredEmployeeByCategory.length === 0 ? <><tr><td>No Data Found</td></tr></>:<> {filteredEmployeeByCategory?.map((item, i) => (
                    <tr key={i}>
                      <th scope="row">{i + 1}</th>
                      <th scope="row">{item.id}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.PhoneNo}</td>
                      <td>
                        {item.Status === "active" ? (
                          <span style={{ color: "#32de84" }}>active</span>
                        ) : (
                          <span style={{ color: "#FF0800" }}>inActive</span>
                        )}
                      </td>
                      <td>{item.JobType}</td>
                      <td>
                        {Array.isArray(item.role)
                          ? item.role.join(", ")
                          : item.role}
                      </td>
                      <td>{convertToIndianTime(item.id)}</td>
                      <td>
                        <div class="dropdown">
                          <button
                            class="btn"
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
                  ))}</>}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

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
                {modalTitle}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {modalTitle === "Add Employee" ? (
                <></>
              ) : (
                <input
                  type="text"
                  placeholder="ID"
                  value={editingEmployeeId}
                  disabled
                  className="form-control mb-4"
                />
              )}
              <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control mb-4"
              />
              <input
                type="email"
                placeholder="enter email"
                className="form-control mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                placeholder="enter phone number"
                className="form-control mb-4"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
              <select
                class="form-select"
                aria-label="Default select example"
                className="form-control mb-3"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option selected>Open this select menu status</option>
                <option value="active">active</option>
                <option value="inActive">inActive</option>
              </select>
              <select
                class="form-select mt-4 mb-3"
                aria-label="Default select example"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
              >
                <option selected>Open this select menu Job Type</option>
                <option value="Permanent">Permanent</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Probation">Probation</option>
                <option value="Intern">Intern</option>
                <option value="Freelancer">Freelancer</option>
              </select>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <input
                  type="text"
                  placeholder="Designation Add"
                  className="form-control"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
                <button onClick={addCategory}>+</button>
              </div>
            </div>

            <div>
              {categories.map((cat, index) => (
                <p key={index}>
                  {cat}
                  <button onClick={() => deleteCategory(index)}>X</button>
                </p>
              ))}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={addOrEditEmployee}
              >
                {modalTitle === "Add Employee"
                  ? "Add Employee"
                  : "Edit Employee"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
