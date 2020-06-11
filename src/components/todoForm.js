import React, { useState } from 'react';
import AllNotes from './AllNotes';

function TodoForm() {
    const [bookName, setBookName] = useState('');
    const [bookDate, setBookDate] = useState('');
    const [myList, setMyList] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!bookDate || !bookDate) {
            setShowAlert(true);
        } else {
            let newBook = {
                book: bookName,
                date: bookDate,
                status: false,
            }
            setMyList(myList.concat(newBook));
            setBookDate('');
            setBookName('');
        };
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    };

    const handleEdit = (itemIndex) => {
        let list = [...myList];
        setBookName(list[itemIndex].book);
        setBookDate(list[itemIndex].date);
        list.splice(itemIndex, 1);
        setMyList(list);
    }
    const handleDelete = (itemIndex) => {
        let list = [...myList];
        list.splice(itemIndex, 1);
        setMyList(list);
    }
    const handleStatus = (itemIndex) => {
        let note =[...myList];
        note[itemIndex].status = !note[itemIndex].status;
        setMyList(note);
    }
    return (
        <div className="main-section">
            <div>
                <form onSubmit={(e)=>handleSubmit(e)} className="form-section">
                    <h1 className={showAlert ? "showalertdiv" : "hidealertdiv"}>Please enter valid details</h1>
                    <label>Book Name: </label>
                    <input maxLength="30" placeholder="max. 25 words" type="text" name="book" value={bookName} onChange={(e)=>setBookName(e.target.value)} />
                    <label>Date: </label>
                    <input placeholder="for eg. 1234" type="date" name="date" value={bookDate} onChange={(e) => setBookDate(e.target.value)} />
                    <button className="btn-primary" type="submit">Add Book</button>
                </form>
            </div>

            <AllNotes data={myList} handleDelete={handleDelete} clickCheckBox={handleStatus} handleEdit={handleEdit} />
        </div>
    );
};

export default TodoForm;
