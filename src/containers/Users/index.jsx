import React, { Component } from 'react';


import { connect } from 'react-redux';


export class Users extends Component{
  render() {
    return (
      <div>
        hello there!!
        {this.props.users.map((user) => {
          return(
            <div>
            <div>{user.name}</div>
            <div>{user.age}</div>
            </div>
          )
        })}
      </div>
    );
  }
}

function mapStatesToProps(state) {
  return{
    users: state.users,
  }
}
export default connect(mapStatesToProps, /* Actions to do */)(Users);
