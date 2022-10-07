import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../common/Heading";
import SubscribeOurNews from "../../common/SubscribeOurNews";
import CompareTable from "./components/CompareTable";

function Compare(props) {
  return (
    <>
      {/* Breadcrumb section start */}
      <Heading title1="Copmare" />
      {/* Breadcrumb section end */}

      <CompareTable />

      {/* Subscribe Section Start */}
      <SubscribeOurNews/>
      {/* Subscribe Section End */}
    </>
  );
}

export default Compare;
