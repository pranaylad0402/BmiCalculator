import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Range from './Components/Range';
import Output from './Components/Output';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height:170,
      weight:65,
      bmi:22.49,
      bmiclass:"Normal"
    }
  }
  handleHeight(height) {
    this.setState({height:height},this.setBmi);
    console.log(this.state);

  }
   handleWeight(weight) {
    this.setState({weight:weight},this.setBmi);
    console.log(this.state);

  }
  setBmi(){
    let bmi =((this.state.weight/this.state.height/this.state.height)*10000).toFixed(2);
    this.setState({bmi:bmi,bmiclass:this.getBmiClass(bmi)});
    console.log(this.state);
  }
  getBmiClass(bmi) {
    if(bmi<18.5){
      return "UnderWeight";
    }
    if(bmi >= 18.5 && bmi <= 29.4){
      return "Normal";
    }
    if(bmi >= 25 && bmi <= 29.9){
      return "OverWeight";
    }
    if(bmi >= 30){
      return "Obessed";
    }
  }
    render() {
        return (
            <div className="App">
              <h1>BMI CALCULATOR</h1>
              <form>
                <div>
                  <label>Height (In feets)</label>
                   <Range value={this.state.height} onChange={this.handleHeight.bind(this)}/>
                </div>
                <div>
                  <label>Weight (In Kgs)</label>
                  <Range value={this.state.weight} onChange={this.handleWeight.bind(this)}/>
                </div>
              </form>
          
              <Output  data={this.state}/>
        
            </div>
          );
    }

}

export default App;
