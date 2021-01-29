import React, { Component } from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import Scroll from './Scroll';
// import { robots } from './Robots';


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''        
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    onSearchBox = (event) => {
        this.setState({ searchfield: event.target.value})
    };

    render() {
    const filteredRobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
    return (
        <div className='tc'>
        <h1>Robofriends</h1>
        <Searchbox searchBox={this.onSearchBox} />
        <Scroll>
        <Cardlist robots={filteredRobots} />
        </Scroll>
        </div>
    )
  };
}

export default App;