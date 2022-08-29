//Importando Componentes
import FiltrarPersonajes from "./components/FiltrarPersonajes";
import ListaPersonajes from "./components/ListaPersonajes";

function App() {
	return (
		<div className="bg-dark text-white">
			<h1 className="text-center display-1 py-4">Rick and Morty</h1>
			<FiltrarPersonajes />
			<ListaPersonajes />
		</div>
	);
}

export default App;
