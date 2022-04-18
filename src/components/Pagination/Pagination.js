import "./Pagination.css"

const Pagination = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div className="pagination">
        <a href="#a">&laquo;</a>
        <a href="#a">1</a>
        <a href="#a" className="active">
          2
        </a>
        <a href="#a">3</a>
        <a href="#a">4</a>
        <a href="#a">5</a>
        <a href="#a">6</a>
        <a href="#a">&raquo;</a>
      </div>
    </div>
  );
};

export default Pagination;