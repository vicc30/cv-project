import React from 'react';

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

class General extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            email: "",
            phone: "",
            edit: true
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleClick(e) {
        e.preventDefault();
        this.setState((state) => {
            return { edit: !state.edit }
        });
    }

    render() {
        const { fname, lname, email, phone, edit } = this.state;

        if (!edit) {
            return (
                <SavedGeneral 
                    fname={fname} 
                    lname={lname} 
                    email={email} 
                    phone={phone} 
                    edit={edit} 
                    handleClick={this.handleClick} 
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
                                onChange={this.handleChange}
                                value={fname}
                            />
                        </div>
                        <div className="col">
                            <label>Last name: </label>
                            <input
                                type='text'
                                placeholder='Place Your Last Name'
                                name='lname'
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
                                value={phone}
                            />
                        </div>
                    </div>
                    <button type="submit" onClick={this.handleClick}>Save</button>
                </form>
            </div>
        );
    }
}

export default General;