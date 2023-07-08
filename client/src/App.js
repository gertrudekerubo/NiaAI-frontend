import logo from './logo.svg';
import './App.css';
import './normal.css';
import { useState } from 'react';
function App() {
   // add state for input and chatlog
  const [input ,setInput]= useState("");
  const [chatlog, setchatlog]=useState([{
    user:"AI",
    message:"Hello may Iknow your purpose?"
  },{
    User:"me",
    message:"my purpose is to find love"
  }]);
  // clear chats 
 function clearchat(){
setchatlog([]);

 }

  async function handleSubmit(e){
    e.preventDefault();
     setchatlog([...chatlog, { user: "me", message:"${input"}])
 setInput("");
  }
  
  
  
  return (
    
      <div className='App'>
       <aside className="side-menu">
         <div
           className="side-menu-button" onclick={clearchat}>
           <span>+</span>
           Refresh
         </div>

         <div
           className="settings-button" >
          Settings
         </div>
         <div
           className="communities-button" >
          Communities
         </div>
         
       </aside>
       <section className="chatbox" >
         <div className="chat-log"></div>
         <div className="chat-message ">
             <div className="chat-message-center">
             </div>
             <div className='avatar  '>
             </div>
             <div className='message'>
               Purpose AI
             </div>
   
           </div>
   
           
         <div className="chat-message AI">
             <div className="chat-message-center">
             </div>
             <div className='avatar AI '>
             </div>
             <div className='message'>
               I am an AI
             </div>
   
           </div>
         <div
         className='chat-input-holder'>
          <form onSubmit={handleSubmit}>
           
           <input
           rows="1"
           value={input}
           onChange={(e)=> setInput(e.target.value)}
           className='chat-input-textarea'placeholder='Type your message here'></input>
            </form>
           
           
           </div>
   
       </section>
      </div>
       
     )
   
}
   


export default App;
