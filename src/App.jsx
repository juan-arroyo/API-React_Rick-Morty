//Importando Componentes
import FiltrarPersonajes from "./components/FiltrarPersonajes";
import ListaPersonajes from "./components/ListaPersonajes";
import foto from "./assets/foto.png";

function App() {
	return (
		<div className="bg-dark text-white">
			<figure className="foto">
				<img src={foto} alt="Logo de Rick & Morty" />
			</figure>
			<h1 className="text-center display-1 py-4">Rick and Morty</h1>
			<FiltrarPersonajes />
			<ListaPersonajes />
		</div>
	);
}

export default App;
