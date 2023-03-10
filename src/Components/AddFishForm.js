import React from "react"; //7.1K (gzipped: 3.1K)

class AddFishForm extends React.Component {

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();


    createFish = event => {
        //1. stop the form from submitting
        event.preventDefault();
        const fish = {
            nameRef: this.nameRef.value.value,
            priceRef: parsefloat(this.priceRef.value.value) ,
            statusRef: this.statusRef.value.value,
            descRef: this.descRef.value.value,
            imageRef: this.imageRef.value.value,
        }


        //console.log("MAKING A FISH");
        //console.log(fish );
        this.props.addFish(fish);
        //refresh the form
        event.currentTarget.reset();
    }
}


class AddFishForm extends React.Component {
    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
                <input name="price" ref={this.priceRef} type="text" placeholder="Price"/>

                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="available">Sold Out!</option>
                </select>

                <textarea name="desc" ref={this.descRef} placeholder="Desc"/>

                <input name="image" ref={this.imageRef}  type="text" placeholder="Image"/>
                <button type="submit">+ Add Fish</button>
            </form>
        );
    }
}

export default AddFishForm;