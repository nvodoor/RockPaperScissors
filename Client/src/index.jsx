import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Game extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			player: '',
			comp: '',
			moves: ['rock', 'paper', 'scissor'],
      rounds: 0,
      playerwin: 0,
      compwin: 0
		}
	}

	handleSubmit() {
		const move = this.state.moves;
		const play = Math.floor(Math.random()*move.length);
    this.setState({
      comp: move[play],
    })
	}

  handleReRender() {
      this.setState({
        player: '',
        comp: '',
        rounds: this.state.rounds + 1
      })
  }

  handleCompRender() {
    this.setState({
      player: '',
      comp: '',
      winner: '',
      compwin: this.state.compwin + 1,
      rounds: this.state.rounds + 1
    })
  }

 handlePlayerRender() {
    this.setState({
      player: '',
      comp: '',
      playerwin: this.state.playerwin + 1,
      rounds: this.state.rounds + 1
    })
 }


  render () {
    if (this.state.rounds > 2) {
      return (
      <div>
      <div> Game is over. Final Score: Player - {this.state.playerwin}. Computer - {this.state.compwin}.</div>
      <button onClick = {() => this.setState({compwin: 0, playerwin: 0, rounds: 0})}>Click to play Again.</button>
      </div>
      )
    }
  	if (this.state.player === '' || this.state.comp === '') {
  		return (
		<div>
		<h4>Let's play!</h4>
		<div>
		<input type="submit" value="Rock" onClick={() => this.setState({player: 'rock'})}/>
		<input type="submit" value="Scissor" onClick={() => this.setState({player: 'scissor'})}/>
		<input type="submit" value="Paper" onClick={() => this.setState({player: 'paper'})}/>
		</div>
    <div>
		<button onClick={this.handleSubmit.bind(this)}>Click to Play</button>
    </div>
    <h4>Rounds Played: {this.state.rounds} </h4>
		</div>
	   )
  	} 
  	if (this.state.player === 'rock' && this.state.comp === 'rock') {
  		return (
      <div>
  		<div> Player chose: {this.state.player}. Computer chose: {this.state.comp} Tied! </div>
      <button onClick={this.handleReRender.bind(this)}>Click to Play Again!</button>
      </div>
  		)
  	}
  	if (this.state.player === 'rock' && this.state.comp === 'paper') {
  		return (
      <div>
  		<div> Player chose: {this.state.player}. Computer chose: {this.state.comp}. Computer won!</div>
      <button onClick={this.handleCompRender.bind(this)}>Click to Play Again!</button>
      </div>
  		)
  	}
  	if (this.state.player === 'rock' && this.state.comp === 'scissor') {
  		return (
      <div>
  		<div> Player chose: {this.state.player}. Computer chose: {this.state.comp}. Player won! </div>
      <button onClick={this.handlePlayerRender.bind(this)}>Click to Play Again!</button>
      </div>
  		)
  	}
  	if (this.state.player === 'scissor' && this.state.comp === 'rock') {
  		return (
      <div>
  		<div> Player chose: {this.state.player}. Computer chose: {this.state.comp}. Computer won! </div>
      <button onClick={this.handleCompRender.bind(this)}>Click to Play Again!</button>
      </div>
  		)
  	}
  	if (this.state.player === 'scissor' && this.state.comp === 'paper') {
  		return (
      <div>
  		<div> Player chose: {this.state.player}. Computer chose: {this.state.comp}. Player won! </div>
      <button onClick={this.handlePlayerRender.bind(this)}>Click to Play Again!</button>
      </div>
  		)
  	}
  	if (this.state.player === 'scissor' && this.state.comp === 'scissor') {
  		return (
      <div>
  		<div> Player chose: {this.state.player}. Computer chose: {this.state.comp}. Tied! </div>
      <button onClick={this.handleReRender.bind(this)}>Click to Play Again!</button>
      </div>
  		)
  	}
  	if (this.state.player === 'paper' && this.state.comp === 'rock') {
  		return (
      <div>
  		<div> Player chose: {this.state.player}. Computer chose: {this.state.comp}. Player won! </div>
      <button onClick={this.handlePlayerRender.bind(this)}>Click to Play Again!</button>
      </div>
  		)
  	}
  	if (this.state.player === 'paper' && this.state.comp === 'paper') {
  		return (
      <div>
  		<div> Player chose: {this.state.player}. Computer chose: {this.state.comp}. Tied! </div>
      <button onClick={this.handleReRender.bind(this)}>Click to Play Again!</button>
      </div>
  		)
  	}
  	if (this.state.player === 'paper' && this.state.comp === 'scissor') {
  		return (
      <div>
  		<div> Player chose: {this.state.player}. Computer chose: {this.state.comp}. Computer won! </div>
      <button onClick={this.handleCompRender.bind(this)}>Click to Play Again!</button>
      </div>
  		)
  	}
  }
}




ReactDOM.render(<Game />, document.getElementById('app'))