import React, { useEffect, useState } from "react";
import "./home.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Ads from "./ads/Ads";

const Home = () => {
  const location = useLocation();
  const [info, setInfo] = useState([]);
  // console.log(location.search)
  const query = location.search;
  useEffect(() => {
    const getInfo = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/info/search${query}`
      );
      setInfo(res.data);
    };
    getInfo();
  }, [query]);

  return (
    <>
      {info && (
        <div className="bottomBar">
          {info.map((e, index) => (
            <Ads key={index} companyId={e.companyId} img={e.imageUrl} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
