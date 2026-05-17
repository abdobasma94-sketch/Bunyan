import { Link } from "react-router-dom";

function TableDashboard({ isDeveloper }) {
  return (
    <div className="container">
      <div className="d-flex justify-content-between mb-3">
        <h3>{isDeveloper ? "Developers" : "Users"}</h3>
        
        <Link to="add" className="btn btn-primary"> 
          {isDeveloper ? "Add New Developer" : "Add New Users"}
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>
              <Link 
                to={isDeveloper ? "/Developers/1" : "/Users/1"} 
                className="btn btn-sm btn-outline-primary"
              >
                View
              </Link>
              <Link 
                to={isDeveloper ? "/Developers/1/edit" : "/Users/1/edit"} 
                className="btn btn-sm btn-outline-secondary ms-1"
              >
                Edit
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableDashboard;