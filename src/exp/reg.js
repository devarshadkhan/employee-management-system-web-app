// import React, { useState } from "react";
// import styles from "@/styles/auth/Register.module.css";
// import axios from "axios";
// import classNames from "classnames";
// import { useForm } from "react-hook-form";
// const register = () => {
//   const [fName, setFName] = useState();
//   const [lName, setLName] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [confirmPassword, setConfirmPassword] = useState();
//   const [gender, setGender] = useState();
//   // console.log(gender);

//   const {
//     register,
//     setValue,
//     getValues,
//     trigger,
//     watch,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ mode: "onChange", reValidateMode: "onChange" });
//   const register_User = async (data) => {
//     const res = await axios.post(
//       "https://emp-api-v2.onrender.com/auth/register",  data
//       // {
       
//       //   // Fname: fName,
//       //   // Lname: lName,
//       //   // email: email,
//       //   // password: password,
//       //   // confirmPassword: confirmPassword,
//       //   // gender: gender,
//       // }
//     );
//     // localStorage.setItem("token", res.data.token);
//     console.log("++++++++++++++",res)
//     .then((res)=>{
//       rou
//     })
//   };
//  const onSubmit = async (data) => {
//     try {
//       const res = await axios.post(
//         "https://emp-api-v2.onrender.com/auth/register",
//         data
//       );
//       console.log(res);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     // {false && 
//     //   <div className={styles.login_wrp}>
//     //     <div className="container">
//     //       <div className="row">
//     //         <div className="col-12">
//     //           <h1>Account Register</h1>
//     //           <p>
//     //             If you are already a member you can login with your email
//     //             address and password.
//     //           </p>
//     //           <form onSubmit={handleSubmit(register_User)}>
//     //             <div className={styles.login}>
//     //               <p>First Name</p>
//     //               <div class="form-floating mb-3">
//     //                 <input
//     //                   type="text"
//     //                   className={classNames("form-control", styles.inputs)}
//     //                   id="floatingInput"
//     //                   placeholder="name@example.com"
//     //                   // value={fName}
//     //                   // onChange={(e) => setFName(e.target.value)}
//     //                   {...register("Fname", {
//     //                     required: true,
//     //                     maxLength: 50,
//     //                   })}
//     //                 />
//     //                 <label for="floatingInput">First Name</label>
//     //                 {errors.Fname?.type === "required" && (
//     //                   <p role="alert" style={{ color: "red" }}>
//     //                     First name is required
//     //                   </p>
//     //                 )}
//     //               </div>

