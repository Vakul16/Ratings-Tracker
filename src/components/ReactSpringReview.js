import React, { useState, useRef } from "react";
import ReviewTrend from "views/ReviewManagement/Components/snapshot/ReviewTrend";
import BoxLayout from "views/ReviewManagement/Components/Layouts/BoxLayout";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
const ReactSpringReview = () => {
  const parallax = useRef(null);
  const [radioData, setRadioData] = useState([
    {
      id: 1,
      value: false,
      label: "Average Star Rating",
    },
    {
      id: 2,
      value: true,
      label: "Number of Reviews",
    },
    {
      id: 3,
      value: false,
      label: "Number of Responses",
    },
    {
      id: 4,
      value: false,
      label: "Responses Pending Approval",
    },
    {
      id: 5,
      value: false,
      label: "Problem Responses",
    },
  ]);
  const handleRadioChange = (e) => {
    // e.prevent.default();
    console.log(e);
    let newRadioData = radioData.map((item) => {
      if (item.id === e) {
        item.value = true;
        return item;
      } else {
        item.value = false;
        return item;
      }
    });
    setRadioData(newRadioData);
  };
  return (
    <Parallax
      ref={parallax}
      pages={5}
      style={{ width: "60.8%", left: 278, backgroundColor: "#fff" }}
    >
      <ParallaxLayer offset={0} speed={2}>
        <BoxLayout label="Review Trends">
          <ReviewTrend
            filterData={radioData}
            setFilterSelected={handleRadioChange}
          />
        </BoxLayout>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{ backgroundColor: "#ff6d6d" }}
      />
      <ParallaxLayer offset={1} speed={2}>
        <BoxLayout label="Review Trends">
          <ReviewTrend
            filterData={radioData}
            setFilterSelected={handleRadioChange}
          />
        </BoxLayout>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={0.5}
        style={{ backgroundColor: "#253237" }}
      />
      <ParallaxLayer offset={2} speed={2}>
        <BoxLayout label="Review Trends">
          <ReviewTrend
            filterData={radioData}
            setFilterSelected={handleRadioChange}
          />
        </BoxLayout>
      </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={0.5}
        style={{ backgroundColor: "#805E73" }}
      />
      <ParallaxLayer offset={3} speed={2}>
        <BoxLayout label="Review Trends">
          <ReviewTrend
            filterData={radioData}
            setFilterSelected={handleRadioChange}
          />
        </BoxLayout>
      </ParallaxLayer>
      <ParallaxLayer
        offset={4}
        speed={0.5}
        style={{ backgroundColor: "#87BCDE" }}
      />

      <ParallaxLayer offset={4} speed={2}>
        <BoxLayout label="Review Trends">
          <ReviewTrend
            filterData={radioData}
            setFilterSelected={handleRadioChange}
          />
        </BoxLayout>
      </ParallaxLayer>
    </Parallax>
  );
};

export default ReactSpringReview;
