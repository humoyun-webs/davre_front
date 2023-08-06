import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.scss";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/gerb.svg";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()



  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:1324/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const { token } = await res.json();


    if (token) {
      localStorage.setItem("token", token);
      navigate("/")
    }
  };
  return (
    <div className="loginForm">
      <Form
        className=" loginForm__form p-5 w-50 mx-auto bg-light rounded-3"
        onSubmit={handleLogin}
      >
        <img
          src={logo}
          alt="logo"
          width="150"
          height="150"
          className="mx-auto justify-content-center d-block mb-2"
        />
        <h3>Hisobga kirish:</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-5">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Emailingizni kiriting. Masalan: aziz@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fs-5">Parol</Form.Label>
          <Form.Control
            type="password"
            placeholder="Parolingiz. Masalan: aziz2022aziz"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 d-block " controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Meni eslab qolish" />
          
        </Form.Group>
        <button
          variant="primary w-25"
          type="submit"
          className="btn btn-primary "
          to="/api/get/companies"
        >
          Kirish
        </button>
      </Form>
    </div>
  );
}

export default Login;
