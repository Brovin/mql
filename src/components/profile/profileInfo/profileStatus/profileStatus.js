import React from 'react';

export default class ProfileStatus extends React.Component {

  state = {
    editMode: false
  };

  activeEditMode = () => {
    this.setState({
      editMode: true
    })
  };

  deactiveEditMode = () => {
    this.setState({
      editMode: false
    })
  };


  render() {
    debugger
    return (
      <div>
        {!this.state.editMode &&
        <div>
          <span onDoubleClick={this.activeEditMode}>{this.props.status}</span>
        </div>
        }
        {this.state.editMode &&
        <div>
          <input autoFocus={true} onBlur={this.deactiveEditMode} value={this.props.status}/>
        </div>
        }
      </div>
    )
  }
}