import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import axios from "axios";
import Spinner from "../Components/Spinner";
import BasicCard from "../Components/Card";
import Button from "@mui/material/Button";
import { Refresh } from "@material-ui/icons";

const Home: React.FC = (): JSX.Element => {
  const [isLoading, setisLoading] = useState<boolean>(true);
  const [data, setData] = useState([]);
  const [toggleRefresh, settoggleRefresh] = useState<boolean>(false);

  //initial fetching of items
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        localStorage.setItem("userData", JSON.stringify(data.data));
        setTimeout(() => {
          let parsedData = JSON.parse(localStorage.getItem("userData") || "[]");
          setData(parsedData);
          setisLoading(false);
        }, 1000);
      })
      .catch((err) => {});
  }, []);

  // to bring the items back when user clicks refresh
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        localStorage.setItem("userData", JSON.stringify(data.data));
        setTimeout(() => {
          let parsedData = JSON.parse(localStorage.getItem("userData") || "[]");

          setData(parsedData);

          setisLoading(false);
        }, 1000);
      })
      .catch((err) => {});
  }, [toggleRefresh]);

  const handleCard = (id: string): void => {
    const newData = data.filter((item) => {
      return item["id"] !== id;
    });
    localStorage.setItem("userData", JSON.stringify(newData));
    setData(newData);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spinner isLoading={isLoading} />
      </div>
      <Button
        variant="contained"
        style={{ margin: 10 }}
        onClick={() => {
          settoggleRefresh(!toggleRefresh);
          setisLoading(true);
        }}
      >
        Refresh
      </Button>
      {data.length > 0 ? (
        <h3 style={{ textAlign: "center" }}>Person Count : {data.length} </h3>
      ) : null}

      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {data?.map((item, i) => (
          <BasicCard
            key={item["id"]}
            name={item["name"]}
            username={item["username"]}
            email={item["email"]}
            //@ts-ignore
            handleCard={handleCard}
            id={item["id"]}
          />
        ))}
      </Box>
    </>
  );
};

export default Home;
