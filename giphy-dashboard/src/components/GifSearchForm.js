import React from 'react';
import './GifSearchForm.css';

class GifSearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: 'search',
            selectedRating: 'g',
            searchLimit: 'empty'
        };
        
        }

        handleChange = (event) => {
            console.log(event.target.value)
            this.setState({
                [event.target.name]: event.target.value
            })
        }
        
        onSubmit = (event) => {
            event.preventDefault();
            console.log("submitted")
            this.props.onSubmit(this.state.searchTerms, this.state.selectedRating, this.state.searchLimit)
        }
        
    render() {
        return (
            <div className='search-form'>
                <form>

                    {/* Search Bar */}
                    <div className="form-group row">
                        <label htmlFor="searchTerms" className="col-sm-2 col-form-label">Search Terms</label>
                        <div className="col-sm-10">
                            <input value={this.state.searchTerms} type="text" className="form-control" id="searchTerms" placeholder="Search For..." onChange={this.handleChange} />
                        </div>
                    </div>

                    {/* Limit Search Quantity */}
                    <fieldset className="form-group">
                        <div className="row">
                            <legend className="col-form-label col-sm-2 pt-0">Number of Results</legend>
                            <div className="col-sm-10" value={this.state.searchLimit} onChange={this.handleChange}>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="searchLimit" id="searchLimit5" />
                                    <label className="form-check-label" htmlFor="searchLimit5">5</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="searchLimit" id="searchLimit20" />
                                    <label className="form-check-label" htmlFor="searchLimit20">20</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="searchLimit" id="searchLimit50" />
                                    <label className="form-check-label" htmlFor="searchLimit50">50</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    {/* Limit Search Rating */}
                    <fieldset className='form-group col'>
                        <div className='row'>
                        <legend className="col-form-label col-sm-2 pt-0">Select Rating:</legend>
                        <select className="form-control">
                            <option>PG</option>
                            <option>PG-13</option>
                            <option>R</option>
                        </select>
                        </div>
                    </fieldset>

                    {/* Submit */}
                    <div className="form-group row">
                        <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Search</button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

export default GifSearchForm;