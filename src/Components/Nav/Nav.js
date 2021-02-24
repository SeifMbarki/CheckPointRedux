import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
import { Navbar, Form, FormControl, InputGroup, Button } from "react-bootstrap";
import DropDown from "../DropDown";
import { searchTask } from "../../Redux/Action/ListTask";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  return (
    <Navbar className="bg-dark pad">
      <div className="logo">
        <img
          src="https://www.axis-solutions.fr/wp-content/uploads/2020/11/picto-plannification.png"
          alt="logo"
        />

        <h2>ToDoApp</h2>
      </div>
      <div className="Manip">
        <DropDown />
        <Form inline>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Search"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                dispatch(searchTask(e.target.value));
              }}
            />
          </InputGroup>
        </Form>
      </div>
    </Navbar>
  );
};

export default Nav;
