import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axiosClient from "../../../Services/axiosClient";

const ChangePassword = () => {

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] =useState('');
  const [cofirmPassword, setCofirmPassword] =useState('');


  const handleCurrentPasswordChange=  (e) => {
    setCurrentPassword(e.target.value);
  }

  const handleNewPasswordChange= (e) => {
    setNewPassword(e.target.value);
  }

  const handleCofirmPasswordChange= (e) => {
    setCofirmPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {data} = axiosClient.patch('/auth/change-password', {password: currentPassword, newPassword});
  }


  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Mật khẩu hiện tại</Form.Label>
          <Form.Control type="password" value={currentPassword} onChange={handleCurrentPasswordChange}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Mật khẩu mới</Form.Label>
          <Form.Control type="password" value={newPassword} onChange={handleNewPasswordChange}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Xác nhận mật khẩu mới</Form.Label>
          <Form.Control type="password" value={cofirmPassword} onChange={handleCofirmPasswordChange}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ChangePassword;
