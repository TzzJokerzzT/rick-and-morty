import { useContext } from "react";
import { UseData } from "../../provider/useData";
import Loader from "../loader/loader";
import Cards from "./cards";
import Error from "../error/error";

const Card = () => {
  const { characters, loading, error } = useContext(UseData);
  return (
    <div>
      <div className="container">
        <div className="row ">
          {loading ? (
            <Loader />
          ) : error ? (
            <Error />
          ) : (
            characters.map((character) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative"
                  key={character.id}
                >
                  <div className="col-4">
                    <Cards character={character} />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
