import React, {useState} from "react";
import './Form.scss'

export default function Form ({request}) {
  const [quote, setQuote] = useState("Hello world")

  return (
    <div className="form">
      <div>{quote}</div>
      <button className="form-button" onClick={() => setQuote(request)}>Next</button>
    </div>
  )
}