// Importando Hooks
import { useContext } from "react";
// Importando Componentes
import { Contexto } from "../Context/Contexto";
import Paginacion from "./Paginacion";
import Personajes from "./Personajes";

function ListaPersonajes() {
	//Inicializando Contexto y obteniendo filtro
	const { personjesFiltrados, cargando, filtro, busqueda } =
		useContext(Contexto);

	return (
		<div className="container">
			<Paginacion />
			<div className="lista-personajes">
				{cargando ? (
					<p>Cargando...</p>
				) : busqueda.length > 0 ? (
					busqueda.map((personaje) => (
						<Personajes key={personaje.id} personaje={personaje} />
					))
				) : (
					<p>
						No se encontro personajes con la busqueda{" "}
						<strong>"{filtro}"</strong>.
					</p>
				)}
			</div>
			<Paginacion />
		</div>
	);
}

export default ListaPersonajes;
