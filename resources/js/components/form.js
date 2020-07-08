import React from 'react';

const FormClient = ({form,onChange,onSubmit}) => (
	<form onSubmit={onSubmit}>
		<div className="form-group">
			<small>Nombre completo</small>
			<input
				type="text"
				name="name"
				className="form-control form-control-sm"
				placeholder="Ingrese nombre completo"
				value={form.name}
				onChange={onChange}
			/>
		</div>
		<div className="form-group">
			<small>Correo electronico</small>
			<input
				type="email"
				name="email"
				className="form-control form-control-sm"
				placeholder="example@empresa.com"
				value={form.email}
				onChange={onChange}
			/>
			<small>Nickname: {form.nickname}</small>
		</div>
		<div className="form-group">
			<small>Telefono</small>
			<input
				type="number"
				name="phone"
				className="form-control form-control-sm"
				placeholder="Ej: 555 555 5555"
				value={form.phone}
				onChange={onChange}
			/>
		</div>
		<div className="form-group">
			<small>Edad</small>
			<input
				type="number"
				name="age"
				className="form-control form-control-sm"
				value={form.age}
				onChange={onChange}
			/>
		</div>
		<button
			type="submit"
			className="btn btn-outline-info btn-lg btn-block">
			Guardar
		</button>
	</form>
)

export default FormClient