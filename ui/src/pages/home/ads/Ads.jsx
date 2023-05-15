import React, { useEffect } from "react";
import "./ads.css";
import axios from "axios";
import { useState } from "react";

const Ads = ({ companyId, img }) => {
  const [companyInfo, setCompanyInfo] = useState({});
  useEffect(() => {
    const getCompany = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/company/${companyId}`
      );
      setCompanyInfo(res.data);
    };
    getCompany();
  }, [companyId]);

  return (
    <>
      <div className="item">
        <a href={companyInfo?.url} target="blank"><img src={`/images/${img}`} alt="image of company" className="company-img"/></a>
        <h3>{companyInfo?.company}</h3>
      </div>
    </>
  );
};

export default Ads;
