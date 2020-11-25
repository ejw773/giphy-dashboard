import React from 'react';

class GifCard extends React.Component {
    render() {
        return (
            <div className="card" style={{width: "18rem"}}>
              <img src="https://media1.giphy.com/media/3osxYrgM8gi9CDjcPu/giphy.gif?cid=df1535562701hkitcnuu9qkj5n9rfyljuzvkq61hr8fjpo9w&rid=giphy.gif" className="card-img-top" alt="missing" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        )
    }
}

export default GifCard