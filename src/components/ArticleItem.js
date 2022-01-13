import { format } from "date-fns";
import Link from "next/link";

export default function ArticleItem(props) {
  // console.log(props);

  const {
    title = "",
    excerpt,
    mainImage,
    publishDate,
    createdAt,
    slug,
    externalArticle,
    author,
  } = props;
  const publishedTime = format(
    new Date(publishDate ? publishDate : createdAt),
    "d MMM yyyy"
  );
  const url = externalArticle ? externalArticle : `/articles/${slug}`;
  let byline = format(new Date(publishedTime), "d MMM yyyy");
  byline += author && author.name ? ` | ${author.name}` : "";

  const Anchor = ({ children }) => (
    <>
      {externalArticle && (
        <a href={url} target="_blank" className="text-decoration-none">
          {children}
        </a>
      )}
      {!externalArticle && (
        <Link href={url}>
          <a className="text-decoration-none">{children}</a>
        </Link>
      )}
    </>
  );

  return (
    <article className="article-item d-flex">
      <div className="article-item--image transition-400  mr-4 flex-shrink-0">
        <Anchor>
          <img
            src={mainImage ? mainImage.url : ""}
            alt={title}
            className="image-fit"
          />
        </Anchor>
      </div>
      <div>
        <Anchor>
          <h3 className="m-0 letter-spacing-2">{title}</h3>
        </Anchor>

        <p className="small text-muted m-0">{byline}</p>
        <p className="text-muted m-0 mt-2 line-height-1-6 small font-italic">
          {excerpt}
        </p>
      </div>
    </article>
  );
}
