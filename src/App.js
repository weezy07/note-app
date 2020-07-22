import React, { Component } from 'react';
import './App.css';
import StudentList from './NoteList.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNote, deleteNote, updateNote } from './actions/noteActions'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',
      date: ''
    }
    this.getValue = this.getValue.bind(this)
    this.addNewNote = this.addNewNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.editNoteSubmit = this.editNoteSubmit.bind(this);
  }
  componentWillMount() {

  }
  addNewNote(e) {
    e.preventDefault()
    this.props.addNote({ id: Math.max(...this.props.noteList.map(function (o) { return o.id })) + 1, title: this.state.title, desc: this.state.desc, date: this.state.date });
  }

  deleteNote(id) {
    let r = window.confirm("Do you want to delete this item");
    if (r === true) {
      this.props.deleteNote(id);

    }
  }
  editNoteSubmit(id, title, desc, date) {
    this.props.updateNote({ id: id, title: title, desc: desc, date: date });
  }

  getValue(e) {
    this.setState({
      [e.target.name] : e.target.value 
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="title">
          NOTE MAKING APP
      </div>

        <br />

        <div className="row">

          <div className="col-lg-6">
            <div className="post-container">
              <h1 className="post_heading">Create Note</h1>
              <form className="form" type="POST" >
                <input required type="text" name="title" onChange={this.getValue}
                  placeholder="Enter Title" /><br /><br />
                <textarea required rows="5" name="desc" onChange={this.getValue}
                  cols="28" placeholder="Enter Description" /><br /><br />
                <input className="form-control" name="date" onChange={this.getValue} type="date" /><br /><br />
                <button className="save" onClick={this.addNewNote}>Save</button>
              </form>
            </div>
          </div>

          {/* <button className="btn btn-dark" onClick={this.addNewNote}>Add New</button> */}

          <br />

          <div className="col-lg-6">
            <h1 className="post_heading all-notes">ALL NOTES</h1>
            <br />

            <StudentList deleteNote={this.deleteNote} noteList={this.props.noteList} editNoteSubmit={this.editNoteSubmit} />
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    noteList: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addNote: addNote,
    deleteNote: deleteNote,
    updateNote: updateNote
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
