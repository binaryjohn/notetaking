import React from 'react';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }
  render() {
    return <DisplayNote {...this.props} />;
  }
}

class DisplayNote extends React.Component {
  constructor(props) {
    super(props);
    this.handleDetail = this.handleDetail.bind(this);
    this.handleSummary = this.handleSummary.bind(this);
    this.submitEditDetail = this.submitEditDetail.bind(this);
    this.submitSummaryDetail = this.submitSummaryDetail.bind(this);
    this.toggleEditDetail = this.toggleEditDetail.bind(this);
    this.toggleEditSummary = this.toggleEditSummary.bind(this);
    this.state = {
      editSummary: false,
      editDetail: false,
      summary: '',
      detail: '',
    };
  }
  toggleEditSummary() {
    this.setState({editSummary: !this.state.editSummary});
  }
  toggleEditDetail() {
    this.setState({editDetail: !this.state.editDetail});
  }
  handleSummary(evt) {
    this.setState({summary: evt.target.value});
  }
  handleDetail(evt) {
    this.setState({detail: evt.target.value});
  }

  submitEditDetail() {this.props.editDetail();}
  submitSummaryDetail() {this.props.editSummary();}

  render() {
    const {note} = this.props;
    return note ? (
      <div>
        {this.state.editSummary ? (
          <div>
            <br />
            <input
              type="text"
              value={this.state.summary}
              onChange={this.handleSummary}
              autoComplete="off"
              placeholder={note.summary}
            />
          </div>
        ) : (
          <h1 onClick={this.toggleEditSummary}>{note.summary}</h1>
        )}
        <div>{note.created}</div>
        <br />
        {this.state.editDetail ? (
          <div>
            <br />
            <button/><button onClick={this.toggleEditDetail} >Cancel</button>
            <textarea placeholder={note.detail} onChange={this.handleDetail} />
          </div>
        ) : (
          <div onClick={this.toggleEditDetail}>{note.detail}</div>
        )}
      </div>
    ) : null;
  }
}
export default Detail;
