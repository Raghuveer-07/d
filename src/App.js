import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const movieDictionary = {
    SciFi: [
      {
        movie: "Interstellar",
        IMDbRating: "8.6/10",
        Info:
          "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
      },
      {
        movie: "Dune (2021)",
        IMDbRating: "8/10",
        Info:
          "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future."
      },
      {
        movie: "Ready Player One",
        IMDbRating: "7.4/10",
        Info:
          "When the creator of a virtual reality called the OASIS dies, he makes a posthumous challenge to all OASIS users to find his Easter Egg, which will give the finder his fortune and control of his world."
      }
    ],
    Adventure: [
      {
        movie: "Life Of Pi",
        IMDbRating: "7.9/10",
        Info:
          "A young man who survives a disaster at sea is hurtled into an epic journey of adventure and discovery. While cast away, he forms an unexpected connection with another survivor: a fearsome Bengal tiger."
      },
      {
        movie: "The Revenant",
        IMDbRating: "8/10",
        Info:
          "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team."
      },
      {
        movie: "The Green Knight",
        IMDbRating: "6.6/10",
        Info:
          "A fantasy retelling of the medieval story of Sir Gawain and the Green Knight."
      }
    ],
    mystery: [
      {
        movie: "Orphan",
        IMDbRating: "7/10",
        Info:
          "A husband and wife who recently lost their baby adopt a 9-year-old girl who is not nearly as innocent as she appears."
      },
      {
        movie: "The Little Things",
        IMDbRating: "6.3/10",
        Info:
          "Kern County Deputy Sheriff Joe Deacon is sent to Los Angeles for what should have been a quick evidence-gathering assignment. Instead, he becomes embroiled in the search for a serial killer who is terrorizing the city."
      },
      {
        movie: "Gone Girl",
        IMDbRating: "8.1/10",
        Info:
          "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent."
      }
    ]
  };
  var genre = Object.keys(movieDictionary);

  const [Category, setCategory] = useState("SciFi");
  function onClickGenreHandler(iGenre) {
    setCategory(iGenre);
  }

  return (
    <div className="App">
      <h1 style={{ textAlign: "left" }}>Movie Recommendation app 🎞️ 🍿</h1>
      <p
        style={{ textAlign: "left", fontSize: "smaller", fontWeight: "bolder" }}
      >
        Here are some movies I would recommend.{" "}
      </p>
      {genre.map(function (iGenre, index) {
        return (
          <button onClick={() => onClickGenreHandler(iGenre)}>{iGenre}</button>
        );
      })}
      <hr></hr>
      <ul>
        {movieDictionary[Category].map((features) => (
          <li>
            <div style={{ fontSize: "1.5rem" }}>{features.movie}</div>
            <div style={{ fontSize: "smaller" }}>
              Rating : {features.IMDbRating}
            </div>
            <div style={{ color: "white" }}>{"x"}</div>
            <div style={{ fontSize: "12.8px" }}>{features.Info}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
