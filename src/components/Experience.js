import React from 'react';

const SavedExperience = (props) => {
    const { company, position, start, end, handleClick } = props;
    return (
        <div>
            <p>Company name: {company}</p>
            <p>Position: {position}</p>
            <p>Start Date: {start}</p>
            <p>End Date: {end}</p>
            <button onClick={handleClick}> Edit </button>
        </div>
    );
}

class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            company: "",
            position: "",
            mainTasks: "",
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
        const { company, position, mainTasks, startDate, endDate, edit } = this.state;
        const { handleDelete, id } = this.props;

        if (!edit) {
            return (
                <SavedExperience
                    company={company}
                    position={position}
                    mainTasks={mainTasks}
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
                            <label>Company Name: </label>
                            <input
                                type='text'
                                placeholder='Place Your Company Name'
                                name='company'
                                onChange={this.handleChange}
                                value={company}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Prosition: </label>
                            <input
                                type='text'
                                placeholder='Place your position'
                                name='position'
                                onChange={this.handleChange}
                                value={position}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Main tasks: </label>
                            <input
                                type='text'
                                placeholder='Describe your main tasks'
                                name='mainTasks'
                                onChange={this.handleChange}
                                value={mainTasks}
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
                    <button type="button" onClick={() => handleDelete('experience', id)}>Delete</button>
                </form>
            </div>
        );
    }
}

export default Experience;