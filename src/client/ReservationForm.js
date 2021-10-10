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

    return (<div className="form">
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input name="name" type="text"
                    value={name}
                    onChange={
                        e => setName(e.target.value)
                    }
                    required/>
            </label>
            <label>
                Email:
                <input name="email" type="email"
                    value={email}
                    onChange={
                        e => setEmail(e.target.value)
                    }
                    required/>
            </label>
            <label>
                Phone Number:
                <input name="phone" type="number"
                    value={phone}
                    onChange={
                        e => setPhone(e.target.value)
                    }
                    required/>
            </label>
            <label>
                Number of guests:
                <input name="guests" type="number"
                    value={guests}
                    onChange={
                        e => setGuests(e.target.value)
                    }
                    required/>
            </label>
            <button>
                Book Reservation
            </button>
        </form>
    </div>);
}

export default ReservationForm;
