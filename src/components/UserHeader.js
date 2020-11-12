import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

// class UserHeader extends React.Component {
//   componentDidMount() {
//     this.props.fetchUser(this.props.userId);
//   }

//   render() {
//     const { user } = this.props;

//     if (!user) {
//       return null;
//     } else {
//       return <div className="header">{user.name}</div>;
//     }
//   }
// }

const UserHeader = ({ user, userId, fetchUser }) => {
  useEffect(() => {
    fetchUser(userId);
  }, [fetchUser, userId]);
  return user ? <div className="header">{user.name}</div> : null;
};

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
