import Header from "../components/Header";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div>
      <Header />
      <div className="NotFound">
        <h1>404 Page Not Found</h1>
      </div>
    </div>
  );
};

export default PageNotFound;
