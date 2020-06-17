import React from "react";
import { useState, useEffect, useReducer, useContext } from "react";
import { addressReducer } from "./reducers";
import Button from "@material-ui/core/Button";
import { ColorContext } from "./context";
const initState = {
  city: "gurgaon",
  pin: 251203,
  state: "haryana",
  country: "India"
};
const Settings = () => {
  const [count, setCount] = useState({ left: 0, right: 1, up: 0 });
  const [query, setQuery] = useState("react");
  const [hint, setHint] = useState([]);
  const [address, dispatch] = useReducer(addressReducer, initState);
  // const loginContext
  const colors = useContext(ColorContext);
  useEffect(() => {
    console.log("cahnge all");
    const chnageAll = () => {
      console.log("erwerwrwer");
      setCount(state => ({ ...state, right: state.right + 1 }));
    };
    window.addEventListener("click", chnageAll, false);

    (async () => {
      const data = await fetch(
        "https://hn.algolia.com/api/v1/search?query=" + query
      );
      const readydata = await data.json();
      setHint(readydata.hits);
    })();

    const updateAddress = () => {
      setInterval(() => {
        dispatch({ type: "city", city: Math.random() });
      }, 2000);
    };
    updateAddress();
  }, [query]);
  useEffect(() => {
    console.log("second use effect");
  });
  const onChnage = e => {
    console.log(e);
    setQuery(e.target.value);
  };
  return (
    <div className="main-container">
      welcome to Settings{count.left} {count.right}
      <input type="text" value={query} onChange={onChnage} />
      <Button
        variant="contained"
        color="primary"
        onClick={e => {
          e.stopPropagation();
          setCount(state => ({ ...state, left: state.left + 1 }));
        }}
      >
        start
      </Button>
      make it{colors}
      <div>
        address is {address.city}
        {address.country}
        {address.pin}
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={e => {
            e.stopPropagation();
            dispatch({ type: "country", country: "US" });
          }}
        >
          country
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={e => {
            e.stopPropagation();
            dispatch({ type: "pin", pin: 1 });
          }}
        >
          pin
        </Button>
      </div>
      <div className="list-container">
        {hint.map((data, index) => {
          return (
            <div className="listData">
              <div>{data.author}</div>
              <div
                onClick={() => {
                  console.log(index);
                }}
              >
                {" "}
                close{" "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Settings;
