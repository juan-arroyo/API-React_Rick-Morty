function Personajes({ personaje }) {
	return (
		<div>
			<div key={personaje.id}>
				<h2>{personaje.name}</h2>
				<img src={personaje.image} alt={personaje.name} />
			</div>
		</div>
	);
}

export default Personajes;
