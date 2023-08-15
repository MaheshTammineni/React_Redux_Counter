import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store11/auth';

const Auth = () => {
  const dispatch = useDispatch(); //get access to dispatch function

  const loginHandler = (event) =>{
    event.preventDefault(); //react or browser don't send HTTP request

    //i want to dispatch login action
    dispatch(authActions.login()); //use dispatch function to dispatch authActions
    //login() it is action creator returning the actual action object which should be dispatched
  };
  return (
    <main className={classes.auth}>
      <section>
        {/*add onsubmit listener on form */}
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
