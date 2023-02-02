import Head from "next/head";
import AppLayout from "../components/AppLayout";
import React from 'react';
import NickNameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const profile = () => {
  const followerList = [{nickname: 'TwitDummy'},{nickname: 'TwitDummy2'},{nickname: 'TwitDummy3'}]
  const followingList = [{nickname: 'TwitDum'},{nickname: 'TwitDum2'},{nickname: 'TwitDum3'}]
  return (
    <>
      <Head>
        <div>내 Profile | TwitHoon</div>
      </Head>
      <AppLayout>
        <NickNameEditForm></NickNameEditForm>  
        <FollowList header="팔로잉 목록" data={followerList}/>
        <FollowList header="팔로워 목록" data={followingList}/>
      </AppLayout>;
    </>
  );
};
export default profile;
