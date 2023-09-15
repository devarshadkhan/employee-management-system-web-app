import React, { useContext, useState } from "react";
import styles from "@/styles/auth/Login.module.css";
import axios from "axios";
import classNames from "classnames";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { useContextAPi} from "../context/ContextAPi";
import Loader from "@/components/Loader/Loader";
const login = () => {
  const router = useRouter();

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
  const login_User = async (data) => {
    startLoading()
    await axios
      .post("https://emp-api-v2.onrender.com/auth/login", data)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res.data.token);
          router.push("/dashboard");
        }
        stopLoading()
      })
      .catch((error) => {
        console.log(error);
        toast(error.response ? error.response.data.message : error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        stopLoading()
      })
     
  };
  return (
    <div>
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
      <div className={styles.login_wrp}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Account Login</h1>
              <p>
                If you are already a member you can login with{" "}
                <span className="dsadaas">
                  your email address and password.
                </span>
              </p>
              <form onSubmit={handleSubmit(login_User)}>
                <div className={styles.login}>
                  <p>Email address</p>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      className={classNames("form-control", styles.inputs)}
                      id="floatingInput"
                      placeholder="name@example.com"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                      {...register("email", {
                        required: "Please enter valid Email Address",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Please enter a valid Email Address",
                        },
                      })}
                    />
                    <label for="floatingInput">Email address</label>
                    {errors.email && (
                      <p role="alert" style={{ color: "red" }}>
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <p>Password</p>
                  <div class="form-floating">
                    <input
                      type="password"
                      className={classNames("form-control", styles.inputs)}
                      id="floatingPassword"
                      placeholder="Password"
                      // value={password}
                      // onChange={(e) => setPassword(e.target.value)}
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    <label for="floatingPassword">Password</label>
                    {errors.password && (
                      <p role="alert" style={{ color: "red" }}>
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  <button type="submit">
             
                   {isloading?<> <Loader /></>:"Login"}
                
                  </button>
                </div>
              </form>
            </div>
            <div className="col-12">
              <div className={styles.resg}>
                <h6 className={styles.acc}>
                  Dont have an account ?{" "}
                  <Link href={"/auth/register"} className={styles.asspan}>
                    Sign up here
                  </Link>{" "}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
