import React from 'react';
class NewNote extends React.Component {
  constructor(props) {
    super(props);
    this.handleDetail = this.handleDetail.bind(this);
    this.handleSummary = this.handleSummary.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      summary: '',
      detail: '',
      created: null,
      active: true,
    };
  }
  handleSummary(evt) {
    this.setState({summary: evt.target.value});
  }
  handleDetail(evt) {
    this.setState({detail: evt.target.value});
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.handleSubmit({...this.state, ...{created: new Date()}});
    this.setState({
      summary: '',
      detail: '',
      created: null,
      active: true,
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label for="summary">Summary:</label>
            <input
              id="summary"
              type="text"
              value={this.state.summary}
              onChange={this.handleSummary}
              autocomplete="off"
            />
          </div>
          <div>
            <label>Detail:</label>
            <textarea value={this.state.detail} onChange={this.handleDetail} />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default NewNote;
