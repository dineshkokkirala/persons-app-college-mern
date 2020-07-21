import React from "react";
import "./App.css";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <PersonForm />
        </div>
        <div className="col-md-6">
          <Persons />
        </div>
      </div>
    </div>
  );
}

export default App;
