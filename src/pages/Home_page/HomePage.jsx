import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Users from "../../users";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
const HomePage = () => {
    const history = useHistory();
    var storeddata = JSON.parse(localStorage.getItem("data")); 
    console.log("data",storeddata)
  return (
    <>
      <h1>Users List</h1>
      <br></br>
      <div className="col-auto">
        <button
          className="btn btn-outline-primary rounded-pill fs-14 fw-7 ff-roboto addUserBtn d-inline-flex px-4  overflow-hidden  "
          onClick={() => history.push("/addusers")}
        >
          <span className="px-0 py-1">+ Add User</span>
        </button>
      </div>
      <br></br>
      <table className="table table-borderless">
        <thead className="fw-6 text-white text-uppercase bg-primary">
          <tr>
            <td className="text-nowrap cp">
              <span className="pe-2"> First Name</span>
            </td>
            <td className="text-nowrap cp">
              <span className="pe-2"> Last Name</span>
            </td>
            <td className="text-nowrap cp">
              <span className="pe-2"> Email </span>
            </td>
            <td className="text-nowrap cp">
              <span className="pe-2"> Date of Birth </span>
            </td>
            <td className="text-nowrap cp">
              <span className="pe-2"> City</span>
            </td>
            <td className="text-center">State</td>
          </tr>
        </thead>

        <tbody className="text-dark1 fs-14">
          {Users?.length === 0 ? (
            <tr className="">
              <td colSpan="6" className="text-center">
                No data found
              </td>
            </tr>
          ) : (
            Users?.map((user, index) => {
              return (
                <tr key={user?.id}>
                  {user?.id !== 1 && (
                    <>
                      <td>{user?.firstname}</td>
                      <td>{user?.lastname}</td>
                      <td>{user?.email}</td>
                      <td>{user?.dateofbirth}</td>
                      <td>{user?.city}</td>
                      <td>{user?.state}</td>
                    </>
                  )}

                  {/* <td></td>
                 <td></td>
                 <td></td> */}
                </tr>
              );
            })
          )}
          {storeddata?.length !== 0 && (
            <tr>
              <>
                <td>{storeddata?.firstname}</td>
                <td>{storeddata?.lastname}</td>
                <td>{storeddata?.email}</td>
                <td>{storeddata?.dateofbirth}</td>
                <td>{storeddata?.city}</td>
                <td>{storeddata?.state}</td>
              </>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default HomePage;
