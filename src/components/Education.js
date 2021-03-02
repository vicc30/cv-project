import React from 'react';

const SavedEducation = (props) => {
    const { school, title, start, end, handleClick } = props;
    return (
        <div>
            <p>School name: {school}</p>
            <p>title: {title}</p>
            <p>Start Date: {start}</p>
            <p>End Date: {end}</p>
            <button onClick={handleClick}> Edit </button>
        </div>
    );
}

class Education extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            schoolName: "",
            title: "",
            startDate: "",
            endDate: "",
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
        const { schoolName, title, startDate, endDate, edit } = this.state;
        const { handleDelete, id } = this.props;

        if (!edit) {
            return (
                <SavedEducation
                    school={schoolName}
                    title={title}
                    start={startDate}
                    end={endDate}
                    handleClick={this.handleClick}
                />
            );
        }

        return (
            <div>
                <form>
                    <div className="row">
                        <div className="col">
                            <label>School Name: </label>
                            <input
                                type='text'
                                placeholder='Place Your School Name'
                                name='schoolName'
                                onChange={this.handleChange}
                                value={schoolName}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Title: </label>
                            <input
                                type='text'
                                placeholder='Place your Title'
                                name='title'
                                onChange={this.handleChange}
                                value={title}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Start date: </label>
                            <input
                                type='date'
                                name='startDate'
                                onChange={this.handleChange}
                                value={startDate}
                            />
                        </div>
                        <div className="col">
                            <label>End date: </label>
                            <input
                                type='date'
                                name='endDate'
                                onChange={this.handleChange}
                                value={endDate}
                            />
                        </div>
                    </div>
                    <button type="submit" onClick={this.handleClick}>Save</button>
                    <button type="button" onClick={() => handleDelete('education', id)}>Delete</button>
                </form>
            </div>
        );
    }
}

export default Education;