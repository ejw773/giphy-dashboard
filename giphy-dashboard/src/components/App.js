import React from 'react';
import GifCard from './GifCard'
import GifSearchForm from './GifSearchForm'
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

    addSearchTerms = (event) => {
        console.log(event);
    //    this.setState(this.state.searchTerms = searchTerms)
    //    console.log("Search terms from the parent: " + this.state.searchTerms)
    }


    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/trending?api_key=i8NdfYxYVasb7W5dfgkdgpWGBJ6e5WAA&limit=25&rating=g')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    gifData: data.data
                })
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
                <div className='form-container'>
                    <GifSearchForm onSubmit={this.addSearchTerms}/>
                </div>
                <div className='giphy-container'>
                    {this.state.gifData.map((gifItem) => (
                        <GifCard
                            gifTitle={gifItem.title}
                            url={gifItem.images.original.url}
                            key={gifItem.images.original.url}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default App;