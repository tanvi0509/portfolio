export default function Video() {
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
      className="border-[0.5px] border-neutral-600 rounded-lg"
    >
      <source src="/petalsvideo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
