import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {

  const [isExpanded,setExpanded] =useState(false);

const [notes,setNotes]=useState({
    title:"",
    content:"",
})


function handleChange(event){
const {name,value}=event.target;

    setNotes(prevNotes=>{
        return {
        ...prevNotes,
        [name]:value,
    }
    })
}

function submitNote(e){
    props.onAdd(notes);
    setNotes({
      title:"",
    content:"",
    })
    e.preventDefault();
}


function expand(){
setExpanded(true);


}

  return (
    <div>
      <form className="create-note">
      {isExpanded? <input name="title" onChange={handleChange} value={notes.title} placeholder="Title" />:null
      }
        
        <textarea onClick={expand} name="content" onChange={handleChange} value={notes.content} placeholder="Take a note..." rows={isExpanded ? 3 :1} />

        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
