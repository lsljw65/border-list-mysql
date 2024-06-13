function Get(props) {
  return (
    <tr id="post">
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.pd}</td>
      <td>{props.au}</td>
    </tr>
  );
}

export default Get;
