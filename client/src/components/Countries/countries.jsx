import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getActivities } from "../../redux/actions";
import Country from "../Country/country";
import Filtros from "../Filtros/Filter";
import styles from "./countries.module.css";

export default function Countries() {
  const [countryData, setCountryData] = useState([]);
  const [page, setPage] = useState(1);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true); // Nuevo estado para indicar carga
  const allCountries = useSelector((state) => state.filtered);

  const dispatch = useDispatch();
  const PaisesPorPag = 10;

  useEffect(() => {
    // Hacer la petición para obtener los países
    dispatch(getCountries())
      .then(() => setLoading(false)) // Marcar como cargado cuando la petición se complete
      .catch(() => setLoading(false)); // En caso de error también se marca como cargado
  }, [dispatch]);

  useEffect(() => {
    // Hacer la petición para obtener las actividades
    dispatch(getActivities());
  }, [dispatch]);

  const indexOfLastCountry = page * PaisesPorPag;
  const indexOfFirstCountry = indexOfLastCountry - PaisesPorPag;

  const current = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);

  // Cambiar a la siguiente página
  const siguiente = () => {
    if (page < Math.ceil(allCountries.length / PaisesPorPag)) {
      setPage(page + 1);
    }
  };

  // Cambiar a la página anterior
  const anterior = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className={styles.filtro}>
      {loading && <span className={styles.loader}></span>}
      {!loading && (
        <div className={styles.FlexContainer}>
          <Filtros activities={activities} setActivities={setActivities} />
          {current.map((element) => (
            <Country
              key={element.id}
              id={element.id}
              name={element.name}
              flags={element.flags}
              continents={element.continents}
              capital={element.capital}
              subregion={element.subregion}
              area={element.area}
              population={element.population}
            />
          ))}
        </div>
      )}
      {!loading && (
        <div>
          <button
            className={styles.boton}
            onClick={anterior}
            disabled={page === 1}
          >
            Prev
          </button>
          <span className={styles.hola}> Page {page} </span>
          <button
            className={styles.boton}
            onClick={siguiente}
            disabled={page === Math.ceil(allCountries.length / PaisesPorPag)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}





