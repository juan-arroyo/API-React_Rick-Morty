//importando Hooks
import { createContext, useState, useEffect } from "react";

//Creando Contexto
export const Contexto = createContext();

export const TaskContextProvider = (props) => {
	//Creando useState
	const [filtro, setFiltro] = useState("");
	const [personajes, setPersonajes] = useState([]);

	//Creando UseEffect para cargar API por unica vez cuando carga la pagina
	useEffect(() => {
		URL = "https://rickandmortyapi.com/api/character";
		async function getPersonajes() {
			try {
				const respuesta = await fetch(URL);
				const datos = await respuesta.json();
				setPersonajes(datos.results);
			} catch (error) {
				console.log(error);
			}
		}
		getPersonajes();
	}, []);

	//Filtrando personajes
	const personjesFiltrados = personajes.filter((personaje) =>
		personaje.name.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
	);

	return (
		<>
			<Contexto.Provider
				value={{ personjesFiltrados, filtro, setFiltro }}
			>
				{props.children}
			</Contexto.Provider>
		</>
	);
};
