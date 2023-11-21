import React from "react";
import { useForm } from "react-hook-form";
// import "./signup.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });    console.log("Form data submitted:", data);
  };

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name:
          <input
            type="text"
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </label>

        <label>
          Last Name:
          <input
            type="text"
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </label>

        <label>
          Email:
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </label>

        <label>
          Password:
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </label>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
