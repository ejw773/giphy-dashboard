import React from 'react';
import GifCard from './GifCard'
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gifData: [],
            gifTitle: "Thanks Giving Running GIF",
            gifUrl: "https://media.giphy.com/media/xT0xehEhwl5uIeRatq/giphy.gif"
        }
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/trending?api_key=i8NdfYxYVasb7W5dfgkdgpWGBJ6e5WAA&limit=25&rating=g')
            .then(res => res.json())
            .then(data => {
                this.setState(this.state.gifData = data.data)
                // console.log(this.state.gifData)
                // console.log(this.state.gifData[0].images.original.url)
                // console.log(this.state.gifData[0].title)
                // console.log(this.state.gifData[0])

            })
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }



    render() {
        return (
            <div>
                <div>
                    <h1>Trending on Giphy.com</h1>
                </div>
                <div className='giphy-container'>
                    {this.state.gifData.map((gifItem) => (console.log(gifItem.title)))}
                    {this.state.gifData.map((gifItem) => (console.log(gifItem.images.original.url)))}

                    {this.state.gifData.map((gifItem) => (
                        <GifCard
                            gifTitle={gifItem.title}
                            url={gifItem.images.original.url}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default App;