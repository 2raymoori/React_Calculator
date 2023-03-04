import { Button, List,Paper } from '@material-ui/core';
import React,{Component} from 'react';

class History extends Component{
    constructor(props){
        super(props);
        this.state = { // To Store the Current State of this Component
            history:[], // To Store the previous Computations.  
        }
    }
    // Function to clear History
    clearHistory = ()=>{
        this.setState({history:[]}); // Clear History by Assigning  a new Empty Array
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState === this.state){ // Check if the previous Component State is the same as the new State to avoid the inifinite loop. 
            this.setState({history:[...this.state.history,this.props.answer]}); // Update the History State when ever a new Computation is made
        }
    }
    render(){
        if(this.state.history.length !== 0){
            return(
                <div>
                    <Button onClick={this.learHistory} variant="outlined" color="secondary">Clear History</Button>
                    <Paper style={{maxHeight: 200, overflow: 'auto'}}>
                    {
                        this.state.history.map((data,id)=>{
                            return <List key={id}> {data.ans}</List>
                        })
                    }
                    </Paper>
                </div>
            )
        }else{
            return (
                <div></div>
            )
        }
    }
}
export default History;