import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchDataAPI() {
  const [datas, adddata] = useState({});
  const [id, setid] = useState(1);
  const [buttonValue, setButtonValue] = useState(1);

  const ClickHandler = () => {
    console.log("ksvdysdysd");
    setButtonValue(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        adddata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [buttonValue]);

  return (
    <div>
      <ul>
        {/* to display all data */}
        {/* {datas.map(each_data => (<li key={each_data.id}>{each_data.title}</li>))} */}

        {/* to display specific data */}
        <input type='text' value={id} onChange={(e) => setid(e.target.value)} />
        <button type='button' onClick={ClickHandler}>
          Fetch POST
        </button>
        {datas.title}
      </ul>
    </div>
  );
}

export default FetchDataAPI;
