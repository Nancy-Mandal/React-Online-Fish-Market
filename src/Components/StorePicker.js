import React from "react"; //7.1K (gzipped: 3.1K)
import { getFunName } from "../helpers";



class StorePicker extends React.Component {

    /*
    constructor() {
        super();
        this.goToStore = this.goToStore.bind(this);
    }
    this will be used when we will use method instead of property*/

    myInput = React.createRef();   //created empty ref

    /*  this was method but we will declare a property

        goToStore(event) {
        event.preventDefault();
        console.log(this);  
        }*/

    goToStore = (event) => {
        //1. stop the form from submitting
        event.preventDefault();

        //2. get the text from that input
            //const storeName = $('input')   -- we won't do this bcz rule of react is don't touch the dom, don't manually select the elements
        const storeName = this.myInput.value.value; //one value for react and one for javascript

        //3. change the page to /store/whatever-they-entered
        this.props.history.push('/store/${storeName}')

    }

    render() {
        //return <p>Hello!</p>
        //return React.createElement('p', {className: 'hey'}, React.createElement( ));
        
        
        //HTML with JSX - HTML inside javascript
        return(
            //<React.fragment></React.fragment> and return many things...also u can use regular div tag for this
            <form className="store-selector" onSubmit={this.goToStore}>  
                <h2>Please enter a store</h2>
                
                <input 
                type="text" 
                //ref={(myInput) => this.myInput = myInput()} -- hard
                ref={this.myInput}
                required placeholder="Store Name" 
                defaultValue={getFunName()} 
                />
                <button type="submit">Visit Store -</button>
            </form>
            //you can import css in particular input, button, etc.
        ); 
    }
}

export default StorePicker;