//     //               {/* {errors.Fname && <span>This field is required</span>} */}
//     //               <p>Last Name</p>
//     //               <div class="form-floating">
//     //                 <input
//     //                   type="text"
//     //                   className={classNames("form-control", styles.inputs)}
//     //                   id="floatingPassword"
//     //                   placeholder="Password"
//     //                   // value={lName}
//     //                   // onChange={(e) => setLName(e.target.value)}
//     //                   {...register("Lname", {
//     //                     required: true,
//     //                     maxLength: 50,
//     //                   })}
//     //                 />
//     //                 <label for="floatingPassword">Last Name</label>
//     //                 {errors.Lname?.type === "required" && (
//     //                   <p role="alert" style={{ color: "red" }}>
//     //                     Last name is required
//     //                   </p>
//     //                 )}
//     //               </div>
//     //               <p>Email</p>
//     //               <div class="form-floating">
//     //                 <input
//     //                   type="email"
//     //                   className={classNames("form-control", styles.inputs)}
//     //                   id="floatingPassword"
//     //                   placeholder="Password"
//     //                   name="email"
//     //                   // value={email}
//     //                   // onChange={(e) => setEmail(e.target.value)}
//     //                   {...register("email", {
//     //                     required: "Email is required",
//     //                     pattern: {
//     //                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//     //                       message: "Please enter valid Email Address",
//     //                     },
//     //                   })}
//     //                   // aria-invalid={errors.email ? "true" : "false"}
//     //                 />
//     //                 <label for="floatingPassword">Email address</label>
//     //                 {errors.email?.type === "required" && (
//     //                   <p role="alert" style={{ color: "red" }}>
//     //                     {errors.email.message}
//     //                   </p>
//     //                 )}
//     //                 {errors.email?.type === "pattern" && (
//     //                   <p role="alert" style={{ color: "red" }}>
//     //                     {errors.email.message}
//     //                   </p>
//     //                 )}
//     //               </div>
//     //               <p>Choose a gender</p>
//     //               <div class="form-floating">
//     //                 <select
//     //                   className={classNames("form-control", styles.inputs)}
//     //                   id="floatingSelect"
//     //                   aria-label="Floating label select example"
//     //                   // onChange={(e) => setGender(e.target.value)}
//     //                   // value={gender}
//     //                   {...register("gender", {
//     //                     required: true,
//     //                     validate: (value) => {
//     //                       return (
//     //                         value !== "Select Gender" ||
//     //                         "This is A Required Field"
//     //                       );
//     //                     },
//     //                   })}
//     //                 >
//     //                   <option defaultValue hidden>
//     //                     Gender
//     //                   </option>
//     //                   <option value="Male">Male</option>
//     //                   <option value="Female">Female</option>
//     //                   <option value="Other">Other</option>
//     //                 </select>
//     //                 <label for="floatingSelect">Choose a gender</label>
//     //                 {errors.gender && (
//     //                   <span style={{ color: "red" }}>This is required.</span>
//     //                 )}
//     //               </div>
//     //               <p>Password</p>
//     //               <div class="form-floating">
//     //                 <input
//     //                   type="password"
//     //                   className={classNames("form-control", styles.inputs)}
//     //                   id="floatingPassword"
//     //                   placeholder="Password"
//     //                   // value={password}
//     //                   // onChange={(e) => setPassword(e.target.value)}
//     //                   {...register("password", {
//     //                     required: "Password is required",
//     //                   })}
//     //                 />
//     //                 <label for="floatingPassword">Password</label>
//     //               </div>
//     //               <p>Confirm Password</p>
//     //               <div class="form-floating">
//     //                 <input
//     //                   type="password"
//     //                   className={classNames("form-control", styles.inputs)}
//     //                   id="floatingPassword"
//     //                   placeholder="Password"
//     //                   // value={confirmPassword}
//     //                   // onChange={(e) => setConfirmPassword(e.target.value)}
//     //                   {...register("confirm_password", {
//     //                     required: true,
//     //                     validate: () => {
//     //                       if (watch("password") != val) {
//     //                         return "Your passwords do no match";
//     //                       }
//     //                     },
//     //                   })}
//     //                 />
//     //                 <label for="floatingPassword">Confirm Password</label>
//     //               </div>

//     //               <button type="submit">Register</button>
//     //             </div>
//     //           </form>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // }

//       <React.Fragment>

//       <div className={styles.login_wrp}>
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <h1>Account Register</h1>
//               <p>
//                 If you are already a member, you can login with your email
//                 address and password.
//               </p>
//               <form onSubmit={handleSubmit(register_User)}>
//                 <div className={styles.login}>
//                   <p>First Name</p>
//                   <div className="form-floating mb-3">
//                     <input
//                       type="text"
//                       className={classNames("form-control", styles.inputs)}
//                       id="floatingInput"
//                       placeholder="First Name"
//                       {...register("Fname", {
//                         required: "First name is required",
//                         maxLength: {
//                           value: 50,
//                           message: "First name should be less than 50 characters",
//                         },
//                       })}
//                     />
//                     <label htmlFor="floatingInput">First Name</label>
//                     {errors.Fname && (
//                       <p role="alert" style={{ color: "red" }}>
//                         {errors.Fname.message}
//                       </p>
//                     )}
//                   </div>

//                   <p>Last Name</p>
//                   <div className="form-floating">
//                     <input
//                       type="text"
//                       className={classNames("form-control", styles.inputs)}
//                       id="floatingPassword"
//                       placeholder="Last Name"
//                       {...register("Lname", {
//                         required: "Last name is required",
//                         maxLength: {
//                           value: 50,
//                           message: "Last name should be less than 50 characters",
//                         },
//                       })}
//                     />
//                     <label htmlFor="floatingPassword">Last Name</label>
//                     {errors.Lname && (
//                       <p role="alert" style={{ color: "red" }}>
//                         {errors.Lname.message}
//                       </p>
//                     )}
//                   </div>

