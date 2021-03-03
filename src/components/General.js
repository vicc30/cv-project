import React, { useState } from 'react';

const SavedGeneral = (props) => {
    const { fname, lname, email, phone, handleClick } = props;

    return (
        <div>
            <h2>General Section</h2>
            <p>Name: {fname} {lname}</p>
            <p>E-mail: {email}</p>
            <p>Phone number: {phone}</p>
            <button onClick={handleClick}>
                Edit
			</button>
        </div>
    );
}

function General() {

    const [info, setInfo] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
    });
    const [edit, setEdit] = useState(true);
    const { fname, lname, email, phone } = info

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => {
            return { ...prevInfo, [name]: value }
        });
    }

    const handleClick = (e) => {
        e.preventDefault();
        setEdit((prevEdit) => !prevEdit);
    }

    if (!edit) {
        return (
            <SavedGeneral
                fname={fname}
                lname={lname}
                email={email}
                phone={phone}
                edit={edit}
                handleClick={handleClick}
            />
        );
    }

    return (
        <div className="container">
            <h2>General Section</h2>
            <form>
                <div className="row">
                    <div className="col">
                        <label>First name: </label>
                        <input
                            type='text'
                            placeholder='Place Your First Name'
                            name='fname'
                            onChange={handleChange}
                            value={fname}
                        />
                    </div>
                    <div className="col">
                        <label>Last name: </label>
                        <input
                            type='text'
                            placeholder='Place Your Last Name'
                            name='lname'
                            onChange={handleChange}
                            value={lname}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>E-mail: </label>
                        <input
                            type='mail'
                            placeholder='Your Email'
                            name='email'
                            onChange={handleChange}
                            value={email}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>Phone number: </label>
                        <input
                            type='text'
                            placeholder='Phone number'
                            name='phone'
                            onChange={handleChange}
                            value={phone}
                        />
                    </div>
                </div>
                <button type="submit" onClick={handleClick}>Save</button>
            </form>
        </div>
    );
}

export default General;