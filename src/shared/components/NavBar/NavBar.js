import React from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import Link from '../Link/Link';
import TextButton from '../TextButton/TextButton';
import './navBar.scoped.scss';

export default function NavBar({}) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const [_, setCookie] = useCookies(['yiffer_theme']);

  function setTheme(color) {
    dispatch({ type: 'theme/setTheme', payload: color });
    setCookie('yiffer_theme', color);
  }

  return (
    <nav>
      <div className="nav-inner">
        <div className="nav-left">
          <span className={`small-yiffer-title`}>
            <Link to="https://yiffer.xyz" external className="desktop">
              Yiffer.xyz
            </Link>
            <Link to="https://yiffer.xyz" external className="mobile">
              Y
            </Link>
          </span>

          {user && (
            <Link to="https://yiffer.xyz/account" external className="nav-link">
              Account
            </Link>
          )}

          {user && user.userType === 'admin' && (
            <Link to="https://mod.yiffer.xyz" external className="nav-link">
              Admin
            </Link>
          )}

          <TextButton
            className="nav-link"
            onClick={() => dispatch({ type: 'auth/authModalType', payload: 'login' })}
          >
            Log in
          </TextButton>

          <TextButton
            className="nav-link"
            onClick={() => dispatch({ type: 'auth/authModalType', payload: 'signup' })}
          >
            Sign up
          </TextButton>
        </div>

        <div className="nav-right">
          <TextButton onClick={() => setTheme('light')} className="nav-link">
            Light
          </TextButton>
          <TextButton onClick={() => setTheme('dark')} className="nav-link">
            Dark
          </TextButton>
        </div>
      </div>
    </nav>
  );
}
