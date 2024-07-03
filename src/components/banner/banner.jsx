function Banner({ type, text }) {
  const bannerClass = type === 'home' ? 'banner-home' : 'banner-about';
  return (
    <section className={bannerClass}>
      <div className="banner_overlay"></div>
      {text && <div className="banner_text">{text}</div>}
    </section>
  );
}

export default Banner;