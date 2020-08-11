import React,{Component} from 'react';


class Output extends Component {
    toFeet(n){
        let realfeet=((n*0.393700)/12);
        let feet=Math.floor(realfeet);
        let inches=Math.round((realfeet-feet)*12);
        return feet + "'" + inches;

    }
    toLbs(n){
        let nearExact=n/0.45359237;
        let lbs=Math.floor(nearExact);
        return lbs;

    }
    render() {
        let height=this.toFeet(this.props.data.height);
        let weight=this.props.data.weight;
        let bmi=this.props.data.bmi;
        let bmiclass=this.props.data.bmiclass;
        return (
       <div className="Output">
         <h3>{height} Feets</h3>
         <h3>{weight} Kgs</h3>
         <h3>{bmi}</h3>
         <h3 className={(this.props.data.bmiclass ==="Obessed")? "danger": ""}>{bmiclass} {(this.props.data.bmiclass ==="Obessed")? <a href='https://www.google.co.in/'>What can i do?</a>: ""}</h3>
       </div>
          );
    }

}

export default Output;
