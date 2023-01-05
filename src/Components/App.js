import React from 'react'; //7.1K (gzipped: 3.1K)
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import { object } from 'prop-types';

class App extends React.Component {

    state = {
        fishes: {},   //empty object
        order: {}
    };

    addFish = fish => {
        //console.log("Adding a fish!");
        //this.state.fishes.push(fish);

        //1. take copy of existing state
        const fishes = {...this.state.fishes};
        //2. add a new fish to that fishes variable
        fishes['fish${Date.now()}'] = fish;
        //this.state.fishes.fish1 = fish;
        //3. set the new fishes object to state
        this.setState({    //update the state
            fishes: fishes //or simply write fishes
        });

    };

    loadSampleFishes = () => {
        //alert('Loading Sample');
        this.setState({ fishes: sampleFishes });
    };

    addToOrder = (key) => {
        //1. take a copy of state
        const order = {...this.state.order};
        //2. either add to the order, or update the number in our order
        order[key] = order[key] + 1 || 1;
        //3. call setState to update our state object
        this.setState({ order });
    };


    render(){
        return (
            <div className="catch-of-the-Day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" age={100}/> 
                    <ul className="fishes" >
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish 
                                key={key} 
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                            />
                        ))}
                    </ul>

                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory 
                    addFish={this.addFish} 
                    loadSampleFishes={this.loadSampleFishes}
                />
                
            </div>
        );  
        //or {...this.state} -- spread everything from state to order 
    }
}

//pass anything other than a string, u have to use curly braces ----- age={500} cool={true}

export default App;