import { useSelector, useDispatch } from "react-redux";
import { addvalue, deletevalue, editvalue,editinp} from "./redux/todo";
import { useRef } from "react";
import { Card ,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';






function App() {
  const todo = useSelector((state) => state.todo);
  const myref = useRef()
  const todovalue = todo.todoarray;
  const dispatch = useDispatch();
  const submitvalue = (e) => {
    e.preventDefault();
    const value = e.target.a.value;
    console.log(value);

    dispatch(addvalue(value));

  };
  const edit = (index) =>{

    const edititem = myref.current.value;
    const editresult = {
      value:edititem,
      index:index
    }
          
         dispatch(editvalue(editresult))

  }
  console.log(todovalue);

    


  return (
    <>
      <div className="d-flex justify-content-center text-center mt-5 ">
      <Card  style={{ width: '38rem' }}>

        <h1>ToDolist</h1>
        <br />
        <form onSubmit={submitvalue}>
          <input type="text" name="" id="a" /> &nbsp;
          <Button>add</Button>
        </form>
        {todovalue.map((item, index) => {
          return (
            <li>
              {item.editkey==true?
              <>

              {item.payload}{" "}
              
              <Button style={{background:'red'}} onClick={() => dispatch(deletevalue(index))}>
                delete
              </Button>{" "}
              <Button onClick={()=>dispatch(editinp(index))}>edit</Button>{" "}
              </>:<>  <input type="text" ref={myref} id="d" /> <Button onClick={()=>edit(index)} >save</Button> </>}</li>
          );
        })}
              </Card>

      </div>
    </>
  );
      }

export default App;
