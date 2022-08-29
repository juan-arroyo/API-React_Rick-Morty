//importando Hooks
import { createContext, useState, useEffect } from "react";

//Creando Contexto
export const Contexto = createContext();

export const TaskContextProvider = (props) => {
	//Creando useState
	const [filtro, setFiltro] = useState("");
	const [personajes, setPersonajes] = useState([]);
	const [cargando, setCargando] = useState(true);
	const [page, setPage] = useState(1);

	//Creando UseEffect para cargar API por unica vez cuando carga la pagina
	useEffect(() => {
		URL = `https://rickandmortyapi.com/api/character?page=${page}`;
		async function getPersonajes() {
			try {
				const respuesta = await fetch(URL);
				const datos = await respuesta.json();
				setPersonajes(datos.results);
				setCargando(false);
			} catch (error) {
				console.log(error);
			}
		}
		//Cargando datos de la api
		getPersonajes();
	}, [page]);

	///// Filtrando personajes ////
	// Claves del json a filtrar
	const claves = ["name", "status", "species", "gender"];

	// Funcion busqueda con multiples parametros (claves)
	const busqueda = (data) => {
		return data.filter((item) =>
			claves.some((key) => item[key].toLowerCase().includes(filtro))
		);
	};

	return (
		<>
			<Contexto.Provider
				value={{
					busqueda: busqueda(personajes),
					filtro,
					setFiltro,
					cargando,
					setCargando,
					page,
					setPage,
				}}
			>
				{props.children}
			</Contexto.Provider>
		</>
	);
};
