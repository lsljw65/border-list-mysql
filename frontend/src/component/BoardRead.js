import React from "react";
import Get from "./main/Get";

function BoardRead(props) {
  const result = props.movieList.map((data) => (
    <Get id={data.id} title={data.title} pd={data.pd} au={data.au} />
  ));
  return (
    <div className="read-wrap">
      <h2>List 가져오기</h2>
      <table>
        <tbody>
          <tr>
            <td>번호</td>
            <td>제목</td>
            <td>감독</td>
            <td>관객수</td>
          </tr>
        </tbody>

        {result}
      </table>
    </div>
  );
}

export default BoardRead;
