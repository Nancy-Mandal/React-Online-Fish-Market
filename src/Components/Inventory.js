import React from 'react'; //7.1K (gzipped: 3.1K)
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
    render(){
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                <AddFishForm addFish={this.props.addFish}/>
                <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
            </div>
            //return in one line may also possible
        );
    }
}

export default Inventory;