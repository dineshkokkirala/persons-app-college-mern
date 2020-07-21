import React from "react";
import "./App.css";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import PersonState from "./context/PersonState";

function App() {
  return (
    <PersonState>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <PersonForm />
          </div>
          <div className="col-md-6">
            <Persons />
          </div>
        </div>
      </div>
    </PersonState>
  );
}

export default App;
