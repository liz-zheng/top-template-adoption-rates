import React, { useState, useEffect } from "react";
import "./TopAdoptionRates.scss";
import PercentCircle from "./components/PercentCircle/PercentCircle";
import DynamicGrid from "./components/DynamicGrid/DynamicGrid";
import TextDisplay from "./components/TextDisplay/TextDisplay";
import SimpleGrid from "./components/SimpleGrid/SimpleGrid";
import LinkButton from "./components/LinkButton/LinkButton";
import sampleTemplateData from "./sampleTemplateData";

interface AdoptionRate {
  Template: string;
  "Adoption rate": string;
  "Total Users": string;
  "Adopted count": string;
  "Growth Rate": string;
}

function TopAdoptionRates() {
  const onSeeMore = () => {
    console.log("clicked");
    setData(sampleTemplateData);
  };

  // sort data in descending order for display
  const sortByHighestAdoptionRate = (data: AdoptionRate[]): AdoptionRate[] => {
    return data.sort((a, b) => {
      const adoptionRateA = parseFloat(a["Adoption rate"].replace("%", ""));
      const adoptionRateB = parseFloat(b["Adoption rate"].replace("%", ""));

      return adoptionRateB - adoptionRateA;
    });
  };

  // Placeholder API call for fetching data, but for now, just use sample data
  const useDataFromApi = (apiUrl: string) => {
    const [data, setData] = useState<AdoptionRate[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(apiUrl);
          if (response.ok) {
            const jsonData = await response.json();
            setData(jsonData);
          } else {
            setData(sampleTemplateData);
          }
        } catch (error) {
          setData(sampleTemplateData);
        }
      };

      fetchData();
    }, [apiUrl]);

    return data;
  };

  const getHighestAdoptionRate = (data: AdoptionRate[]): AdoptionRate => {
    const AdoptionRate = {
      Template: "",
      "Adoption rate": "",
      "Total Users": "",
      "Adopted count": "",
      "Growth Rate": "",
    };

    const sortedData = sortByHighestAdoptionRate(data);

    if (sortedData.length > 0) {
      return sortedData[0];
    }

    return AdoptionRate;
  };

  const [data, setData] = useState(sampleTemplateData.slice(0, 3));
  const [topAdoptionRate, setTopAdoptionRate] = useState(
    getHighestAdoptionRate(data),
  );

  return (
    <div className="top-adoption-rates">
      <div className={"title"}>
        <h4>Top Template Adoption Rates</h4>
      </div>
      <div className={"top-adoption-percent"}>
        <div data-testid="percent-circle">
          <PercentCircle
            title={"Adoption rate"}
            titleColor={"#b4bfd5"}
            percentage={parseInt(topAdoptionRate["Adoption rate"])}
            size={200}
            strokeWidth={15}
            circleColor={"#305bf5"}
            textColor={"#fff"}
            emptyColor={"#1d2435"}
            minSize={50}
          />
        </div>
        <div data-testid="top-template-detail" className="top-template-detail">
          <TextDisplay
            title={"Most Adopted Template"}
            textContent={topAdoptionRate.Template}
          />
          <SimpleGrid
            data={Object.entries(topAdoptionRate)
              .slice(1)
              .map(([key, value]) => ({
                title: key,
                content: value,
              }))}
          />
        </div>
      </div>
      <div
        data-testid="template-adoption-grid"
        className="template-adoption-grid"
      >
        <DynamicGrid data={data} hasHeaders />
      </div>
      {data.length <= 3 && (
        <LinkButton onClick={onSeeMore}>See More</LinkButton>
      )}
    </div>
  );
}

export default TopAdoptionRates;
