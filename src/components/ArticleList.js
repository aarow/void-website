import { Container } from "react-bootstrap";

import ArticleItem from "./ArticleItem";

export default function ArticleList({ articles = [] }) {
  console.log(articles);

  return (
    <div className="position-relative">
      <Container className="py-5">
        <ul className="list-unstyled">
          {articles.map((article) => (
            <li key={article.id} className="mb-4 pb-4 border-bottom">
              <ArticleItem {...article} />
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
