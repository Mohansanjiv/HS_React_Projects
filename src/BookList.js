import React from 'react'
import  ReactDOM  from 'react-dom/client';
import './BookList.css'

const myBook = [{
  title:'I AM GITA',
  author:'Deep Trivedi',
  image:'https://m.media-amazon.com/images/I/51wblllTvZL._SX365_BO1,204,203,200_.jpg',
} 
, {
  title:"The Nation's Homeopath: How Dr Batra's Became the World's Largest Chain of Homeopathy Clinics'",
  author:'Dr Mukesh Batra',
  image:'https://m.media-amazon.com/images/I/41ltxRoW9TS._SX335_BO1,204,203,200_.jpg',
},
{
  title:"Advertising at the Crossroads",
  author:' John Philip Jones ',
  image:'https://m.media-amazon.com/images/I/41yZFFlcfqL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
} 
]

const  BookList =(book)=>{
  
    return (
      <section className='booklist'>
       { myBook.map((book)=>{
          const{image, title,author} =book;
          return <Book image={image} title={title} author={author} />
        })}
      </section>
    )
  };


  const Book = (props)=>{
    const{image,title, author}=props;
    return(
        <article className='book'>
           <img src={image} alt="" />
           <h1>{title}</h1>
           <h2>{author}</h2>
        </article>
    );   
};

export default BookList
