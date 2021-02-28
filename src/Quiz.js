import React from 'react';


class Question extends React.Component{
render(){
return  (<div class="container">
   <div class="question-text">{this.props.question_text}</div>
   <div class="choice-container">
  <Choice id="1" value="jshshh" />
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

export default Question;
