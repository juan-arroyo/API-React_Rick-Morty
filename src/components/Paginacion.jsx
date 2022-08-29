// Importando Hooks
import { useContext } from "react";
// Importando Componentes
import { Contexto } from "../Context/Contexto";

const Paginacion = () => {
	//Inicializando Contexto y obteniendo filtro
	const { page, setPage } = useContext(Contexto);

	// Siguiente Pagina
	const handleClick = () => {
		setPage(page + 1);
	};

	return (
		<div className="paginacion d-flex justify-content-between align-items-center">
			<p>Pagina {page}</p>
			<button
				className=" btn btn-primary btn-lg mb-3"
				onClick={handleClick}
			>
				Pagina {page + 1}
			</button>
		</div>
	);
};

export default Paginacion;
