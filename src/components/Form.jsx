import React, { useState } from 'react';
import { navigate } from 'react-router-dom';
// import { addUser } from '../controllers/users';

const Form = () => {
	// const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		address: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	}

	const handleOnBack = () => {
		navigate(-1);
	}

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();

	// 	const newUser = await addUser(formData);

	// 	if (newUser) {
	// 		navigate(`/users/${newUser.id}`);
	// 	} else {
	// 		alert('Error al agregar el usuario. Por favor, inténtalo de nuevo.');
	// 	}
	// }

	return (
		<div className="container">
			<h2>Ajouter un utilisateur</h2>
			{/* <form onSubmit={handleSubmit}> */}
			<div className="form-group">
				<label>Nom complet</label>
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="form-group">
				<label>Adresse courriel</label>
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="form-group">
				<label>Numéro de téléphone</label>
				<input
					type="tel"
					name="phone"
					value={formData.phone}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="form-group">
				<label>Adresse</label>
				<input
					type="text"
					name="address"
					value={formData.address}
					onChange={handleChange}
					required
				/>
			</div>
			<button type="submit" className="btn btn-primary">Créer</button>
			<button className="btn btn-primary" onClick={handleOnBack}>Supprimer</button>
			{/* </form> */}
		</div>
	);
}

export default Form;
