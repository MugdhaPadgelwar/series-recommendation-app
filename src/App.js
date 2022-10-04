import React, { useState } from "react";
import "./styles.css";

const seriesData = {
  SciFi: [
    {
      name: "Dark",
      rating: "5/5"
    },
    {
      name: "Stranger Things",
      rating: "4.5/5"
    },
    {
      name: "Manifest",
      rating: "4/5"
    }
  ],
  Sitcom: [
    {
      name: "Friends",
      rating: "5/5"
    },
    {
      name: "The office",
      rating: "4.5/5"
    },
    {
      name: "Brooklyn nine nine",
      rating: "4.2/5"
    },
    {
      name: "Modern Family",
      rating: "4/5"
    }
  ],
  Triller: [
    {
      name: "Family Man",
      rating: "5/5"
    },
    {
      name: "Paatal Lok",
      rating: "4.5/5"
    },
    {
      name: "Delhi Crimes",
      rating: "4.3/5"
    },

    {
      name: "Sacred Games",
      rating: "3.5/5"
    }
  ]
};

export default function App() {
  const [seriesType, setType] = useState("SciFi");

  function seriesClickHandler(series) {
    setType(series);
  }
  return (
    <div className="App">
      <h1>Series Recommendation App</h1>
      <h2>Select your genre!</h2>
      <div>
        {Object.keys(seriesData).map((series) => (
          <button
            key={series}
            onClick={() => seriesClickHandler(series)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {series}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul>
          {" "}
          {seriesData[seriesType].map((serials) => (
            <li
              key={serials.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "2px solid black",
                width: "50%",
                margin: "auto",
                borderRadius: "0.5rem",
                marginTop: "2rem"
              }}
            >
              <div>Series Name: {serials.name} </div>

              <div>Rating: {serials.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
