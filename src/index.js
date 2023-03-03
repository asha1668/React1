import React from "react";
import  ReactDOM  from "react-dom";
import "./index.css";
// const price = 20
// function Greeting()
// {
//     const name = "asha"
//     return(
//         <>
//         <Helloworld/>
//         <Message/>
//         <h1>{name}</h1>
//         <h2>{2+3}</h2>
//         <h3>{price}</h3>
//         </>
//     );

    
// }

// function Helloworld(){
//     return(
//         <h1 className="head">helloworld</h1>
//     )
// }
// function Message(){
//     return(
//         <h2 style={{color:"red", fontSize:"3rem"}}>i am frontend developer</h2>
//     )
// }
// ReactDOM.render(<Greeting/>, document.getElementById("root"))
function Booklist(){
    return(
        <>
         <Book title="microdegree" author="ram"/>
         <Book title="software" author="balaguruswami"/>
         <Book title="karnataka">
        <h3>this book is awesome</h3>
         </Book>
        </>
    )
}
function Book({title, author, children}){
    
    return(
        <>
        <h2>{title}</h2>
        <p>{author}</p>
        {children}
         
        </>
    )
}
ReactDOM.render(<Booklist/>, document.getElementById("root"))
