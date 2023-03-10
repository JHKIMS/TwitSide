import { Button, Form, Input } from "antd";
import React, { useCallback, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../reducers/post";

const PostForm = () => {
  const imagePaths = useSelector((state) => state.post.imagePaths);
  const dispatch = useDispatch();
  const imageInput = useRef();
  const [text, setText] = useState("");
  const onChangeText = useCallback((e) =>{
    setText(e.target.value);
  },[]);
  const onSubmit = useCallback(() => {dispatch(addPost); setText('');}, []);
  const onClickImageUpload = useCallback(() => {
   imageInput.current.click(); 
  },[imageInput.current]);

  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="What Happend?"
      />
      <div>
        <input type="file" multiple hidden ref={imageInput}/>
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">호잇</Button>
      </div>
      <div>
        {imagePaths.map((v) => {
            return(
                <div key={v} style={{display: 'inline-block'}}>
                <img src={v} style={{width: '200px'}} alt={v}/>
            </div>
            )
        })}
      </div>
    </Form>
  );
};

export default PostForm;
