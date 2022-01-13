import { Container } from "react-bootstrap";
import ArticleItem from "./ArticleItem";

export default function ArticleList({ articles = [] }) {
  // console.log(articles);

  return (
    <div className="article-list--wrapper position-relative py-5">
      <ul className="article-list list-unstyled row">
        {articles.map((article) => (
          <li
            key={article.id}
            className="article-item--wrapper col-md-9 mx-auto mb-5"
          >
            <ArticleItem {...article} />
          </li>
        ))}
      </ul>
    </div>
  );
}
