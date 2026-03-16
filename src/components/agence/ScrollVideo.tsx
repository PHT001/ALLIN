"use client";

export default function ScrollVideo() {
  return (
    <section className="w-full bg-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto block"
      >
        <source src="/images/desk-transform.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
