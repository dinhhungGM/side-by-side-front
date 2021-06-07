import React, { useState, useRef, useEffect } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import classnames from "classnames";

import "../../Styles/SettingStreamer.css";

const SettingStreamer = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  //   Setup useState của form
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [game, setGame] = useState("");
  const [desc, setDesc] = useState("");
  const [social, setSocial] = useState("");
  const [describe, setDescribe] = useState("");
  const [hilight, setHilight] = useState("");
  const [price, setPrice] = useState("");
  const [maxHours, setMaxHours] = useState("");

  //   Handle form
  const handleEditName = () => {
    setEdit(true);
  };

  useEffect(() => {}, [name]);

  const handleCheckValue = () => {
    console.log(name);
  };
  //   const handleSetName = ({ target }) => {
  //     setName(target.value);
  //   };

  //  style={{background: "linear-gradient(0deg, rgba(228, 228, 227, 0.1), rgba(228, 228, 227, 0.1))"}}
  return (
    <div className="container">
      <Nav tabs className="setting-streamer">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Setting streamer
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Setting giờ thuê
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <div className="container">
            {edit ? (
              <div>
                <Form>
                  <FormGroup className="nickname">
                    <Input
                      type="text"
                      placeholder="Nhập nickname của bạn"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-input"
                    />
                  </FormGroup>
                  {/* <Button onClick={handleCheckValue}>Check value</Button> */}
                </Form>
              </div>
            ) : (
              <div>
                <p className="nick-name">
                  NickName{" "}
                  <button
                    style={{ background: "none", border: "none" }}
                    onClick={handleEditName}
                  >
                    <i class="fa fa-edit edit-icon"></i>
                  </button>
                </p>
              </div>
            )}

            <div className="game">
              <p className="game-title">Nhập vào tựa game của bạn</p>
              <Form>
                <FormGroup className="game">
                  <Input
                    type="text"
                    placeholder="Nhập tựa game bạn yêu thích: Liên Minh, Liên quân,...."
                    value={game}
                    onChange={(e) => setGame(e.target.value)}
                    className="border-input"
                  />
                </FormGroup>
                {/* <Button onClick={handleCheckValue}>Check value</Button> */}
              </Form>
            </div>
            <div className="desc">
              <p className="desc-title">Mô tả</p>
              <Form>
                <FormGroup className="desc">
                  <Input
                    type="text"
                    placeholder="Nhập vào mô tả về bản thân bạn"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </FormGroup>
                {/* <Button onClick={handleCheckValue}>Check value</Button> */}
              </Form>
            </div>
            <div className="social">
              <p className="social-title">Liên kết xã hội</p>
              <Form>
                <FormGroup className="social">
                  <Input
                    type="text"
                    placeholder="Nhập đường dẫn facebook, instagram,..."
                    value={social}
                    onChange={(e) => {
                      setSocial(e.target.value);
                    }}
                  />
                </FormGroup>
                {/* <Button onClick={handleCheckValue}>Check value</Button> */}
              </Form>
            </div>
          </div>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default SettingStreamer;
