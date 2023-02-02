import AppLayout from "../components/AppLayout";
import Head from "next/head";
import React from 'react';

const signUp = () => {
  return (
    <>
      <Head>
        <title>회원가입 | TwitHoon</title>
      </Head>
      <AppLayout>회원가입 페이지</AppLayout>
    </>
  );
};
export default signUp;
