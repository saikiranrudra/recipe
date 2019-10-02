import React from 'react';

class Error extends React.Component {
    render () {
        return (
            <div className="error_block">
                {this.props.message}
            </div>
        );
    }
}

export default Error;