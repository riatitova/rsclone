/* eslint-disable */
import React, { useState, Dispatch } from 'react';
import { connect } from 'react-redux';
import { RootState } from '@/store/reducers/rootReducer';
import { setAuthTrue, setAuthFalse } from '../../store/actions/actions';
import PATH from '../../constants/PATH';
import { createUser } from '../../store/effects/fetchEffects';
import style from "./Authorisation.scss";

interface StateProps {
  isAuth: boolean;
}

interface DispatchProps {
  onSetAuthTrue: () => void;
  onSetAuthFalse: () => void;
  onCreateUser: (name: string, password: string) => void;
}

type Props = StateProps & DispatchProps;

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
    props.onCreateUser(name, password);
  };

  return (
    <div className={style.auth}>
      <input className={style.auth__input} type="text" placeholder="name" onChange={onChangeName} value={name}></input>
      <input
        className={style.auth__input}
        type="text"
        placeholder="password"
        onChange={onChangePassword}
        value={password}
      ></input>
      <button className={style.auth__button} type="submit" onClick={signUp}>
        Sign up
      </button>
      {console.log(props)}
      <span className={style.auth__title}>isAuth: {props.isAuth ? 'authorized' : 'not authorized'}</span>
    </div>
  );
};

// const mapStateToProps = (state: RootState) => {
//   return {
//     isAuth: state.authorization.isAuth,
//   };
// };

// const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
//   onSetAuthFalse: () => dispatch(setAuthFalse()),
//   onSetAuthTrue: () => dispatch(setAuthTrue()),
//   onCreateUser: (name: string, password: string) => createUser(dispatch)(name, password),
// });

// const mapDispatchToProps = {
//   onSetAuthFalse: setAuthFalse,
//   onSetAuthTrue: setAuthTrue,
//   createUser,
// };

export default Authorisation;
