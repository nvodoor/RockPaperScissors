import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Game extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			player: '',
			comp: '',
			moves: ['rock', 'paper', 'scissor']
		}
	}

	handleSubmit() {
		const move = this.state.moves;
		const play = Math.floor(Math.random()*move.length);
		this.setState({
			comp: move[play]
		})
	}


  render () {
  	if (this.state.player === '' || this.state.comp === '') {
  		return (
		<div>
		<h4>Let's play!</h4>
		<div>
		<input type="submit" value="Rock" onClick={() => this.setState({player: 'rock'})}/>
		<input type="submit" value="Scissor" onClick={() => this.setState({player: 'scissor'})}/>
		<input type="submit" value="Paper" onClick={() => this.setState({player: 'paper'})}/>
		</div>
		<button onClick={this.handleSubmit.bind(this)}>Click to Play</button>
		</div>
	)
  	} 
  	if (this.state.player === 'rock' && this.state.comp === 'rock') {
  		return (
  		<div> Player chose: {this.state.player}. Computer chose: {this.state.comp} Tied! </div>
  		)
  	}
  	if (this.state.player === 'rock' && this.state.comp === 'paper') {
  		return (
  		<div> Player chose: {this.state.player}. Computer chose: {this.state.comp}. Computer won! </div>
  		)
  	}
  	if (this.state.player === 'rock' && this.state.comp === 'scissor') {
  		return (
  		<div> Player chose: {this.state.player}. Computer chose: {this.state.comp}. Player won! </div>
  		)
  	}
  	if (this.state.player === 'scissor' && this.state.comp === 'rock') {
  		return (
  		<div> Player chose: {this.state.player}. Computer chose: {this.state.comp}. Computer won! </div>
  		)
  	}
  	if (this.state.player === 'scissor' && this.state.comp === 'paper') {
  		return (
  		<div> Player chose: {this.state.player}. Computer chose: {this.state.comp}. Player won! </div>
  		)
  	}
  	if (this.state.player === 'scissor' && this.state.comp === 'scissor') {
  		return (
  		<div> Player chose: {this.state.player}. Computer chose: {this.state.comp}. Tied! </div>
  		)
  	}
  	if (this.state.player === 'paper' && this.state.comp === 'rock') {
  		return (
  		<div> Player chose: {this.state.player}. Computer chose: {this.state.comp}. Player won! </div>
  		)
  	}
  	if (this.state.player === 'paper' && this.state.comp === 'paper') {
  		return (
  		<div> Player chose: {this.state.player}. Computer chose: {this.state.comp}. Tied! </div>
  		)
  	}
  	if (this.state.player === 'paper' && this.state.comp === 'scissor') {
  		return (
  		<div> Player chose: {this.state.player}. Computer chose: {this.state.comp}. Computer won! </div>
  		)
  	}
  }
}




ReactDOM.render(<Game />, document.getElementById('app'))