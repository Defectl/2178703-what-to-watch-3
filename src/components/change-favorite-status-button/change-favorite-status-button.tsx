import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { postFilmFavoriteStatus } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useNavigate } from 'react-router-dom';

type ChangeFavoriteStatusButtonProps = {
  filmId: string;
  isFavorite: boolean;
  favoriteFilmCount: number;
  authorizationStatus: AuthorizationStatus;
}

export default function ChangeFavoriteStatusButton({filmId, isFavorite, favoriteFilmCount, authorizationStatus}: ChangeFavoriteStatusButtonProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isCurrentFavorite, setCurrentFavorite] = useState(isFavorite);
  const [currentFavoriteFilmCount, setCurrentFavoriteFilmCount] = useState(favoriteFilmCount);

  return(
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={() => {
        if(authorizationStatus === AuthorizationStatus.Auth) {
          dispatch(postFilmFavoriteStatus({
            id: filmId,
            status: Number(!isCurrentFavorite),
          }));
          setCurrentFavorite(!isCurrentFavorite);
          if (isCurrentFavorite) {
            setCurrentFavoriteFilmCount(currentFavoriteFilmCount - 1);
          } else {
            setCurrentFavoriteFilmCount(currentFavoriteFilmCount + 1);
          }
        } else {
          navigate(`${AppRoute.SignIn}`);
        }
      }}
    >
      {isCurrentFavorite && authorizationStatus === AuthorizationStatus.Auth ? (
        <svg width="18" height="14" viewBox="0 0 18 14">
          <use xlinkHref="#in-list"></use>
        </svg>
      ) : (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
      )}

      <span>My list</span>
      <span className="film-card__count">{authorizationStatus === AuthorizationStatus.Auth ? currentFavoriteFilmCount : 0}</span>
    </button>
  );
}
