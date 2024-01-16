import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";

function App(props) {
        return (
            <div className="App">
                    Count:{props.myCount}
                    <button onClick={props.plus}>Plus</button>
                    <button onClick={props.minus}>Minus</button>
            </div>
        );
}
const mapStateToProps = state => ({
        myCount:state.count,
})


const mapDispatchToProps = dispatch => ({
        plus:() => dispatch ({type:'PLUS'}),
        minus:() => dispatch ({type:'MINUS'}),
})



export default connect (mapStateToProps, mapDispatchToProps)(App);
