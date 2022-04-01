import { useEffect } from "react";
import CountdownTimer from "../CountdownTimer";

export default function Hero(props) {
  const {
    backgroundImage,
    content,
    height,
    cssClass,
    backgroundVideo,
    plainTextContent,
    countdownTimer,
  } = props;

  let heightClass;
  switch (height) {
    case "Window":
      heightClass = "vh-100";
      break;
    case "Container":
      heightClass = "h-100";
      break;
    case "Natural":
      heightClass = "h-natural";
      break;
    default:
      heightClass = "h-banner";
      break;
  }

  const wrapperClass = `hero__wrapper position-relative show bg-black ${heightClass} ${cssClass} `;

  return (
    <section>
      <div className={wrapperClass}>
        <Background
          backgroundImage={backgroundImage}
          backgroundVideo={backgroundVideo}
        />
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="hero__body position-relative text-white container pt-7 pb-5">
            <CountdownTimer countdownDate={countdownTimer} />
            <div dangerouslySetInnerHTML={{ __html: content.html }} />
            <div dangerouslySetInnerHTML={{ __html: plainTextContent }} />
          </div>
        </div>
      </div>
    </section>
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
