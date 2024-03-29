import React, { useState } from "react";
import Icon from "./component/Icon.js";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { FaTimes, FaRegCircle } from "react-icons/fa";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  const [drawMessage, setDrawMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    setDrawMessage("")
    itemArray.fill("empty", 0, 9);
  };

  const checkIsWinners = () => {
    if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2]
    ) {
      setWinMessage(`${itemArray[0]} wins`);
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} wins`);
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} wins`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} wins`);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} wins`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} wins`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} wins`);
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[4] &&
      itemArray[6] === itemArray[2]
    ) {
      setWinMessage(`${itemArray[6]} wins`);
    }else if(itemArray[0] !== 'empty' && itemArray[1] !== 'empty' && itemArray[2] !== 'empty' && itemArray[3] !== 'empty' && itemArray[4] !== 'empty' && itemArray[5] !== 'empty' && itemArray[6] !== 'empty' && itemArray[7] !== 'empty'  && itemArray[8] !== 'empty' ){
      setDrawMessage(`Its a Draw`);
    }
  };

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("already filled", { type: "error" });
    }
    checkIsWinners();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center sm-width" />
      <Row>
        <Col md={6} className="offset-md-3">
          {drawMessage ? (<div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {drawMessage}
              </h1>
              <Button
                color="success"
                className="mt-3"
                block
                onClick={reloadGame}
              >
                Reload the Game
              </Button>
            </div>) :''}

          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
              <Button
                color="success"
                className="mt-3"
                block
                onClick={reloadGame}
              >
                Reload the Game
              </Button>
            </div>
          ) : ( <> 
              {
               drawMessage ? ('') : (
                <h1 className="text-center text-warning ">
                {isCross ? (<FaTimes className="icons fs-2" />) : (<FaRegCircle className="icons fs-2" />)} &nbsp;Turn
              </h1>
               ) 
              } 
            </>
          )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card color="warning" key={index} onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
