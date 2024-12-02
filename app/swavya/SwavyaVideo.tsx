export default function SwavyaVideo() {
  return (
    <video
      width="820"
      height="820"
      controls
      preload="none"
      playsInline
      autoPlay
      muted
      loop
      className="border-1 border-brown rounded-lg"
    >
      <source src="/swavyavideo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
