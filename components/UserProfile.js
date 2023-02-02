import { Card, Avatar, Button } from "antd";
import React from 'react';
import { useCallback } from "react";

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
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
