import axios from "axios";

export const fetchData = (url, func) => {
  console.log("Function called");

  axios
    .get(url)
    .then(res => {
      if (res.status == "200") {
        func(res.data);
      }
    })
    .catch(e => {
      if (e.err) console.log("Unable to fetch data!");
    });
};
