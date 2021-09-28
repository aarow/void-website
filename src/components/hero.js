import BackgroundVideo from "react-background-video-player";

export default function Hero(props) {
  // console.log(props);
  const {
    backgroundImage,
    content,
    height,
    cssClass,
    backgroundVideo,
    plainTextContent,
  } = props;

  console.log("plainTextContent: ", plainTextContent);

  let heightClass;
  switch (height) {
    case "Window":
      heightClass = "vh-100";
      break;
    case "Content":
      heightClass = "h-100";
      break;
    default:
      heightClass = "h-natural";
      break;
  }

  const wrapperClass = `hero__wrapper position-relative show ${heightClass} ${cssClass} `;

  return (
    <div className={wrapperClass}>
      <Background
        backgroundImage={backgroundImage}
        backgroundVideo={backgroundVideo}
      />
      <div
        className="position-absolute d-flex justify-content-center align-items-center w-100 h-100"
        style={{ background: "rgba(0,0,0,0.8)" }}
      >
        <div className="hero__body position-relative text-white">
          <div dangerouslySetInnerHTML={{ __html: content.html }} />
          <div dangerouslySetInnerHTML={{ __html: plainTextContent }} />
        </div>
      </div>
    </div>
  );
}

function Background({ backgroundImage, backgroundVideo }) {
  return (
    <>
      {!backgroundVideo && (
        <div
          className="bg-video"
          style={{ backgroundImage: `url(${backgroundImage.url})` }}
        ></div>
      )}
      {backgroundVideo && (
        <video
          loop
          autoPlay
          muted
          className="bg-video"
          poster={backgroundImage.url}
        >
          <source src={backgroundVideo.url} type="video/mp4" />
        </video>
      )}
    </>
  );
}
