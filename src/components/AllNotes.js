import React from 'react'

function AllNotes({ data, clickCheckBox, handleDelete, handleEdit }) {

    return (
        <div className="allNotes">
            {data.map((dat, index) => {
                return (
                    <div className="singleNote" key={index}>
                        <div className={`flexgar ${dat.status ? 'statusChange' : ''}`}>
                            <p>{dat.book}</p>
                            <p>{dat.date}</p>
                            <div className="editDel">
                                <span onClick={() => handleDelete(index)}><i className="fa fa-trash" aria-hidden="true"></i></span>
                                <span onClick={() => handleEdit(index)}> <i className="fa fa-pencil" aria-hidden="true"></i></span>
                            </div>
                            <span> <input type="checkbox" onClick={() => clickCheckBox(index)} className="checkin" /></span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AllNotes
