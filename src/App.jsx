import React from 'react';
import { v4 as uuid } from 'uuid';
import FruitList from './components/FruitList';

class App extends React.Component {

    state = {
        headingTitle: 'Nook\'s Cranny',
        fruits: [
            { key: uuid(), emoji:"🍒", qty:5 },
            { key: uuid(), emoji:"🍌", qty:8 },
            { key: uuid(), emoji:"🥥", qty:3 },
            { key: uuid(), emoji:"🍊", qty:9 },
            { key: uuid(), emoji:"🍐", qty:7 },
            { key: uuid(), emoji:"🍑", qty:4 }
        ],
    }

    render() {
        const container = (
            <div className="App">
                <header className="App-header"> {this.state.headingTitle} </header>
                <main>
                    <FruitList fruits={this.state.fruits} />
                </main>
            </div>);
        return container;
    }
}

export default App;