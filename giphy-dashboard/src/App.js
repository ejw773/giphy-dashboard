import React from 'react';
import GifCard from './GifCard'
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("Here I am.");
        fetch('https://api.giphy.com/v1/gifs/trending?api_key=i8NdfYxYVasb7W5dfgkdgpWGBJ6e5WAA&limit=25&rating=g')
            .then(res => res.json())
            .then(data => {
                console.log(data.data[0])
            })
    }

    componentDidUpdate() {
        console.log("I updated.")
    }

    componentWillUnmount() {
        console.log("Bye,bye")
    }



    render() {
        return (
            <div>
                <div>
                    <h1>Trending on Giphy.com</h1>
                </div>
                <div className='giphy-container'>
                    <GifCard url="https://media1.giphy.com/media/3osxYrgM8gi9CDjcPu/giphy.gif?cid=df1535562701hkitcnuu9qkj5n9rfyljuzvkq61hr8fjpo9w&rid=giphy.gif" />
                    <GifCard url="https://media1.giphy.com/media/3osxYrgM8gi9CDjcPu/giphy.gif?cid=df1535562701hkitcnuu9qkj5n9rfyljuzvkq61hr8fjpo9w&rid=giphy.gif" />
                    <GifCard url="https://media1.giphy.com/media/3osxYrgM8gi9CDjcPu/giphy.gif?cid=df1535562701hkitcnuu9qkj5n9rfyljuzvkq61hr8fjpo9w&rid=giphy.gif" />
                    <GifCard url="https://media1.giphy.com/media/3osxYrgM8gi9CDjcPu/giphy.gif?cid=df1535562701hkitcnuu9qkj5n9rfyljuzvkq61hr8fjpo9w&rid=giphy.gif" />
                    <GifCard url="https://media1.giphy.com/media/3osxYrgM8gi9CDjcPu/giphy.gif?cid=df1535562701hkitcnuu9qkj5n9rfyljuzvkq61hr8fjpo9w&rid=giphy.gif" />
                    <GifCard url="https://media1.giphy.com/media/3osxYrgM8gi9CDjcPu/giphy.gif?cid=df1535562701hkitcnuu9qkj5n9rfyljuzvkq61hr8fjpo9w&rid=giphy.gif" />
                    <GifCard url="https://media1.giphy.com/media/3osxYrgM8gi9CDjcPu/giphy.gif?cid=df1535562701hkitcnuu9qkj5n9rfyljuzvkq61hr8fjpo9w&rid=giphy.gif" />
                </div>
            </div>
        )
    }
}

export default App;