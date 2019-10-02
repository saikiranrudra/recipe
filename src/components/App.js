import React from 'react';
import Searchbar from './Searchbar';
import instance from './instance';
import Card from './Card';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {recipes: []}
    }
    onFormSubmit = async (query) => {
        const res = await instance.get('/search', {
            params: {
                q: query,
                app_id: '010f1363',
                app_key: '06e70a28a9653eff4f33b4c98f011b4b'   
            }
        });
        const recipes  = res.data.hits.map(el => el.recipe);
        this.setState({recipes});
        
    }
    render() {
        const cards = this.state.recipes.map(recipe => {
            return <Card data={recipe} />
        });
        return (
            <div className="app">
                <Searchbar 
                    placeholder={'Search recipe ...'}
                    onSubmit={this.onFormSubmit}
                />
                <div className="resultGrid">
                    {this.state.recipes.length == 0 ? "Loading...": cards}
                </div>
            </div>
        );
    }
}

export default App;