//                   <p>Email</p>
//                   <div className="form-floating">
//                     <input
//                       type="email"
//                       className={classNames("form-control", styles.inputs)}
//                       id="floatingEmail"
//                       placeholder="Email address"
//                       {...register("email", {
//                         required: "Email is required",
//                         pattern: {
//                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                           message: "Please enter a valid Email Address",
//                         },
//                       })}
//                     />
//                     <label htmlFor="floatingEmail">Email address</label>
//                     {errors.email && (
//                       <p role="alert" style={{ color: "red" }}>
//                         {errors.email.message}
//                       </p>
//                     )}
//                   </div>

//                   <p>Choose a gender</p>
//                   <div className="form-floating">
//                     <select
//                       className={classNames("form-control", styles.inputs)}
//                       id="floatingSelect"
//                       {...register("gender", {
//                         required: "Gender is required",
//                         validate: (value) => value !== "Select Gender" || "Please select a gender",
//                       })}
//                     >
//                       <option value="Select Gender">Select Gender</option>
//                       <option value="Male">Male</option>
//                       <option value="Female">Female</option>
//                       <option value="Other">Other</option>
//                     </select>
//                     <label htmlFor="floatingSelect">Choose a gender</label>
//                     {errors.gender && (
//                       <p role="alert" style={{ color: "red" }}>
//                         {errors.gender.message}
//                       </p>
//                     )}
//                   </div>

//                   <p>Password</p>
//                   <div className="form-floating">
//                     <input
//                       type="password"
//                       className={classNames("form-control", styles.inputs)}
//                       id="floatingPassword"
//                       placeholder="Password"
//                       {...register("password", {
//                         required: "Password is required",
//                       })}
//                     />
//                     <label htmlFor="floatingPassword">Password</label>
//                     {errors.password && (
//                       <p role="alert" style={{ color: "red" }}>
//                         {errors.password.message}
//                       </p>
//                     )}
//                   </div>

//                   <p>Confirm Password</p>
//                   <div className="form-floating">
//                     <input
//                       type="password"
//                       className={classNames("form-control", styles.inputs)}
//                       id="floatingConfirmPassword"
//                       placeholder="Confirm Password"
//                       {...register("confirmPassword", {
//                         required: "Confirm password is required",
//                         validate: (value) => {
//                           return (
//                             value === watch("password") || "Passwords do not match"
//                           );
//                         },
//                       })}
//                     />
//                     <label htmlFor="floatingConfirmPassword">Confirm Password</label>
//                     {errors.confirm_password && (
//                       <p role="alert" style={{ color: "red" }}>
//                         {errors.confirm_password.message}
//                       </p>
//                     )}
//                   </div>

//                   <button type="submit">Register</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default register;














































































































// crud operation and employee

// import React, { useEffect, useState } from "react";
// import styles from "@/styles/Dashboard/Dashboard.module.css";
// import axios from "axios";
// import { convertToIndianTime, convertTounitTime } from "../utils/constant/Time";
// const index = () => {
//   const [employee, setEmployee] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [modalTitle, setModalTitle] = useState("Add Employee");
//   const [editingEmployeeId, setEditingEmployeeId] = useState(null);

//   // Add Employee Hooks

//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [phoneNo, setPhoneNo] = useState();
//   const [status, setStatus] = useState();
//   const [jobType, setJobType] = useState();
//   const [role, setRole] = useState("");

//   const clearForm = () => {
//     setName("");
//     setEmail("");
//     setPhoneNo("");
//     setStatus("");
//     setJobType("");
//     setRole("");
//   };
//   // const addEmployee = async () => {
//   //   try {
//   //     await axios
//   //       .post("http://localhost:8000/employee", {
//   //         name: name,
//   //         email: email,
//   //         PhoneNo: phoneNo,
//   //         Status: status,
//   //         JobType: jobType,
//   //         role: role,
//   //       })
//   //       .then((res) => {
//   //         clearForm();
//   //         console.log(res);
//   //       });
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };
//   /**
//    *
//    * @param {Tooggle Modal} editEmployeeId
//    */
//   const toggleModal = (editEmployeeId = null) => {
//     if (editEmployeeId) {
//       // Editing an existing employee
//       setModalTitle("Edit Employee");
//       setEditingEmployeeId(editEmployeeId);

