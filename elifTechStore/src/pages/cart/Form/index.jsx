import Input from "../../../shared/Input"

export default function Form({
	name, email, phone, address, setName, setEmail,
	setPhone, setAddress, nameError, emailError,
	phoneError, addressError
}) {
	return (
		<div className="form">
			<div className="form__item">
				<label htmlFor="name" className="from__label">Name:</label>
				<Input
					id="name"
					value={name}
					setValue={setName}
				/>
				{nameError && <p className="from__error">Please enter a valid name</p>}
			</div>
			<div className="form__item">
				<label htmlFor="email" className="from__label">Email:</label>
				<Input
					id="email"
					value={email}
					setValue={setEmail}
				/>
				{emailError && <p className="from__error">Please enter a valid email</p>}
			</div>
			<div className="form__item">
				<label htmlFor="phone" className="from__label">Phone:</label>
				<Input
					id="name"
					value={phone}
					setValue={setPhone}
				/>
				{phoneError && <p className="from__error">Please enter a valid phone</p>}
			</div>
			<div className="form__item">
				<label htmlFor="address" className="from__label">Address:</label>
				<Input
					id="address"
					value={address}
					setValue={setAddress}
				/>
				{addressError && <p className="from__error">Please enter a valid address</p>}
			</div>
		</div>
	)
}
