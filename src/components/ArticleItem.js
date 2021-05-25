import { Card } from "react-bootstrap";

export default function ArticleItem(props) {
  const { title = "", body, mainImage, publishDate, createdAt } = props;
  const publishedTime = publishDate ? publishDate : createdAt;

  return (
    <article className="article-item d-flex">
      <div className="article-item--image transition-400  mr-4">
        <img
          src={mainImage ? mainImage.url : ""}
          alt={title}
          className="image-fit"
        />
      </div>
      <div>
        <h3>{title}</h3>
        <p className="small text-muted">{publishedTime}</p>
        <p className="text-muted">{body.text}</p>
      </div>
    </article>
  );
}
