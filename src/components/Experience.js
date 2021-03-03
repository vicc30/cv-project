import React, { useState } from 'react';

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

function Experience(props) {

    const [expInfo, setExpInfo] = useState({
        company: "",
        position: "",
        mainTasks: "",
        startDate: "",
        endDate: "",
        edit: true
    });
    const [edit, setEdit] = useState(true);
    const { company, position, mainTasks, startDate, endDate } = expInfo;
    const { handleDelete, id } = props;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExpInfo((prevExp) => {
            return { ...prevExp, [name]: value }
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        setEdit((prevEdit) => !prevEdit);
    }

    if (!edit) {
        return (
            <SavedExperience
                company={company}
                position={position}
                mainTasks={mainTasks}
                start={startDate}
                end={endDate}
                handleClick={handleClick}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
                            value={startDate}
                        />
                    </div>
                    <div className="col">
                        <label>End date: </label>
                        <input
                            type='date'
                            name='endDate'
                            onChange={handleChange}
                            value={endDate}
                        />
                    </div>
                </div>
                <button type="submit" onClick={handleClick}>Save</button>
                <button type="button" onClick={() => handleDelete('experience', id)}>Delete</button>
            </form>
        </div>
    );
}

export default Experience;