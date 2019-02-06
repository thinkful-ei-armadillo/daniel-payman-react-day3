import React from 'react';
import './Accordion.css';

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
      let ariaExpanded = false;
      if (this.state.currentIndex === index) {
        ariaExpanded = true;
      }
      return (
        <li key={index}>
          <div className="card-header">
            <button
              aria-expanded={ariaExpanded}
              onClick={() => this.setSectionIndex(index)}
            >
              {element.title}
            </button>
          </div>
          {this.state.currentIndex === index && <p>{element.content}</p>}
        </li>
      );
    });
  };

  setSectionIndex = index => {
    if (index === this.state.currentIndex) {
      index = null;
    }
    this.setState({
      currentIndex: index
    });
  };

  render() {
    return <ul>{this.generateSectionElements()}</ul>;
  }
}

export default Accordion;
