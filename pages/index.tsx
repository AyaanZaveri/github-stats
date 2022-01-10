import React, { useState } from "react";
import axios from "axios";
import Input from "../components/Input";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

const index = () => {
  const [langs, setLangs] = useState([]);
  const [user, setUser] = useState("");
  const [repo, setRepo] = useState("");

  const getLangs = (repository: string) => {
    axios
      .get(`https://api.github.com/repos/${user}/${repository}/languages`)
      .then(function (response) {
        setLangs(response.data);
      })
      .catch(function (error) {
        //console.log(error);
      });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    getLangs(repo);
  };

  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

  const data = {
    labels: Object.keys(langs),
    datasets: [
      {
        label: "# of Votes",
        data: Object.keys(langs).map(
          (lang, key) => langs[lang as unknown as number]
        ),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center items-center gap-y-3 mt-2">
      <Input
        repo={repo}
        setRepo={setRepo}
        user={user}
        setUser={setUser}
        handleSubmit={handleSubmit}
      />
      {Object.keys(langs).length > 0 ? (
        <div>
          <div className="flex flex-col items-center gap-5 mt-3">
            {Object.keys(langs).map((lang, key) => (
              <>
                {/* <h1 key={key}>
                  <span className="font-bold">{lang}</span>
                  :&nbsp;
                  {langs[lang as unknown as number]}
                </h1> */}
              </>
            ))}

            <div>
              <PolarArea data={data} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default index;
