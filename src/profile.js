import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        min :0,
        sec :0,
    counter:()=>setInterval(() => {
        this.setState({
         
           sec: this.state.sec ===59 ?0:this.state.sec+1,
           min: this.state.sec===59 ? this.state.min+1:this.state.min
       
       });
     },1000 )
    }
    this.timing=0
      };


      componentDidMount() {
       this.timing = this.state.counter()
      }
      componentWillUnmount(){
          clearInterval(this.timing)
      }
    render() {
       
        return (
            <div>
             <p>  {this.state.min}  :   {this.state.sec}</p> 
             <img src= {this.props.src} alt='me'/>
                <h1>{this.props.fullName}</h1>
                <h3><b>Profession :</b>{this.props.profession}</h3>
                <h6><b>Bio :</b> {this.props.bio}</h6>

            </div>
        )
    }
}
