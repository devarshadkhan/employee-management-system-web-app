import React, { useState } from "react";
import styles from "@/styles/auth/Login.module.css";
import axios from "axios";
import classNames from "classnames";
const login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const login_User = async () => {
    const res = await axios.post("https://emp-api-v2.onrender.com/auth/login", {
      email: email,
      password: password
    });
    localStorage.setItem("token",res.data.token)
    console.log(res.data.token);
  };
  return (
    <div>
      <div className={styles.login_wrp}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Account Login</h1>
              <p>
                If you are already a member you can login with <span>your email
                address and password.</span>
              </p>
              <form>
                <div className={styles.login}>
                  <p>Email address</p>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      className={classNames("form-control",styles.inputs )}
                      id="floatingInput"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <p>Password</p>
                  <div class="form-floating">
                    <input
                      type="password"
                       className={classNames("form-control",styles.inputs )}
                      id="floatingPassword"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label for="floatingPassword">Password</label>
                  </div>

                  <button type="button" onClick={login_User}>Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
