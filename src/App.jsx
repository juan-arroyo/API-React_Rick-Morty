//Importando Componentes
import FiltrarPersonajes from "./components/FiltrarPersonajes";
import ListaPersonajes from "./components/ListaPersonajes";
import foto from "./assets/foto.png";

function App() {
	return (
		<div>
			<figure className="text-center p-3 mb-5">
				<a href="index.html">
					<img
						className="image_size img-fluid "
						src={foto}
						alt="Logo de Rick & Morty"
					/>
				</a>
			</figure>
			<FiltrarPersonajes />
			<ListaPersonajes />
		</div>
	);
}

export default App;
