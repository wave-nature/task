import React, { useState } from "react";
import Input from "../components/Input/Input";
import { loginAction } from "../actions/loginAction";
import { useDispatch } from "react-redux";

const Login = (props) => {
  const [form, setForm] = useState({
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
    dispatch(loginAction(form));
  };
  return (
    <section id="login" className="flex flex-col items-center pb-4 mt-4 ">
      <h3 className="mb-2 text-2xl border-b-2 border-gray-400">Login</h3>
      <p className="text-xl">
        Please fill this form to login in your account! or if you don' have one
        then create account.
      </p>

      <form
        action=""
        className="w-5/12 p-4 m-4 rounded shadow-sm bg-slate-100"
        onSubmit={submitHandler}
      >
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
          id="password"
          htmlFor="password"
          type="password"
          isRequired={true}
          setFormHandler={setFormHandler}
        />
        <div className="flex justify-between">
          <button className="btn-primary">Login</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
