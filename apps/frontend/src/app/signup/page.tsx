"use client";
import InputBox from "@/components/InputBox";
import { Backend_URL } from "@/lib/Constants";
import Link from "next/link";
import React, { useRef } from "react";
import ClickButton from "../../components/ClickButton";
import Container from "../../components/Container";

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

const SignupPage = () => {
  const register = async () => {
    const res = await fetch(Backend_URL + "/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: data.current.name,
        email: data.current.email,
        password: data.current.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      alert(res.statusText);
      return;
    }
    const response = await res.json();
    alert("User Registered!");
    console.log({ response });
  };
  const data = useRef<FormInputs>({
    name: "",
    email: "",
    password: "",
  });
  return (
    <Container>
      <div className="mt-20 lg:mt-40 overflow-hidden shadow">
        <div className="p-2 flex flex-col gap-6">
          <InputBox
            autoComplete="off"
            name="name"
            labelText="Name"
            required
            onChange={(e) => (data.current.name = e.target.value)}
          />
          <InputBox
            name="email"
            labelText="Email"
            required
            onChange={(e) => (data.current.email = e.target.value)}
          />
          <InputBox
            name="Password"
            labelText="Password"
            type="password"
            required
            onChange={(e) => (data.current.password = e.target.value)}
          />
          <div className="flex justify-center items-center gap-2">
            <ClickButton onClick={register}>Submit</ClickButton>
            <Link className="text-2xl" href={"/"}>
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignupPage;
