// Importando Hooks
import { useContext } from "react";
// Importando Componentes
import { Contexto } from "../Context/Contexto";
import Personajes from "./Personajes";

function ListaPersonajes() {
	//Inicializando Contexto y obteniendo filtro
	const { personjesFiltrados, cargando, filtro } = useContext(Contexto);

	return (
		<div className="row">
			{cargando ? (
				<p>Cargando...</p>
			) : personjesFiltrados.length > 0 ? (
				personjesFiltrados.map((personaje) => (
					<div key={personaje.id} className="col-md-4">
						<Personajes personaje={personaje} />
					</div>
				))
			) : (
				<p>
					No se encontro personajes con la busqueda{" "}
					<strong>"{filtro}"</strong>.
				</p>
			)}

			{/* {personjesFiltrados.map((personaje) => {
					return (
						<div key={personaje.id} className="col-md-4">
							<Personajes personaje={personaje} />
						</div>
					);
				})} */}
		</div>
	);
}

export default ListaPersonajes;
