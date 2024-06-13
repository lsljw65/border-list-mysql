import BoardInput from "./BoardInput";
import BoardRead from "./BoardRead";
import Pagination from "./main/Pagination";

function BoardList(props) {
  return (
    <div>
      <h2>list 입력</h2>
      <BoardInput />
      <h2>list 출력</h2>
      <BoardRead movieList={props.movieList} />
      <Pagination />
    </div>
  );
}

export default BoardList;
