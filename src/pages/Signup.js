import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input/Input";
import { useDispatch } from "react-redux";
import { signupAction } from "../actions/signupAction";

const Signup = (props) => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const setFormHandler = (field, value) => {
    const state = { ...form };
    state[field] = value;
    setForm((prevState) => ({
      ...prevState,
      ...state,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signupAction(form));
  };
  return (
    <section id="signup" className="flex flex-col items-center pb-4 mt-4 ">
      <h3 className="mb-2 text-2xl border-b-2 border-gray-400">Signup</h3>
      <p className="text-xl">
        Please fill this form to create new account! or if you already have one
        then login.
      </p>

      <form
        action=""
        className="w-5/12 p-4 m-4 rounded shadow-sm bg-slate-100"
        onSubmit={submitHandler}
      >
        <Input
          title="First Name"
          placeholder="Your first name"
          id="first_name"
          htmlFor="first_name"
          type="text"
          isRequired={true}
          setFormHandler={setFormHandler}
        />
        <Input
          title="Last Name"
          placeholder="Your last name"
          id="last_name"
          htmlFor="last_name"
          type="text"
          isRequired={true}
          setFormHandler={setFormHandler}
        />
        <Input
          title="Email"
          placeholder="Your Email"
          id="email"
          htmlFor="email"
          type="email"
          isRequired={true}
          setFormHandler={setFormHandler}
        />
        <Input
          title="Password"
          placeholder="********"
          type="password"
          id="password"
          htmlFor="password"
          isRequired={true}
          setFormHandler={setFormHandler}
        />

        <div className="flex justify-between">
          <button className="btn-primary">Signup</button>
          <div>
            <span>Already have an account </span>
            <span>
              <Link to="/login" className="text-xl text-blue-600">
                Login
              </Link>
            </span>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Signup;
