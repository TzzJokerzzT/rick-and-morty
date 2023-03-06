import { useEffect, useState } from "react";
import { UseData } from "../provider/useData";

export const UseProvider = ({ children }) => {
  let [characters, setCharacters] = useState([]);
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const response = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?name=${search}&page=${page}&status=${status}&gender=${gender}&species=${species}`
        );
        const data = await response.json();
        if (data.error) throw new Error("Esto error de API");
        setInfo(data.info);
        setCharacters(data.results);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    response();
  }, [search, page, status, gender, species]);

  return (
    <UseData.Provider
      value={{
        characters,
        loading,
        error,
        page,
        info,
        setPage,
        setSearch,
        setStatus,
        setGender,
        setSpecies,
      }}
    >
      {children}
    </UseData.Provider>
  );
};
