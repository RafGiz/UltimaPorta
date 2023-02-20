import { Box, Button} from '@mui/material';
import { useCallback, useState } from 'react'
import { AuthApi } from '../../api/AuthApi';
import { LoginContainer } from './Login.styles';

const Login = () => {

    const [username, setUsername] = useState<string>("");
    // const[ isUsernameValid, useIsUsernameValid] = useState<boolean>(true);
    const [password, setUserpassword] = useState<string>("");

    const onUsernameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value);
    }

    const onPasswordChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserpassword(e.target.value);
    };

    const onLoginClick = useCallback(async () => {
      const result = await AuthApi.signIn({
        username: username,
        password: password,
      });
    }, [username, password]);

    

  return (
    <LoginContainer>
      <h3>zaloguj się</h3>
      <Box>
        <input
          placeholder='wprowadź login'
          type='text'
          onChange={(e) => onUsernameChanged(e)}
        ></input>
        
        <input
          type='text'
          placeholder='wprowadź login'
          onChange={(e) => onPasswordChanged(e)}
        ></input>
        <Button onClick = {onLoginClick}>Login</Button>
      </Box>
    </LoginContainer>
  );
}

export default Login


