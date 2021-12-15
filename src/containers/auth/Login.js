import Login from "../../components/auth/Login";
import { connect } from "react-redux";
import { loginSimplwPw } from '../../store/actions/index';

function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        onPressLogin: function (simplePw) {
            dispatch(loginSimplwPw(simplePw));
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(Login);
