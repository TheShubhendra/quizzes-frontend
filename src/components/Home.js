import React from 'react';
import {Link} from 'react-router-dom';
class Card extends React.Component{
render(){
return(
             <div class="card box-shadow bg-dark text-white">
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal">{this.props.header}</h4>
                </div>
                <div class="card-body">
                    <div class="card-title">
	{this.props.title}
                    </div>
                    <div class="card-text">
                        
                 <ul class="list-unstyled mt-3 mb-4">
	         {this.props.list.map((items)=><li>{items}</li>)}
                 </ul>
                 </div>
                <Link to={this.props.buttonLink} className="btn btn-lg btn-block btn-outline-primary">{this.props.buttonText}</Link>
    
                </div>
            </div>
)
}
}
function createList(items){
let list = []
for (var i in items){
	list.push(<li>{list[i]}</li>)
}
return list;

}
class Home extends React.Component{
render(){
return(<div>
	    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Let's Play</h1>
      Play, Create, customize quizzes ,Invite your friends and track scores.
    </div>
<div class="container">
   <div class="card-deck mb-3 text-center">
   <Card header="Friendship Test Quiz"
	 title="Create quiz from your own questions and options."
	 list={["Select questions from our collections.",
		 "Invite friends to play your quiz.",
		 "They can play as an anonymous too.",
		 "Track scores of all your friends."
	 ]}
	 buttonText="Create Quiz"
	 buttonLink="friendship/"
	/>
   
</div>
	</div>
	</div>
	)
	}
}
export default Home;
