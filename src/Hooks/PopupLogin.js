import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Alert,
  FormGroup,
} from "reactstrap";
import logo1 from "../img/player-dou-a.jpg";
import "../Styles/Login.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/auth";
import { Redirect, useLocation, Link } from "react-router-dom";
import qs from "qs";
<<<<<<< HEAD
import { GoogleLogin } from "react-google-login";
import loadingGif from "../img/Infinity-1s-200px.gif";
import axios from "axios";
import { serverHost, googleClientId } from "../config";
import { setCookie } from "../Services/handleCookie";
import FacebookLogin from "react-facebook-login";
=======


import Loading from "../Components/Loading";


>>>>>>> b91ca42f4f63b21aec5590ca6441e9370108dac1

const PopupLogin = (props) => {
  const { buttonLabel, className } = props;
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const { userInfo, isLoading, error } = useSelector((state) => state.auth);
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const toggle = () => setModal(!modal);
  const [loginState, setLogin] = useState(false);
  const handleSetLogin = () => {
    setLogin(true);
  };

  const handleLogin = (values) => {
    console.log(values);
    dispatch(login(values));
  };

  //REACT HOOK FORM xung đột dữ liệu khi sử dụng <Redirect/> hoặc <Route/>

  if (userInfo) {
    const { redirectTo } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
  }

  //Check kiểm tra status online hoặc offline
  // if(navigator.onLine){
  //   console.log('online');
  // }
  // else{
  //   console.log('offline');
  // }

<<<<<<< HEAD
  const responseSuccessGoogle = async (response) => {
    try {
      const res = await axios.post(`${serverHost}/auth/google`, {
        tokenId: response.tokenId,
      });
      console.log(res.data);
      setCookie("token", res.data.token, "30");
    } catch (error) {
      console.log(error);
    }
  };
  const responseErrorGoogle = (response) => {
    console.log(response);
  };
  const responseFacebook = (response) => {
    console.log(response);
  }
  const loginFBClicked = (event) => {
=======
  // if(navigator.geolocation){
  //   navigator.geolocation.getCurrentPosition(function(position){
  //     console.log(position);
  //   })
  // }

  
>>>>>>> b91ca42f4f63b21aec5590ca6441e9370108dac1

  }
  return (
    <div className={isLoading ? "noClick" : ""}>
      <Button
        color="danger"
        onClick={() => {
          toggle();
          handleSetLogin();
        }}
      >
        <i className="far fa-edit" /> Đăng nhập
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="custom-login">
        <ModalHeader toggle={toggle} className={isLoading ? "noClick" : ""}>
          <img src={logo1} alt="Anh logo" />
        </ModalHeader>
        <ModalBody className="custom-login-body">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <form onSubmit={handleSubmit(handleLogin)} >
                <div className="form-group">
                  <label>Tài khoản</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tài khoản"
                    defaultValue=""
                    {...register("username", {
                      required: {
                        value: true,
                        message: "Tài khoản không được để trống",
                      },
                      minLength: {
                        value: 5,
                        message: "Tài khoản phải từ 5 đến 20 kí tự",
                      },
                      maxLength: {
                        value: 20,
                        message: "Tài khoản phải từ 5 đến 20 kí tự",
                      },
                    })}
                  />
                </div>
                {errors.username && (
                  <Alert color="danger">{errors.username.message}</Alert>
                )}
                <div className="form-group">
                  <label>Mật khẩu</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Mật khẩu"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Mật khẩu không được để trống",
                      },
                    })}
                  />
                </div>
                {errors.password && (
                  <Alert color="danger">{errors.password.message}</Alert>
                )}
                {error && <Alert color="danger">{error}</Alert>}
                <button class="btn btn-primary">Đăng Nhập</button>
              </form>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <GoogleLogin
            clientId={googleClientId}
            buttonText="Login with google"
            onSuccess={responseSuccessGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <FacebookLogin
            appId="1088597931155576"
            autoLoad={true}
            fields="name,email,picture"
            onClick={loginFBClicked}
            callback={responseFacebook}
          />
          ,<button class="btn btn-primary">Hủy bỏ</button>
          <div className={isLoading ? "noClick" : ""}>
            <a href="https://side-by-side-back.vercel.app/auth/google">
              <button
                className="btn btn-primary mt-2"
                style={{ display: "block" }}
              >
                Đăng nhập Google{" "}
              </button>
            </a>
            <a href="https://side-by-side-back.vercel.app/auth/facebook">
              <button
                className="btn btn-primary mt-2"
                style={{ display: "block" }}
              >
                Đăng nhập Facebook{" "}
              </button>
            </a>
            <button className="btn btn-secondary" onClick={toggle}>
              Hủy bỏ
            </button>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PopupLogin;
