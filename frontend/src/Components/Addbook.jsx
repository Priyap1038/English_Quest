import { useState } from 'react'
import {styled} from "styled-components"
import {useDispatch} from "react-redux"
import { addBook } from '../Redux/Books/action';

const initialState={
  title:"",
  description:"",
  price:0,
  category:"",
  createdAt:""
};

export const Addbook = () => {
  const [data,setData]=useState(initialState);
const dispatch=useDispatch();
const handleChange=(e)=>{
const {name,value}=e.target;
setData(prev=>{
  return {...prev, [name]: name==="price" ? +value : value};
})
}

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(data);
  dispatch(addBook(data));
  setData(initialState);
//   alert("Book added")
}
  return (
    <DIV>
    <form onSubmit={handleSubmit}>
      <h3>Add New Book</h3>
      <input type="text" placeholder="Title" className="w-80 bg-white shadow rounded"
      name="title"
      value={data.title}
      onChange={handleChange}/>
   
      <input type="text" placeholder="Description" className="w-80 bg-white shadow rounded"
      name="description"
      value={data.description}
      onChange={handleChange}/>
      <input type="number" placeholder="Price" className="w-80 bg-white shadow rounded"
      name="price"
      value={data.price}
      onChange={handleChange}/>

     <select name="category" value={data.category} onChange={handleChange} className="w-80 bg-white shadow rounded">
     <option value="">Select Category</option>
      <option value="">Classic</option>
      <option value="">Fiction</option>
      <option value="">Science Fiction</option>
     </select>

     <button type="submit" className='bg-indigo-600 px-3 rounded-md text-sm'>Add book</button>

    </form> 
    </DIV>
  )
}


const DIV = styled.div`

width: 450px;
margin: auto;
border: 1px solid gray;
padding: 40px;

form{
  display:flex;
  flex-direction:column;
  gap:15px;
  align-items:center;
}

input,select{
  height:35px;
  width:100%;
  color:black;
  padding:5px;
  font-size:larger;
}

option{
  color:black;
}
button{
  width:50%;
  height:35px;
  border:none;
  cursor:pointer;
  
}
`;