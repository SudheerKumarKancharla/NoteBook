import * as React from 'react';
import TableComponent from './TableComponent.js';

const initialState = {
    initial: true,
    searchParam: '',
    frequency: 0,
    similarwords: []
}
export default class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.handleChange = this.handleChange.bind(this);
        this.getSearch = this.getSearch.bind(this);

    }


    handleChange(event) {
        this.setState({ searchParam: event.target.value });
    }

    updateState(result) {
        this.setState({
            initial: false,
            frequency: result.frequency,
            similarwords: result.words
        });
    }
    componentDidMount() {
        this.setState({ searchParam: '' });
    }

    getSearch() {
        var url = "http://localhost:8888/v1/notes/" + this.state.searchParam;
        fetch(url).then(async response => {
            const data = await response.json();
            if (!response.ok) {
                const query = this.state.searchParam;
                this.setState(initialState);
                this.setState({ searchParam: query });
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            } else {
                return data;
            }
        }).then(result => this.updateState(result));
    }

    render() {
        let freq;
        let similarwords;
        var words = this.state.similarwords;
        var res = "";
        for (var i = 0; i < words.length; i++) {
            res += words[i]
            if (i + 1 < words.length)
                res += ", "
        }
        if (!this.state.initial) {
            freq = <h5>Frequency: {this.state.frequency}</h5>
            similarwords = <h5>Similar words: {words.length > 0 ? res : "NA"}</h5>
        }
        return (
            <div>
                <input type="text" placeholder="Search NoteBook..." value={this.state.searchParam} onChange={this.handleChange} />
                <button onClick={this.getSearch}><i class="fa fa-search"></i></button>
                {freq}
                {similarwords}
            </div>
        );

    }
}