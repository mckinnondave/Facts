import "./App.scss";
import React from "react";
import Form from "./components/Form";

function App() {
  const axios = require("axios");
  let result;
  const request = () => {
    
    const options = {
      method: "GET",
      url: "https://random-facts2.p.rapidapi.com/getfact",
      headers: {
        "X-RapidAPI-Host": "random-facts2.p.rapidapi.com",
        "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        result = response.data.Fact;
      })
      .catch(function (error) {
        console.error(error);
      });
    return result;
  };
  
  return (
    <div className="app">
      <Form request={request} />
    </div>
  );
}

export default App;
