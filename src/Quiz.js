import React from 'react';

class Question extends React.Component{
state = {
  question_text:"Which is not a database?",
  choices:{
	  1:"Redis",
	  2:"PostrgreSQL",
	  3:"DJango",
	  4:"MYSql"
  }
}
render(){
return  (<div class="container">
   <div class="question-text">{this.state.question_text}</div>
   <div class="choice-container">
	{createChoiceList(this.state.choices)}
</div>
</div>);
}
}

class Choice extends React.Component{
  render(){
  return (
<button type="button" class="choice" data-id="{this.props.id}">{this.props.value}</button>
);
}
}

function createChoiceList(choices){
	var choiceList = [];
	for (var id in choices){
		choiceList.push(<Choice id={id} value={choices[id]} />);
	}
	return (choiceList);

}
export default Question;
