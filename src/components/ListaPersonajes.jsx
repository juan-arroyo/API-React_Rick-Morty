// Importando Hooks
import { useContext } from "react";
// Importando Componentes
import { Contexto } from "../Context/Contexto";
import Personajes from "./Personajes";

function ListaPersonajes() {
	//Inicializando Contexto y obteniendo filtro
	const { personjesFiltrados } = useContext(Contexto);

	return (
		<div className="container bg-danger">
			<div className="row">
				{personjesFiltrados.map((personaje) => {
					return (
						<div key={personaje.id} className="col-md-4">
							<Personajes personaje={personaje} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ListaPersonajes;
