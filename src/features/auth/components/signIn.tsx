"use client";
import { Input } from "@/components";
import React from "react";
import { Button } from "@/components/UI/button";
import { Icon } from '@iconify/react';
import { signOut, signUpwithGoogle } from "../services";

export const SignUp = () => {
  return (
    <div className="flex flex-col ">
      <Input placeholder="email" />
      <Button onClick={() => signUpwithGoogle()}>sign In with google</Button>
      <Button onClick={() => signOut()}>sign out</Button>
    </div>
  );
};
