import "./App.css";
//Importando Hooks
import { useEffect, useState } from "react";

//Importando Componentes
import ListaPersonajes from "./components/ListaPersonajes";
import Personajes from "./components/Personajes";

function App() {
	//Hook useState
	const [personajes, setPersonajes] = useState([]);
	//Cargar API por unica vez cuando carga la pagina
	useEffect(() => {
		URL = "https://rickandmortyapi.com/api/character";
		async function fetchData() {
			const respuesta = await fetch(URL);
			const datos = await respuesta.json();
			setPersonajes(datos.results);
		}
		fetchData();
	}, []);

	return (
		<div>
			<h1>Rick and Morty</h1>
			<ListaPersonajes personajes={personajes} />
		</div>
	);
}

export default App;
