import React,{useState} from 'react'
import { Link, useLocation } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Users from "../../users";
import { toast } from 'react-toastify';
import { NavLink, useHistory } from "react-router-dom";
import FormContainer from '../share_module/FormContainer';
const Login = () => {
      const dispatch = useDispatch();
        const history = useHistory();
      const [inputBoxData, setInputBoxData] = useState({
        email: "",
        password: "",
      });
      console.log("test",Users)
       const [inputErrorData, setInputErrorData] = useState({
         email: "",
         password: "",
       });
        const handleLogin = () => {
          let isError = validate();
          console.log(isError)
          if (isError === false) {
             toast.success("successfully logged in")
             history.push("/home")
            setInputBoxData({
              email: "",
              password: "",
              remember_me: false,
            });
            setInputErrorData({
              email: "",
              password: "",
            });
          }
          console.log("test", inputBoxData?.email,inputBoxData?.password);
        };
        const validate = () => {
          let isError = false;
          let temp = { ...inputErrorData };
          if (inputBoxData?.email === "") {
            temp.email = "Email can not be empty";
            isError = true;
          }
          if (inputBoxData?.password === "") {
            temp.password = "Password can not be empty";
            isError = true;
          }
          if (
            inputBoxData?.email !== "admin@example.com" &&
            inputBoxData?.password !== 123456
          ) {
            isError=true
          }
          setInputErrorData(temp);
         if (isError) window.scroll(0, 0);
         return isError;
        };
         const handleChange = (e) => {
           let temp = { ...inputBoxData };
            temp[e.target.name] = e.target.value;
           setInputBoxData(temp);
         }; 
         const handleErrorRemove = (e) => {
           let temp = { ...inputErrorData };
           temp[e.target.name] = "";
           setInputErrorData(temp);
         };
    return (
      <>
      <br></br>
        <FormContainer>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={inputBoxData?.email}
              onChange={handleChange}
              onFocus={handleErrorRemove}
            />
              {!!inputErrorData?.email && (
                <div className="error_msg">{inputErrorData?.email}</div>
              )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={inputBoxData?.password}
              onChange={handleChange}
              onFocus={handleErrorRemove}
            />
              {!!inputErrorData?.password && (
                <div className="error_msg">{inputErrorData?.password}</div>
              )}
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleLogin}>
            Submit
          </Button>
        </FormContainer>
      </>
    );
}

export default Login
