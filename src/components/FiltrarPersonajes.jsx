// Importando Hooks
import { useContext, useState } from "react";
// Importando Componentes
import { Contexto } from "../Context/Contexto";

const FiltrarPersonajes = () => {
	//Inicializando Contexto y obteniendo el hook
	const { filtro, setFiltro } = useContext(Contexto);

	//Manejo del evento en el input
	const handleInput = (e) => {
		setFiltro(e.target.value);
	};

	return (
		<section className="filtrar">
			<input
				type="text"
				placeholder="Buscar personaje ... "
				onChange={handleInput}
				value={filtro}
			/>
		</section>
	);
};

export default FiltrarPersonajes;
