import React, { useState } from 'react';

const SavedEducation = (props) => {
    const { school, title, start, end, handleClick } = props;
    return (
        <div>
            <p>School name: {school}</p>
            <p>Title: {title}</p>
            <p>Start Date: {start}</p>
            <p>End Date: {end}</p>
            <button onClick={handleClick}> Edit </button>
        </div>
    );
}

function Education(props) {

    const [eduInfo, setEduInfo] = useState({
        schoolName: "",
        title: "",
        startDate: "",
        endDate: ""
    });
    const [edit, setEdit] = useState(true);
    const { schoolName, title, startDate, endDate } = eduInfo;
    const { handleDelete, id } = props;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEduInfo((prevEdu) => {
            return { ...prevEdu, [name]: value }
        });
    }

    const handleClick = (e) => {
        e.preventDefault();
        setEdit((prevEdit) => !prevEdit);
    }

    if (!edit) {
        return (
            <SavedEducation
                school={schoolName}
                title={title}
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
                        <label>School Name: </label>
                        <input
                            type='text'
                            placeholder='Place Your School Name'
                            name='schoolName'
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                <button type="button" onClick={() => handleDelete('education', id)}>Delete</button>
            </form>
        </div>
    );
}

export default Education;