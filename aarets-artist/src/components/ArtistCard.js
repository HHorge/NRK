import "./ArtistCard.css";

const ArtistCard = ({ artist, isRight, selected, handleSelect }) => {
  const cardClass = isRight ? "card right" : "card left";

  return (
    <div className={cardClass} onClick={handleSelect}>
      <div className={`background ${selected ? "selected" : ""}`}></div>
      <img src={artist.image} alt={artist.name} />
      <h2 className="name">{artist.name.toLocaleUpperCase()}</h2>
    </div>
  );
};

export default ArtistCard;
