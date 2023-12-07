import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <section>
        <nav>
          <div className="container">
            <div className="menu">
              <div className="logo">
                Next<span className="flix">Flix</span>
              </div>
              <ul>
                <Link to={"/home"}>Home</Link>
                <Link to={"/all-movies"}>Movies</Link>
                <Link to={"/About"}>About</Link>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
export default Header;
