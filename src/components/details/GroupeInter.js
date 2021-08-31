import React,{Component} from 'react';
import { Icon } from '@iconify/react';
import Rate from './Rate';
export default class ChatContent extends Component {
    constructor(props){
  super(props);
  this.state={
 isToggleOn:false
  }
   }
  handleClick=()=>{
  this.setState(state=>({
    isToggleOn:!state.isToggleOn
  }));
  }
  render() {
        return (
            <div>
               <div className="groupe__inter">
                    <button className="btn__interested" onClick={this.handleClick}>{this.state.isToggleOn ?"I'm interested" :"Plus interested" }<Icon style={{marginLeft:"20px"}} height="18" icon="akar-icons:star" /></button>  
                    <button className="btn__interested">Invite users<Icon icon="fluent:mail-24-filled" style={{marginLeft:"20px"}} height="18" /></button>  
                    <Rate/>
                </div> 
            </div>
        );
    }
}