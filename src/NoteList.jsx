import React, { Component } from 'react';
import StudentItem from './NoteItem.jsx';

export default class StudentList extends Component {
    render() {
        let notes = this.props.noteList;
        const trItem = notes.map( (item,index) => <StudentItem key={index} note={item} index={index} editNoteSubmit={this.props.editNoteSubmit} deleteNote={this.props.deleteNote}/>)
      return (
            <div>{trItem}</div>
      );
    }
  }