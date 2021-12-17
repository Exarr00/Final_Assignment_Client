import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Navbar from './Navbar/Navbar'

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return (
      <div>
        <Navbar />
        <Link to={`/newcampus`}>
          <button className="btn btn-primary btn-block">New Campus</button>
        </Link>
        <div style={{ textAlign: "center" }}>There are no campuses.</div>
      </div>
    )
  }

  const { deleteCampus } = props;

  return (
    <div>
      <Navbar />
      <Link to={`/newcampus`}>
        <button className="btn btn-primary btn-block">New Campus</button>
      </Link>
      {props.allCampuses.map((campus) => (
        <div key={campus.id} className="border border-dark" style={{ margin: "auto", width: "50%", marginBottom: "2%" }}>
          <Link to={`/campus/${campus.id}`}>
            <h1 style={{ textAlign: "center" }}>{campus.name}</h1>
          </Link>
          <img src={campus.imageUrl} alt="Broken" style={{ width: "100%", height: "200px" }}></img>
          <button className="btn btn-danger btn-block" onClick={() => deleteCampus(campus.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;