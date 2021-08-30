import React, { Component } from 'react';
import './App.css';
import Profile from './profile';


class App extends Component {
  constructor() {
    super();
    this.state = { 
    fullName : "Mahdi Chaaben",
    bio: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Quod inventore quis corrupti ex, sapiente ullam ea iure molestias repudiandae 
    voluptates dolorem non molestiae! Suscipit, sit. Id accusamus nobis dolores suscipit?`
    ,
    imgSrc:"/unnamed.jpg",
    profession:"FrontEnd Developper",
    toggle: true,
    
}

  };


  toggle = () => {
    this.setState({ toggle: !this.state.toggle})
  };
  
 
render(){
  return(
    <>  
  {}
  {this.state.toggle &&(
       <div className='bloc'>
<Profile src={this.state.imgSrc} fullName={this.state.fullName} profession={this.state.profession}  bio={this.state.bio}/>


    
     

     </div>
     )}
     
     <button className={`clickme ${this.state.toggle?'danger':'success'}`} onClick={this.toggle}>{this.state.toggle? 'Hide':'Show'}</button>

     
    </>
  );
}
};
export default App ;