import React, { Component } from 'react'
import AllNotes from './AllNotes'
const { v4: uuidv4 } = require('uuid');

class Home extends Component {


    state = {
        myList: [],
        note:{},
        book:'',
        date:'', 
        status:false,
        showalert:false

    }

    handleChange = (e) =>{
       let target = e.target;
       let name = e.target.name
       let value = target.value

       this.setState({
           [name]:value,
       })
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        let book  = this.state.book;
        let date = this.state.date;
        let status = this.state.status;
        let id = uuidv4();

        this.state.note["book"] = book
        this.state.note["date"] = date
        this.state.note["id"] = id
        this.state.note["status"] = status

        if( this.state.note["book"] === "" || this.state.note["date"] === "")
        {
            this.setState({showalert:true})
        }
        else{
            this.setState({myList:[...this.state.myList,{...this.state.note}]})
            this.state.book = ""
            this.state.date = ""   
        }

        setTimeout(()=>{
            this.setState({  showalert:false})
        },3000)
        
      
    }

    findByDate =  (id) => {
        let note = this.state.myList.find(item => item.id === id)
        return note
    }


    clickCheckBox = (id) => {


        let notes = [...this.state.myList]
      
        let filteredNote = this.findByDate(id)
        let index = notes.indexOf(filteredNote)
        const note = notes[index]

        if(note.status === true){
            note.status = false
          
        }else if(note.status === false){
             note.status = true
        }

       this.setState({myList:notes})       
    }

 


    handleDelete = (id) => {
       let filterednote =  this.state.myList.filter(note=>note.id !== id)
       this.setState({myList:filterednote})
    }

    handleEdit = (id) => {
        let note = this.findByDate(id)
        let filterednote =  this.state.myList.filter(note=>note.id !== id)
        this.setState({myList:filterednote,book:note.book,date:note.date})
    }




    render() {
        return (
            <div className="main-section">
                <div>
                <form action=""  onSubmit = {this.handleSubmit} className="form-section">
                    <h1 className={this.state.showalert ? "showalertdiv" : "hidealertdiv"}>Please enter valid details</h1>
                    <label htmlFor="">Book Name: </label>
                        <input  maxlength = "30"  placeholder="max. 25 words" type="text" name = "book" value ={this.state.book} onChange = {this.handleChange}/>
                    <label htmlFor="">Date: </label>
                        <input placeholder="for eg. 1234" type="number" name = "date" value ={this.state.date} onChange = {this.handleChange}/>
                    <button className="btn-primary" type="submit">Add Book</button>
                </form>
                </div>

                <AllNotes handleDelete = {this.handleDelete} handleEdit = {this.handleEdit}  clickCheckBox = {this.clickCheckBox} data = {this.state.myList}/>
            </div>
        )
    }
}

export default  Home
