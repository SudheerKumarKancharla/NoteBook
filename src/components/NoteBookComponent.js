import * as React from 'react';

const initialState = {
    text: 'Hello World'
}
export default class NoteBookComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
        this.handleChange = this.handleChange.bind(this);
        this.updateText = this.updateText.bind(this);
    }

    handleChange(event) {
        this.setState({ text: event.target.value });
        this.updateText();
    }

    updateText() {
        var url = "http://localhost:8888/v1/notes";
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: this.state.text })
        };
        fetch(url, requestOptions)
            .then(response => response.json())
    }

    updateState(result) {
        console.log(result);
        this.setState({
            text: result.text
        });
    }

    componentDidMount() {
        const url = "http://localhost:8888/v1/notes";
        fetch(url).then(res => {
            if (!res.ok) {
                this.setState({ text: '' });
            } else {
                return res.json()
            }
        }).then(result => this.updateState(result));
    }

    render() {
        return (
            <div>
                <div class="notebookhead">
                    NoteBook:
                </div>
                <textarea name="notebook" id="notebook" rows="30"
                    maxlength="3447"
                    placeholder="Enter your notes..."
                    className="d-flex align-items-start"
                    value={this.state.text}
                    onChange={this.handleChange}>
                </textarea>
            </div>
        )
    }

}