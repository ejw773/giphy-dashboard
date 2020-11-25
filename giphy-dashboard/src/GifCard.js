import React from 'react';

class GifCard extends React.Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     gifPick: [],
        //     isReady: false,
        //     hideIt: false,
        //     likeIt: false
        // }
    }
    
    render() {
        return (
            <div className="card" style={{width: "18rem"}}>
              <img src={this.props.url} className="card-img-top" alt="missing" />
                <div className="card-body">
                    <h5 className="card-title">Giphy Title</h5>
                    <p className="card-text">Some info about the Giphy.</p>
                </div>
            </div>
        )
    }
}

export default GifCard