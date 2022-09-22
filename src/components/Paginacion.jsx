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
		<div className="paginacion ">
			<p>Pagina {page}</p>
			<button onClick={handleClick}>Pagina {page + 1}</button>
		</div>
	);
};

export default Paginacion;
