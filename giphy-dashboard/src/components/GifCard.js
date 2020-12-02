import React from 'react';

class GifCard extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="card" style={{width: "18rem"}}>
              <img src={this.props.url} key={this.props.url} className="card-img-top" alt="missing" />
                <div className="card-body">
                <h5 className="card-title">{this.props.gifTitle}</h5>
                </div>
            </div>
        )
    }
}

export default GifCard