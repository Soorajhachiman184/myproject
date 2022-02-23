import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "./style.css"
import "bootstrap/dist/css/bootstrap.css"

const baseURL = "https://reqres.in/api/users/2";

function Displayname() {
    const [get, setget] = React.useState(null);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
          setget(response.data);
        });
      }, []);
      if (!get) return null;
  return (
    <div className="App">
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.bundle.min.js"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css"/>
{get?<><span class="sr-only">Loading...</span><div className="container mt-5 d-flex justify-content-center">

              <div className=" p-3">

                  <div className="d-flex align-items-center">    <span class="sr-only">Loading...</span>
                      <div>
                          <span>  <img className="imagestyle" style={{ borderRadius: "55px", borderStyle: "groove", boxShadow: "0px 0px 10px 0px  grey" }} src={get.data.avatar} width="80" /></span>
                      </div>


                      <div className="ml-3 w-100" style={{ fontSize: "15px" }}>
                          <h3 className="namestyle">{get.data.first_name} {get.data.last_name}</h3>
                          <span>{get.data.email} </span>


                      </div>
                  </div>
              </div>
          </div></>:""}

    </div>
  );
}

export default Displayname;
