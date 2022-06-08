import React, { useState } from "react";
import "./Form.scss";

export default function Form() {
  const axios = require("axios");
  const [quote, setQuote] = useState("Lettuce is a member of the sunflower family.");

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
        let result = response.data.Fact;
        setQuote(result);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="form">
      <div className="form-top">
        <div className="form-quote">{quote}</div>
      </div>
      <div className="form-bottom">
        <button className="form-button" onClick={() => setQuote(request())}>
          Next Fact!
        </button>
      </div>
    </div>
  );
}
