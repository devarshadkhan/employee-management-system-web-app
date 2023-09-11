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
