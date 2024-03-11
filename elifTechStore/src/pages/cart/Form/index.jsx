import Input from "../../../shared/Input";
import './from.css';

export default function Form({
	name, email, phone, address, setName, setEmail,
	setPhone, setAddress, nameError, emailError,
	phoneError, addressError, setNameError, setEmailError,
	setPhoneError, setAddressError
}) {
	return (
		<div className="form">
			<div className="form__item">
				<label htmlFor="name" className="from__label">Name:</label>
				<Input
					id="name"
					error={nameError}
					value={name}
					setValue={(value) => {
						setName(value);
						setNameError(false);
					}}
				/>
				{nameError && <p className="from__error">Please enter a valid name</p>}
			</div>
			<div className="form__item">
				<label htmlFor="email" className="from__label">Email:</label>
				<Input
					id="email"
					error={emailError}
					value={email}
					setValue={(value) => {
						setEmail(value);
						setEmailError(false);
					}}
				/>
				{emailError && <p className="from__error">Please enter a valid email</p>}
			</div>
			<div className="form__item">
				<label htmlFor="phone" className="from__label">Phone:</label>
				<Input
					id="name"
					error={phoneError}
					value={phone}
					setValue={(value) => {
						setPhone(value);
						setPhoneError(false);
					}}
				/>
				{phoneError && <p className="from__error">Please enter a valid phone</p>}
			</div>
			<div className="form__item">
				<label htmlFor="address" className="from__label">Address:</label>
				<Input
					id="address"
					error={addressError}
					value={address}
					setValue={(value) => {
						setAddress(value);
						setAddressError(false);
					}}
				/>
				{addressError && <p className="from__error">Please enter a valid address</p>}
			</div>
		</div>
	)
}