//       // Find the employee being edited from the employee array
//       const employeeToEdit = employee.find(
//         (item) => item.id === editEmployeeId
//       );

//       if (employeeToEdit) {
//         // Set the form fields with the employee data
//         setName(employeeToEdit.name);
//         setEmail(employeeToEdit.email);
//         setPhoneNo(employeeToEdit.PhoneNo);
//         setStatus(employeeToEdit.Status);
//         setJobType(employeeToEdit.JobType);
//         setRole(employeeToEdit.role);
//       }
//     } else {
//       // Adding a new employee
//       setModalTitle("Add Employee");
//       setEditingEmployeeId(null);

//       // Clear the form fields
//       clearForm();
//     }
//     setShowModal(true);
//   };

//   /**
//    * @param {GET Employee API }
//    */
//   const employeeAPI = async () => {
//     await axios.get("http://localhost:8000/employee").then((res) => {
//       setEmployee(res.data);
//     });
//   };

//   /**
//    * @param {Delete Employee API }
//    */
//   const delEmployee = async (id) => {
//     await axios.delete(`http://localhost:8000/employee/${id}`).then((res) => {
//       setEmployee((prevEmployees) =>
//         prevEmployees.filter((employee) => employee.id !== id)
//       );
//     });
//   };

//   useEffect(() => {
//     employeeAPI();
//   }, []);

//   /**
//    * @param {Add and Edit Employee API }
//    */

//   const addOrEditEmployee = async () => {
//     try {
//       if (editingEmployeeId) {
//         // Editing an existing employee
//         await axios.put(`http://localhost:8000/employee/${editingEmployeeId}`, {
//           name: name,
//           email: email,
//           PhoneNo: phoneNo,
//           Status: status,
//           JobType: jobType,
//           role: categories,
//         });
//       } else {
//         // Adding a new employee
//         await axios.post("http://localhost:8000/employee", {
//           name: name,
//           email: email,
//           PhoneNo: phoneNo,
//           Status: status,
//           JobType: jobType,
//           role: categories,
//         });
//       }
//       // After successful add or edit, close the modal and refresh the employee list
//       clearForm();
//       setShowModal(false);
//       employeeAPI();
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const [categories, setCategories] = useState([]);
//   const [category, setCategory] = useState("");
//   const addCategory = () => {
//     if (role?.trim() !== "") {
//       // Ensure category is not empty or just spaces
//       setCategories([...categories, role]);
//       setRole("");
//     }
//   };

//   const deleteCategory = (index) => {
//     const updatedCategories = [...categories];
//     updatedCategories.splice(index, 1);
//     setCategories(updatedCategories);
//   };
//   return (
//     <div>
//       <div className={styles.dashboard}>
//         <div className="container-fluid">
//           <div className="row">
//             <div className={"col-12 col-md-12" + " " + styles.heading}>
//               <h1>Welcome to our Dashboard</h1>
//               <button
//                 data-bs-toggle="modal"
//                 data-bs-target="#exampleModal"
//                 className="btn btn-primary"
//                 onClick={() => toggleModal()}
//               >
//                 Add Employee
//               </button>
//             </div>
//             <div className="col-12 col-md-12">
//               <table class="table custom-table">
//                 <thead>
//                   <tr>
//                     <th scope="col">#</th>
//                     <th scope="col">id</th>
//                     <th scope="col">Name</th>
//                     <th scope="col">Email</th>
//                     <th scope="col">Phone No.</th>
//                     <th scope="col">Status</th>
//                     <th scope="col">Job Type</th>
//                     <th scope="col">Designation</th>
//                     <th scope="col">Time</th>
//                     <th scope="col"></th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {employee?.map((item, i) => {
//                     return (
//                       <>
//                         <tr key={i}>
//                           <th scope="row">{i + 1}</th>
//                           <th scope="row">{item.id}</th>
//                           <td>{item.name}</td>
//                           <td>{item.email}</td>
//                           <td>{item.PhoneNo}</td>
//                           <td>
//                             {item.Status === "active" ? (
//                               <>
//                                 <span style={{ color: "#32de84" }}>active</span>
//                               </>
//                             ) : (
//                               <>
//                                 <span style={{ color: "#FF0800" }}>
//                                   inActive
//                                 </span>
//                               </>
//                             )}
//                           </td>
//                           <td>{item.JobType}</td>
//                           <td>  {Array.isArray(item.role) ? item.role.join(', ') : item.role}
// </td>

