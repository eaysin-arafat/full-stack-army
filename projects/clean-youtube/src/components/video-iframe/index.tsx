import { useCallback, useEffect, useRef, useState } from "react";

interface IProps {
  videoId: string;
  autoPlay?: boolean;
  title: string;
}

const VideoIframe = ({ videoId, autoPlay, title }: IProps) => {
  const videoURL = `https://www.youtube.com/embed/${videoId}${
    autoPlay ? "?autoplay=1" : ""
  }`;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const defaultHeight = 495;
  const [videoHeight, setVideoHeight] = useState<number>(
    iframeRef.current ? iframeRef.current.offsetWidth * 0.5625 : defaultHeight
  );

  const handleChangeVideoWidth = useCallback(() => {
    const ratio =
      window.innerWidth > 990
        ? 1.0
        : window.innerWidth > 522
        ? 1.2
        : window.innerWidth > 360
        ? 1.45
        : 1.85;
    const height = iframeRef.current
      ? iframeRef.current.offsetWidth * 0.5625
      : defaultHeight;
    return setVideoHeight(Math.floor(height * ratio));
  }, []);

  useEffect(() => {
    handleChangeVideoWidth();

    window.addEventListener("resize", handleChangeVideoWidth);

    return () => {
      window.removeEventListener("resize", handleChangeVideoWidth);
    };
  }, [handleChangeVideoWidth]);

  return (
    <iframe
      ref={iframeRef}
      title={title}
      width="100%"
      height={`${videoHeight}px`}
      src={videoURL}
      style={{ border: "none" }}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default VideoIframe;
