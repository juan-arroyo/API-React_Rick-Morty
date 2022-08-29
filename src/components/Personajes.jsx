function Personajes({ personaje }) {
	return (
		<div>
			<div className="card bg-color-red">
				<img
					src={personaje.image}
					className="card-img-top img-fluid rounded-pill"
					alt={personaje.name}
				/>
				<div className="card-body">
					<h5 className="card-title">{personaje.name}</h5>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						Status : {personaje.status}
					</li>
					<li className="list-group-item">
						Gender : {personaje.gender}
					</li>
					<li className="list-group-item">
						Planet : {personaje.origin.name}
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Personajes;
