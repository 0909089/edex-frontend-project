import axios from "axios";

export const fetchData = (url, func) => {
  axios
    .get(url)
    .then(res => {
      if (res.status == "200") {
        console.log("Data fetched successfully");
        func(res.data);
      }
    })
    .catch(e => {
      if (e.err) console.log("Unable to fetch data!");
    });
};