//                           <td>{convertToIndianTime(item.id)}</td>
//                           <td>
//                             <div class="dropdown">
//                               <button
//                                 class="btn  "
//                                 type="button"
//                                 data-bs-toggle="dropdown"
//                                 aria-expanded="false"
//                               >
//                                 <svg
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   width="16"
//                                   height="16"
//                                   fill="currentColor"
//                                   class="bi bi-three-dots-vertical"
//                                   viewBox="0 0 16 16"
//                                 >
//                                   <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
//                                 </svg>
//                               </button>
//                               <ul class="dropdown-menu">
//                                 <li>
//                                   <a
//                                     class="dropdown-item"
//                                     data-bs-toggle="modal"
//                                     data-bs-target="#exampleModal"
//                                     onClick={() => toggleModal(item.id)}
//                                   >
//                                     edit
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     class="dropdown-item"
//                                     onClick={() => delEmployee(item.id)}
//                                   >
//                                     delete
//                                   </a>
//                                 </li>
//                               </ul>
//                             </div>
//                           </td>
//                         </tr>
//                       </>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Employee Modal */}

//       <div
//         class="modal fade"
//         id="exampleModal"
//         tabindex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div class="modal-dialog">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h1 class="modal-title fs-5" id="exampleModalLabel">
//                 Modal title
//               </h1>
//               <button
//                 type="button"
//                 class="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div class="modal-body">
//               {modalTitle === "Add Employee" ? (
//                 <></>
//               ) : (
//                 <>
//                   <input
//                     type="text"
//                     placeholder="ID"
//                     value={editingEmployeeId}
//                     disabled
//                     className="form-control mb-4"
//                   />
//                 </>
//               )}
//               <input
//                 type={modalTitle === "Add Employee" ? "text" : "text"}
//                 placeholder="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="form-control mb-4"
//               />
//               <input
//                 type={modalTitle === "Add Employee" ? "email" : "email"}
//                 placeholder="enter email"
//                 className="form-control mb-4"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <input
//                 type={modalTitle === "Add Employee" ? "number" : "number"}
//                 placeholder="enter phone number"
//                 className="form-control mb-4"
//                 value={phoneNo}
//                 onChange={(e) => setPhoneNo(e.target.value)}
//               />
//               <select
//                 class="form-select"
//                 aria-label="Default select example"
//                 className="form-control mb-3"
//                 value={status}
//                 onChange={(e) => setStatus(e.target.value)}
//               >
//                 <option selected>Open this select menu status</option>
//                 <option value="active">active</option>
//                 <option value="inActive">inActive</option>
//               </select>
//               <select
//                 class="form-select mt-4 mb-3"
//                 aria-label="Default select example"
//                 value={jobType}
//                 onChange={(e) => setJobType(e.target.value)}
//               >
//                 <option selected>Open this select menu Job Type</option>
//                 <option value="Permanent">Permanent</option>
//                 <option value="Full Time">Full Time</option>
//                 <option value="Part Time">Part Time</option>
//                 <option value="Probation">Probation</option>
//                 <option value="Intern">Intern</option>
//                 <option value="Freelancer">Freelancer</option>
//               </select>

//              <div style={{display:'flex',justifyContent:"space-between",alignItems:"center"}}>
//              <input
//                 type={modalTitle === "Add Employee" ? "text" : "text"}
//                 placeholder="Designation Add"
//                 className="form-control "
//                 value={role}
//                 onChange={(e) => setRole(e.target.value)}
//               />
//               <button onClick={addCategory}>+</button>
//              </div>
//             </div>

//             <div>
//               {categories.map((cat, index) => (
//                 <p key={index}>
//                   {cat}
//                   <button onClick={() => deleteCategory(index)}>X</button>
//                 </p>
//               ))}
//             </div>
//             <div class="modal-footer">
//               <button
//                 type="button"
//                 class="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//               <button
//                 type="button"
//                 class="btn btn-primary"
//                 onClick={addOrEditEmployee}
//               >
//                 {modalTitle === "Add Employee"
//                   ? "Add Employee"
//                   : "Edit Employee"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default index;


