import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useForm, Controller} from 'react-hook-form';
import s from './styles.module.scss'
import classNames  from 'classnames';
import { Transition } from 'react-transition-group';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
      Currency Exchange App
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    position: 'fixed',
    top: '64px',
    right: 0,
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  entering: {
    animation: `${s.rootAppear} .6s ease-in-out forwards`
  },
  exiting: {
    animation: `${s.rootAppear} .6s ease-in-out reverse forwards`
  },
}));

export default function SignInSide({authService, isVisible, authType, setAuthType}) {
  const classes = useStyles();
  const { register, handleSubmit, control } = useForm();

  const authTypeIsSignIn = authType === 'signIn'
  const {signInWithEmailPassword: signIn, signUpWithEmail: signUp} = authService;


  return (
    <Transition
      in={isVisible}
      timeout={600}
      mountOnEnter
      unmountOnExit
    >
      { animationState =>
        <Grid item xs={12} sm={6} md={3} component={Paper} elevation={6} square className={classNames(classes.root, classes[animationState], )}>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              <span>{authType}</span>
            </Typography>
            <form
                className={classes.form}
                noValidate
                onSubmit={handleSubmit(data => authTypeIsSignIn ? signIn(data) : signUp(data))}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                inputRef={register}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                inputRef={register}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={
                <Controller as={Checkbox} name="remember" control={control} color="primary" defaultValue={false}/>
              }
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {authTypeIsSignIn ? 'Sign In' : 'Sign Up'}
              </Button>
              {
                authTypeIsSignIn &&
                <Grid container>
                  <Grid item xs>
                    <Link href="#" onClick={ () => alert('Sorry this function not available now:(')} variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="" onClick={ (e) => { e.preventDefault(); setAuthType('signUp') } } variant="body2" oncClick>
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              }
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>

            }
      </Transition>
  );
}