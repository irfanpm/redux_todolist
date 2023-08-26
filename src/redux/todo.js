import { createSlice } from "@reduxjs/toolkit"

const initialstate ={
    todoarray:[],

}
console.log(initialstate.todoarray);
const todolist = createSlice(
    {
        name:'todo',
        initialState:initialstate,
        reducers :{
            addvalue:(state,action)=>{
                state.todoarray.push({
                    ...action,
                    editkey:true,
                })
            },
            deletevalue:(state,action)=>{
                console.log(action.payload);
            state.todoarray.splice(action.payload,1)

            },
            editinp:(state,action)=>{            
                    state.todoarray[action.payload].editkey=false
            },
            editvalue:(state,action)=>{
                console.log(action);
                state.todoarray[action.payload.index].payload=action.payload.value
                state.todoarray[action.payload.index].editkey = true



                

            }
           

        }

    }
)
export const  { addvalue,deletevalue,editvalue,editinp }=todolist.actions
export default todolist.reducer