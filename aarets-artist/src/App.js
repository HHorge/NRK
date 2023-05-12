import { useEffect, useState } from "react";
import ArtistCard from "./components/ArtistCard";

import "./App.css";

function App() {
  const [artistList, setArtistList] = useState([]);
  const [selected, setSelected] = useState(undefined);
  const [votedArtist, setVotedArtist] = useState(undefined);

  const getData = () => {
    fetch("http://localhost:3500/artists")
      .then((response) => response.json())
      .then((data) => setArtistList(data))
      .catch((error) => console.log(error));
  };

  const handleSelect = (index) => {
    setSelected(index);
  };

  const handleSubmit = async () => {
    const url = "http://localhost:3500/submit";
    const data = artistList[selected];

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setVotedArtist(artistList[selected]);
        window.scrollTo(0, 0);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {votedArtist ? (
        <div className="voted-wrapper">
          <h1 className="title small">du stemte på</h1>
          <h1 className="title large">{votedArtist.name}</h1>
          <img
            className="artist-img"
            alt={votedArtist.name}
            src={votedArtist.image}
          />
        </div>
      ) : (
        <div className="wrapper">
          <div className="content">
            <h1 className="title small">stem på</h1>
            <h1 className="title large">ÅRETS ARTIST</h1>
            <div className="artists">
              {artistList.map((artist, index) => {
                return (
                  <ArtistCard
                    key={index}
                    artist={artist}
                    isRight={index % 2}
                    handleSelect={() => handleSelect(index)}
                    selected={index === selected}
                  />
                );
              })}
            </div>
            <button
              className="submit-button"
              onClick={() => handleSubmit()}
              disabled={selected === undefined}
            >
              STEM
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
