const List = ({ listItems, listValues, handleCheck, handleDelete }) => {


  return (
    <ul>
      {listItems.map((listItem, index) => {
        return (
          <li key={index} data-key={listItem} data-val={listValues[index]}>
            {listItem}
              <button onClick={handleCheck}>✓</button>
              <button onClick={handleDelete}>✗</button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
