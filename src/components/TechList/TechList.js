import React, {Component} from 'react';

import TechItem from '../TechItem/TechItem';

import './techlist.css';

class TechList extends Component {
  state = {
    newTech:'',
    techs:[]
  };

  // Executado assim que o componente aparece em tela
  componentDidMount(){
    const techs = localStorage.getItem('techs');
    if(techs){
      this.setState({techs: JSON.parse(techs)})
    }
  }

  // Executado sempre que houver alterações nas props ou estados
  // componentDidUpdate(prevProps, prevState){
  componentDidUpdate(_, prevState){
    if(prevState.techs !== this.state.techs){
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }

  // Executado quando o componente deixa de existir
  componentWillUnmount(){}

  handleInputChange = e => {
    this.setState({
      newTech: e.target.value
    })
  }

  handleSubmit = e =>{
    e.preventDefault();

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });
  }

  handleDelete = (tech) =>{
    this.setState({ techs: this.state.techs.filter( t => t!== tech ) });
  }

  render(){
    return(
      <>
        <div className="tech-list-container">
          <ul>
              {this.state.techs.map((tech, index) => (
                <TechItem key={index} tech={tech} onDelete={() => this.handleDelete(tech)} />
              ))}
            </ul>
        </div>
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              onChange={this.handleInputChange} 
              value={this.state.newTech}
              placeholder="...add your knowledge"
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </>
    )
  }
}

export default TechList;