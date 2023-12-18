import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { AppRoute } from '../../const';
import { logoutAction } from '../../store/api-actions/delete-actions/delete-actions';

export default function SignOutButton() {
  const dispatch = useAppDispatch();
  return(
    <Link
      data-testid="log-out"
      className="user-block__link"
      to={AppRoute.SignIn}
      onClick={(evt) => {
        evt.preventDefault();
        dispatch(logoutAction());
      }}
    >
      Sign out
    </Link>
  );
}
