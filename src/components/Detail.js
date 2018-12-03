import React from 'react';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }
  render() {
    return <DisplayNote {...this.props} />

  }
}

const DisplayNote = ({note}) => (
    note ? (
      <div>
        <h1>{note.summary}</h1>
        <div>{note.detail}</div>
        <div>{note.created}</div>
      </div>
    ) : null
  )
export default Detail;
