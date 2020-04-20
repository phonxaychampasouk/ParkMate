import React, { Component } from 'react';
class DisplaySearchModal extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isFetching: false,
          users: []
      };

  }
  componentDidMount() {
    const { fetchAnimalImages } = this.props;
    fetchAnimalImages();
  }
render() {
  return (
    <div>
      test
    </div>

  )
}
}

export default DisplaySearchModal;