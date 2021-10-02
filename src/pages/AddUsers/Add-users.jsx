import React,{useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Col, Form, Row, } from "react-bootstrap";
import FormContainer from "../share_module/FormContainer";
import { toast } from "react-toastify";
import { NavLink, useHistory } from "react-router-dom";
const Addusers = () => {
    const history = useHistory();
   const [inputBoxData, setInputBoxData] = useState({
   firstname:"",
   lastname:"",
   email:"",
   password:"",
   dateofbirth:"",
   state:"",
   city:""
   });
     const [inputErrorData, setInputErrorData] = useState({
       firstname: "",
       lastname: "",
       email: "",
       password: "",
       dateofbirth: "",
       state: "",
       city: "",
     });
      const validate = () => {
        let isError = false;
        let temp = { ...inputErrorData };
        if (inputBoxData?.firstname === "") {
          temp.firstname = "First Name can not be empty";
          isError = true;
        }
         if (inputBoxData?.lastname === "") {
           temp.lastname = "Last Name can not be empty";
           isError = true;
         }
          if (inputBoxData?.email === "") {
            temp.email = "Email can not be empty";
            isError = true;
          }
           if (inputBoxData?.password === "") {
             temp.email = "Password can not be empty";
             isError = true;
           }
           if (inputBoxData?.dateofbirth === "") {
             temp.email = "Date of Birth can not be empty";
             isError = true;
           }
           if (inputBoxData?.state === "") {
             temp.email = " State can not be empty";
             isError = true;
           }
         if (inputBoxData?.city === "") {
           temp.email = "City can not be empty";
           isError = true;
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
       const handleSubmit = () => {
         let isError = validate();
         console.log(isError);
         if (isError === false) {
           toast.success("successfully User Created");
           history.push("/home");
           //  setInputBoxData({
           //    email: "",
           //    password: "",
           //    remember_me: false,
           //  });
           //  setInputErrorData({
           //    email: "",
           //    password: "",
           //  });
           localStorage.setItem("data", JSON.stringify(inputBoxData));
         }
         console.log("test", inputBoxData?.email, inputBoxData?.password);
       };
  return (
    <>
      <br></br>
      <FormContainer>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              placeholder="Enter First Name"
              name="firstname"
              value={inputBoxData?.firstname}
              onChange={handleChange}
              onFocus={handleErrorRemove}
            />
            {!!inputErrorData?.firstname && (
              <div className="error_msg">{inputErrorData?.firstname}</div>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              placeholder="Enter Last Name"
              name="lastname"
              value={inputBoxData?.lastname}
              onChange={handleChange}
              onFocus={handleErrorRemove}
            />
            {!!inputErrorData?.lastname && (
              <div className="error_msg">{inputErrorData?.lastname}</div>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="Enter email"
              name="email"
              value={inputBoxData?.email}
              onChange={handleChange}
              onFocus={handleErrorRemove}
            />
          </Form.Group>
          {!!inputErrorData?.email && (
            <div className="error_msg">{inputErrorData?.email}</div>
          )}
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

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date Of birth</Form.Label>
            <Form.Control
              placeholder="01/01/1970"
              name="dateofbirth"
              value={inputBoxData?.dateofbirth}
              onChange={handleChange}
              onFocus={handleErrorRemove}
            />
            {!!inputErrorData?.dateofbirth && (
              <div className="error_msg">{inputErrorData?.dateofbirth}</div>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>State</Form.Label>
            <Form.Control
              placeholder="Enter State"
              name="state"
              value={inputBoxData?.state}
              onChange={handleChange}
              onFocus={handleErrorRemove}
            />
            {!!inputErrorData?.state && (
              <div className="error_msg">{inputErrorData?.state}</div>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>City</Form.Label>
            <Form.Control
              placeholder="Enter city"
              name="city"
              value={inputBoxData?.city}
              onChange={handleChange}
              onFocus={handleErrorRemove}
            />
            {!!inputErrorData?.city && (
              <div className="error_msg">{inputErrorData?.city}</div>
            )}
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default Addusers;
