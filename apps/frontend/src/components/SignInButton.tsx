"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import LinkButton from "./LinkButton";

const SignInButton = () => {
  const { data: session } = useSession();

  if (session && session.user)
    return (
      <div className="ml-auto h-full flex items-center justify-center">
      <span className="text-2xl mr-6">{session.user.name}</span>
      <LinkButton href={"/api/auth/signout"} variant={'tertiary'}>Sair</LinkButton>
    </div>
    );

  return (
    <div className="ml-auto h-full flex items-center justify-center">
      <Link className="text-2xl mr-6" href={"/api/auth/signin"}>
        Login
      </Link>
      <LinkButton href={"/signup"}>Cadastrar</LinkButton>
    </div>
  );
};

export default SignInButton;
