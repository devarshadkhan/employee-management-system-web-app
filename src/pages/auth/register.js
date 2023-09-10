import React, { useState } from "react";
import styles from "@/styles/auth/Register.module.css";
import axios from "axios";
import classNames from "classnames";
const register = () => {
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [gender, setGender] = useState();
  console.log(gender);
  const register_User = async () => {
    const res = await axios.post(
      "https://emp-api-v2.onrender.com/auth/register",
      {
        Fname: fName,
        Lname: lName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        gender: gender,
      }
    );
    // localStorage.setItem("token", res.data.token);
    console.log(res);
  };
  return (
    <div>
      <div className={styles.login_wrp}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Account Register</h1>
              <p>
                If you are already a member you can login with your email
                address and password.
              </p>
              <form>
                <div className={styles.login}>
                  <p>First Name</p>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      className={classNames("form-control", styles.inputs)}
                      id="floatingInput"
                      placeholder="name@example.com"
                      value={fName}
                      onChange={(e) => setFName(e.target.value)}
                    />
                    <label for="floatingInput">First Name</label>
                  </div>
                  <p>Last Name</p>
                  <div class="form-floating">
                    <input
                      type="text"
                      className={classNames("form-control", styles.inputs)}
                      id="floatingPassword"
                      placeholder="Password"
                      value={lName}
                      onChange={(e) => setLName(e.target.value)}
                    />
                    <label for="floatingPassword">Last Name</label>
                  </div>
                  <p>Email</p>
                  <div class="form-floating">
                    <input
                      type="email"
                      className={classNames("form-control", styles.inputs)}
                      id="floatingPassword"
                      placeholder="Password"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label for="floatingPassword">Email address</label>
                  </div>
                  <p>Choose a gender</p>
                  <div class="form-floating">
                    <select
                      className={classNames("form-control", styles.inputs)}
                      id="floatingSelect"
                      aria-label="Floating label select example"
                      onChange={(e) => setGender(e.target.value)}
                      value={gender}
                    >
                      <option selected>Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <label for="floatingSelect">Choose a gender</label>
                  </div>
                  <p>Password</p>
                  <div class="form-floating">
                    <input
                      type="password"
                      className={classNames("form-control", styles.inputs)}
                      id="floatingPassword"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <p>Confirm Password</p>
                  <div class="form-floating">
                    <input
                      type="password"
                      className={classNames("form-control", styles.inputs)}
                      id="floatingPassword"
                      placeholder="Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <label for="floatingPassword">Confirm Password</label>
                  </div>

                  <button type="button" onClick={register_User}>
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
