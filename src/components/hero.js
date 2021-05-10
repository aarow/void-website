import BackgroundVideo from "react-background-video-player";

const Hero = (props) => {
  console.log(props);
  const { backgroundImage, content, height, cssClass, backgroundVideo } = props;

  const wrapperStyle = { backgroundImage: `url(${backgroundImage.url})` };

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
    <div className={wrapperClass} style={wrapperStyle}>
      <BackgroundVideo poster={backgroundImage.url} src={backgroundVideo.url} />
      <div
        className="position-absolute d-flex justify-content-center align-items-center w-100 h-100"
        style={{ background: "rgba(0,0,0,0.8)" }}
      >
        <div
          className="hero__body"
          dangerouslySetInnerHTML={{ __html: content.html }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
