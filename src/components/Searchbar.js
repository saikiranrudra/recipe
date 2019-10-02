import React from 'react';

class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {query: ''}
    }


    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.query);
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="searchbar">
                <input 
                    className="searchbar__input"
                    type="text" 
                    placeholder={this.props.placeholder}
                    value={this.state.query}
                    onChange={el => this.setState({query: el.target.value}) }
                />
                <input 
                    className="searchbar__btn"
                    type="submit"
                    placeholder="Search"
                />
            </form>
        );
    }
}

export default Searchbar;