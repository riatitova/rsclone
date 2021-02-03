import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { RootState } from '@/store/reducers/rootReducer';

import { setAuthTrue, setAuthFalse } from '../../store/actions/actions';
import { createUser } from '../../store/effects/fetchEffects';

import Authorisation from './Authorisation';

const mapStateToProps = (state: RootState) => ({
  isAuth: state.authorization.isAuth,
});

// const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
//   onSetAuthFalse: () => dispatch(setAuthFalse()),
//   onSetAuthTrue: () => dispatch(setAuthTrue()),
//   onCreateUser:  (name: string, password: string) => createUser(name, password),
// });

const mapDispatchToProps = {
  onSetAuthFalse: setAuthFalse,
  onSetAuthTrue: setAuthTrue,
  onCreateUser: createUser,
};

interface StateProps {
  isAuth: boolean;
}

// type Props = StateProps & DispatchProps;

interface DispatchProps {
  onSetAuthTrue: () => void;
  onSetAuthFalse: () => void;
  onCreateUser: (
    name: string,
    password: string
  ) => ThunkAction<Promise<void>, Record<string, unknown>, Record<string, unknown>, AnyAction>;
}

// createUser: (dispatch: React.Dispatch<any>) => (name: string, password: string) => Promise<void>

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Authorisation);
