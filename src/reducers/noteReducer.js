const noteReducer = (state = [],action) => {

switch(action.type){

case 'ADD_NOTE':
let stateCopy = [...state,action.payload];
localStorage.setItem('notes',JSON.stringify(stateCopy));
return stateCopy

case 'DELETE_NOTE':
stateCopy = state.filter( x => x.id !== action.payload);
localStorage.setItem('notes',JSON.stringify(stateCopy));
return stateCopy
    
case 'UPDATE_NOTE':

stateCopy = state.map((note) => {
    const {id,title,desc,date} = action.payload;
    if(note.id === id)
    {
    note.title = title;
    note.desc = desc;
    note.date = date;
    }
    return note;
})
localStorage.setItem('notes',JSON.stringify(stateCopy));
return stateCopy

default:
    return state;
}

}
export default noteReducer;