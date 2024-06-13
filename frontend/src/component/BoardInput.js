import React, { useState } from "react";
import axios from "axios";
import "./css/BoardInput.css";

function BoardInput() {
  const [values, setValues] = useState({
    title: "",
    pd: "",
    au: 0,
  });
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: [event.target.value] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/movie2", values)
      .then((res) => console.log("successfully"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="create-wrap">
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목</label>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="l-box"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>감독</label>
          <input
            type="text"
            placeholder="감독"
            name="pd"
            className="l-box"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>관객수</label>
          <input
            type="text"
            placeholder="관객수"
            name="au"
            className="l-box"
            onChange={handleChange}
          />
        </div>
        <button type="submit">전송</button>
      </form>
    </div>
  );
}

export default BoardInput;
