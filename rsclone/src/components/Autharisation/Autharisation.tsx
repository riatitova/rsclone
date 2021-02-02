/* eslint-disable */
import React, { useState, Dispatch } from 'react';
import { connect } from 'react-redux';
import { RootState } from '@/store/reducers/rootReducer';
import { setAuthTrue, setAuthFalse } from '../../store/actions/actions';

import { getRequest, postRequest, putRequest, deleteRequest } from '../../utils/fetchUtils';

interface StateProps {
  isAuth: boolean;
}

interface DispatchProps {
  onSetAuthTrue: () => void;
  onSetAuthFalse: () => void;
}

type Props = StateProps & DispatchProps;

const URLS = {
  getUserData: 'localhost:8080/users',
  postUser: 'localhost:8080/users',
  updateUser: 'localhost:8080/users',
  deleteUser: 'localhost:8080/users',
};

const Authorisation: React.FC<Props> = props => {
  const [name, setName] = useState('');
  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.currentTarget.value;
    setName(newName);
  };

  const [password, setPassword] = useState('');
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.currentTarget.value;
    setPassword(newName);
  };

  const signUp = () => {
    console.log('!!!');
    const body = JSON.stringify({
      name: name,
      password: password,
      boards: [
        {
          boardName: 'sadad',
          boardId: 'id1',
        },
      ],
    });

    const rawResponse = postRequest(URLS.postUser, body);

    console.log(rawResponse);
  };

  return (
    <div>
      <input type="text" placeholder="name" onChange={onChangeName} value={name}></input>
      <input
        type="text"
        placeholder="password"
        onChange={onChangePassword}
        value={password}
      ></input>
      <button type="submit" onClick={signUp}>
        Sign up
      </button>
      {console.log(props)}
      <span>isAuth: {props.isAuth ? 'authorized' : 'not authorized'}</span>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    isAuth: state.authorization.isAuth,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onSetAuthFalse: () => dispatch(setAuthFalse()),
  onSetAuthTrue: () => dispatch(setAuthTrue()),
});

// const mapDispatchToProps = {
//   setAuthFalse,
//   setAuthTrue,
// };

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Authorisation);
