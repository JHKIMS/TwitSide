import Head from "next/head";
import AppLayout from "../components/AppLayout";

const profile = () => {
  return (
    <>
      <Head>
        <div>내 Profile | TwitHoon</div>
      </Head>
      <AppLayout>내 프로필</AppLayout>
    </>
  );
};
export default profile;
