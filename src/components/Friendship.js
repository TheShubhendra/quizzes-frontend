import React from 'react';
import Question from './Question';

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
answers:null
}
}
componentDidMount(){
fetch("https://quizzes-api.herokuapp.com/api/friendship/questions/")
.then(res=>res.json())
.then(res=>{
	this.questions=res.results;
	this.setState({
		question:this.questions[0],
		count:res.count
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
alert(JSON.stringify(this.state.answers));
}
render(){
const {step} = this.state;
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
return(<div>
<input type="text" name="name" onChange={this.props.handleChange} value={this.props.name} placeholder="Enter your name" class="name-box"/>
	<button onClick={this.props.nextFunc}>Next</button>
	</div>
)
}
}

export default FriendshipQuiz;
