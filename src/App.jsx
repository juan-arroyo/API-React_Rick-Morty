//Importando Componentes
import FiltrarPersonajes from "./components/FiltrarPersonajes";
import ListaPersonajes from "./components/ListaPersonajes";
import foto from "./assets/foto.png";

function App() {
	return (
		<div>
			<figure className="foto">
				<a href="index.html">
					<img src={foto} alt="Logo de Rick & Morty" />
				</a>
			</figure>
			<h1 className="text-center text-white display-1 py-4">
				Rick and Morty
			</h1>
			<FiltrarPersonajes />
			<ListaPersonajes />
		</div>
	);
}

export default App;
