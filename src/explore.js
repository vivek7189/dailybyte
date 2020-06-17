import React from "react";
import { useState, useEffect, useReducer } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { todoReducer } from "./reducers";
import Independent from "./independet";
import Independent2 from "./Independent2";
const initstate = [{ name: "defaultTask", completed: true }];
const style = {
  width: "50px",
  color: "red",
  border: "solid 1px red",
  margin: "10px",
  position: "relative",
  left: "0px"
};
const Explore = () => {
  const [note, dispatch] = useReducer(todoReducer, initstate);
  const [inputValue, setInputValue] = React.useState("");
  const onChangeHandler = event => {
    setInputValue(event.target.value);
  };
  const rest = (e, temp) => {
    animation("animation", 5000, 1000);
    console.log(e, temp);
    dispatch({ type: "remove", name: temp });
  };
  // sped di/time 200/
  const animation = (id, time, distance) => {
    let elem = document.getElementById(id);
    let left = 0;
    let lastFrame = +new Date();

    // Move the element on the right at ~600px/s
    let timer = setInterval(function() {
      let now = +new Date();
      let deltaT = now - lastFrame;
      elem.style.left = (left += (10 * deltaT) / 16) + "px";
      lastFrame = now;
      // clear the timer at 400px to stop the animation
      if (left > 400) {
        clearInterval(timer);
      }
    }, 16);
  };

  return (
    <div className="main-container">
      <Independent />
      <Independent2 />
      <TextField
        id="standard-basic"
        label="Note to do"
        variant="filled"
        onChange={onChangeHandler}
        value={inputValue}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch({ type: "add", name: inputValue })}
      >
        Add Note
      </Button>
      <Card>
        <CardContent>
          to do contenct
          <div>
            {note.map(data => {
              return (
                <div>
                  <div>{data.name}</div>
                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={e => {
                        rest(e, data.name);
                      }}
                    >
                      remove Note
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
      <div id="animation" style={style}>
        dfdfdk{" "}
      </div>
    </div>
  );
};

export default Explore;
