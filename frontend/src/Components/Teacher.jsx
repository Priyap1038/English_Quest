import React from 'react'
import  { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";

import { Link } from "react-router-dom";
import { deleteBook, getBook } from '../Redux/Books/action';

const Teacher = () => {
    
           const dispatch=useDispatch();
        //    const books = useSelector((store) => store.bookReducer.books);
       
        const books = [
            {
              title: "The Great Gatsby",
              description: "A novel by F. Scott Fitzgerald that captures the excesses of the Jazz Age.",
              price: 19.99,
              category: "Classic",
              createdAt: new Date()
            },
            {
              title: "To Kill a Mockingbird",
              description: "Harper Lee's classic novel about racial injustice in the American South.",
              price: 15.50,
              category: "Fiction",
              createdAt: new Date()
            },
            {
              title: "1984",
              description: "George Orwell's dystopian novel exploring the dangers of totalitarianism.",
              price: 14.95,
              category: "Science Fiction",
              createdAt: new Date()
            },
          
            {
              title: "The Catcher in the Rye",
              description: "J.D. Salinger's influential novel about teenage angst and rebellion.",
              price: 12.75,
              category: "Fiction",
              createdAt: new Date()
            }
          ];
          
          console.log(books);
          
           useEffect(()=>{
        
             dispatch(getBook)
            
              }, [])
       
              const handleRemoveBook = (id) => {
               dispatch(deleteBook(id));
             };
       
       console.log(books);
  return (
    //import { useSearchParams } from "react-router-dom";
            <div >
           <h1>List of books </h1>

           <h3><button>Add book</button></h3>

              <table style={{width:"100%", margin:"15px"}}>
          <thead>
            <tr>
              <th className="border border-slate-300 ...">Title</th>
              <th className="border border-slate-300 ...">Description</th>
              <th className="border border-slate-300 ...">Category</th>
              <th className="border border-slate-300 ...">Price</th>
              <th className="border border-slate-300 ...">Delete</th>
            </tr>
          </thead>
          <tbody>
          {books.length>0 && books.map((el)=>{
                return(
                  <tr key={el.id} className="border border-slate-300 ...">
              <td>{el.title}</td>
              <td>{el.description}</td>
              <td>{el.category}</td>
              <td>{el.price}</td>
    
              <td>
              <button
              onClick={()=>handleRemoveBook(el._id)}>Delete</button>
              </td>
            </tr>
                )
                  
              })}
            
            </tbody>
        </table>
             
           </div>
          
    
  )
}

export default Teacher