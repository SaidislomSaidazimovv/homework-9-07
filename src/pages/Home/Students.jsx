import { ManageAccounts, PersonRemove } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Students = ({ students, showModal, setShowModal, deleteStudent, setSelectedId }) => {

  const handleDeleteStudent = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  return (
    <>
      <div className="body_data">
        {students.map((student, index) => (
          <div className="data_row" key={student.id}>
            <span>{index + 1}</span>
            <span>{student.firstName}</span>
            <span>{student.lastName}</span>
            <span>{student.age}</span>
            <span>{student.group}</span>
            <span className="btn0">
              <Link className="btn11" to={`/edit/${student.id}`}>
                <ManageAccounts />
              </Link>
              <button
                className="btn22"
                onClick={() => handleDeleteStudent(student.id)}
              >
                <PersonRemove />
              </button>
            </span>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal_content">
            <h1>Delete Teacher</h1>
            <p>Are you sure you want to delete this teacher?</p>
            <div className="modal_btn">
              <button className="btn1" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button className="btn2" onClick={deleteStudent}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Students;
