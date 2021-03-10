import React from 'react';


class Question extends React.Component{
	render(){
		const {question,question_id, choices} = this.props.question;
		return(
			<div class="quiz-container">
			<div class="question-text">
		        {question}
			</div>
			<div class="choice-container">
			{createChoiceList(question_id, choices,this.props.nextFunc)}	
			</div>
			<div class="footer">
			<button class="btn btn-info" onClick={((e)=>this.props.nextFunc(e))}>Skip</button>
			<button class="btn btn-success" onClick={this.props.saveFunc}>Done</button>
			</div>
			</div>
		)
	}
}

class Choice extends React.Component{
	render(){
		return(
			<button data-id={this.props.id} onClick={((e)=>this.props.func(e,this.props.ques_id,this.props.id))} class="btn btn-primary choice">{this.props.value}</button>
		)
	}
}

function createChoiceList(ques_id, choices, func){
        var choiceList = [];
        for (var id in choices){;                                                     choiceList.push(<Choice id={choices[id]["choice_id"]} value={choices[id]["choice"]} ques_id = {ques_id}func={func}/>);

        }
        return (choiceList);
}
export default Question;
