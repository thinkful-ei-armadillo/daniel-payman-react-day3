import React from 'react';

class Accordion extends React.Component {
  state = {
    currentIndex: null
  };

  static defaultProps = {
    sections: []
  };

  generateSectionElements = () => {
    if (this.props.sections.length === 0) {
      return <li />;
    }
    const sections = this.props.sections;

    return sections.map((element, index) => {
      return (
        <li key={index}>
          <button onClick={() => this.setSectionIndex(index)}>
            {element.title}
          </button>
          {this.state.currentIndex === index && <p>{element.content}</p>}
        </li>
      );
    });
  };

  setSectionIndex = index => {
    this.setState({
      currentIndex: index
    });
  };

  render() {
    return <ul>{this.generateSectionElements()}</ul>;
  }
}

export default Accordion;
