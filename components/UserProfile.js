import { Card, Avatar, Button } from "antd";
import React, { useCallback } from 'react';
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers";

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);
  return (
    <>
      <Card
        actions={[
            <div key="twit">우아!<br />0</div>,
            <div key="following">팔로잉<br />0</div>,
            <div key="follower">팔로워<br />0</div>,
        ]}
      >


        <Card.Meta avatar={<Avatar>Sample</Avatar>} title="Hoon" />
        <Button onClick={onLogOut}>로그아웃</Button>
      </Card>
    </>
  );
};
export default UserProfile;
