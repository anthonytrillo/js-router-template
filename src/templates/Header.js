const Header = () => {
  const view = `
    <div class="Header-main">
      <div class="Header-logo">
        <h1>
          <a href="/">
            Home
          </a>
        </h1>
      </div>
      <div class="Header-nav">
        <a href="#/about/">
          About
        </a>
      </div>
    </div>
    <hr>
  `;
  return view;
};

export default Header;