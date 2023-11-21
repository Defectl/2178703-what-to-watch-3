import { getAltDate, humanizeDate } from '../../utils/change-date-format';

export type ReviewProps = {
  date: string;
  user: string;
  comment: string;
  rating: number;
  }


export default function Review({date, user, comment, rating}: ReviewProps) {
  return(
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user}</cite>
          <time className="review__date" dateTime={getAltDate(date)}>{humanizeDate(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}
