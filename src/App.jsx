import "./App.css";
import FiltrarPersonajes from "./components/FiltrarPersonajes";

//Importando Componentes
import ListaPersonajes from "./components/ListaPersonajes";
function App() {
	// const personajesFiltrados = personajes.filter((personaje) =>
	// 	personaje.name.toLowerCase().includes(filtro)
	// );

	return (
		<div>
			<h1>Rick and Morty</h1>
			<FiltrarPersonajes />

			<ListaPersonajes />
		</div>
	);
}

export default App;
