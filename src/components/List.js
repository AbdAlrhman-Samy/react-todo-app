const List = ({ listItems, handleCheck, handleDelete }) => {
  return (
    <ul>
      {listItems.map((listItem, index) => {
        return (
          <li key={index}>
            {listItem.text}
              <button onClick={handleCheck}>✓</button>
              <button onClick={handleDelete}>✗</button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
