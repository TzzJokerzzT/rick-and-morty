const Cards = ({ character }) => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="col-lg-4 col-md-6 col-sm-6 col-12  position-relative">
        <div className="card border-success mt-4" style={{ width: "15rem" }}>
          <img
            src={character.image}
            className="card-img-top"
            alt={character.name}
          />
          <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text">
              Status: {character.status} <br /> Specie: {character.species}{" "}
              <br />
              Type: {character.type}
              <br /> Gender: {character.gender}
            </p>
            <a href="#/" className="btn btn-primary">
              Favorito
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
