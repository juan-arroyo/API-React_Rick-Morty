// Importando Componentes
import Personajes from "./Personajes";

function ListaPersonajes({ personajes }) {
	return (
		<div>
			{personajes.map((personaje) => {
				return <Personajes key={personaje.id} personaje={personaje} />;
			})}
		</div>
	);
}

export default ListaPersonajes;
