import React from 'react';

function ReservationForm(props) {
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [name, setName] = React.useState("");
    const [guests, setGuests] = React.useState(1);
    const handleSubmit = (event) => {
        fetch('http://localhost:3000/api/reservations', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    'contact_email': email,
                    'contact_phonenumber': phone,
                    'contact_name': name,
                    'meal_id': props.mealId,
                    'number_of_guests': guests
                }
            )
        }).then((response) => {
            if (response.ok) {
                alert("Reservation Created Successfully");
            } else {
                throw new Error(response.status);
            }
        })
    }

    return (
        <section className="py-5 text-center container bg-light">
            <div className="container">
            <main>
                <div className="col-md-7 col-lg-8">
                    <h4 className="mb-3">Reservation Details</h4>
                    <form className="needs-validation"
                        onSubmit={handleSubmit}
                        noValidate>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="Name" className="form-label">Name</label>
                            </div>
                            <div className="col-sm-6">
                                <input name="name" type="text"
                                    value={name}
                                    onChange={
                                        e => setName(e.target.value)
                                    }
                                    required/>
                                <div className="invalid-feedback">
                                    Valid Name is required.
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="email" className="form-label">Email</label>
                            </div>
                            <div className="col-sm-6">
                                <input name="email" type="email"
                                    value={email}
                                    onChange={
                                        e => setEmail(e.target.value)
                                    }
                                    required/><div className="invalid-feedback">
                                    Valid email is required.
                                </div>
                            </div>

                            <div className="col-6">
                                <label htmlFor="phone" className="form-label">Phone</label>
                            </div>
                            <div className="col-6">
                                    <input name="phone" type="number"
                                        value={phone}
                                        onChange={
                                            e => setPhone(e.target.value)
                                        }
                                        required/><div className="invalid-feedback">
                                        Your phone is required.
                                </div>
                            </div>

                            <div className="col-6">
                                <label htmlFor="guests" className="form-label">Guests
                                    <span className="text-muted">(Optional)</span>
                                </label>
                            </div>
                            <div className="col-6">
                                <input name="guests" type="number"
                                    value={guests}
                                    onChange={
                                        e => setGuests(e.target.value)
                                    }/>
                            </div>
                            <div className="col-6">
                                <button>
                                Book Reservation
                            </button>
                            </div>
                        </div>
                    </form>
                </div></main>
            </div> </section>
    );
}

export default ReservationForm;
