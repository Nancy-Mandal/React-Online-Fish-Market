import React from 'react'; //7.1K (gzipped: 3.1K)

//or function Header(props){ 
const Header = (props) => {
    //return (
        <header className="top">
            <h1>
                Catch 
                <span className="ofThe">
                    <span className="of">of</span>                        <span className="the">The</span>
                </span>
                Day
            </h1>
            <h3 className="tagline">
                <span>{props.tagline}</span>
            </h3>
        </header>
    //);
}


/*class Header extends React.Component {
    render(){
        return (
            <header className="top">
                <h1>
                    Catch 
                    <span className="ofThe">
                        <span className="of">of</span>
                        <span className="the">The</span>
                    </span>
                    Day
                </h1>
                <h3 className="tagline">
                    <span>{this.props.tagline}</span>
                </h3>
            </header>
        );
    }
}*/

export default Header;