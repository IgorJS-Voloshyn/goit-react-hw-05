import css from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.text}>404</h1>
      <p className={css.text}>Something&apos;s missing.</p>
      <p className={css.info}>
        Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on
        the home page.
      </p>

      <Link to="/">Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
