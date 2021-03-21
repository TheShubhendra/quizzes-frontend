import React from 'react';
import {Redirect} from 'react-router-dom';
import Question from './Question';
import Loader from './Loader';

const API_BASE_URL = "https://quizzes-api.herokuapp.com/";
class FriendshipQuiz extends React.Component{
constructor(props){
super(props);
this.questions=null;
this.state ={
name:null,
step:0,
question:{
},
count:null,
answers:null,
submited:false,
isLoaded:false,
redirect:null
}
}
componentDidMount(){
fetch(API_BASE_URL + "api/friendship/questions/")
.then(res=>res.json())
.then(res=>{
	this.questions=res.results;
	this.setState({
		question:this.questions[0],
		count:res.count,
		isLoaded:true
	});

})
.catch(error=>{
	alert(error);
})
}

nextStep = (e,qid,aid)=>{
	const {answers}= this.state;
        if(qid && aid){
          const updated_answers= {...answers,[qid]:aid}
		this.setState({
			answers:updated_answers
		});
	}
	const {step, count} = this.state;
	this.setState({
		step:step+1,
	});
	if (step>0 && step < count){
	this.setState({
		question:this.questions[step]
	});
	}
}
handleChange = (e)=>{
     this.setState({name:e.target.value});
}

saveQuiz = (e)=>{
	fetch(API_BASE_URL + "api/friendship/quiz/",{
		method:"POST",
		headers:{
			Accept:"application/json",
			"Content-Type":"application/json"
		},
		body:JSON.stringify({
			"name":this.state.name,
			"data":this.state.answers
		})
	})
	.catch(error=>{
		alert(error);
	});
	this.setState({submited:true,redirect:"/view"});

}
render(){
const {step, submited, isLoaded, redirect} = this.state;
	if(redirect){
		<Redirect to={redirect} />
	}
	if(!isLoaded){
		return <Loader />
	}
	if (step===0){
         return <GetName
		name={this.state.name}
		nextFunc={this.nextStep}
		handleChange={this.handleChange}
		/>
	}else{
	return (
		<Question
		question={this.state.question}
		nextFunc ={this.nextStep}
		saveFunc ={this.saveQuiz}
		/>
	)
	}
}

}

class GetName extends React.Component{
render(){
return(<div class="container quiz-container">
	<h4 class="h4" >Please enter your name.</h4>
<input type="text" name="name" onChange={this.props.handleChange} value={this.props.name} placeholder="Your name" class="form-control"/><br/>
	<button class="btn btn-success btn-block mx-auto" onClick={this.props.nextFunc}>Next</button>
	</div>
)
}
}

export default FriendshipQuiz;
