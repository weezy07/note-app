import React, { Component } from 'react';


export default class NoteItem extends Component {
  constructor(props)
  {
    super(props);
    this.state ={isEdit:false}
    this.editNote = this.editNote.bind(this);
    this.editNoteSubmit = this.editNoteSubmit.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }
  deleteNote()
  {
    const {id} = this.props.note;
this.props.deleteNote(id);
  }
  editNote()
  {
    this.setState((prevState,props) => ({
      isEdit : !prevState.isEdit
    }))
  }
  editNoteSubmit()
  {
    this.setState((prevState,props) => ({
      isEdit : !prevState.isEdit
    }));
    this.props.editNoteSubmit(this.props.note.id,this.titleInput.value,this.descInput.value,this.dateInput.value);
  }
    render() {
        const {title,desc,date} = this.props.note;
      return (
        this.state.isEdit === true ? <div className="post" key={this.props.index}>
        <form className="form">
          <h2 className="post_title">Edit Note</h2>
          <br />
          <input required placeholder="title" ref={titleInput => this.titleInput = titleInput} defaultValue={title} />
          <br />
          <textarea required ref={descInput => this.descInput = descInput} defaultValue={desc} />
          <br />
          <input type="date" ref={dateInput => this.dateInput = dateInput} defaultValue={date} />
          <br />
          <button className="save" onClick={this.editNoteSubmit}>Update</button>
        </form>
      </div>
        :
        <div className="post" key={this.props.index}>
          <h2 className="post_title">{title}</h2>
          <p className="post_message">{desc}</p>
          <p className="post_message">{date}</p>
          <div className="control-buttons">
            <button className="edit" onClick={this.editNote}>Edit</button>
            <button className="delete" onClick={this.deleteNote}>Delete</button>
          </div>          
        </div>
        );
    }
  }