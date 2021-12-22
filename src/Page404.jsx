import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      ページが見つかりません
      <Link to="/">戻る</Link>
    </div>
  );
};
