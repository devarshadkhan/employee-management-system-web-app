import React, { useState } from "react";
import styles from "@/styles/auth/Register.module.css";
import axios from "axios";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import { useContextAPi } from "../context/ContextAPi";
import Loader from "@/components/Loader/Loader";
const register = () => {
  const router = useRouter();
  const [messend, mesSend] = useState();
  const {isloading,startLoading,stopLoading} = useContextAPi();
  const {
    register,
    setValue,
    getValues,
    trigger,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });
  const register_User = async (data) => {
    startLoading()
    await axios
      .post("https://emp-api-v2.onrender.com/auth/register", data)
      .then((res) => {
        if (res) {
          toast(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          mesSend(res.data.message);
          reset()
          router.push("/auth/login");
          stopLoading()
        }
      });
  };

  return (
    <React.Fragment>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* Same as */}
      <ToastContainer />
      <div className={styles.login_wrp}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Account Register</h1>
              <p>
                If you are already a member, you can login with your email
                address and password.
              </p>
              <form onSubmit={handleSubmit(register_User)}>
                <div className={styles.login}>
                  <p>First Name</p>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className={classNames("form-control", styles.inputs)}
                      id="floatingInput"
                      placeholder="First Name"
                      {...register("Fname", {
                        required: "First name is required",
                        maxLength: {
                          value: 50,
                          message:
                            "First name should be less than 50 characters",
                        },
                      })}
                    />
                    <label htmlFor="floatingInput">First Name</label>
                    {errors.Fname && (
                      <p role="alert" style={{ color: "red" }}>
                        {errors.Fname.message}
                      </p>
                    )}
                  </div>

                  <p>Last Name</p>
                  <div className="form-floating">
                    <input
                      type="text"
                      className={classNames("form-control", styles.inputs)}
                      id="floatingPassword"
                      placeholder="Last Name"
                      {...register("Lname", {
                        required: "Last name is required",
                        maxLength: {
                          value: 50,
                          message:
                            "Last name should be less than 50 characters",
                        },
                      })}
                    />
                    <label htmlFor="floatingPassword">Last Name</label>
                    {errors.Lname && (
                      <p role="alert" style={{ color: "red" }}>
                        {errors.Lname.message}
                      </p>
                    )}
                  </div>

                  <p>Email</p>
                  <div className="form-floating">
                    <input
                      type="email"
                      className={classNames("form-control", styles.inputs)}
                      id="floatingEmail"
                      placeholder="Email address"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Please enter a valid Email Address",
                        },
                      })}
                    />
                    <label htmlFor="floatingEmail">Email address</label>
                    {errors.email && (
                      <p role="alert" style={{ color: "red" }}>
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <p>Choose a gender</p>
                  <div className="form-floating">
                    <select
                      className={classNames("form-control", styles.inputs)}
                      id="floatingSelect"
                      {...register("gender", {
                        required: "Gender is required",
                        validate: (value) =>
                          value !== "Select Gender" || "Please select a gender",
                      })}
                    >
                      <option value="Select Gender">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <label htmlFor="floatingSelect">Choose a gender</label>
                    {errors.gender && (
                      <p role="alert" style={{ color: "red" }}>
                        {errors.gender.message}
                      </p>
                    )}
                  </div>

                  <p>Password</p>
                  <div className="form-floating">
                    <input
                      type="password"
                      className={classNames("form-control", styles.inputs)}
                      id="floatingPassword"
                      placeholder="Password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                    {errors.password && (
                      <p role="alert" style={{ color: "red" }}>
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  <p>Confirm Password</p>
                  <div className="form-floating">
                    <input
                      type="password"
                      className={classNames("form-control", styles.inputs)}
                      id="floatingConfirmPassword"
                      placeholder="Confirm Password"
                      {...register("confirmPassword", {
                        required: "Confirm password is required",
                        validate: (value) => {
                          return (
                            value === watch("password") ||
                            "Passwords do not match"
                          );
                        },
                      })}
                    />
                    <label htmlFor="floatingConfirmPassword">
                      Confirm Password
                    </label>
                    {errors.confirmPassword && (
                      <p role="alert" style={{ color: "red" }}>
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>

                  <button type="submit">
             
                   {isloading?<> <Loader /></>:"Register"}
                
                  </button>

                  <p>{messend}</p>
                </div>
              </form>
            </div>
            <div className="col-12">
                <div className={styles.resg}>
                <h6 className={styles.acc}>Do have an account ? <Link href={"/auth/login"} className={styles.asspan}>Login here</Link> </h6>
                </div>
              </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default register;
